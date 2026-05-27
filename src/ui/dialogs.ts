export function miniConfirm(msg: string): Promise<boolean> {
  return new Promise(resolve => {
    const overlay = createOverlay()
    overlay.innerHTML = `
      <div class="mini-dialog">
        <div class="mini-msg">${msg}</div>
        <div class="mini-btns">
          <button class="mini-btn mini-cancel">Anuluj</button>
          <button class="mini-btn mini-ok mini-ok-danger">Usuń</button>
        </div>
      </div>
    `
    overlay.querySelector('.mini-cancel')!.addEventListener('click', () => { overlay.remove(); resolve(false) })
    overlay.querySelector('.mini-ok')!.addEventListener('click',     () => { overlay.remove(); resolve(true)  })
    document.body.appendChild(overlay)
  })
}

export function miniPrompt(label: string, defaultValue = ''): Promise<string | null> {
  return new Promise(resolve => {
    const overlay = createOverlay()
    overlay.innerHTML = `
      <div class="mini-dialog">
        <div class="mini-msg">${label}</div>
        <input class="mini-input" type="text" value="${defaultValue}" autocomplete="off" autocorrect="off" spellcheck="false">
        <div class="mini-btns">
          <button class="mini-btn mini-cancel">Anuluj</button>
          <button class="mini-btn mini-ok">OK</button>
        </div>
      </div>
    `
    const input = overlay.querySelector<HTMLInputElement>('.mini-input')!
    const done = (val: string | null) => { overlay.remove(); resolve(val) }
    overlay.querySelector('.mini-cancel')!.addEventListener('click', () => done(null))
    overlay.querySelector('.mini-ok')!.addEventListener('click',     () => done(input.value.trim() || null))
    input.addEventListener('keydown', e => {
      if (e.key === 'Enter')  done(input.value.trim() || null)
      if (e.key === 'Escape') done(null)
    })
    document.body.appendChild(overlay)
    requestAnimationFrame(() => { input.focus(); input.select() })
  })
}

function createOverlay(): HTMLElement {
  const el = document.createElement('div')
  el.className = 'mini-overlay'
  return el
}
