import { listFiles, writeFile, deleteFile } from '../fs/virtual-fs'
import { emit, Events } from './events'
import { miniConfirm, miniPrompt } from './dialogs'

interface TreeNode {
  type: 'file' | 'folder'
  name: string
  path: string
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
    header.appendChild(this.makeUploadBtn())
    this.el.appendChild(header)
    this.el.insertAdjacentHTML('beforeend', '<div class="ft-body"></div>')
    this.refresh()
  }

  private makeUploadBtn(folder?: string): HTMLLabelElement {
    const label = document.createElement('label')
    label.className = 'ft-btn ft-btn-upload'
    label.title = folder ? `Wgraj plik do „${folder}"` : 'Wgraj plik z urządzenia'
    label.textContent = '📥'

    const input = document.createElement('input')
    input.type = 'file'
    input.multiple = true
    input.accept = '.js,.ts,.html,.css,.json,.txt,.md,.xml,.csv,.ga'
    input.style.display = 'none'

    input.addEventListener('change', async () => {
      const files = Array.from(input.files ?? [])
      if (!files.length) return
      let lastPath = ''
      for (const file of files) {
        const text = await file.text()
        const path = folder ? `${folder}/${file.name}` : file.name
        await writeFile(path, text)
        emit(Events.FILE_CREATE, path)
        lastPath = path
      }
      input.value = ''
      await this.refresh()
      if (lastPath) emit(Events.FILE_OPEN, lastPath)
    })

    label.appendChild(input)
    return label
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
            <button class="ft-btn ft-add-here" title="Nowy plik tutaj">+</button>
            <button class="ft-btn ft-del" title="Usuń folder">✕</button>
          </div>
        `
        // inject upload button (label element, can't be in innerHTML)
        const folderHeader = div.querySelector<HTMLElement>('.ft-folder-header')!
        const uploadBtn = this.makeUploadBtn(node.path)
        uploadBtn.classList.add('ft-upload-here')
        folderHeader.querySelector('.ft-add-here')!.insertAdjacentElement('afterend', uploadBtn)

        div.querySelector('.ft-folder-header')!.addEventListener('click', (e) => {
          const t = e.target as HTMLElement
          if (t.classList.contains('ft-del') || t.classList.contains('ft-add-here') || t.classList.contains('ft-btn-upload')) return
          this.collapsed.has(node.path)
            ? this.collapsed.delete(node.path)
            : this.collapsed.add(node.path)
          this.refresh()
        })
        div.querySelector('.ft-add-here')!.addEventListener('click', (e) => {
          e.stopPropagation()
          this.createFile(node.path)
        })
        div.querySelector('.ft-del')!.addEventListener('click', async (e) => {
          e.stopPropagation()
          const ok = await miniConfirm(`Usuń folder „${node.name}" i wszystkie pliki?`)
          if (!ok) return
          // Delete ALL files with this prefix (including .gitkeep)
          const all = await listFiles()
          for (const f of all) {
            if (f === node.path || f.startsWith(node.path + '/')) {
              await deleteFile(f)
            }
          }
          emit(Events.FILE_DELETE, node.path)
          await this.refresh()
        })
        parent.appendChild(div)
        if (open && node.children?.length) {
          this.renderNodes(div, node.children, depth + 1)
        }
      } else {
        const ext = node.name.split('.').pop() ?? ''
        const icon = ext === 'ts' ? '📄' : ext === 'js' ? '📜' : ext === 'html' || ext === 'htm' ? '🌐' : ext === 'json' ? '📋' : ext === 'css' ? '🎨' : '📝'
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
          const ok = await miniConfirm(`Usuń plik „${node.path}"?`)
          if (!ok) return
          await deleteFile(node.path)
          emit(Events.FILE_DELETE, node.path)
          await this.refresh()
        })
        parent.appendChild(item)
      }
    }
  }

  private async createFile(folder?: string): Promise<void> {
    const label = folder ? `Nowy plik w „${folder}":` : 'Nowy plik (np. main.ts):'
    const name = await miniPrompt(label, '')
    if (!name?.trim()) return
    const path = folder ? `${folder}/${name.trim()}` : name.trim()
    await writeFile(path, `// ${path}\n`)
    emit(Events.FILE_CREATE, path)
    await this.refresh()
    emit(Events.FILE_OPEN, path)
  }

  private async createFolder(): Promise<void> {
    const name = await miniPrompt('Nazwa folderu (np. Gra1):')
    if (!name?.trim()) return
    await writeFile(`${name.trim()}/.gitkeep`, '')
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
