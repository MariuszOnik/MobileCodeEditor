export type LogLevel = 'log' | 'warn' | 'error' | 'info'

export interface LogEntry {
  level: LogLevel
  msg: string
  time: string
}

export class ConsolePanel {
  private el: HTMLElement
  private listEl: HTMLElement
  private entries: LogEntry[] = []
  private visible = false
  private maxEntries = 200

  constructor(container: HTMLElement) {
    this.el = container
    this.el.className = 'console-panel'
    this.el.innerHTML = `
      <div class="console-header">
        <span class="console-title">Konsola</span>
        <span class="console-count"></span>
        <button class="console-clear" title="Wyczyść">🗑</button>
        <button class="console-close" title="Zamknij">✕</button>
      </div>
      <div class="console-list">
        <div class="console-row console-info console-build-banner">
          <span class="console-msg" style="color:#4a5568;font-size:10px">Mobile Code Editor — logi z gry pojawią się tutaj</span>
        </div>
      </div>
    `
    this.listEl = this.el.querySelector('.console-list')!
    this.el.querySelector('.console-clear')!.addEventListener('click', () => this.clear())
    this.el.querySelector('.console-close')!.addEventListener('click', () => this.hide())
    this.el.style.display = 'none'
  }

  log(level: LogLevel, msg: string): void {
    const now = new Date()
    const time = `${now.getHours().toString().padStart(2,'0')}:${now.getMinutes().toString().padStart(2,'0')}:${now.getSeconds().toString().padStart(2,'0')}`
    const entry: LogEntry = { level, msg, time }
    this.entries.push(entry)
    if (this.entries.length > this.maxEntries) this.entries.shift()

    this.appendEntry(entry)
    this.updateCount()

    // Auto-show on error/warn
    if (level === 'error') this.show()
  }

  clear(): void {
    this.entries = []
    this.listEl.innerHTML = '<div class="console-row console-info console-build-banner"><span class="console-msg" style="color:#4a5568;font-size:10px">Mobile Code Editor — logi z gry pojawią się tutaj</span></div>'
    this.updateCount()
  }

  show(): void {
    this.visible = true
    this.el.style.display = 'flex'
    this.scrollBottom()
  }

  hide(): void {
    this.visible = false
    this.el.style.display = 'none'
  }

  toggle(): void {
    this.visible ? this.hide() : this.show()
  }

  isVisible(): boolean { return this.visible }

  private appendEntry(entry: LogEntry): void {
    const row = document.createElement('div')
    row.className = `console-row console-${entry.level}`
    const icon = entry.level === 'error' ? '✖' : entry.level === 'warn' ? '⚠' : entry.level === 'info' ? 'ℹ' : '›'
    row.innerHTML = `<span class="console-icon">${icon}</span><span class="console-time">${entry.time}</span><span class="console-msg">${escapeHtml(entry.msg)}</span>`
    this.listEl.appendChild(row)
    if (this.visible) this.scrollBottom()
  }

  private scrollBottom(): void {
    requestAnimationFrame(() => { this.listEl.scrollTop = this.listEl.scrollHeight })
  }

  private updateCount(): void {
    const errors = this.entries.filter(e => e.level === 'error').length
    const countEl = this.el.querySelector('.console-count')!
    countEl.textContent = errors > 0 ? `${errors} błąd` : `${this.entries.length}`
    countEl.className = `console-count ${errors > 0 ? 'has-errors' : ''}`
  }
}

function escapeHtml(s: string): string {
  return s.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;')
}
