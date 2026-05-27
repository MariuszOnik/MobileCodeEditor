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
`,c=i.typescript;if(c?.typescriptDefaults){let e={target:c.ScriptTarget?.ES2022??99,module:c.ModuleKind?.ESNext??99,allowNonTsExtensions:!0,allowSyntheticDefaultImports:!0,esModuleInterop:!0,checkJs:!0};c.typescriptDefaults.addExtraLib(s,`ts:engine-defs.d.ts`),c.typescriptDefaults.setCompilerOptions(e),c.javascriptDefaults.addExtraLib(s,`ts:engine-defs.d.ts`),c.javascriptDefaults.setCompilerOptions(e)}function ee(e,n,r=`typescript`){return t.create(e,{value:n,language:r,theme:`vs-dark`,fontSize:14,minimap:{enabled:!1},lineNumbers:`on`,scrollBeyondLastLine:!1,automaticLayout:!0,tabSize:2,wordWrap:`on`,padding:{top:8},lineDecorationsWidth:8,renderLineHighlight:`line`})}function te(e){return e.endsWith(`.ts`)?`typescript`:`javascript`}var l=(e,t)=>t.some(t=>e instanceof t),ne,re;function ie(){return ne||=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction]}function ae(){return re||=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey]}var u=new WeakMap,d=new WeakMap,f=new WeakMap;function oe(e){let t=new Promise((t,n)=>{let r=()=>{e.removeEventListener(`success`,i),e.removeEventListener(`error`,a)},i=()=>{t(h(e.result)),r()},a=()=>{n(e.error),r()};e.addEventListener(`success`,i),e.addEventListener(`error`,a)});return f.set(t,e),t}function se(e){if(u.has(e))return;let t=new Promise((t,n)=>{let r=()=>{e.removeEventListener(`complete`,i),e.removeEventListener(`error`,a),e.removeEventListener(`abort`,a)},i=()=>{t(),r()},a=()=>{n(e.error||new DOMException(`AbortError`,`AbortError`)),r()};e.addEventListener(`complete`,i),e.addEventListener(`error`,a),e.addEventListener(`abort`,a)});u.set(e,t)}var p={get(e,t,n){if(e instanceof IDBTransaction){if(t===`done`)return u.get(e);if(t===`store`)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return h(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&(t===`done`||t===`store`)?!0:t in e}};function m(e){p=e(p)}function ce(e){return ae().includes(e)?function(...t){return e.apply(g(this),t),h(this.request)}:function(...t){return h(e.apply(g(this),t))}}function le(e){return typeof e==`function`?ce(e):(e instanceof IDBTransaction&&se(e),l(e,ie())?new Proxy(e,p):e)}function h(e){if(e instanceof IDBRequest)return oe(e);if(d.has(e))return d.get(e);let t=le(e);return t!==e&&(d.set(e,t),f.set(t,e)),t}var g=e=>f.get(e);function ue(e,t,{blocked:n,upgrade:r,blocking:i,terminated:a}={}){let o=indexedDB.open(e,t),s=h(o);return r&&o.addEventListener(`upgradeneeded`,e=>{r(h(o.result),e.oldVersion,e.newVersion,h(o.transaction),e)}),n&&o.addEventListener(`blocked`,e=>n(e.oldVersion,e.newVersion,e)),s.then(e=>{a&&e.addEventListener(`close`,()=>a()),i&&e.addEventListener(`versionchange`,e=>i(e.oldVersion,e.newVersion,e))}).catch(()=>{}),s}var de=[`get`,`getKey`,`getAll`,`getAllKeys`,`count`],fe=[`put`,`add`,`delete`,`clear`],_=new Map;function v(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&typeof t==`string`))return;if(_.get(t))return _.get(t);let n=t.replace(/FromIndex$/,``),r=t!==n,i=fe.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||de.includes(n)))return;let a=async function(e,...t){let a=this.transaction(e,i?`readwrite`:`readonly`),o=a.store;return r&&(o=o.index(t.shift())),(await Promise.all([o[n](...t),i&&a.done]))[0]};return _.set(t,a),a}m(e=>({...e,get:(t,n,r)=>v(t,n)||e.get(t,n,r),has:(t,n)=>!!v(t,n)||e.has(t,n)}));var pe=[`continue`,`continuePrimaryKey`,`advance`],y={},b=new WeakMap,x=new WeakMap,me={get(e,t){if(!pe.includes(t))return e[t];let n=y[t];return n||=y[t]=function(...e){b.set(this,x.get(this)[t](...e))},n}};async function*he(...e){let t=this;if(t instanceof IDBCursor||(t=await t.openCursor(...e)),!t)return;t=t;let n=new Proxy(t,me);for(x.set(n,t),f.set(n,g(t));t;)yield n,t=await(b.get(n)||t.continue()),b.delete(n)}function S(e,t){return t===Symbol.asyncIterator&&l(e,[IDBIndex,IDBObjectStore,IDBCursor])||t===`iterate`&&l(e,[IDBIndex,IDBObjectStore])}m(e=>({...e,get(t,n,r){return S(t,n)?he:e.get(t,n,r)},has(t,n){return S(t,n)||e.has(t,n)}}));var ge=e({deleteFile:()=>O,hasNativeFs:()=>j,listFiles:()=>k,openNativeFolder:()=>ve,readFile:()=>E,writeFile:()=>D}),_e=`mce-fs`,C=`files`,w=null;async function T(){return w||=await ue(_e,1,{upgrade(e){e.createObjectStore(C,{keyPath:`path`})}}),w}async function E(e){return(await(await T()).get(C,e))?.content??null}async function D(e,t){await(await T()).put(C,{path:e,content:t,updatedAt:Date.now()})}async function O(e){await(await T()).delete(C,e)}async function k(){return(await(await T()).getAll(C)).map(e=>e.path).sort()}var A=null;function j(){return`showDirectoryPicker`in window}async function ve(){if(!j())throw Error(`File System Access API not supported`);A=await window.showDirectoryPicker({mode:`readwrite`}),await ye()}async function ye(){if(A)for await(let[e,t]of A.entries())t.kind===`file`&&(e.endsWith(`.ts`)||e.endsWith(`.js`))&&await D(e,await(await t.getFile()).text())}var M=new Map;function N(e,t){return M.has(e)||M.set(e,new Set),M.get(e).add(t),()=>M.get(e)?.delete(t)}function P(e,t){M.get(e)?.forEach(e=>e(t))}var F={FILE_OPEN:`file:open`,FILE_SAVE:`file:save`,FILE_CREATE:`file:create`,FILE_DELETE:`file:delete`,FILE_RENAME:`file:rename`,RUN_START:`run:start`,RUN_STOP:`run:stop`,COMPILE_OK:`compile:ok`,COMPILE_ERR:`compile:error`,PANEL_SWITCH:`panel:switch`},be=class{el;activeFile=null;collapsed=new Set;constructor(e){this.el=e,this.el.className=`file-tree`,this.render()}async refresh(){let e=xe(await k());this.renderTree(e)}setActive(e){this.activeFile=e,this.el.querySelectorAll(`.ft-item`).forEach(t=>{t.classList.toggle(`active`,t.getAttribute(`data-path`)===e)})}render(){this.el.innerHTML=``;let e=document.createElement(`div`);e.className=`ft-header`,e.innerHTML=`
      <span class="ft-title">Pliki</span>
      <button class="ft-btn ft-btn-folder" title="Nowy folder">📁+</button>
      <button class="ft-btn ft-btn-new" title="Nowy plik">+</button>
    `,e.querySelector(`.ft-btn-new`).addEventListener(`click`,()=>this.createFile()),e.querySelector(`.ft-btn-folder`).addEventListener(`click`,()=>this.createFolder()),this.el.appendChild(e),this.el.insertAdjacentHTML(`beforeend`,`<div class="ft-body"></div>`),this.refresh()}renderTree(e,t=0){let n=this.el.querySelector(`.ft-body`);t===0&&(n.innerHTML=``),this.renderNodes(n,e,t)}renderNodes(e,t,n){for(let r of t)if(r.type===`folder`){let t=!this.collapsed.has(r.path),i=document.createElement(`div`);i.className=`ft-folder`,i.setAttribute(`data-folder`,r.path),i.innerHTML=`
          <div class="ft-item ft-folder-header" style="padding-left:${8+n*14}px">
            <span class="ft-icon">${t?`📂`:`📁`}</span>
            <span class="ft-name">${r.name}</span>
            <button class="ft-btn ft-del" title="Usuń folder">✕</button>
          </div>
        `,i.querySelector(`.ft-folder-header`).addEventListener(`click`,e=>{e.target.classList.contains(`ft-del`)||(this.collapsed.has(r.path)?this.collapsed.delete(r.path):this.collapsed.add(r.path),this.refresh())}),i.querySelector(`.ft-del`).addEventListener(`click`,async e=>{if(e.stopPropagation(),confirm(`Usuń folder ${r.name} i wszystkie pliki?`)){for(let e of r.children??[])e.type===`file`&&await O(e.path);P(F.FILE_DELETE,r.path),this.refresh()}}),e.appendChild(i),t&&r.children?.length&&this.renderNodes(i,r.children,n+1)}else{let t=r.name.split(`.`).pop()??``,i=t===`ts`?`📄`:t===`js`?`📜`:t===`json`?`📋`:`📝`,a=document.createElement(`div`);a.className=`ft-item`+(r.path===this.activeFile?` active`:``),a.setAttribute(`data-path`,r.path),a.style.paddingLeft=`${8+n*14}px`,a.innerHTML=`
          <span class="ft-icon">${i}</span>
          <span class="ft-name">${r.name}</span>
          <button class="ft-btn ft-del" title="Usuń">✕</button>
        `,a.querySelector(`.ft-name`).addEventListener(`click`,()=>P(F.FILE_OPEN,r.path)),a.querySelector(`.ft-del`).addEventListener(`click`,async e=>{e.stopPropagation(),confirm(`Usuń ${r.path}?`)&&(await O(r.path),P(F.FILE_DELETE,r.path),this.refresh())}),e.appendChild(a)}}async createFile(e){let t=e?`${e}/nazwa.ts`:`np. main.ts lub Gra1/player.ts`,n=prompt(`Ścieżka pliku (${t}):`,e?`${e}/`:``);if(!n?.trim())return;let r=n.trim();await D(r,(r.split(`.`).pop(),`// ${r}\n`)),P(F.FILE_CREATE,r),await this.refresh(),P(F.FILE_OPEN,r)}async createFolder(){let e=prompt(`Nazwa folderu (np. Gra1 lub Gra1/library):`);e?.trim()&&(await D(`${e.trim()}/.gitkeep`,``),await this.refresh())}async copyFileToProject(e,t,n){let r=n??``,i=r?`${r}/${e}`:e;await D(i,t),await this.refresh(),P(F.FILE_OPEN,i)}};function xe(e){let t=[],n=new Map;for(let r of e){let e=r.split(`/`);if(e.length===1)t.push({type:`file`,name:r,path:r});else{let i=t;for(let t=0;t<e.length-1;t++){let r=e.slice(0,t+1).join(`/`);if(!n.has(r)){let a={type:`folder`,name:e[t],path:r,children:[]};n.set(r,a),i.push(a)}i=n.get(r).children}let a=e[e.length-1];a!==`.gitkeep`&&i.push({type:`file`,name:a,path:r})}}return t}var I=null;function Se({code:e,container:t}){L(t);let n=document.createElement(`iframe`);n.setAttribute(`sandbox`,`allow-scripts allow-same-origin`),n.style.cssText=`width:100%;height:100%;border:none;background:#000`,n.srcdoc=`<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width,initial-scale=1">
  <style>*{margin:0;padding:0} body{background:#000;overflow:hidden}</style>
  <script type="importmap">${JSON.stringify({imports:{phaser:`https://esm.sh/phaser@3.88.2`,"pixi.js":`https://esm.sh/pixi.js@8`}})}<\/script>
</head>
<body>
  <canvas id="canvas"></canvas>
  <script type="module">
${e}
  <\/script>
</body>
</html>`,t.appendChild(n),I=n}function L(e){I&&=(I.remove(),null),e.querySelectorAll(`iframe`).forEach(e=>e.remove())}function Ce(e){return new Worker(`/MobileCodeEditor/assets/compiler.worker-ztWf7a8w.js`,{type:`module`,name:e?.name})}var R=new Ce,z=new Map;R.onmessage=e=>{let{id:t,code:n,errors:r}=e.data;z.get(t)?.({code:n,errors:r}),z.delete(t)};function we(e,t){return new Promise(n=>{let r=Math.random().toString(36).slice(2);z.set(r,n),R.postMessage({id:r,files:e,entryPoint:t})})}var Te=document.getElementById(`app`),Ee=document.getElementById(`sidebar`),B=document.getElementById(`editor-container`),V=document.getElementById(`run-container`),H=document.getElementById(`status`),U=document.getElementById(`tab-editor`),W=document.getElementById(`tab-run`),G=document.getElementById(`tab-files`),De=document.getElementById(`btn-run`),Oe=document.getElementById(`btn-stop`),ke=document.getElementById(`btn-save`),Ae=document.getElementById(`btn-open-dir`),je=document.getElementById(`current-filename`),K=null,q=null,J=null,Y=!1;async function Me(){await Ne(),J=new be(document.getElementById(`file-tree`)),await J.refresh();let e=await k();e.length&&X(e[0]),N(F.FILE_OPEN,e=>X(e)),N(F.FILE_CREATE,()=>J?.refresh()),N(F.FILE_DELETE,e=>{q===e&&(q=null)}),U.addEventListener(`click`,()=>Q(`editor`)),W.addEventListener(`click`,()=>Q(`run`)),G.addEventListener(`click`,()=>Fe()),De.addEventListener(`click`,Pe),Oe.addEventListener(`click`,()=>{L(V),$(`Zatrzymano`,`info`)}),ke.addEventListener(`click`,Z),Ae.addEventListener(`click`,Ie),document.addEventListener(`keydown`,e=>{(e.ctrlKey||e.metaKey)&&e.key===`s`&&(e.preventDefault(),Z())}),Q(`editor`)}async function Ne(){(await k()).length>0||await D(`main.ts`,`import Phaser from 'phaser'

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
`)}async function X(e){q&&K&&await Z();let r=await E(e);if(r===null)return;q=e,je.textContent=e,J?.setActive(e);let i=te(e);if(!K)K=ee(B,r,i);else{let a=t.createModel(r,i,n.parse(`file:///${e}`));K.setModel(a)}Q(`editor`)}async function Z(){if(!q||!K)return;let e=K.getValue();await D(q,e),$(`Zapisano: ${q}`,`ok`)}async function Pe(){await Z(),$(`Kompilowanie…`,`info`),Q(`run`);let e=await k(),t={};for(let n of e){let e=await E(n);e!==null&&(t[n]=e)}let n=await we(t,q??e[0]);if(n.errors?.length){$(`Błąd: `+n.errors[0],`error`),Q(`editor`);return}$(`Uruchomiono ▶`,`ok`),Se({code:n.code,container:V})}function Q(e){B.style.display=e===`editor`?`flex`:`none`,V.style.display=e===`run`?`flex`:`none`,U.classList.toggle(`active`,e===`editor`),W.classList.toggle(`active`,e===`run`),e===`editor`&&requestAnimationFrame(()=>K?.layout())}function Fe(){Y=!Y,Ee.classList.toggle(`open`,Y),G.classList.toggle(`active`,Y),Te.classList.toggle(`sidebar-open`,Y)}function $(e,t){H.textContent=e,H.className=`status status-${t}`}async function Ie(){try{let{openNativeFolder:e}=await a(async()=>{let{openNativeFolder:e}=await Promise.resolve().then(()=>ge);return{openNativeFolder:e}},void 0);await e(),await J?.refresh(),$(`Folder otwarty`,`ok`)}catch(e){$(e.message??`Błąd`,`error`)}}Me();