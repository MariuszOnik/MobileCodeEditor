import * as esbuild from 'esbuild-wasm'

let initialized = false

async function init() {
  if (initialized) return
  await esbuild.initialize({ wasmURL: 'https://cdn.jsdelivr.net/npm/esbuild-wasm@0.28.0/esbuild.wasm' })
  initialized = true
}

export interface CompileRequest {
  id: string
  files: Record<string, string>  // path → source
  entryPoint: string             // e.g. "main.ts"
}

export interface CompileResult {
  id: string
  code?: string
  errors?: string[]
}

self.onmessage = async (e: MessageEvent<CompileRequest>) => {
  const { id, files, entryPoint } = e.data
  try {
    await init()

    const result = await esbuild.build({
      entryPoints: [entryPoint],
      bundle: true,
      write: false,
      format: 'esm',
      target: 'es2022',
      jsx: 'automatic',
      plugins: [virtualFsPlugin(files)],
    })

    const code = result.outputFiles[0].text
    const reply: CompileResult = { id, code }
    self.postMessage(reply)
  } catch (err: any) {
    const errors = (err.errors ?? [{ text: String(err) }]).map((e: any) => e.text as string)
    const reply: CompileResult = { id, errors }
    self.postMessage(reply)
  }
}

function virtualFsPlugin(files: Record<string, string>): esbuild.Plugin {
  return {
    name: 'virtual-fs',
    setup(build) {
      // Intercept local imports from virtual FS
      build.onResolve({ filter: /^\./ }, args => {
        const base = args.importer.replace(/[^/]+$/, '')
        const path = resolvePath(base + args.path)
        const resolved = findFile(files, path)
        if (resolved) return { path: resolved, namespace: 'vfs' }
        return null
      })

      build.onResolve({ filter: /^[^./]/ }, args => {
        // If it exists in VFS, don't mark as external (handles entry point like "main.ts")
        if (findFile(files, args.path)) return null
        // External packages → esm.sh CDN
        return { path: `https://esm.sh/${args.path}`, external: true }
      })

      build.onLoad({ filter: /.*/, namespace: 'vfs' }, args => {
        const content = files[args.path]
        // Binary assets (images, audio) stored as data URLs → export as string
        if (isAssetPath(args.path)) {
          return { contents: `export default ${JSON.stringify(content)}`, loader: 'js' }
        }
        const ext = args.path.split('.').pop() ?? ''
        const loader: esbuild.Loader =
          ext === 'tsx' ? 'tsx' : ext === 'ts' ? 'ts' : ext === 'jsx' ? 'jsx' : 'js'
        return { contents: content, loader }
      })

      // Entry point
      build.onResolve({ filter: /.*/ }, args => {
        if (files[args.path]) return { path: args.path, namespace: 'vfs' }
        return null
      })
    },
  }
}

const ASSET_EXTS = ['png', 'jpg', 'jpeg', 'gif', 'webp', 'svg', 'mp3', 'ogg', 'wav']
function isAssetPath(path: string): boolean {
  return ASSET_EXTS.includes(path.split('.').pop()?.toLowerCase() ?? '')
}

function resolvePath(path: string): string {
  const parts = path.split('/')
  const resolved: string[] = []
  for (const p of parts) {
    if (p === '..') resolved.pop()
    else if (p !== '.') resolved.push(p)
  }
  return resolved.join('/')
}

function findFile(files: Record<string, string>, path: string): string | null {
  if (files[path]) return path
  for (const ext of ['.ts', '.tsx', '.js', '.jsx']) {
    if (files[path + ext]) return path + ext
  }
  return null
}
