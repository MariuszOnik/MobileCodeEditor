export interface RunOptions {
  container: HTMLElement
  code?: string   // ESM bundled JS (default mode)
  html?: string   // classic HTML template (ga.js / script-tag mode)
}

let currentFrame: HTMLIFrameElement | null = null

// Console interceptor injected into every iframe
const CONSOLE_INTERCEPTOR = `<script>
(function(){
  var orig = { log: console.log, warn: console.warn, error: console.error, info: console.info };
  function fmtArg(a) {
    if (a instanceof Error) {
      // stack already contains message + file + line info
      return a.stack || a.message;
    }
    try { return typeof a === 'object' && a !== null ? JSON.stringify(a, null, 2) : String(a); }
    catch(e) { return String(a); }
  }
  function send(level, args) {
    var msg = Array.from(args).map(fmtArg).join(' ');
    try { window.parent.postMessage({ __mce__: true, level: level, msg: msg }, '*'); } catch(e){}
    orig[level].apply(console, args);
  }
  console.log   = function(){ send('log',   arguments); };
  console.warn  = function(){ send('warn',  arguments); };
  console.error = function(){ send('error', arguments); };
  console.info  = function(){ send('info',  arguments); };
  window.addEventListener('error', function(e) {
    // e.filename is the script URL; strip to basename only
    var file = e.filename ? e.filename.replace(/^.*\\//, '').replace(/^about:.*/, '') : '';
    var loc  = (file ? '[' + file + '] ' : '') +
               (e.lineno ? 'linia ' + e.lineno + (e.colno ? ':' + e.colno : '') : '');
    send('error', [e.message + (loc ? '  —  ' + loc : '')]);
  });
  window.addEventListener('unhandledrejection', function(e) {
    var r = e.reason;
    send('error', [r instanceof Error ? (r.stack || r.message) : ('Promise odrzucony: ' + String(r))]);
  });
})();
</script>`

const IMPORT_MAP = JSON.stringify({
  imports: {
    'phaser':    'https://esm.sh/phaser@3.88.2',
    'pixi.js':   'https://esm.sh/pixi.js@8',
    'matter-js': 'https://esm.sh/matter-js',
  },
})

export function runCode({ code, html, container }: RunOptions): void {
  stopCode(container)

  const frame = document.createElement('iframe')
  frame.setAttribute('sandbox', 'allow-scripts allow-same-origin')
  frame.style.cssText = 'width:100%;height:100%;border:none;background:#000;flex:1'

  if (html) {
    // Classic HTML mode: inject interceptor right after <head> or at start of <body>
    const injected = html.includes('<head>')
      ? html.replace('<head>', '<head>' + CONSOLE_INTERCEPTOR)
      : CONSOLE_INTERCEPTOR + html
    frame.srcdoc = injected
  } else {
    frame.srcdoc = `<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width,initial-scale=1">
  <style>*{margin:0;padding:0} body{background:#000;overflow:hidden}</style>
  ${CONSOLE_INTERCEPTOR}
  <script type="importmap">${IMPORT_MAP}</script>
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
