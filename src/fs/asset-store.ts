import { readFile, writeFile, deleteFile, listFiles } from './virtual-fs'

export type AssetType = 'image' | 'audio' | 'other'

export interface Asset {
  key: string       // "cat"  (bez rozszerzenia — gotowy do użycia jako klucz Phaser)
  name: string      // "cat.png"
  path: string      // "Gra1/cat.png"
  dataUrl: string   // "data:image/png;base64,..."
  type: AssetType
}

const IMAGE_EXTS = ['png', 'jpg', 'jpeg', 'gif', 'webp', 'svg']
const AUDIO_EXTS = ['mp3', 'ogg', 'wav']
export const ASSET_EXTS = [...IMAGE_EXTS, ...AUDIO_EXTS]

export function isAssetPath(path: string): boolean {
  const ext = path.split('.').pop()?.toLowerCase() ?? ''
  return ASSET_EXTS.includes(ext)
}

export async function listAssets(folder = ''): Promise<Asset[]> {
  const files = await listFiles()
  const assets: Asset[] = []
  for (const path of files) {
    if (!isAssetPath(path)) continue
    if (folder && !path.startsWith(folder + '/') && path !== folder) continue
    const dataUrl = await readFile(path)
    if (!dataUrl?.startsWith('data:')) continue
    const name = path.split('/').pop()!
    const ext = name.split('.').pop()!.toLowerCase()
    const type: AssetType = IMAGE_EXTS.includes(ext) ? 'image'
      : AUDIO_EXTS.includes(ext) ? 'audio' : 'other'
    assets.push({ key: name.replace(/\.[^.]+$/, ''), name, path, dataUrl, type })
  }
  return assets
}

export async function uploadAssets(files: FileList, folder = ''): Promise<Asset[]> {
  const result: Asset[] = []
  for (const file of Array.from(files)) {
    const asset = await uploadOne(file, folder)
    if (asset) result.push(asset)
  }
  return result
}

async function uploadOne(file: File, folder: string): Promise<Asset | null> {
  const ext = file.name.split('.').pop()?.toLowerCase() ?? ''
  if (!ASSET_EXTS.includes(ext)) return null
  const dataUrl = await fileToDataUrl(file)
  const path = folder ? `${folder}/${file.name}` : file.name
  await writeFile(path, dataUrl)
  const type: AssetType = IMAGE_EXTS.includes(ext) ? 'image'
    : AUDIO_EXTS.includes(ext) ? 'audio' : 'other'
  return { key: file.name.replace(/\.[^.]+$/, ''), name: file.name, path, dataUrl, type }
}

function fileToDataUrl(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const r = new FileReader()
    r.onload = () => resolve(r.result as string)
    r.onerror = reject
    r.readAsDataURL(file)
  })
}

export async function deleteAsset(path: string): Promise<void> {
  await deleteFile(path)
}
