import { listFiles, writeFile, deleteFile } from '../fs/virtual-fs'
import { emit, Events } from './events'

interface TreeNode {
  type: 'file' | 'folder'
  name: string
  path: string          // full path for files, prefix for folders
  children?: TreeNode[]
}

export class FileTree {
  private el: HTMLElement
  private activeFile: string | null = null
  private collapsed = new Set<string>()

  constructor(container: HTMLElement) {
    this.el = container
    this.el.className = 'file-tree'
    this.render()
  }

  async refresh(): Promise<void> {
    const files = await listFiles()
    const tree = buildTree(files)
    this.renderTree(tree)
  }

  setActive(path: string): void {
    this.activeFile = path
    this.el.querySelectorAll('.ft-item').forEach(el => {
      (el as HTMLElement).classList.toggle('active', el.getAttribute('data-path') === path)
    })
  }

  private render(): void {
    this.el.innerHTML = ''
    const header = document.createElement('div')
    header.className = 'ft-header'
    header.innerHTML = `
      <span class="ft-title">Pliki</span>
      <button class="ft-btn ft-btn-folder" title="Nowy folder">📁+</button>
      <button class="ft-btn ft-btn-new" title="Nowy plik">+</button>
    `
    header.querySelector('.ft-btn-new')!.addEventListener('click', () => this.createFile())
    header.querySelector('.ft-btn-folder')!.addEventListener('click', () => this.createFolder())
    this.el.appendChild(header)
    this.el.insertAdjacentHTML('beforeend', '<div class="ft-body"></div>')
    this.refresh()
  }

  private renderTree(nodes: TreeNode[], depth = 0): void {
    const body = this.el.querySelector('.ft-body')!
    if (depth === 0) body.innerHTML = ''
    this.renderNodes(body, nodes, depth)
  }

  private renderNodes(parent: Element, nodes: TreeNode[], depth: number): void {
    for (const node of nodes) {
      if (node.type === 'folder') {
        const open = !this.collapsed.has(node.path)
        const div = document.createElement('div')
        div.className = 'ft-folder'
        div.setAttribute('data-folder', node.path)
        div.innerHTML = `
          <div class="ft-item ft-folder-header" style="padding-left:${8 + depth * 14}px">
            <span class="ft-icon">${open ? '📂' : '📁'}</span>
            <span class="ft-name">${node.name}</span>
            <button class="ft-btn ft-del" title="Usuń folder">✕</button>
          </div>
        `
        div.querySelector('.ft-folder-header')!.addEventListener('click', (e) => {
          if ((e.target as HTMLElement).classList.contains('ft-del')) return
          this.collapsed.has(node.path)
            ? this.collapsed.delete(node.path)
            : this.collapsed.add(node.path)
          this.refresh()
        })
        div.querySelector('.ft-del')!.addEventListener('click', async (e) => {
          e.stopPropagation()
          if (!confirm(`Usuń folder ${node.name} i wszystkie pliki?`)) return
          for (const child of node.children ?? []) {
            if (child.type === 'file') await deleteFile(child.path)
          }
          emit(Events.FILE_DELETE, node.path)
          this.refresh()
        })
        parent.appendChild(div)
        if (open && node.children?.length) {
          this.renderNodes(div, node.children, depth + 1)
        }
      } else {
        const ext = node.name.split('.').pop() ?? ''
        const icon = ext === 'ts' ? '📄' : ext === 'js' ? '📜' : ext === 'json' ? '📋' : '📝'
        const item = document.createElement('div')
        item.className = 'ft-item' + (node.path === this.activeFile ? ' active' : '')
        item.setAttribute('data-path', node.path)
        item.style.paddingLeft = `${8 + depth * 14}px`
        item.innerHTML = `
          <span class="ft-icon">${icon}</span>
          <span class="ft-name">${node.name}</span>
          <button class="ft-btn ft-del" title="Usuń">✕</button>
        `
        item.querySelector('.ft-name')!.addEventListener('click', () => emit(Events.FILE_OPEN, node.path))
        item.querySelector('.ft-del')!.addEventListener('click', async (e) => {
          e.stopPropagation()
          if (!confirm(`Usuń ${node.path}?`)) return
          await deleteFile(node.path)
          emit(Events.FILE_DELETE, node.path)
          this.refresh()
        })
        parent.appendChild(item)
      }
    }
  }

  private async createFile(defaultFolder?: string): Promise<void> {
    const hint = defaultFolder ? `${defaultFolder}/nazwa.ts` : 'np. main.ts lub Gra1/player.ts'
    const name = prompt(`Ścieżka pliku (${hint}):`, defaultFolder ? `${defaultFolder}/` : '')
    if (!name?.trim()) return
    const path = name.trim()
    const ext = path.split('.').pop()
    const starter = ext === 'ts'
      ? `// ${path}\n`
      : `// ${path}\n`
    await writeFile(path, starter)
    emit(Events.FILE_CREATE, path)
    await this.refresh()
    emit(Events.FILE_OPEN, path)
  }

  private async createFolder(): Promise<void> {
    const name = prompt('Nazwa folderu (np. Gra1 lub Gra1/library):')
    if (!name?.trim()) return
    // Create a placeholder .gitkeep so folder appears in tree
    const keepPath = `${name.trim()}/.gitkeep`
    await writeFile(keepPath, '')
    await this.refresh()
  }

  async copyFileToProject(sourceName: string, content: string, targetFolder?: string): Promise<void> {
    const folder = targetFolder ?? ''
    const path = folder ? `${folder}/${sourceName}` : sourceName
    await writeFile(path, content)
    await this.refresh()
    emit(Events.FILE_OPEN, path)
  }
}

function buildTree(paths: string[]): TreeNode[] {
  const root: TreeNode[] = []
  const folderMap = new Map<string, TreeNode>()

  for (const path of paths) {
    const parts = path.split('/')
    if (parts.length === 1) {
      root.push({ type: 'file', name: path, path })
    } else {
      // Build folder nodes
      let current = root
      for (let i = 0; i < parts.length - 1; i++) {
        const folderPath = parts.slice(0, i + 1).join('/')
        if (!folderMap.has(folderPath)) {
          const node: TreeNode = { type: 'folder', name: parts[i], path: folderPath, children: [] }
          folderMap.set(folderPath, node)
          current.push(node)
        }
        current = folderMap.get(folderPath)!.children!
      }
      const filename = parts[parts.length - 1]
      if (filename !== '.gitkeep') {
        current.push({ type: 'file', name: filename, path })
      }
    }
  }

  return root
}
