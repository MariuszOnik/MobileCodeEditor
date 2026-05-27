export interface RunOptions {
  container: HTMLElement
  code?: string   // ESM bundled JS (default mode)
  html?: string   // classic HTML template (ga.js / script-tag mode)
}

let currentFrame: HTMLIFrameElement | null = null

export function runCode({ code, html, container }: RunOptions): void {
  stopCode(container)

  const frame = document.createElement('iframe')
  frame.setAttribute('sandbox', 'allow-scripts allow-same-origin')
  frame.style.cssText = 'width:100%;height:100%;border:none;background:#000'

  if (html) {
    // Classic HTML mode — user-provided template (ga.js, plugins etc.)
    frame.srcdoc = html
  } else {
    // ESM module mode — default, supports import Phaser/PixiJS etc.
    const importMap = JSON.stringify({
      imports: {
        'phaser':   'https://esm.sh/phaser@3.88.2',
        'pixi.js':  'https://esm.sh/pixi.js@8',
        'matter-js':'https://esm.sh/matter-js',
      },
    })
    frame.srcdoc = `<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width,initial-scale=1">
  <style>*{margin:0;padding:0} body{background:#000;overflow:hidden}</style>
  <script type="importmap">${importMap}</script>
</head>
<body>
  <canvas id="canvas"></canvas>
  <script type="module">
${code ?? ''}
  </script>
</body>
</html>`
  }

  container.appendChild(frame)
  currentFrame = frame
}

export function stopCode(container: HTMLElement): void {
  if (currentFrame) { currentFrame.remove(); currentFrame = null }
  container.querySelectorAll('iframe').forEach(f => f.remove())
}
