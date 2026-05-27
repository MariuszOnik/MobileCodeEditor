import './style.css'
import { createEditor, getLanguage, monaco, type EditorLanguage } from './editor/monaco-setup'
import { readFile, writeFile, listFiles } from './fs/virtual-fs'
import { FileTree } from './ui/file-tree'
import { AssetPanel } from './ui/asset-panel'
import { ConsolePanel } from './ui/console-panel'
import { runCode, stopCode } from './runtime/runner'
import { on, Events } from './ui/events'
import { miniConfirm } from './ui/dialogs'
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

// ── Build info bar ───────────────────────────────────────────────────────────
;(function () {
  const d = new Date(__BUILD_TIME__)
  const pad = (n: number) => n.toString().padStart(2, '0')
  const label = `${d.getFullYear()}-${pad(d.getMonth()+1)}-${pad(d.getDate())}  ${pad(d.getHours())}:${pad(d.getMinutes())}`
  document.getElementById('app-build')!.textContent = `build  ${label}`
})()

// ── DOM refs ─────────────────────────────────────────────────────────────────
const appEl       = document.getElementById('app')!
const sidebarEl   = document.getElementById('sidebar')!
const editorEl    = document.getElementById('editor-container')!
const runEl       = document.getElementById('run-container')!
const runIframeEl = document.getElementById('run-iframe-area')!
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
let assetPanel: AssetPanel | null = null
let consolePanel: ConsolePanel | null = null
let sidebarOpen = false

const FONT_MIN = 10
const FONT_MAX = 28
const FONT_STEP = 1
let fontSize = parseInt(localStorage.getItem('mce-font-size') ?? '14', 10)

function applyFontSize(size: number): void {
  fontSize = Math.min(FONT_MAX, Math.max(FONT_MIN, size))
  localStorage.setItem('mce-font-size', String(fontSize))
  monacoEditor?.updateOptions({ fontSize })
}

// ── Init ─────────────────────────────────────────────────────────────────────
async function init() {
  // Wait for web fonts to load so Monaco measures glyph widths correctly
  await document.fonts.ready

  await ensureDefaultProject()

  fileTree = new FileTree(document.getElementById('file-tree')!)
  await fileTree.refresh()

  assetPanel = new AssetPanel(document.getElementById('asset-panel')!)
  consolePanel = new ConsolePanel(document.getElementById('console-panel')!)

  // Receive console messages from iframe
  window.addEventListener('message', (e) => {
    if (!e.data?.__mce__) return
    consolePanel!.log(e.data.level, e.data.msg)
  })

  // Console toggle button
  document.getElementById('btn-console')!.addEventListener('click', () => {
    consolePanel!.toggle()
  })

  // Sidebar tabs: Pliki / Zasoby
  document.getElementById('stab-files')!.addEventListener('click', () => switchSidebarTab('files'))
  document.getElementById('stab-assets')!.addEventListener('click', () => switchSidebarTab('assets'))
  document.getElementById('sidebar-backdrop')!.addEventListener('click', () => toggleSidebar())

  // Open first file
  const files = await listFiles()
  if (files.length) openFile(files[0])

  // Events
  on(Events.FILE_OPEN, (path: string) => openFile(path))
  on(Events.FILE_CREATE, () => { fileTree?.refresh(); assetPanel?.refresh() })
  on(Events.FILE_DELETE, (path: string) => {
    if (currentPath === path) currentPath = null
    fileTree?.refresh()
    assetPanel?.refresh()
  })

  // Tab buttons
  tabEditor.addEventListener('click', () => switchPanel('editor'))
  tabRun.addEventListener('click',    () => switchPanel('run'))
  tabFiles.addEventListener('click',  () => toggleSidebar())

  btnRun.addEventListener('click',  runProject)
  btnStop.addEventListener('click', () => { stopCode(runIframeEl); setStatus('Zatrzymano', 'info') })
  btnSave.addEventListener('click', saveCurrentFile)
  btnOpenDir.addEventListener('click', openNativeDir)

  document.getElementById('btn-zoom-in')!.addEventListener('click',  () => applyFontSize(fontSize + FONT_STEP))
  document.getElementById('btn-zoom-out')!.addEventListener('click', () => applyFontSize(fontSize - FONT_STEP))

  document.getElementById('btn-editor-menu')!.addEventListener('click', (e) => {
    e.stopPropagation()
    showEditorMenu(document.getElementById('btn-editor-menu')!)
  })

  // Auto-save on Ctrl+S
  document.addEventListener('keydown', e => {
    if ((e.ctrlKey || e.metaKey) && e.key === 's') { e.preventDefault(); saveCurrentFile() }
  })

  // Paste fix: intercept document paste and forward to Monaco
  // Handles mobile context-menu "Paste" and cases where Monaco loses focus
  document.addEventListener('paste', (e) => {
    if (!monacoEditor) return
    const text = e.clipboardData?.getData('text/plain')
    if (!text) return
    // If Monaco already handled it (has focus), do nothing
    if (monacoEditor.hasTextFocus()) return
    e.preventDefault()
    monacoEditor.focus()
    monacoEditor.executeEdits('paste', [{
      range: monacoEditor.getSelection()!,
      text,
    }])
  })

  // Paste button for mobile (clipboard API)
  document.getElementById('btn-paste')?.addEventListener('click', async () => {
    try {
      const text = await navigator.clipboard.readText()
      if (!text || !monacoEditor) return
      monacoEditor.focus()
      monacoEditor.executeEdits('paste', [{
        range: monacoEditor.getSelection()!,
        text,
      }])
    } catch {
      setStatus('Brak dostępu do schowka', 'error')
    }
  })

  // Mobile keyboard: shrink app to visible viewport so editor stays above keyboard
  if (window.visualViewport) {
    window.visualViewport.addEventListener('resize', onViewportResize)
    window.visualViewport.addEventListener('scroll', onViewportResize)
  }

  switchPanel('editor')
}

function onViewportResize() {
  const vv = window.visualViewport!
  const app = document.getElementById('app')!
  app.style.height = `${vv.height}px`
  app.style.transform = `translateY(${vv.offsetTop}px)`
  requestAnimationFrame(() => monacoEditor?.layout())
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

  const lang: EditorLanguage = getLanguage(path)
  if (!monacoEditor) {
    monacoEditor = createEditor(editorEl, content, lang, fontSize)
    // Override auto-detected tabSize — detectIndentation:true (Monaco default) may
    // read the file and silently set tabSize:4 or :8, causing staircase indent on mobile.
    monacoEditor.getModel()?.updateOptions({ tabSize: 2, indentSize: 2 })
  } else {
    const uri = monaco.Uri.parse(`file:///${path}`)
    const existing = monaco.editor.getModel(uri)
    const model = existing ?? monaco.editor.createModel(content, lang, uri)
    // Force tabSize on every model regardless of what detectIndentation guessed
    model.updateOptions({ tabSize: 2, indentSize: 2 })
    if (existing) monaco.editor.setModelLanguage(model, lang)
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
  consolePanel?.clear()
  setStatus('Kompilowanie…', 'info')
  switchPanel('run')

  const files = await listFiles()
  const allFiles: Record<string, string> = {}
  for (const path of files) {
    const content = await readFile(path)
    if (content !== null) allFiles[path] = content
  }

  // Detect project folder from current file (e.g. "Gra1/main.ts" → "Gra1/")
  const folder = currentPath?.includes('/')
    ? currentPath.split('/').slice(0, -1).join('/') + '/'
    : ''

  // Classic HTML mode: if project has index.html, inline local scripts and run directly
  const htmlKey = folder ? `${folder}index.html` : 'index.html'
  const templateHtml = allFiles[htmlKey]
  if (templateHtml) {
    const html = inlineLocalScripts(templateHtml, allFiles, folder)
    const buildInfo = buildInfoLine('HTML', htmlKey, html.length)
    consolePanel?.setBuildInfo(buildInfo)
    setStatus('Uruchomiono ▶ (HTML)', 'ok')
    runCode({ html, container: runIframeEl})
    return
  }

  // ESM mode: compile with esbuild
  const entry = currentPath ?? files[0]
  const t0 = performance.now()
  const result = await compile(allFiles, entry)
  if (result.errors?.length) {
    setStatus('Błąd: ' + result.errors[0], 'error')
    consolePanel?.log('error', '✖ Błąd kompilacji: ' + result.errors[0])
    switchPanel('editor')
    return
  }

  const ms = Math.round(performance.now() - t0)
  const buildInfo = buildInfoLine('ESM', entry, result.code!.length, ms)
  consolePanel?.setBuildInfo(buildInfo)
  setStatus('Uruchomiono ▶', 'ok')
  runCode({ code: result.code!, container: runIframeEl})
}

const APP_VERSION = '0.3.0'

function buildInfoLine(mode: string, entry: string, bytes: number, ms?: number): string {
  const kb = (bytes / 1024).toFixed(1)
  const now = new Date()
  const time = `${now.getHours().toString().padStart(2,'0')}:${now.getMinutes().toString().padStart(2,'0')}:${now.getSeconds().toString().padStart(2,'0')}`
  const parts = [
    `▶ Build v${APP_VERSION}`,
    `[${mode}]`,
    entry,
    `${kb} KB`,
    ms !== undefined ? `${ms}ms` : '',
    `@ ${time}`,
  ].filter(Boolean)
  return parts.join('  ')
}

function inlineLocalScripts(html: string, files: Record<string, string>, folder: string): string {
  // Replace <script src="file.js"></script> with inlined content
  return html.replace(/<script\s+src="([^"]+)"\s*><\/script>/gi, (match, src) => {
    const key = src.startsWith('./') ? folder + src.slice(2) : folder + src
    const content = files[key] ?? files[src]
    if (content !== undefined) return `<script>\n${content}\n</script>`
    return match  // external URL — keep as-is
  })
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

function switchSidebarTab(tab: 'files' | 'assets') {
  document.getElementById('file-tree')!.style.display   = tab === 'files'  ? '' : 'none'
  document.getElementById('asset-panel')!.style.display = tab === 'assets' ? '' : 'none'
  document.getElementById('stab-files')!.classList.toggle('active', tab === 'files')
  document.getElementById('stab-assets')!.classList.toggle('active', tab === 'assets')
  if (tab === 'assets') {
    const folder = currentPath?.includes('/') ? currentPath.split('/').slice(0, -1).join('/') : ''
    assetPanel?.setFolder(folder)
  }
}

function setStatus(msg: string, type: 'ok' | 'error' | 'info') {
  statusEl.textContent = msg
  statusEl.className = `status status-${type}`
}

function showEditorMenu(anchor: HTMLElement): void {
  document.querySelector('.editor-menu-popup')?.remove()

  const popup = document.createElement('div')
  popup.className = 'editor-menu-popup'

  const items: { label: string; icon: string; action: () => void }[] = [
    {
      label: 'Zaznacz wszystko',
      icon: '⊡',
      action: () => {
        monacoEditor?.focus()
        monacoEditor?.trigger('menu', 'editor.action.selectAll', null)
        popup.remove()
      },
    },
    {
      label: 'Wyczyść plik',
      icon: '🗑',
      action: async () => {
        popup.remove()
        if (!monacoEditor || !currentPath) return
        const ok = await miniConfirm(`Wyczyścić całą zawartość pliku „${currentPath}"?`)
        if (!ok) return
        monacoEditor.setValue('')
        monacoEditor.focus()
        setStatus('Plik wyczyszczony', 'info')
      },
    },
  ]

  for (const item of items) {
    const btn = document.createElement('button')
    btn.className = 'emp-item'
    btn.innerHTML = `<span class="emp-icon">${item.icon}</span><span>${item.label}</span>`
    btn.addEventListener('click', (e) => { e.stopPropagation(); item.action() })
    popup.appendChild(btn)
  }

  document.body.appendChild(popup)

  // Position below anchor button
  const rect = anchor.getBoundingClientRect()
  popup.style.top  = `${rect.bottom + 4}px`
  popup.style.left = `${Math.min(rect.left, window.innerWidth - popup.offsetWidth - 8)}px`

  const dismiss = (e: MouseEvent) => {
    if (!popup.contains(e.target as Node)) {
      popup.remove()
      document.removeEventListener('click', dismiss)
    }
  }
  setTimeout(() => document.addEventListener('click', dismiss), 10)
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
