import{t as e}from"./rolldown-runtime-DK3Fl9T5.js";import{a as t,c as n,i as r,l as i,n as a,o,r as s,s as ee,t as te}from"./monaco-DKrxE9GP.js";(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})(),self.MonacoEnvironment={getWorker(e,n){return n===`typescript`||n===`javascript`?new r:n===`html`||n===`handlebars`?new s:n===`css`||n===`scss`||n===`less`?new a:n===`json`?new te:new t}};var c=`
declare module 'phaser' {
  export = Phaser;
}
declare namespace Phaser {
  class Game { constructor(config: Types.Core.GameConfig | any); destroy(removeCanvas: boolean): void; }
  class Scene { add: GameObjects.GameObjectFactory; physics: Physics.Arcade.ArcadePhysics; input: Input.InputPlugin; cameras: Cameras.Scene2D.CameraManager; time: Time.Clock; load: Loader.LoaderPlugin; create(): void; update(): void; preload(): void; }
  namespace Types {
    namespace Core {
      interface GameConfig {
        type?: number;
        width?: number | string;
        height?: number | string;
        backgroundColor?: string | number;
        scene?: any;
        physics?: { default?: string; arcade?: { gravity?: { x?: number; y?: number }; debug?: boolean } };
        scale?: { mode?: number; autoCenter?: number; width?: number | string; height?: number | string };
        parent?: string | HTMLElement;
        audio?: any;
        fps?: any;
        render?: any;
        input?: any;
        banner?: any;
      }
    }
  }
  namespace GameObjects {
    interface GameObjectFactory {
      image(x: number, y: number, key: string): Image;
      sprite(x: number, y: number, key: string): Sprite;
      text(x: number, y: number, text: string, style?: any): Text;
      rectangle(x: number, y: number, w: number, h: number, color?: number): Rectangle;
      circle(x: number, y: number, radius: number, color?: number): Arc;
      existing<T>(child: T): T;
    }
    interface GameObject { x: number; y: number; setPosition(x: number, y: number): this; setVisible(v: boolean): this; setAlpha(a: number): this; destroy(): void; }
    interface Image extends GameObject { setDisplaySize(w: number, h: number): this; setTint(c: number): this; }
    interface Sprite extends Image { anims: { play(key: string, ignoreIfPlaying?: boolean): void }; }
    interface Text extends GameObject { setText(text: string): this; }
    interface Rectangle extends GameObject { setFillStyle(color: number): this; }
    interface Arc extends GameObject { setFillStyle(color: number): this; }
  }
  namespace Physics { namespace Arcade {
    interface ArcadePhysics { add: { existing(obj: any, isStatic?: boolean): void; collider(a: any, b: any): void; }; }
    interface Body { velocity: { x: number; y: number }; setVelocity(x: number, y: number): void; setVelocityX(vx: number): void; setVelocityY(vy: number): void; setBounce(v: number): void; setGravityY(v: number): void; setCollideWorldBounds(v: boolean): void; blocked: { down: boolean; up: boolean; left: boolean; right: boolean }; }
  }}
  namespace Input { interface InputPlugin { on(event: string, fn: (...args: any[]) => void): this; keyboard: { on(event: string, fn: (...args: any[]) => void): this; addKey(key: string | number): any; createCursorKeys(): CursorKeys; }; } interface CursorKeys { left: Key; right: Key; up: Key; down: Key; } interface Key { isDown: boolean; } }
  namespace Cameras { namespace Scene2D { interface CameraManager { main: Camera2D; } interface Camera2D { startFollow(target: any): void; setZoom(z: number): void; shake(d?: number, i?: number): void; } } }
  namespace Time { interface Clock { delayedCall(delay: number, cb: () => void): void; addEvent(config: any): any; } }
  namespace Loader { interface LoaderPlugin { image(key: string, url: string): this; audio(key: string, url: string | string[]): this; } }
  const AUTO: number; const WEBGL: number; const CANVAS: number;
  namespace Scale { const FIT: number; const CENTER_BOTH: number; }
}
`,l=i.typescript;if(l?.typescriptDefaults){let e={target:l.ScriptTarget?.ES2022??99,module:l.ModuleKind?.ESNext??99,allowNonTsExtensions:!0,allowSyntheticDefaultImports:!0,esModuleInterop:!0,checkJs:!0};l.typescriptDefaults.addExtraLib(c,`ts:engine-defs.d.ts`),l.typescriptDefaults.setCompilerOptions(e),l.javascriptDefaults.addExtraLib(c,`ts:engine-defs.d.ts`),l.javascriptDefaults.setCompilerOptions(e)}function ne(e,t,r=`typescript`){return n.create(e,{value:t,language:r,theme:`vs-dark`,fontSize:14,minimap:{enabled:!1},lineNumbers:`on`,scrollBeyondLastLine:!1,automaticLayout:!0,tabSize:2,wordWrap:`on`,padding:{top:8},lineDecorationsWidth:8,renderLineHighlight:`line`})}function re(e){return e.endsWith(`.ts`)?`typescript`:e.endsWith(`.html`)||e.endsWith(`.htm`)?`html`:e.endsWith(`.css`)?`css`:e.endsWith(`.json`)?`json`:`javascript`}var u=(e,t)=>t.some(t=>e instanceof t),ie,ae;function oe(){return ie||=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction]}function se(){return ae||=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey]}var d=new WeakMap,f=new WeakMap,p=new WeakMap;function ce(e){let t=new Promise((t,n)=>{let r=()=>{e.removeEventListener(`success`,i),e.removeEventListener(`error`,a)},i=()=>{t(g(e.result)),r()},a=()=>{n(e.error),r()};e.addEventListener(`success`,i),e.addEventListener(`error`,a)});return p.set(t,e),t}function le(e){if(d.has(e))return;let t=new Promise((t,n)=>{let r=()=>{e.removeEventListener(`complete`,i),e.removeEventListener(`error`,a),e.removeEventListener(`abort`,a)},i=()=>{t(),r()},a=()=>{n(e.error||new DOMException(`AbortError`,`AbortError`)),r()};e.addEventListener(`complete`,i),e.addEventListener(`error`,a),e.addEventListener(`abort`,a)});d.set(e,t)}var m={get(e,t,n){if(e instanceof IDBTransaction){if(t===`done`)return d.get(e);if(t===`store`)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return g(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&(t===`done`||t===`store`)?!0:t in e}};function h(e){m=e(m)}function ue(e){return se().includes(e)?function(...t){return e.apply(_(this),t),g(this.request)}:function(...t){return g(e.apply(_(this),t))}}function de(e){return typeof e==`function`?ue(e):(e instanceof IDBTransaction&&le(e),u(e,oe())?new Proxy(e,m):e)}function g(e){if(e instanceof IDBRequest)return ce(e);if(f.has(e))return f.get(e);let t=de(e);return t!==e&&(f.set(e,t),p.set(t,e)),t}var _=e=>p.get(e);function fe(e,t,{blocked:n,upgrade:r,blocking:i,terminated:a}={}){let o=indexedDB.open(e,t),s=g(o);return r&&o.addEventListener(`upgradeneeded`,e=>{r(g(o.result),e.oldVersion,e.newVersion,g(o.transaction),e)}),n&&o.addEventListener(`blocked`,e=>n(e.oldVersion,e.newVersion,e)),s.then(e=>{a&&e.addEventListener(`close`,()=>a()),i&&e.addEventListener(`versionchange`,e=>i(e.oldVersion,e.newVersion,e))}).catch(()=>{}),s}var pe=[`get`,`getKey`,`getAll`,`getAllKeys`,`count`],me=[`put`,`add`,`delete`,`clear`],v=new Map;function y(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&typeof t==`string`))return;if(v.get(t))return v.get(t);let n=t.replace(/FromIndex$/,``),r=t!==n,i=me.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||pe.includes(n)))return;let a=async function(e,...t){let a=this.transaction(e,i?`readwrite`:`readonly`),o=a.store;return r&&(o=o.index(t.shift())),(await Promise.all([o[n](...t),i&&a.done]))[0]};return v.set(t,a),a}h(e=>({...e,get:(t,n,r)=>y(t,n)||e.get(t,n,r),has:(t,n)=>!!y(t,n)||e.has(t,n)}));var he=[`continue`,`continuePrimaryKey`,`advance`],ge={},b=new WeakMap,x=new WeakMap,_e={get(e,t){if(!he.includes(t))return e[t];let n=ge[t];return n||=ge[t]=function(...e){b.set(this,x.get(this)[t](...e))},n}};async function*ve(...e){let t=this;if(t instanceof IDBCursor||(t=await t.openCursor(...e)),!t)return;t=t;let n=new Proxy(t,_e);for(x.set(n,t),p.set(n,_(t));t;)yield n,t=await(b.get(n)||t.continue()),b.delete(n)}function S(e,t){return t===Symbol.asyncIterator&&u(e,[IDBIndex,IDBObjectStore,IDBCursor])||t===`iterate`&&u(e,[IDBIndex,IDBObjectStore])}h(e=>({...e,get(t,n,r){return S(t,n)?ve:e.get(t,n,r)},has(t,n){return S(t,n)||e.has(t,n)}}));var ye=e({deleteFile:()=>O,hasNativeFs:()=>j,listFiles:()=>k,openNativeFolder:()=>xe,readFile:()=>E,writeFile:()=>D}),be=`mce-fs`,C=`files`,w=null;async function T(){return w||=await fe(be,1,{upgrade(e){e.createObjectStore(C,{keyPath:`path`})}}),w}async function E(e){return(await(await T()).get(C,e))?.content??null}async function D(e,t){await(await T()).put(C,{path:e,content:t,updatedAt:Date.now()})}async function O(e){await(await T()).delete(C,e)}async function k(){return(await(await T()).getAll(C)).map(e=>e.path).sort()}var A=null;function j(){return`showDirectoryPicker`in window}async function xe(){if(!j())throw Error(`File System Access API not supported`);A=await window.showDirectoryPicker({mode:`readwrite`}),await Se()}async function Se(){if(A)for await(let[e,t]of A.entries())t.kind===`file`&&(e.endsWith(`.ts`)||e.endsWith(`.js`))&&await D(e,await(await t.getFile()).text())}var M=new Map;function N(e,t){return M.has(e)||M.set(e,new Set),M.get(e).add(t),()=>M.get(e)?.delete(t)}function P(e,t){M.get(e)?.forEach(e=>e(t))}var F={FILE_OPEN:`file:open`,FILE_SAVE:`file:save`,FILE_CREATE:`file:create`,FILE_DELETE:`file:delete`,FILE_RENAME:`file:rename`,RUN_START:`run:start`,RUN_STOP:`run:stop`,COMPILE_OK:`compile:ok`,COMPILE_ERR:`compile:error`,PANEL_SWITCH:`panel:switch`},Ce=class{el;activeFile=null;collapsed=new Set;constructor(e){this.el=e,this.el.className=`file-tree`,this.render()}async refresh(){let e=we(await k());this.renderTree(e)}setActive(e){this.activeFile=e,this.el.querySelectorAll(`.ft-item`).forEach(t=>{t.classList.toggle(`active`,t.getAttribute(`data-path`)===e)})}render(){this.el.innerHTML=``;let e=document.createElement(`div`);e.className=`ft-header`,e.innerHTML=`
      <span class="ft-title">Pliki</span>
      <button class="ft-btn ft-btn-folder" title="Nowy folder">📁+</button>
      <button class="ft-btn ft-btn-new" title="Nowy plik">+</button>
    `,e.querySelector(`.ft-btn-new`).addEventListener(`click`,()=>this.createFile()),e.querySelector(`.ft-btn-folder`).addEventListener(`click`,()=>this.createFolder()),this.el.appendChild(e),this.el.insertAdjacentHTML(`beforeend`,`<div class="ft-body"></div>`),this.refresh()}renderTree(e,t=0){let n=this.el.querySelector(`.ft-body`);t===0&&(n.innerHTML=``),this.renderNodes(n,e,t)}renderNodes(e,t,n){for(let r of t)if(r.type===`folder`){let t=!this.collapsed.has(r.path),i=document.createElement(`div`);i.className=`ft-folder`,i.setAttribute(`data-folder`,r.path),i.innerHTML=`
          <div class="ft-item ft-folder-header" style="padding-left:${8+n*14}px">
            <span class="ft-icon">${t?`📂`:`📁`}</span>
            <span class="ft-name">${r.name}</span>
            <button class="ft-btn ft-add-here" title="Nowy plik tutaj">+</button>
            <button class="ft-btn ft-del" title="Usuń folder">✕</button>
          </div>
        `,i.querySelector(`.ft-folder-header`).addEventListener(`click`,e=>{let t=e.target;t.classList.contains(`ft-del`)||t.classList.contains(`ft-add-here`)||(this.collapsed.has(r.path)?this.collapsed.delete(r.path):this.collapsed.add(r.path),this.refresh())}),i.querySelector(`.ft-add-here`).addEventListener(`click`,e=>{e.stopPropagation(),this.createFile(r.path)}),i.querySelector(`.ft-del`).addEventListener(`click`,async e=>{if(e.stopPropagation(),confirm(`Usuń folder ${r.name} i wszystkie pliki?`)){for(let e of r.children??[])e.type===`file`&&await O(e.path);P(F.FILE_DELETE,r.path),this.refresh()}}),e.appendChild(i),t&&r.children?.length&&this.renderNodes(i,r.children,n+1)}else{let t=r.name.split(`.`).pop()??``,i=t===`ts`?`📄`:t===`js`?`📜`:t===`html`||t===`htm`?`🌐`:t===`json`?`📋`:t===`css`?`🎨`:`📝`,a=document.createElement(`div`);a.className=`ft-item`+(r.path===this.activeFile?` active`:``),a.setAttribute(`data-path`,r.path),a.style.paddingLeft=`${8+n*14}px`,a.innerHTML=`
          <span class="ft-icon">${i}</span>
          <span class="ft-name">${r.name}</span>
          <button class="ft-btn ft-del" title="Usuń">✕</button>
        `,a.querySelector(`.ft-name`).addEventListener(`click`,()=>P(F.FILE_OPEN,r.path)),a.querySelector(`.ft-del`).addEventListener(`click`,async e=>{e.stopPropagation(),confirm(`Usuń ${r.path}?`)&&(await O(r.path),P(F.FILE_DELETE,r.path),this.refresh())}),e.appendChild(a)}}async createFile(e){let t=e?`Nazwa pliku w "${e}":`:`Nazwa pliku (np. main.ts):`,n=prompt(t,``);if(!n?.trim())return;let r=e?`${e}/${n.trim()}`:n.trim();await D(r,(r.split(`.`).pop(),`// ${r}\n`)),P(F.FILE_CREATE,r),await this.refresh(),P(F.FILE_OPEN,r)}async createFolder(){let e=prompt(`Nazwa folderu (np. Gra1 lub Gra1/library):`);e?.trim()&&(await D(`${e.trim()}/.gitkeep`,``),await this.refresh())}async copyFileToProject(e,t,n){let r=n??``,i=r?`${r}/${e}`:e;await D(i,t),await this.refresh(),P(F.FILE_OPEN,i)}};function we(e){let t=[],n=new Map;for(let r of e){let e=r.split(`/`);if(e.length===1)t.push({type:`file`,name:r,path:r});else{let i=t;for(let t=0;t<e.length-1;t++){let r=e.slice(0,t+1).join(`/`);if(!n.has(r)){let a={type:`folder`,name:e[t],path:r,children:[]};n.set(r,a),i.push(a)}i=n.get(r).children}let a=e[e.length-1];a!==`.gitkeep`&&i.push({type:`file`,name:a,path:r})}}return t}var I=null;function L({code:e,html:t,container:n}){R(n);let r=document.createElement(`iframe`);r.setAttribute(`sandbox`,`allow-scripts allow-same-origin`),r.style.cssText=`width:100%;height:100%;border:none;background:#000`,t?r.srcdoc=t:r.srcdoc=`<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width,initial-scale=1">
  <style>*{margin:0;padding:0} body{background:#000;overflow:hidden}</style>
  <script type="importmap">${JSON.stringify({imports:{phaser:`https://esm.sh/phaser@3.88.2`,"pixi.js":`https://esm.sh/pixi.js@8`,"matter-js":`https://esm.sh/matter-js`}})}<\/script>
</head>
<body>
  <canvas id="canvas"></canvas>
  <script type="module">
${e??``}
  <\/script>
</body>
</html>`,n.appendChild(r),I=r}function R(e){I&&=(I.remove(),null),e.querySelectorAll(`iframe`).forEach(e=>e.remove())}function Te(e){return new Worker(`/MobileCodeEditor/assets/compiler.worker-C6_MBn_9.js`,{type:`module`,name:e?.name})}var z=new Te,B=new Map;z.onmessage=e=>{let{id:t,code:n,errors:r}=e.data;B.get(t)?.({code:n,errors:r}),B.delete(t)};function Ee(e,t){return new Promise(n=>{let r=Math.random().toString(36).slice(2);B.set(r,n),z.postMessage({id:r,files:e,entryPoint:t})})}var De=document.getElementById(`app`),Oe=document.getElementById(`sidebar`),V=document.getElementById(`editor-container`),H=document.getElementById(`run-container`),U=document.getElementById(`status`),W=document.getElementById(`tab-editor`),G=document.getElementById(`tab-run`),K=document.getElementById(`tab-files`),ke=document.getElementById(`btn-run`),Ae=document.getElementById(`btn-stop`),je=document.getElementById(`btn-save`),Me=document.getElementById(`btn-open-dir`),Ne=document.getElementById(`current-filename`),q=null,J=null,Y=null,X=!1;async function Pe(){await Ie(),Y=new Ce(document.getElementById(`file-tree`)),await Y.refresh();let e=await k();e.length&&Le(e[0]),N(F.FILE_OPEN,e=>Le(e)),N(F.FILE_CREATE,()=>Y?.refresh()),N(F.FILE_DELETE,e=>{J===e&&(J=null)}),W.addEventListener(`click`,()=>Q(`editor`)),G.addEventListener(`click`,()=>Q(`run`)),K.addEventListener(`click`,()=>Be()),ke.addEventListener(`click`,Re),Ae.addEventListener(`click`,()=>{R(H),$(`Zatrzymano`,`info`)}),je.addEventListener(`click`,Z),Me.addEventListener(`click`,Ve),document.addEventListener(`keydown`,e=>{(e.ctrlKey||e.metaKey)&&e.key===`s`&&(e.preventDefault(),Z())}),document.addEventListener(`paste`,e=>{if(!q)return;let t=e.clipboardData?.getData(`text/plain`);t&&(q.hasTextFocus()||(e.preventDefault(),q.focus(),q.executeEdits(`paste`,[{range:q.getSelection(),text:t}])))}),document.getElementById(`btn-paste`)?.addEventListener(`click`,async()=>{try{let e=await navigator.clipboard.readText();if(!e||!q)return;q.focus(),q.executeEdits(`paste`,[{range:q.getSelection(),text:e}])}catch{$(`Brak dostępu do schowka`,`error`)}}),window.visualViewport&&(window.visualViewport.addEventListener(`resize`,Fe),window.visualViewport.addEventListener(`scroll`,Fe)),Q(`editor`)}function Fe(){let e=window.visualViewport,t=document.getElementById(`app`);t.style.height=`${e.height}px`,t.style.transform=`translateY(${e.offsetTop}px)`,requestAnimationFrame(()=>q?.layout())}async function Ie(){(await k()).length>0||await D(`main.ts`,`import Phaser from 'phaser'

new Phaser.Game({
  type: Phaser.AUTO,
  width: window.innerWidth,
  height: window.innerHeight,
  backgroundColor: '#1a1a2e',
  scene: {
    create(this: Phaser.Scene) {
      this.add.text(
        window.innerWidth / 2,
        window.innerHeight / 2,
        'Hello Mobile IDE!\\n\\nEdytuj main.ts i kliknij ▶',
        { fontSize: '24px', color: '#00ffcc', align: 'center' }
      ).setOrigin(0.5)
    }
  }
})
`)}async function Le(e){J&&q&&await Z();let t=await E(e);if(t===null)return;J=e,Ne.textContent=e,Y?.setActive(e);let r=re(e);if(!q)q=ne(V,t,r);else{let i=ee.parse(`file:///${e}`),a=n.getModel(i),o=a??n.createModel(t,r,i);a&&n.setModelLanguage(o,r),q.setModel(o)}Q(`editor`)}async function Z(){if(!J||!q)return;let e=q.getValue();await D(J,e),$(`Zapisano: ${J}`,`ok`)}async function Re(){await Z(),$(`Kompilowanie…`,`info`),Q(`run`);let e=await k(),t={};for(let n of e){let e=await E(n);e!==null&&(t[n]=e)}let n=J?.includes(`/`)?J.split(`/`).slice(0,-1).join(`/`)+`/`:``,r=t[n?`${n}index.html`:`index.html`];if(r){let e=ze(r,t,n);$(`Uruchomiono ▶ (HTML)`,`ok`),L({html:e,container:H});return}let i=await Ee(t,J??e[0]);if(i.errors?.length){$(`Błąd: `+i.errors[0],`error`),Q(`editor`);return}$(`Uruchomiono ▶`,`ok`),L({code:i.code,container:H})}function ze(e,t,n){return e.replace(/<script\s+src="([^"]+)"\s*><\/script>/gi,(e,r)=>{let i=t[r.startsWith(`./`)?n+r.slice(2):n+r]??t[r];return i===void 0?e:`<script>\n${i}\n<\/script>`})}function Q(e){V.style.display=e===`editor`?`flex`:`none`,H.style.display=e===`run`?`flex`:`none`,W.classList.toggle(`active`,e===`editor`),G.classList.toggle(`active`,e===`run`),e===`editor`&&requestAnimationFrame(()=>q?.layout())}function Be(){X=!X,Oe.classList.toggle(`open`,X),K.classList.toggle(`active`,X),De.classList.toggle(`sidebar-open`,X)}function $(e,t){U.textContent=e,U.className=`status status-${t}`}async function Ve(){try{let{openNativeFolder:e}=await o(async()=>{let{openNativeFolder:e}=await Promise.resolve().then(()=>ye);return{openNativeFolder:e}},void 0);await e(),await Y?.refresh(),$(`Folder otwarty`,`ok`)}catch(e){$(e.message??`Błąd`,`error`)}}Pe();