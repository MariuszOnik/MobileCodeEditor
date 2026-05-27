import{t as e}from"./rolldown-runtime-DK3Fl9T5.js";import{a as t,i as n,n as r,o as i,r as a,t as o}from"./monaco-XT-h7Muv.js";(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})(),self.MonacoEnvironment={getWorker(e,t){return t===`typescript`||t===`javascript`?new o:new r}};var s=`
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
`,c=i.typescript;if(c?.typescriptDefaults){let e={target:c.ScriptTarget?.ES2022??99,module:c.ModuleKind?.ESNext??99,allowNonTsExtensions:!0,allowSyntheticDefaultImports:!0,esModuleInterop:!0,checkJs:!0};c.typescriptDefaults.addExtraLib(s,`ts:engine-defs.d.ts`),c.typescriptDefaults.setCompilerOptions(e),c.javascriptDefaults.addExtraLib(s,`ts:engine-defs.d.ts`),c.javascriptDefaults.setCompilerOptions(e)}function ee(e,n,r=`typescript`){return t.create(e,{value:n,language:r,theme:`vs-dark`,fontSize:14,minimap:{enabled:!1},lineNumbers:`on`,scrollBeyondLastLine:!1,automaticLayout:!0,tabSize:2,wordWrap:`on`,padding:{top:8},lineDecorationsWidth:8,renderLineHighlight:`line`})}function te(e){return e.endsWith(`.ts`)?`typescript`:`javascript`}var l=(e,t)=>t.some(t=>e instanceof t),ne,re;function ie(){return ne||=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction]}function ae(){return re||=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey]}var u=new WeakMap,d=new WeakMap,f=new WeakMap;function oe(e){let t=new Promise((t,n)=>{let r=()=>{e.removeEventListener(`success`,i),e.removeEventListener(`error`,a)},i=()=>{t(m(e.result)),r()},a=()=>{n(e.error),r()};e.addEventListener(`success`,i),e.addEventListener(`error`,a)});return f.set(t,e),t}function se(e){if(u.has(e))return;let t=new Promise((t,n)=>{let r=()=>{e.removeEventListener(`complete`,i),e.removeEventListener(`error`,a),e.removeEventListener(`abort`,a)},i=()=>{t(),r()},a=()=>{n(e.error||new DOMException(`AbortError`,`AbortError`)),r()};e.addEventListener(`complete`,i),e.addEventListener(`error`,a),e.addEventListener(`abort`,a)});u.set(e,t)}var p={get(e,t,n){if(e instanceof IDBTransaction){if(t===`done`)return u.get(e);if(t===`store`)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return m(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&(t===`done`||t===`store`)?!0:t in e}};function ce(e){p=e(p)}function le(e){return ae().includes(e)?function(...t){return e.apply(h(this),t),m(this.request)}:function(...t){return m(e.apply(h(this),t))}}function ue(e){return typeof e==`function`?le(e):(e instanceof IDBTransaction&&se(e),l(e,ie())?new Proxy(e,p):e)}function m(e){if(e instanceof IDBRequest)return oe(e);if(d.has(e))return d.get(e);let t=ue(e);return t!==e&&(d.set(e,t),f.set(t,e)),t}var h=e=>f.get(e);function de(e,t,{blocked:n,upgrade:r,blocking:i,terminated:a}={}){let o=indexedDB.open(e,t),s=m(o);return r&&o.addEventListener(`upgradeneeded`,e=>{r(m(o.result),e.oldVersion,e.newVersion,m(o.transaction),e)}),n&&o.addEventListener(`blocked`,e=>n(e.oldVersion,e.newVersion,e)),s.then(e=>{a&&e.addEventListener(`close`,()=>a()),i&&e.addEventListener(`versionchange`,e=>i(e.oldVersion,e.newVersion,e))}).catch(()=>{}),s}var fe=[`get`,`getKey`,`getAll`,`getAllKeys`,`count`],pe=[`put`,`add`,`delete`,`clear`],g=new Map;function _(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&typeof t==`string`))return;if(g.get(t))return g.get(t);let n=t.replace(/FromIndex$/,``),r=t!==n,i=pe.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||fe.includes(n)))return;let a=async function(e,...t){let a=this.transaction(e,i?`readwrite`:`readonly`),o=a.store;return r&&(o=o.index(t.shift())),(await Promise.all([o[n](...t),i&&a.done]))[0]};return g.set(t,a),a}ce(e=>({...e,get:(t,n,r)=>_(t,n)||e.get(t,n,r),has:(t,n)=>!!_(t,n)||e.has(t,n)}));var me=[`continue`,`continuePrimaryKey`,`advance`],v={},y=new WeakMap,b=new WeakMap,he={get(e,t){if(!me.includes(t))return e[t];let n=v[t];return n||=v[t]=function(...e){y.set(this,b.get(this)[t](...e))},n}};async function*ge(...e){let t=this;if(t instanceof IDBCursor||(t=await t.openCursor(...e)),!t)return;t=t;let n=new Proxy(t,he);for(b.set(n,t),f.set(n,h(t));t;)yield n,t=await(y.get(n)||t.continue()),y.delete(n)}function x(e,t){return t===Symbol.asyncIterator&&l(e,[IDBIndex,IDBObjectStore,IDBCursor])||t===`iterate`&&l(e,[IDBIndex,IDBObjectStore])}ce(e=>({...e,get(t,n,r){return x(t,n)?ge:e.get(t,n,r)},has(t,n){return x(t,n)||e.has(t,n)}}));var _e=e({deleteFile:()=>D,hasNativeFs:()=>A,listFiles:()=>O,openNativeFolder:()=>ye,readFile:()=>T,writeFile:()=>E}),ve=`mce-fs`,S=`files`,C=null;async function w(){return C||=await de(ve,1,{upgrade(e){e.createObjectStore(S,{keyPath:`path`})}}),C}async function T(e){return(await(await w()).get(S,e))?.content??null}async function E(e,t){await(await w()).put(S,{path:e,content:t,updatedAt:Date.now()})}async function D(e){await(await w()).delete(S,e)}async function O(){return(await(await w()).getAll(S)).map(e=>e.path).sort()}var k=null;function A(){return`showDirectoryPicker`in window}async function ye(){if(!A())throw Error(`File System Access API not supported`);k=await window.showDirectoryPicker({mode:`readwrite`}),await be()}async function be(){if(k)for await(let[e,t]of k.entries())t.kind===`file`&&(e.endsWith(`.ts`)||e.endsWith(`.js`))&&await E(e,await(await t.getFile()).text())}var j=new Map;function M(e,t){return j.has(e)||j.set(e,new Set),j.get(e).add(t),()=>j.get(e)?.delete(t)}function N(e,t){j.get(e)?.forEach(e=>e(t))}var P={FILE_OPEN:`file:open`,FILE_SAVE:`file:save`,FILE_CREATE:`file:create`,FILE_DELETE:`file:delete`,FILE_RENAME:`file:rename`,RUN_START:`run:start`,RUN_STOP:`run:stop`,COMPILE_OK:`compile:ok`,COMPILE_ERR:`compile:error`,PANEL_SWITCH:`panel:switch`},xe=class{el;activeFile=null;collapsed=new Set;constructor(e){this.el=e,this.el.className=`file-tree`,this.render()}async refresh(){let e=Se(await O());this.renderTree(e)}setActive(e){this.activeFile=e,this.el.querySelectorAll(`.ft-item`).forEach(t=>{t.classList.toggle(`active`,t.getAttribute(`data-path`)===e)})}render(){this.el.innerHTML=``;let e=document.createElement(`div`);e.className=`ft-header`,e.innerHTML=`
      <span class="ft-title">Pliki</span>
      <button class="ft-btn ft-btn-folder" title="Nowy folder">📁+</button>
      <button class="ft-btn ft-btn-new" title="Nowy plik">+</button>
    `,e.querySelector(`.ft-btn-new`).addEventListener(`click`,()=>this.createFile()),e.querySelector(`.ft-btn-folder`).addEventListener(`click`,()=>this.createFolder()),this.el.appendChild(e),this.el.insertAdjacentHTML(`beforeend`,`<div class="ft-body"></div>`),this.refresh()}renderTree(e,t=0){let n=this.el.querySelector(`.ft-body`);t===0&&(n.innerHTML=``),this.renderNodes(n,e,t)}renderNodes(e,t,n){for(let r of t)if(r.type===`folder`){let t=!this.collapsed.has(r.path),i=document.createElement(`div`);i.className=`ft-folder`,i.setAttribute(`data-folder`,r.path),i.innerHTML=`
          <div class="ft-item ft-folder-header" style="padding-left:${8+n*14}px">
            <span class="ft-icon">${t?`📂`:`📁`}</span>
            <span class="ft-name">${r.name}</span>
            <button class="ft-btn ft-del" title="Usuń folder">✕</button>
          </div>
        `,i.querySelector(`.ft-folder-header`).addEventListener(`click`,e=>{e.target.classList.contains(`ft-del`)||(this.collapsed.has(r.path)?this.collapsed.delete(r.path):this.collapsed.add(r.path),this.refresh())}),i.querySelector(`.ft-del`).addEventListener(`click`,async e=>{if(e.stopPropagation(),confirm(`Usuń folder ${r.name} i wszystkie pliki?`)){for(let e of r.children??[])e.type===`file`&&await D(e.path);N(P.FILE_DELETE,r.path),this.refresh()}}),e.appendChild(i),t&&r.children?.length&&this.renderNodes(i,r.children,n+1)}else{let t=r.name.split(`.`).pop()??``,i=t===`ts`?`📄`:t===`js`?`📜`:t===`json`?`📋`:`📝`,a=document.createElement(`div`);a.className=`ft-item`+(r.path===this.activeFile?` active`:``),a.setAttribute(`data-path`,r.path),a.style.paddingLeft=`${8+n*14}px`,a.innerHTML=`
          <span class="ft-icon">${i}</span>
          <span class="ft-name">${r.name}</span>
          <button class="ft-btn ft-del" title="Usuń">✕</button>
        `,a.querySelector(`.ft-name`).addEventListener(`click`,()=>N(P.FILE_OPEN,r.path)),a.querySelector(`.ft-del`).addEventListener(`click`,async e=>{e.stopPropagation(),confirm(`Usuń ${r.path}?`)&&(await D(r.path),N(P.FILE_DELETE,r.path),this.refresh())}),e.appendChild(a)}}async createFile(e){let t=e?`${e}/nazwa.ts`:`np. main.ts lub Gra1/player.ts`,n=prompt(`Ścieżka pliku (${t}):`,e?`${e}/`:``);if(!n?.trim())return;let r=n.trim();await E(r,(r.split(`.`).pop(),`// ${r}\n`)),N(P.FILE_CREATE,r),await this.refresh(),N(P.FILE_OPEN,r)}async createFolder(){let e=prompt(`Nazwa folderu (np. Gra1 lub Gra1/library):`);e?.trim()&&(await E(`${e.trim()}/.gitkeep`,``),await this.refresh())}async copyFileToProject(e,t,n){let r=n??``,i=r?`${r}/${e}`:e;await E(i,t),await this.refresh(),N(P.FILE_OPEN,i)}};function Se(e){let t=[],n=new Map;for(let r of e){let e=r.split(`/`);if(e.length===1)t.push({type:`file`,name:r,path:r});else{let i=t;for(let t=0;t<e.length-1;t++){let r=e.slice(0,t+1).join(`/`);if(!n.has(r)){let a={type:`folder`,name:e[t],path:r,children:[]};n.set(r,a),i.push(a)}i=n.get(r).children}let a=e[e.length-1];a!==`.gitkeep`&&i.push({type:`file`,name:a,path:r})}}return t}var F=null;function I({code:e,html:t,container:n}){L(n);let r=document.createElement(`iframe`);r.setAttribute(`sandbox`,`allow-scripts allow-same-origin`),r.style.cssText=`width:100%;height:100%;border:none;background:#000`,t?r.srcdoc=t:r.srcdoc=`<!DOCTYPE html>
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
</html>`,n.appendChild(r),F=r}function L(e){F&&=(F.remove(),null),e.querySelectorAll(`iframe`).forEach(e=>e.remove())}function Ce(e){return new Worker(`/MobileCodeEditor/assets/compiler.worker-C6_MBn_9.js`,{type:`module`,name:e?.name})}var R=new Ce,z=new Map;R.onmessage=e=>{let{id:t,code:n,errors:r}=e.data;z.get(t)?.({code:n,errors:r}),z.delete(t)};function we(e,t){return new Promise(n=>{let r=Math.random().toString(36).slice(2);z.set(r,n),R.postMessage({id:r,files:e,entryPoint:t})})}var Te=document.getElementById(`app`),Ee=document.getElementById(`sidebar`),B=document.getElementById(`editor-container`),V=document.getElementById(`run-container`),H=document.getElementById(`status`),U=document.getElementById(`tab-editor`),W=document.getElementById(`tab-run`),G=document.getElementById(`tab-files`),De=document.getElementById(`btn-run`),Oe=document.getElementById(`btn-stop`),ke=document.getElementById(`btn-save`),Ae=document.getElementById(`btn-open-dir`),je=document.getElementById(`current-filename`),K=null,q=null,J=null,Y=!1;async function Me(){await Pe(),J=new xe(document.getElementById(`file-tree`)),await J.refresh();let e=await O();e.length&&X(e[0]),M(P.FILE_OPEN,e=>X(e)),M(P.FILE_CREATE,()=>J?.refresh()),M(P.FILE_DELETE,e=>{q===e&&(q=null)}),U.addEventListener(`click`,()=>Q(`editor`)),W.addEventListener(`click`,()=>Q(`run`)),G.addEventListener(`click`,()=>Le()),De.addEventListener(`click`,Fe),Oe.addEventListener(`click`,()=>{L(V),$(`Zatrzymano`,`info`)}),ke.addEventListener(`click`,Z),Ae.addEventListener(`click`,Re),document.addEventListener(`keydown`,e=>{(e.ctrlKey||e.metaKey)&&e.key===`s`&&(e.preventDefault(),Z())}),document.addEventListener(`paste`,e=>{if(!K)return;let t=e.clipboardData?.getData(`text/plain`);t&&(K.hasTextFocus()||(e.preventDefault(),K.focus(),K.executeEdits(`paste`,[{range:K.getSelection(),text:t}])))}),document.getElementById(`btn-paste`)?.addEventListener(`click`,async()=>{try{let e=await navigator.clipboard.readText();if(!e||!K)return;K.focus(),K.executeEdits(`paste`,[{range:K.getSelection(),text:e}])}catch{$(`Brak dostępu do schowka`,`error`)}}),window.visualViewport&&(window.visualViewport.addEventListener(`resize`,Ne),window.visualViewport.addEventListener(`scroll`,Ne)),Q(`editor`)}function Ne(){let e=window.visualViewport,t=document.getElementById(`app`);t.style.height=`${e.height}px`,t.style.transform=`translateY(${e.offsetTop}px)`,requestAnimationFrame(()=>K?.layout())}async function Pe(){(await O()).length>0||await E(`main.ts`,`import Phaser from 'phaser'

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
`)}async function X(e){q&&K&&await Z();let r=await T(e);if(r===null)return;q=e,je.textContent=e,J?.setActive(e);let i=te(e);if(!K)K=ee(B,r,i);else{let a=t.createModel(r,i,n.parse(`file:///${e}`));K.setModel(a)}Q(`editor`)}async function Z(){if(!q||!K)return;let e=K.getValue();await E(q,e),$(`Zapisano: ${q}`,`ok`)}async function Fe(){await Z(),$(`Kompilowanie…`,`info`),Q(`run`);let e=await O(),t={};for(let n of e){let e=await T(n);e!==null&&(t[n]=e)}let n=q?.includes(`/`)?q.split(`/`).slice(0,-1).join(`/`)+`/`:``,r=t[n?`${n}index.html`:`index.html`];if(r){let e=Ie(r,t,n);$(`Uruchomiono ▶ (HTML)`,`ok`),I({html:e,container:V});return}let i=await we(t,q??e[0]);if(i.errors?.length){$(`Błąd: `+i.errors[0],`error`),Q(`editor`);return}$(`Uruchomiono ▶`,`ok`),I({code:i.code,container:V})}function Ie(e,t,n){return e.replace(/<script\s+src="([^"]+)"\s*><\/script>/gi,(e,r)=>{let i=t[r.startsWith(`./`)?n+r.slice(2):n+r]??t[r];return i===void 0?e:`<script>\n${i}\n<\/script>`})}function Q(e){B.style.display=e===`editor`?`flex`:`none`,V.style.display=e===`run`?`flex`:`none`,U.classList.toggle(`active`,e===`editor`),W.classList.toggle(`active`,e===`run`),e===`editor`&&requestAnimationFrame(()=>K?.layout())}function Le(){Y=!Y,Ee.classList.toggle(`open`,Y),G.classList.toggle(`active`,Y),Te.classList.toggle(`sidebar-open`,Y)}function $(e,t){H.textContent=e,H.className=`status status-${t}`}async function Re(){try{let{openNativeFolder:e}=await a(async()=>{let{openNativeFolder:e}=await Promise.resolve().then(()=>_e);return{openNativeFolder:e}},void 0);await e(),await J?.refresh(),$(`Folder otwarty`,`ok`)}catch(e){$(e.message??`Błąd`,`error`)}}Me();