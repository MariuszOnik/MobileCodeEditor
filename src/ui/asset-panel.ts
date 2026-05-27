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
      card.title = `${asset.name} — kliknij aby skopiować kod`

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

      card.addEventListener('click', (e) => {
        if ((e.target as HTMLElement).classList.contains('asset-del')) return
        e.stopPropagation()
        this.showSnippetPopup(asset)
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

  private showSnippetPopup(asset: Asset): void {
    document.querySelector('.asset-snippet-popup')?.remove()

    const esmSnippet = `import ${asset.key}Url from './${asset.name}'`
    const jsPath = `'./${asset.name}'`

    const popup = document.createElement('div')
    popup.className = 'asset-snippet-popup'
    popup.innerHTML = `
      <button class="asp-close">✕</button>
      <div class="asp-title">${asset.name}</div>
      <div class="asp-group">
        <div class="asp-label">ESM / TypeScript (import)</div>
        <div class="asp-snippet-row">
          <code class="asp-code asp-esm"></code>
          <button class="asp-copy">📋</button>
        </div>
      </div>
      <div class="asp-group">
        <div class="asp-label">Ścieżka — plain JS / HTML</div>
        <div class="asp-snippet-row">
          <code class="asp-code asp-js"></code>
          <button class="asp-copy">📋</button>
        </div>
      </div>
    `

    popup.querySelector('.asp-esm')!.textContent = esmSnippet
    popup.querySelector('.asp-js')!.textContent = jsPath

    const btns = popup.querySelectorAll<HTMLButtonElement>('.asp-copy')
    btns[0].addEventListener('click', (e) => { e.stopPropagation(); copyText(esmSnippet, btns[0]) })
    btns[1].addEventListener('click', (e) => { e.stopPropagation(); copyText(jsPath, btns[1]) })

    popup.querySelector('.asp-close')!.addEventListener('click', (e) => {
      e.stopPropagation()
      popup.remove()
    })

    document.body.appendChild(popup)

    const dismiss = (e: MouseEvent) => {
      if (!popup.contains(e.target as Node)) {
        popup.remove()
        document.removeEventListener('click', dismiss)
      }
    }
    setTimeout(() => document.addEventListener('click', dismiss), 10)
  }
}

async function copyText(text: string, btn: HTMLButtonElement): Promise<void> {
  let ok = false
  try {
    await navigator.clipboard.writeText(text)
    ok = true
  } catch {
    // Fallback: textarea + execCommand (works on mobile without clipboard permission)
    const ta = document.createElement('textarea')
    ta.value = text
    ta.style.cssText = 'position:fixed;top:0;left:0;opacity:0;pointer-events:none'
    document.body.appendChild(ta)
    ta.focus()
    ta.select()
    try { ok = document.execCommand('copy') } catch { ok = false }
    ta.remove()
  }
  btn.textContent = ok ? '✓' : '✗'
  setTimeout(() => { btn.textContent = '📋' }, 1400)
}
