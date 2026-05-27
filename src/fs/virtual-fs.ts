import { openDB, type IDBPDatabase } from 'idb'

export interface VFile {
  path: string   // e.g. "src/main.ts"
  content: string
  updatedAt: number
}

const DB_NAME = 'mce-fs'
const STORE = 'files'

let db: IDBPDatabase | null = null

async function getDb(): Promise<IDBPDatabase> {
  if (!db) {
    db = await openDB(DB_NAME, 1, {
      upgrade(d) { d.createObjectStore(STORE, { keyPath: 'path' }) },
    })
  }
  return db
}

export async function readFile(path: string): Promise<string | null> {
  const d = await getDb()
  const f: VFile | undefined = await d.get(STORE, path)
  return f?.content ?? null
}

export async function writeFile(path: string, content: string): Promise<void> {
  const d = await getDb()
  await d.put(STORE, { path, content, updatedAt: Date.now() } satisfies VFile)
}

export async function deleteFile(path: string): Promise<void> {
  const d = await getDb()
  await d.delete(STORE, path)
}

export async function listFiles(): Promise<string[]> {
  const d = await getDb()
  const all: VFile[] = await d.getAll(STORE)
  return all.map(f => f.path).sort()
}

export async function renameFile(oldPath: string, newPath: string): Promise<void> {
  const content = await readFile(oldPath)
  if (content === null) throw new Error(`File not found: ${oldPath}`)
  await writeFile(newPath, content)
  await deleteFile(oldPath)
}

// ── File System Access API (native files, Chrome/Edge only) ──────────────────

let nativeDirHandle: FileSystemDirectoryHandle | null = null

export function hasNativeFs(): boolean {
  return 'showDirectoryPicker' in window
}

export async function openNativeFolder(): Promise<void> {
  if (!hasNativeFs()) throw new Error('File System Access API not supported')
  nativeDirHandle = await (window as any).showDirectoryPicker({ mode: 'readwrite' })
  await syncFromNative()
}

async function syncFromNative(): Promise<void> {
  if (!nativeDirHandle) return
  for await (const [name, handle] of (nativeDirHandle as any).entries()) {
    if (handle.kind === 'file' && (name.endsWith('.ts') || name.endsWith('.js'))) {
      const file = await handle.getFile()
      const text = await file.text()
      await writeFile(name, text)
    }
  }
}

export async function saveToNative(path: string, content: string): Promise<void> {
  if (!nativeDirHandle) return
  const filename = path.split('/').pop()!
  const fh = await (nativeDirHandle as any).getFileHandle(filename, { create: true })
  const writable = await fh.createWritable()
  await writable.write(content)
  await writable.close()
}
