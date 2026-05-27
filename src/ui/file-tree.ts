import { listFiles, writeFile, deleteFile } from '../fs/virtual-fs'
import { emit, Events } from './events'

export class FileTree {
  private el: HTMLElement
  private files: string[] = []
  private activeFile: string | null = null

  constructor(container: HTMLElement) {
    this.el = container
    this.el.className = 'file-tree'
    this.render()
  }

  async refresh(): Promise<void> {
    this.files = await listFiles()
    this.render()
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
      <button class="ft-btn-new" title="Nowy plik">+</button>
    `
    header.querySelector('.ft-btn-new')!.addEventListener('click', () => this.createNew())
    this.el.appendChild(header)

    for (const path of this.files) {
      const item = document.createElement('div')
      item.className = 'ft-item' + (path === this.activeFile ? ' active' : '')
      item.setAttribute('data-path', path)

      const icon = path.endsWith('.ts') ? '📄' : '📜'
      item.innerHTML = `
        <span class="ft-icon">${icon}</span>
        <span class="ft-name">${path}</span>
        <button class="ft-del" title="Usuń">✕</button>
      `
      item.querySelector('.ft-name')!.addEventListener('click', () => {
        emit(Events.FILE_OPEN, path)
      })
      item.querySelector('.ft-del')!.addEventListener('click', async (e) => {
        e.stopPropagation()
        if (!confirm(`Usuń ${path}?`)) return
        await deleteFile(path)
        emit(Events.FILE_DELETE, path)
        this.refresh()
      })
      this.el.appendChild(item)
    }
  }

  private async createNew(): Promise<void> {
    const name = prompt('Nazwa pliku (np. player.ts):')
    if (!name?.trim()) return
    const path = name.trim()
    const starter = path.endsWith('.ts')
      ? `// ${path}\n\nexport function main(): void {\n  console.log('Hello from ${path}')\n}\n`
      : `// ${path}\n\nexport function main() {\n  console.log('Hello from ${path}')\n}\n`
    await writeFile(path, starter)
    emit(Events.FILE_CREATE, path)
    await this.refresh()
    emit(Events.FILE_OPEN, path)
  }
}
