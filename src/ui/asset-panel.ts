import { listAssets, uploadAssets, deleteAsset, type Asset } from '../fs/asset-store'
import { emit, Events } from './events'

export class AssetPanel {
  private el: HTMLElement
  private folder = ''
  private assets: Asset[] = []

  constructor(container: HTMLElement) {
    this.el = container
    this.el.className = 'asset-panel'
    this.render()
  }

  setFolder(folder: string): void {
    this.folder = folder
    this.refresh()
  }

  async refresh(): Promise<void> {
    this.assets = await listAssets(this.folder)
    this.renderGrid()
  }

  private render(): void {
    this.el.innerHTML = ''

    // Header
    const header = document.createElement('div')
    header.className = 'ft-header'
    header.innerHTML = `
      <span class="ft-title">Zasoby</span>
      <label class="ft-btn ft-btn-new" title="Dodaj zasoby (PNG, JPG, MP3…)" style="cursor:pointer">
        +
        <input type="file" id="asset-upload" multiple accept="image/*,audio/*" style="display:none">
      </label>
    `
    header.querySelector('#asset-upload')!.addEventListener('change', async (e) => {
      const files = (e.target as HTMLInputElement).files
      if (!files?.length) return
      await uploadAssets(files, this.folder)
      ;(e.target as HTMLInputElement).value = ''
      await this.refresh()
      emit(Events.FILE_CREATE, this.folder)
    })
    this.el.appendChild(header)

    const grid = document.createElement('div')
    grid.className = 'asset-grid'
    this.el.appendChild(grid)
    this.renderGrid()
  }

  private renderGrid(): void {
    const grid = this.el.querySelector('.asset-grid')!
    grid.innerHTML = ''

    if (this.assets.length === 0) {
      grid.innerHTML = '<div class="asset-empty">Brak zasobów.<br>Kliknij + aby dodać.</div>'
      return
    }

    for (const asset of this.assets) {
      const card = document.createElement('div')
      card.className = 'asset-card'
      card.title = `${asset.name}\nKliknij → kopiuj import`

      if (asset.type === 'image') {
        card.innerHTML = `
          <img src="${asset.dataUrl}" alt="${asset.name}">
          <span class="asset-name">${asset.name}</span>
          <button class="asset-del" title="Usuń">✕</button>
        `
      } else if (asset.type === 'audio') {
        card.innerHTML = `
          <div class="asset-audio-icon">🎵</div>
          <span class="asset-name">${asset.name}</span>
          <button class="asset-del" title="Usuń">✕</button>
        `
      } else {
        card.innerHTML = `
          <div class="asset-audio-icon">📎</div>
          <span class="asset-name">${asset.name}</span>
          <button class="asset-del" title="Usuń">✕</button>
        `
      }

      // Click card → copy import snippet to clipboard
      card.addEventListener('click', async (e) => {
        if ((e.target as HTMLElement).classList.contains('asset-del')) return
        const snippet = `import ${asset.key}Url from './${asset.name}'`
        try {
          await navigator.clipboard.writeText(snippet)
          const name = card.querySelector('.asset-name')!
          const orig = name.textContent
          name.textContent = '✓ Skopiowano!'
          setTimeout(() => { name.textContent = orig }, 1200)
        } catch { /* ignore */ }
      })

      card.querySelector('.asset-del')!.addEventListener('click', async (e) => {
        e.stopPropagation()
        if (!confirm(`Usuń ${asset.name}?`)) return
        await deleteAsset(asset.path)
        emit(Events.FILE_DELETE, asset.path)
        await this.refresh()
      })

      grid.appendChild(card)
    }
  }
}
