import{t as e}from"./rolldown-runtime-DK3Fl9T5.js";import{a as t,c as n,i as r,l as i,n as a,o,r as s,s as ee,t as te}from"./monaco-DKrxE9GP.js";(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})(),self.MonacoEnvironment={getWorker(e,n){return n===`typescript`||n===`javascript`?new r:n===`html`||n===`handlebars`?new s:n===`css`||n===`scss`||n===`less`?new a:n===`json`?new te:new t}};var ne=`
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
`,c=i.typescript;if(c?.typescriptDefaults){let e={target:c.ScriptTarget?.ES2022??99,module:c.ModuleKind?.ESNext??99,allowNonTsExtensions:!0,allowSyntheticDefaultImports:!0,esModuleInterop:!0,checkJs:!0};c.typescriptDefaults.addExtraLib(ne,`ts:engine-defs.d.ts`),c.typescriptDefaults.setCompilerOptions(e),c.javascriptDefaults.addExtraLib(ne,`ts:engine-defs.d.ts`),c.javascriptDefaults.setCompilerOptions(e)}function re(e,t,r=`typescript`){return n.create(e,{value:t,language:r,theme:`vs-dark`,fontSize:14,minimap:{enabled:!1},lineNumbers:`on`,scrollBeyondLastLine:!1,automaticLayout:!0,tabSize:2,wordWrap:`on`,padding:{top:8},lineDecorationsWidth:8,renderLineHighlight:`line`})}function ie(e){return e.endsWith(`.ts`)?`typescript`:e.endsWith(`.html`)||e.endsWith(`.htm`)?`html`:e.endsWith(`.css`)?`css`:e.endsWith(`.json`)?`json`:`javascript`}var l=(e,t)=>t.some(t=>e instanceof t),ae,oe;function se(){return ae||=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction]}function ce(){return oe||=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey]}var u=new WeakMap,d=new WeakMap,f=new WeakMap;function le(e){let t=new Promise((t,n)=>{let r=()=>{e.removeEventListener(`success`,i),e.removeEventListener(`error`,a)},i=()=>{t(h(e.result)),r()},a=()=>{n(e.error),r()};e.addEventListener(`success`,i),e.addEventListener(`error`,a)});return f.set(t,e),t}function ue(e){if(u.has(e))return;let t=new Promise((t,n)=>{let r=()=>{e.removeEventListener(`complete`,i),e.removeEventListener(`error`,a),e.removeEventListener(`abort`,a)},i=()=>{t(),r()},a=()=>{n(e.error||new DOMException(`AbortError`,`AbortError`)),r()};e.addEventListener(`complete`,i),e.addEventListener(`error`,a),e.addEventListener(`abort`,a)});u.set(e,t)}var p={get(e,t,n){if(e instanceof IDBTransaction){if(t===`done`)return u.get(e);if(t===`store`)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return h(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&(t===`done`||t===`store`)?!0:t in e}};function m(e){p=e(p)}function de(e){return ce().includes(e)?function(...t){return e.apply(g(this),t),h(this.request)}:function(...t){return h(e.apply(g(this),t))}}function fe(e){return typeof e==`function`?de(e):(e instanceof IDBTransaction&&ue(e),l(e,se())?new Proxy(e,p):e)}function h(e){if(e instanceof IDBRequest)return le(e);if(d.has(e))return d.get(e);let t=fe(e);return t!==e&&(d.set(e,t),f.set(t,e)),t}var g=e=>f.get(e);function pe(e,t,{blocked:n,upgrade:r,blocking:i,terminated:a}={}){let o=indexedDB.open(e,t),s=h(o);return r&&o.addEventListener(`upgradeneeded`,e=>{r(h(o.result),e.oldVersion,e.newVersion,h(o.transaction),e)}),n&&o.addEventListener(`blocked`,e=>n(e.oldVersion,e.newVersion,e)),s.then(e=>{a&&e.addEventListener(`close`,()=>a()),i&&e.addEventListener(`versionchange`,e=>i(e.oldVersion,e.newVersion,e))}).catch(()=>{}),s}var me=[`get`,`getKey`,`getAll`,`getAllKeys`,`count`],he=[`put`,`add`,`delete`,`clear`],_=new Map;function v(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&typeof t==`string`))return;if(_.get(t))return _.get(t);let n=t.replace(/FromIndex$/,``),r=t!==n,i=he.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||me.includes(n)))return;let a=async function(e,...t){let a=this.transaction(e,i?`readwrite`:`readonly`),o=a.store;return r&&(o=o.index(t.shift())),(await Promise.all([o[n](...t),i&&a.done]))[0]};return _.set(t,a),a}m(e=>({...e,get:(t,n,r)=>v(t,n)||e.get(t,n,r),has:(t,n)=>!!v(t,n)||e.has(t,n)}));var ge=[`continue`,`continuePrimaryKey`,`advance`],y={},b=new WeakMap,_e=new WeakMap,ve={get(e,t){if(!ge.includes(t))return e[t];let n=y[t];return n||=y[t]=function(...e){b.set(this,_e.get(this)[t](...e))},n}};async function*ye(...e){let t=this;if(t instanceof IDBCursor||(t=await t.openCursor(...e)),!t)return;t=t;let n=new Proxy(t,ve);for(_e.set(n,t),f.set(n,g(t));t;)yield n,t=await(b.get(n)||t.continue()),b.delete(n)}function x(e,t){return t===Symbol.asyncIterator&&l(e,[IDBIndex,IDBObjectStore,IDBCursor])||t===`iterate`&&l(e,[IDBIndex,IDBObjectStore])}m(e=>({...e,get(t,n,r){return x(t,n)?ye:e.get(t,n,r)},has(t,n){return x(t,n)||e.has(t,n)}}));var be=e({deleteFile:()=>E,hasNativeFs:()=>k,listFiles:()=>D,openNativeFolder:()=>Ce,readFile:()=>w,writeFile:()=>T}),xe=`mce-fs`,S=`files`,Se=null;async function C(){return Se||=await pe(xe,1,{upgrade(e){e.createObjectStore(S,{keyPath:`path`})}}),Se}async function w(e){return(await(await C()).get(S,e))?.content??null}async function T(e,t){await(await C()).put(S,{path:e,content:t,updatedAt:Date.now()})}async function E(e){await(await C()).delete(S,e)}async function D(){return(await(await C()).getAll(S)).map(e=>e.path).sort()}var O=null;function k(){return`showDirectoryPicker`in window}async function Ce(){if(!k())throw Error(`File System Access API not supported`);O=await window.showDirectoryPicker({mode:`readwrite`}),await we()}async function we(){if(O)for await(let[e,t]of O.entries())t.kind===`file`&&(e.endsWith(`.ts`)||e.endsWith(`.js`))&&await T(e,await(await t.getFile()).text())}var A=new Map;function j(e,t){return A.has(e)||A.set(e,new Set),A.get(e).add(t),()=>A.get(e)?.delete(t)}function M(e,t){A.get(e)?.forEach(e=>e(t))}var N={FILE_OPEN:`file:open`,FILE_SAVE:`file:save`,FILE_CREATE:`file:create`,FILE_DELETE:`file:delete`,FILE_RENAME:`file:rename`,RUN_START:`run:start`,RUN_STOP:`run:stop`,COMPILE_OK:`compile:ok`,COMPILE_ERR:`compile:error`,PANEL_SWITCH:`panel:switch`},Te=class{el;activeFile=null;collapsed=new Set;constructor(e){this.el=e,this.el.className=`file-tree`,this.render()}async refresh(){let e=Ee(await D());this.renderTree(e)}setActive(e){this.activeFile=e,this.el.querySelectorAll(`.ft-item`).forEach(t=>{t.classList.toggle(`active`,t.getAttribute(`data-path`)===e)})}render(){this.el.innerHTML=``;let e=document.createElement(`div`);e.className=`ft-header`,e.innerHTML=`
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
        `,i.querySelector(`.ft-folder-header`).addEventListener(`click`,e=>{let t=e.target;t.classList.contains(`ft-del`)||t.classList.contains(`ft-add-here`)||(this.collapsed.has(r.path)?this.collapsed.delete(r.path):this.collapsed.add(r.path),this.refresh())}),i.querySelector(`.ft-add-here`).addEventListener(`click`,e=>{e.stopPropagation(),this.createFile(r.path)}),i.querySelector(`.ft-del`).addEventListener(`click`,async e=>{if(e.stopPropagation(),confirm(`Usuń folder ${r.name} i wszystkie pliki?`)){for(let e of r.children??[])e.type===`file`&&await E(e.path);M(N.FILE_DELETE,r.path),this.refresh()}}),e.appendChild(i),t&&r.children?.length&&this.renderNodes(i,r.children,n+1)}else{let t=r.name.split(`.`).pop()??``,i=t===`ts`?`📄`:t===`js`?`📜`:t===`html`||t===`htm`?`🌐`:t===`json`?`📋`:t===`css`?`🎨`:`📝`,a=document.createElement(`div`);a.className=`ft-item`+(r.path===this.activeFile?` active`:``),a.setAttribute(`data-path`,r.path),a.style.paddingLeft=`${8+n*14}px`,a.innerHTML=`
          <span class="ft-icon">${i}</span>
          <span class="ft-name">${r.name}</span>
          <button class="ft-btn ft-del" title="Usuń">✕</button>
        `,a.querySelector(`.ft-name`).addEventListener(`click`,()=>M(N.FILE_OPEN,r.path)),a.querySelector(`.ft-del`).addEventListener(`click`,async e=>{e.stopPropagation(),confirm(`Usuń ${r.path}?`)&&(await E(r.path),M(N.FILE_DELETE,r.path),this.refresh())}),e.appendChild(a)}}async createFile(e){let t=e?`Nazwa pliku w "${e}":`:`Nazwa pliku (np. main.ts):`,n=prompt(t,``);if(!n?.trim())return;let r=e?`${e}/${n.trim()}`:n.trim();await T(r,(r.split(`.`).pop(),`// ${r}\n`)),M(N.FILE_CREATE,r),await this.refresh(),M(N.FILE_OPEN,r)}async createFolder(){let e=prompt(`Nazwa folderu (np. Gra1 lub Gra1/library):`);e?.trim()&&(await T(`${e.trim()}/.gitkeep`,``),await this.refresh())}async copyFileToProject(e,t,n){let r=n??``,i=r?`${r}/${e}`:e;await T(i,t),await this.refresh(),M(N.FILE_OPEN,i)}};function Ee(e){let t=[],n=new Map;for(let r of e){let e=r.split(`/`);if(e.length===1)t.push({type:`file`,name:r,path:r});else{let i=t;for(let t=0;t<e.length-1;t++){let r=e.slice(0,t+1).join(`/`);if(!n.has(r)){let a={type:`folder`,name:e[t],path:r,children:[]};n.set(r,a),i.push(a)}i=n.get(r).children}let a=e[e.length-1];a!==`.gitkeep`&&i.push({type:`file`,name:a,path:r})}}return t}var P=[`png`,`jpg`,`jpeg`,`gif`,`webp`,`svg`],F=[`mp3`,`ogg`,`wav`],I=[...P,...F];function De(e){let t=e.split(`.`).pop()?.toLowerCase()??``;return I.includes(t)}async function Oe(e=``){let t=await D(),n=[];for(let r of t){if(!De(r)||e&&!r.startsWith(e+`/`)&&r!==e)continue;let t=await w(r);if(!t?.startsWith(`data:`))continue;let i=r.split(`/`).pop(),a=i.split(`.`).pop().toLowerCase(),o=P.includes(a)?`image`:F.includes(a)?`audio`:`other`;n.push({key:i.replace(/\.[^.]+$/,``),name:i,path:r,dataUrl:t,type:o})}return n}async function ke(e,t=``){let n=[];for(let r of Array.from(e)){let e=await Ae(r,t);e&&n.push(e)}return n}async function Ae(e,t){let n=e.name.split(`.`).pop()?.toLowerCase()??``;if(!I.includes(n))return null;let r=await je(e),i=t?`${t}/${e.name}`:e.name;await T(i,r);let a=P.includes(n)?`image`:F.includes(n)?`audio`:`other`;return{key:e.name.replace(/\.[^.]+$/,``),name:e.name,path:i,dataUrl:r,type:a}}function je(e){return new Promise((t,n)=>{let r=new FileReader;r.onload=()=>t(r.result),r.onerror=n,r.readAsDataURL(e)})}async function Me(e){await E(e)}var Ne=class{el;folder=``;assets=[];constructor(e){this.el=e,this.el.className=`asset-panel`,this.render()}setFolder(e){this.folder=e,this.refresh()}async refresh(){this.assets=await Oe(this.folder),this.renderGrid()}render(){this.el.innerHTML=``;let e=document.createElement(`div`);e.className=`ft-header`,e.innerHTML=`
      <span class="ft-title">Zasoby</span>
      <label class="ft-btn ft-btn-new" title="Dodaj zasoby (PNG, JPG, MP3…)" style="cursor:pointer">
        +
        <input type="file" id="asset-upload" multiple accept="image/*,audio/*" style="display:none">
      </label>
    `,e.querySelector(`#asset-upload`).addEventListener(`change`,async e=>{let t=e.target.files;t?.length&&(await ke(t,this.folder),e.target.value=``,await this.refresh(),M(N.FILE_CREATE,this.folder))}),this.el.appendChild(e);let t=document.createElement(`div`);t.className=`asset-grid`,this.el.appendChild(t),this.renderGrid()}renderGrid(){let e=this.el.querySelector(`.asset-grid`);if(e.innerHTML=``,this.assets.length===0){e.innerHTML=`<div class="asset-empty">Brak zasobów.<br>Kliknij + aby dodać.</div>`;return}for(let t of this.assets){let n=document.createElement(`div`);n.className=`asset-card`,n.title=`${t.name}\nKliknij → kopiuj import`,t.type===`image`?n.innerHTML=`
          <img src="${t.dataUrl}" alt="${t.name}">
          <span class="asset-name">${t.name}</span>
          <button class="asset-del" title="Usuń">✕</button>
        `:t.type===`audio`?n.innerHTML=`
          <div class="asset-audio-icon">🎵</div>
          <span class="asset-name">${t.name}</span>
          <button class="asset-del" title="Usuń">✕</button>
        `:n.innerHTML=`
          <div class="asset-audio-icon">📎</div>
          <span class="asset-name">${t.name}</span>
          <button class="asset-del" title="Usuń">✕</button>
        `,n.addEventListener(`click`,async e=>{if(e.target.classList.contains(`asset-del`))return;let r=`import ${t.key}Url from './${t.name}'`;try{await navigator.clipboard.writeText(r);let e=n.querySelector(`.asset-name`),t=e.textContent;e.textContent=`✓ Skopiowano!`,setTimeout(()=>{e.textContent=t},1200)}catch{}}),n.querySelector(`.asset-del`).addEventListener(`click`,async e=>{e.stopPropagation(),confirm(`Usuń ${t.name}?`)&&(await Me(t.path),M(N.FILE_DELETE,t.path),await this.refresh())}),e.appendChild(n)}}},L=null;function R({code:e,html:t,container:n}){z(n);let r=document.createElement(`iframe`);r.setAttribute(`sandbox`,`allow-scripts allow-same-origin`),r.style.cssText=`width:100%;height:100%;border:none;background:#000`,t?r.srcdoc=t:r.srcdoc=`<!DOCTYPE html>
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
</html>`,n.appendChild(r),L=r}function z(e){L&&=(L.remove(),null),e.querySelectorAll(`iframe`).forEach(e=>e.remove())}function Pe(e){return new Worker(`/MobileCodeEditor/assets/compiler.worker-CKmcKM0R.js`,{type:`module`,name:e?.name})}var B=new Pe,V=new Map;B.onmessage=e=>{let{id:t,code:n,errors:r}=e.data;V.get(t)?.({code:n,errors:r}),V.delete(t)};function Fe(e,t){return new Promise(n=>{let r=Math.random().toString(36).slice(2);V.set(r,n),B.postMessage({id:r,files:e,entryPoint:t})})}var Ie=document.getElementById(`app`),Le=document.getElementById(`sidebar`),H=document.getElementById(`editor-container`),U=document.getElementById(`run-container`),W=document.getElementById(`status`),G=document.getElementById(`tab-editor`),Re=document.getElementById(`tab-run`),ze=document.getElementById(`tab-files`),Be=document.getElementById(`btn-run`),Ve=document.getElementById(`btn-stop`),He=document.getElementById(`btn-save`),Ue=document.getElementById(`btn-open-dir`),We=document.getElementById(`current-filename`),K=null,q=null,J=null,Y=null,X=!1;async function Ge(){await qe(),J=new Te(document.getElementById(`file-tree`)),await J.refresh(),Y=new Ne(document.getElementById(`asset-panel`)),document.getElementById(`stab-files`).addEventListener(`click`,()=>Qe(`files`)),document.getElementById(`stab-assets`).addEventListener(`click`,()=>Qe(`assets`)),document.getElementById(`sidebar-backdrop`).addEventListener(`click`,()=>Ze());let e=await D();e.length&&Je(e[0]),j(N.FILE_OPEN,e=>Je(e)),j(N.FILE_CREATE,()=>{J?.refresh(),Y?.refresh()}),j(N.FILE_DELETE,e=>{q===e&&(q=null),J?.refresh(),Y?.refresh()}),G.addEventListener(`click`,()=>Q(`editor`)),Re.addEventListener(`click`,()=>Q(`run`)),ze.addEventListener(`click`,()=>Ze()),Be.addEventListener(`click`,Ye),Ve.addEventListener(`click`,()=>{z(U),$(`Zatrzymano`,`info`)}),He.addEventListener(`click`,Z),Ue.addEventListener(`click`,$e),document.addEventListener(`keydown`,e=>{(e.ctrlKey||e.metaKey)&&e.key===`s`&&(e.preventDefault(),Z())}),document.addEventListener(`paste`,e=>{if(!K)return;let t=e.clipboardData?.getData(`text/plain`);t&&(K.hasTextFocus()||(e.preventDefault(),K.focus(),K.executeEdits(`paste`,[{range:K.getSelection(),text:t}])))}),document.getElementById(`btn-paste`)?.addEventListener(`click`,async()=>{try{let e=await navigator.clipboard.readText();if(!e||!K)return;K.focus(),K.executeEdits(`paste`,[{range:K.getSelection(),text:e}])}catch{$(`Brak dostępu do schowka`,`error`)}}),window.visualViewport&&(window.visualViewport.addEventListener(`resize`,Ke),window.visualViewport.addEventListener(`scroll`,Ke)),Q(`editor`)}function Ke(){let e=window.visualViewport,t=document.getElementById(`app`);t.style.height=`${e.height}px`,t.style.transform=`translateY(${e.offsetTop}px)`,requestAnimationFrame(()=>K?.layout())}async function qe(){(await D()).length>0||await T(`main.ts`,`import Phaser from 'phaser'

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
`)}async function Je(e){q&&K&&await Z();let t=await w(e);if(t===null)return;q=e,We.textContent=e,J?.setActive(e);let r=ie(e);if(!K)K=re(H,t,r);else{let i=ee.parse(`file:///${e}`),a=n.getModel(i),o=a??n.createModel(t,r,i);a&&n.setModelLanguage(o,r),K.setModel(o)}Q(`editor`)}async function Z(){if(!q||!K)return;let e=K.getValue();await T(q,e),$(`Zapisano: ${q}`,`ok`)}async function Ye(){await Z(),$(`Kompilowanie…`,`info`),Q(`run`);let e=await D(),t={};for(let n of e){let e=await w(n);e!==null&&(t[n]=e)}let n=q?.includes(`/`)?q.split(`/`).slice(0,-1).join(`/`)+`/`:``,r=t[n?`${n}index.html`:`index.html`];if(r){let e=Xe(r,t,n);$(`Uruchomiono ▶ (HTML)`,`ok`),R({html:e,container:U});return}let i=await Fe(t,q??e[0]);if(i.errors?.length){$(`Błąd: `+i.errors[0],`error`),Q(`editor`);return}$(`Uruchomiono ▶`,`ok`),R({code:i.code,container:U})}function Xe(e,t,n){return e.replace(/<script\s+src="([^"]+)"\s*><\/script>/gi,(e,r)=>{let i=t[r.startsWith(`./`)?n+r.slice(2):n+r]??t[r];return i===void 0?e:`<script>\n${i}\n<\/script>`})}function Q(e){H.style.display=e===`editor`?`flex`:`none`,U.style.display=e===`run`?`flex`:`none`,G.classList.toggle(`active`,e===`editor`),Re.classList.toggle(`active`,e===`run`),e===`editor`&&requestAnimationFrame(()=>K?.layout())}function Ze(){X=!X,Le.classList.toggle(`open`,X),ze.classList.toggle(`active`,X),Ie.classList.toggle(`sidebar-open`,X)}function Qe(e){if(document.getElementById(`file-tree`).style.display=e===`files`?``:`none`,document.getElementById(`asset-panel`).style.display=e===`assets`?``:`none`,document.getElementById(`stab-files`).classList.toggle(`active`,e===`files`),document.getElementById(`stab-assets`).classList.toggle(`active`,e===`assets`),e===`assets`){let e=q?.includes(`/`)?q.split(`/`).slice(0,-1).join(`/`):``;Y?.setFolder(e)}}function $(e,t){W.textContent=e,W.className=`status status-${t}`}async function $e(){try{let{openNativeFolder:e}=await o(async()=>{let{openNativeFolder:e}=await Promise.resolve().then(()=>be);return{openNativeFolder:e}},void 0);await e(),await J?.refresh(),$(`Folder otwarty`,`ok`)}catch(e){$(e.message??`Błąd`,`error`)}}Ge();