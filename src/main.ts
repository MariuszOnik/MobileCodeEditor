import './style.css'
import { createEditor, getLanguage, monaco } from './editor/monaco-setup'
import { readFile, writeFile, listFiles } from './fs/virtual-fs'
import { FileTree } from './ui/file-tree'
import { runCode, stopCode } from './runtime/runner'
import { on, Events } from './ui/events'
import CompilerWorker from './compiler/compiler.worker?worker'

// ── Compiler worker ──────────────────────────────────────────────────────────
const worker = new CompilerWorker()
let compileCallbacks = new Map<string, (result: { code?: string; errors?: string[] }) => void>()

worker.onmessage = (e: MessageEvent) => {
  const { id, code, errors } = e.data
  compileCallbacks.get(id)?.(({ code, errors }))
  compileCallbacks.delete(id)
}

function compile(files: Record<string, string>, entryPoint: string): Promise<{ code?: string; errors?: string[] }> {
  return new Promise(resolve => {
    const id = Math.random().toString(36).slice(2)
    compileCallbacks.set(id, resolve)
    worker.postMessage({ id, files, entryPoint })
  })
}

// ── DOM refs ─────────────────────────────────────────────────────────────────
const appEl       = document.getElementById('app')!
const sidebarEl   = document.getElementById('sidebar')!
const editorEl    = document.getElementById('editor-container')!
const runEl       = document.getElementById('run-container')!
const statusEl    = document.getElementById('status')!
const tabEditor   = document.getElementById('tab-editor')!
const tabRun      = document.getElementById('tab-run')!
const tabFiles    = document.getElementById('tab-files')!
const btnRun      = document.getElementById('btn-run')!
const btnStop     = document.getElementById('btn-stop')!
const btnSave     = document.getElementById('btn-save')!
const btnOpenDir  = document.getElementById('btn-open-dir')!
const filenameEl  = document.getElementById('current-filename')!

// ── State ────────────────────────────────────────────────────────────────────
let monacoEditor: ReturnType<typeof createEditor> | null = null
let currentPath: string | null = null
let fileTree: FileTree | null = null
let sidebarOpen = false

// ── Init ─────────────────────────────────────────────────────────────────────
async function init() {
  await ensureDefaultProject()

  fileTree = new FileTree(document.getElementById('file-tree')!)
  await fileTree.refresh()

  // Open first file
  const files = await listFiles()
  if (files.length) openFile(files[0])

  // Events
  on(Events.FILE_OPEN, (path: string) => openFile(path))
  on(Events.FILE_CREATE, () => fileTree?.refresh())
  on(Events.FILE_DELETE, (path: string) => { if (currentPath === path) currentPath = null })

  // Tab buttons
  tabEditor.addEventListener('click', () => switchPanel('editor'))
  tabRun.addEventListener('click',    () => switchPanel('run'))
  tabFiles.addEventListener('click',  () => toggleSidebar())

  btnRun.addEventListener('click',  runProject)
  btnStop.addEventListener('click', () => { stopCode(runEl); setStatus('Zatrzymano', 'info') })
  btnSave.addEventListener('click', saveCurrentFile)
  btnOpenDir.addEventListener('click', openNativeDir)

  // Auto-save on Ctrl+S
  document.addEventListener('keydown', e => {
    if ((e.ctrlKey || e.metaKey) && e.key === 's') { e.preventDefault(); saveCurrentFile() }
  })

  switchPanel('editor')
}

async function ensureDefaultProject() {
  const files = await listFiles()
  if (files.length > 0) return

  await writeFile('main.ts', `import Phaser from 'phaser'

new Phaser.Game({
  type: Phaser.AUTO,
  width: window.innerWidth,
  height: window.innerHeight,
  backgroundColor: '#1a1a2e',
  scene: {
    create(this: Phaser.Scene) {
      this.add.text(
        window.innerWidth / 2,
        window.innerHeight / 2,
        'Hello Mobile IDE!\\n\\nEdytuj main.ts i kliknij ▶',
        { fontSize: '24px', color: '#00ffcc', align: 'center' }
      ).setOrigin(0.5)
    }
  }
})
`)
}

// ── File operations ───────────────────────────────────────────────────────────
async function openFile(path: string) {
  if (currentPath && monacoEditor) {
    await saveCurrentFile()
  }

  const content = await readFile(path)
  if (content === null) return

  currentPath = path
  filenameEl.textContent = path
  fileTree?.setActive(path)

  const lang = getLanguage(path)
  if (!monacoEditor) {
    monacoEditor = createEditor(editorEl, content, lang)
  } else {
    const model = monaco.editor.createModel(content, lang, monaco.Uri.parse(`file:///${path}`))
    monacoEditor.setModel(model)
  }

  switchPanel('editor')
}

async function saveCurrentFile() {
  if (!currentPath || !monacoEditor) return
  const content = monacoEditor.getValue()
  await writeFile(currentPath, content)
  setStatus(`Zapisano: ${currentPath}`, 'ok')
}

// ── Run ───────────────────────────────────────────────────────────────────────
async function runProject() {
  await saveCurrentFile()

  setStatus('Kompilowanie…', 'info')
  switchPanel('run')

  const files = await listFiles()
  const allFiles: Record<string, string> = {}
  for (const path of files) {
    const content = await readFile(path)
    if (content !== null) allFiles[path] = content
  }

  const entry = currentPath ?? files[0]
  const result = await compile(allFiles, entry)

  if (result.errors?.length) {
    setStatus('Błąd: ' + result.errors[0], 'error')
    switchPanel('editor')
    return
  }

  setStatus('Uruchomiono ▶', 'ok')
  runCode({ code: result.code!, container: runEl })
}

// ── UI helpers ────────────────────────────────────────────────────────────────
type Panel = 'editor' | 'run'

function switchPanel(panel: Panel) {
  editorEl.style.display  = panel === 'editor' ? 'flex' : 'none'
  runEl.style.display     = panel === 'run'    ? 'flex' : 'none'
  tabEditor.classList.toggle('active', panel === 'editor')
  tabRun.classList.toggle('active',    panel === 'run')
  if (panel === 'editor') requestAnimationFrame(() => monacoEditor?.layout())
}

function toggleSidebar() {
  sidebarOpen = !sidebarOpen
  sidebarEl.classList.toggle('open', sidebarOpen)
  tabFiles.classList.toggle('active', sidebarOpen)
  appEl.classList.toggle('sidebar-open', sidebarOpen)
}

function setStatus(msg: string, type: 'ok' | 'error' | 'info') {
  statusEl.textContent = msg
  statusEl.className = `status status-${type}`
}

async function openNativeDir() {
  try {
    const { openNativeFolder } = await import('./fs/virtual-fs')
    await openNativeFolder()
    await fileTree?.refresh()
    setStatus('Folder otwarty', 'ok')
  } catch (e: any) {
    setStatus(e.message ?? 'Błąd', 'error')
  }
}

init()
