import{t as e}from"./rolldown-runtime-DK3Fl9T5.js";import{a as t,c as n,i as r,l as i,n as a,o,r as s,s as c,t as l}from"./monaco-DKrxE9GP.js";(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})(),self.MonacoEnvironment={getWorker(e,n){return n===`typescript`||n===`javascript`?new r:n===`html`||n===`handlebars`?new s:n===`css`||n===`scss`||n===`less`?new a:n===`json`?new l:new t}};var ee=`
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
`,u=i.typescript;if(u?.typescriptDefaults){let e={target:u.ScriptTarget?.ES2022??99,module:u.ModuleKind?.ESNext??99,allowNonTsExtensions:!0,allowSyntheticDefaultImports:!0,esModuleInterop:!0,checkJs:!0};u.typescriptDefaults.addExtraLib(ee,`ts:engine-defs.d.ts`),u.typescriptDefaults.setCompilerOptions(e),u.javascriptDefaults.addExtraLib(ee,`ts:engine-defs.d.ts`),u.javascriptDefaults.setCompilerOptions(e)}function te(e,t,r=`typescript`){return n.create(e,{value:t,language:r,theme:`vs-dark`,fontSize:14,minimap:{enabled:!1},lineNumbers:`on`,scrollBeyondLastLine:!1,automaticLayout:!0,tabSize:2,wordWrap:`on`,padding:{top:8},lineDecorationsWidth:8,renderLineHighlight:`line`})}function ne(e){return e.endsWith(`.ts`)?`typescript`:e.endsWith(`.html`)||e.endsWith(`.htm`)?`html`:e.endsWith(`.css`)?`css`:e.endsWith(`.json`)?`json`:`javascript`}var d=(e,t)=>t.some(t=>e instanceof t),re,ie;function ae(){return re||=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction]}function oe(){return ie||=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey]}var f=new WeakMap,p=new WeakMap,m=new WeakMap;function se(e){let t=new Promise((t,n)=>{let r=()=>{e.removeEventListener(`success`,i),e.removeEventListener(`error`,a)},i=()=>{t(g(e.result)),r()},a=()=>{n(e.error),r()};e.addEventListener(`success`,i),e.addEventListener(`error`,a)});return m.set(t,e),t}function ce(e){if(f.has(e))return;let t=new Promise((t,n)=>{let r=()=>{e.removeEventListener(`complete`,i),e.removeEventListener(`error`,a),e.removeEventListener(`abort`,a)},i=()=>{t(),r()},a=()=>{n(e.error||new DOMException(`AbortError`,`AbortError`)),r()};e.addEventListener(`complete`,i),e.addEventListener(`error`,a),e.addEventListener(`abort`,a)});f.set(e,t)}var h={get(e,t,n){if(e instanceof IDBTransaction){if(t===`done`)return f.get(e);if(t===`store`)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return g(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&(t===`done`||t===`store`)?!0:t in e}};function le(e){h=e(h)}function ue(e){return oe().includes(e)?function(...t){return e.apply(_(this),t),g(this.request)}:function(...t){return g(e.apply(_(this),t))}}function de(e){return typeof e==`function`?ue(e):(e instanceof IDBTransaction&&ce(e),d(e,ae())?new Proxy(e,h):e)}function g(e){if(e instanceof IDBRequest)return se(e);if(p.has(e))return p.get(e);let t=de(e);return t!==e&&(p.set(e,t),m.set(t,e)),t}var _=e=>m.get(e);function fe(e,t,{blocked:n,upgrade:r,blocking:i,terminated:a}={}){let o=indexedDB.open(e,t),s=g(o);return r&&o.addEventListener(`upgradeneeded`,e=>{r(g(o.result),e.oldVersion,e.newVersion,g(o.transaction),e)}),n&&o.addEventListener(`blocked`,e=>n(e.oldVersion,e.newVersion,e)),s.then(e=>{a&&e.addEventListener(`close`,()=>a()),i&&e.addEventListener(`versionchange`,e=>i(e.oldVersion,e.newVersion,e))}).catch(()=>{}),s}var pe=[`get`,`getKey`,`getAll`,`getAllKeys`,`count`],me=[`put`,`add`,`delete`,`clear`],v=new Map;function he(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&typeof t==`string`))return;if(v.get(t))return v.get(t);let n=t.replace(/FromIndex$/,``),r=t!==n,i=me.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||pe.includes(n)))return;let a=async function(e,...t){let a=this.transaction(e,i?`readwrite`:`readonly`),o=a.store;return r&&(o=o.index(t.shift())),(await Promise.all([o[n](...t),i&&a.done]))[0]};return v.set(t,a),a}le(e=>({...e,get:(t,n,r)=>he(t,n)||e.get(t,n,r),has:(t,n)=>!!he(t,n)||e.has(t,n)}));var ge=[`continue`,`continuePrimaryKey`,`advance`],_e={},y=new WeakMap,ve=new WeakMap,ye={get(e,t){if(!ge.includes(t))return e[t];let n=_e[t];return n||=_e[t]=function(...e){y.set(this,ve.get(this)[t](...e))},n}};async function*be(...e){let t=this;if(t instanceof IDBCursor||(t=await t.openCursor(...e)),!t)return;t=t;let n=new Proxy(t,ye);for(ve.set(n,t),m.set(n,_(t));t;)yield n,t=await(y.get(n)||t.continue()),y.delete(n)}function b(e,t){return t===Symbol.asyncIterator&&d(e,[IDBIndex,IDBObjectStore,IDBCursor])||t===`iterate`&&d(e,[IDBIndex,IDBObjectStore])}le(e=>({...e,get(t,n,r){return b(t,n)?be:e.get(t,n,r)},has(t,n){return b(t,n)||e.has(t,n)}}));var xe=e({deleteFile:()=>T,hasNativeFs:()=>O,listFiles:()=>E,openNativeFolder:()=>we,readFile:()=>C,writeFile:()=>w}),Se=`mce-fs`,x=`files`,Ce=null;async function S(){return Ce||=await fe(Se,1,{upgrade(e){e.createObjectStore(x,{keyPath:`path`})}}),Ce}async function C(e){return(await(await S()).get(x,e))?.content??null}async function w(e,t){await(await S()).put(x,{path:e,content:t,updatedAt:Date.now()})}async function T(e){await(await S()).delete(x,e)}async function E(){return(await(await S()).getAll(x)).map(e=>e.path).sort()}var D=null;function O(){return`showDirectoryPicker`in window}async function we(){if(!O())throw Error(`File System Access API not supported`);D=await window.showDirectoryPicker({mode:`readwrite`}),await Te()}async function Te(){if(D)for await(let[e,t]of D.entries())t.kind===`file`&&(e.endsWith(`.ts`)||e.endsWith(`.js`))&&await w(e,await(await t.getFile()).text())}var k=new Map;function A(e,t){return k.has(e)||k.set(e,new Set),k.get(e).add(t),()=>k.get(e)?.delete(t)}function j(e,t){k.get(e)?.forEach(e=>e(t))}var M={FILE_OPEN:`file:open`,FILE_SAVE:`file:save`,FILE_CREATE:`file:create`,FILE_DELETE:`file:delete`,FILE_RENAME:`file:rename`,RUN_START:`run:start`,RUN_STOP:`run:stop`,COMPILE_OK:`compile:ok`,COMPILE_ERR:`compile:error`,PANEL_SWITCH:`panel:switch`},Ee=class{el;activeFile=null;collapsed=new Set;constructor(e){this.el=e,this.el.className=`file-tree`,this.render()}async refresh(){let e=De(await E());this.renderTree(e)}setActive(e){this.activeFile=e,this.el.querySelectorAll(`.ft-item`).forEach(t=>{t.classList.toggle(`active`,t.getAttribute(`data-path`)===e)})}render(){this.el.innerHTML=``;let e=document.createElement(`div`);e.className=`ft-header`,e.innerHTML=`
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
        `,i.querySelector(`.ft-folder-header`).addEventListener(`click`,e=>{let t=e.target;t.classList.contains(`ft-del`)||t.classList.contains(`ft-add-here`)||(this.collapsed.has(r.path)?this.collapsed.delete(r.path):this.collapsed.add(r.path),this.refresh())}),i.querySelector(`.ft-add-here`).addEventListener(`click`,e=>{e.stopPropagation(),this.createFile(r.path)}),i.querySelector(`.ft-del`).addEventListener(`click`,async e=>{if(e.stopPropagation(),confirm(`Usuń folder ${r.name} i wszystkie pliki?`)){for(let e of r.children??[])e.type===`file`&&await T(e.path);j(M.FILE_DELETE,r.path),this.refresh()}}),e.appendChild(i),t&&r.children?.length&&this.renderNodes(i,r.children,n+1)}else{let t=r.name.split(`.`).pop()??``,i=t===`ts`?`📄`:t===`js`?`📜`:t===`html`||t===`htm`?`🌐`:t===`json`?`📋`:t===`css`?`🎨`:`📝`,a=document.createElement(`div`);a.className=`ft-item`+(r.path===this.activeFile?` active`:``),a.setAttribute(`data-path`,r.path),a.style.paddingLeft=`${8+n*14}px`,a.innerHTML=`
          <span class="ft-icon">${i}</span>
          <span class="ft-name">${r.name}</span>
          <button class="ft-btn ft-del" title="Usuń">✕</button>
        `,a.querySelector(`.ft-name`).addEventListener(`click`,()=>j(M.FILE_OPEN,r.path)),a.querySelector(`.ft-del`).addEventListener(`click`,async e=>{e.stopPropagation(),confirm(`Usuń ${r.path}?`)&&(await T(r.path),j(M.FILE_DELETE,r.path),this.refresh())}),e.appendChild(a)}}async createFile(e){let t=e?`Nazwa pliku w "${e}":`:`Nazwa pliku (np. main.ts):`,n=prompt(t,``);if(!n?.trim())return;let r=e?`${e}/${n.trim()}`:n.trim();await w(r,(r.split(`.`).pop(),`// ${r}\n`)),j(M.FILE_CREATE,r),await this.refresh(),j(M.FILE_OPEN,r)}async createFolder(){let e=prompt(`Nazwa folderu (np. Gra1 lub Gra1/library):`);e?.trim()&&(await w(`${e.trim()}/.gitkeep`,``),await this.refresh())}async copyFileToProject(e,t,n){let r=n??``,i=r?`${r}/${e}`:e;await w(i,t),await this.refresh(),j(M.FILE_OPEN,i)}};function De(e){let t=[],n=new Map;for(let r of e){let e=r.split(`/`);if(e.length===1)t.push({type:`file`,name:r,path:r});else{let i=t;for(let t=0;t<e.length-1;t++){let r=e.slice(0,t+1).join(`/`);if(!n.has(r)){let a={type:`folder`,name:e[t],path:r,children:[]};n.set(r,a),i.push(a)}i=n.get(r).children}let a=e[e.length-1];a!==`.gitkeep`&&i.push({type:`file`,name:a,path:r})}}return t}var N=[`png`,`jpg`,`jpeg`,`gif`,`webp`,`svg`],P=[`mp3`,`ogg`,`wav`],Oe=[...N,...P];function ke(e){let t=e.split(`.`).pop()?.toLowerCase()??``;return Oe.includes(t)}async function Ae(e=``){let t=await E(),n=[];for(let r of t){if(!ke(r)||e&&!r.startsWith(e+`/`)&&r!==e)continue;let t=await C(r);if(!t?.startsWith(`data:`))continue;let i=r.split(`/`).pop(),a=i.split(`.`).pop().toLowerCase(),o=N.includes(a)?`image`:P.includes(a)?`audio`:`other`;n.push({key:i.replace(/\.[^.]+$/,``),name:i,path:r,dataUrl:t,type:o})}return n}async function je(e,t=``){let n=[];for(let r of Array.from(e)){let e=await Me(r,t);e&&n.push(e)}return n}async function Me(e,t){let n=e.name.split(`.`).pop()?.toLowerCase()??``;if(!Oe.includes(n))return null;let r=await Ne(e),i=t?`${t}/${e.name}`:e.name;await w(i,r);let a=N.includes(n)?`image`:P.includes(n)?`audio`:`other`;return{key:e.name.replace(/\.[^.]+$/,``),name:e.name,path:i,dataUrl:r,type:a}}function Ne(e){return new Promise((t,n)=>{let r=new FileReader;r.onload=()=>t(r.result),r.onerror=n,r.readAsDataURL(e)})}async function Pe(e){await T(e)}var Fe=class{el;folder=``;assets=[];constructor(e){this.el=e,this.el.className=`asset-panel`,this.render()}setFolder(e){this.folder=e,this.refresh()}async refresh(){this.assets=await Ae(this.folder),this.renderGrid()}render(){this.el.innerHTML=``;let e=document.createElement(`div`);e.className=`ft-header`,e.innerHTML=`
      <span class="ft-title">Zasoby</span>
      <label class="ft-btn ft-btn-new" title="Dodaj zasoby (PNG, JPG, MP3…)" style="cursor:pointer">
        +
        <input type="file" id="asset-upload" multiple accept="image/*,audio/*" style="display:none">
      </label>
    `,e.querySelector(`#asset-upload`).addEventListener(`change`,async e=>{let t=e.target.files;t?.length&&(await je(t,this.folder),e.target.value=``,await this.refresh(),j(M.FILE_CREATE,this.folder))}),this.el.appendChild(e);let t=document.createElement(`div`);t.className=`asset-grid`,this.el.appendChild(t),this.renderGrid()}renderGrid(){let e=this.el.querySelector(`.asset-grid`);if(e.innerHTML=``,this.assets.length===0){e.innerHTML=`<div class="asset-empty">Brak zasobów.<br>Kliknij + aby dodać.</div>`;return}for(let t of this.assets){let n=document.createElement(`div`);n.className=`asset-card`,n.title=`${t.name} — kliknij aby skopiować kod`,t.type===`image`?n.innerHTML=`
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
        `,n.addEventListener(`click`,e=>{e.target.classList.contains(`asset-del`)||(e.stopPropagation(),this.showSnippetPopup(t))}),n.querySelector(`.asset-del`).addEventListener(`click`,async e=>{e.stopPropagation(),confirm(`Usuń ${t.name}?`)&&(await Pe(t.path),j(M.FILE_DELETE,t.path),await this.refresh())}),e.appendChild(n)}}showSnippetPopup(e){document.querySelector(`.asset-snippet-popup`)?.remove();let t=`import ${e.key}Url from './${e.name}'`,n=`'./${e.name}'`,r=document.createElement(`div`);r.className=`asset-snippet-popup`,r.innerHTML=`
      <button class="asp-close">✕</button>
      <div class="asp-title">${e.name}</div>
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
    `,r.querySelector(`.asp-esm`).textContent=t,r.querySelector(`.asp-js`).textContent=n;let i=r.querySelectorAll(`.asp-copy`);i[0].addEventListener(`click`,e=>{e.stopPropagation(),F(t,i[0])}),i[1].addEventListener(`click`,e=>{e.stopPropagation(),F(n,i[1])}),r.querySelector(`.asp-close`).addEventListener(`click`,e=>{e.stopPropagation(),r.remove()}),document.body.appendChild(r);let a=e=>{r.contains(e.target)||(r.remove(),document.removeEventListener(`click`,a))};setTimeout(()=>document.addEventListener(`click`,a),10)}};async function F(e,t){let n=!1;try{await navigator.clipboard.writeText(e),n=!0}catch{let t=document.createElement(`textarea`);t.value=e,t.style.cssText=`position:fixed;top:0;left:0;opacity:0;pointer-events:none`,document.body.appendChild(t),t.focus(),t.select();try{n=document.execCommand(`copy`)}catch{n=!1}t.remove()}t.textContent=n?`✓`:`✗`,setTimeout(()=>{t.textContent=`📋`},1400)}var Ie=class{el;listEl;buildInfoEl;entries=[];visible=!1;maxEntries=200;constructor(e){this.el=e,this.el.className=`console-panel`,this.el.innerHTML=`
      <div class="console-header">
        <span class="console-title">Konsola</span>
        <span class="console-count"></span>
        <button class="console-clear" title="Wyczyść">🗑</button>
        <button class="console-close" title="Zamknij">✕</button>
      </div>
      <div class="console-build-info"></div>
      <div class="console-list">
        <div class="console-row console-info console-build-banner">
          <span class="console-msg" style="color:#4a5568;font-size:10px">Mobile Code Editor — logi z gry pojawią się tutaj</span>
        </div>
      </div>
    `,this.listEl=this.el.querySelector(`.console-list`),this.buildInfoEl=this.el.querySelector(`.console-build-info`),this.el.querySelector(`.console-clear`).addEventListener(`click`,()=>this.clear()),this.el.querySelector(`.console-close`).addEventListener(`click`,()=>this.hide()),this.el.style.display=`none`}setBuildInfo(e){this.buildInfoEl.textContent=e,this.buildInfoEl.style.display=e?``:`none`}log(e,t){let n=new Date,r={level:e,msg:t,time:`${n.getHours().toString().padStart(2,`0`)}:${n.getMinutes().toString().padStart(2,`0`)}:${n.getSeconds().toString().padStart(2,`0`)}`};this.entries.push(r),this.entries.length>this.maxEntries&&this.entries.shift(),this.appendEntry(r),this.updateCount(),e===`error`&&this.show()}clear(){this.entries=[],this.listEl.innerHTML=`<div class="console-row console-info console-build-banner"><span class="console-msg" style="color:#4a5568;font-size:10px">Mobile Code Editor — logi z gry pojawią się tutaj</span></div>`,this.updateCount()}show(){this.visible=!0,this.el.style.display=`flex`,this.scrollBottom()}hide(){this.visible=!1,this.el.style.display=`none`}toggle(){this.visible?this.hide():this.show()}isVisible(){return this.visible}appendEntry(e){let t=document.createElement(`div`);t.className=`console-row console-${e.level}`,t.innerHTML=`<span class="console-icon">${e.level===`error`?`✖`:e.level===`warn`?`⚠`:e.level===`info`?`ℹ`:`›`}</span><span class="console-time">${e.time}</span><span class="console-msg">${Le(e.msg)}</span>`,this.listEl.appendChild(t),this.visible&&this.scrollBottom()}scrollBottom(){requestAnimationFrame(()=>{this.listEl.scrollTop=this.listEl.scrollHeight})}updateCount(){let e=this.entries.filter(e=>e.level===`error`).length,t=this.el.querySelector(`.console-count`);t.textContent=e>0?`${e} błąd`:`${this.entries.length}`,t.className=`console-count ${e>0?`has-errors`:``}`}};function Le(e){return e.replace(/&/g,`&amp;`).replace(/</g,`&lt;`).replace(/>/g,`&gt;`)}var I=null,L=`<script>
(function(){
  var orig = { log: console.log, warn: console.warn, error: console.error, info: console.info };
  function send(level, args) {
    var msg = Array.from(args).map(function(a) {
      if (a instanceof Error) return a.message + (a.stack ? '\\n' + a.stack : '');
      try { return typeof a === 'object' && a !== null ? JSON.stringify(a, null, 2) : String(a); }
      catch(e) { return String(a); }
    }).join(' ');
    try { window.parent.postMessage({ __mce__: true, level: level, msg: msg }, '*'); } catch(e){}
    orig[level].apply(console, args);
  }
  console.log   = function(){ send('log',   arguments); };
  console.warn  = function(){ send('warn',  arguments); };
  console.error = function(){ send('error', arguments); };
  console.info  = function(){ send('info',  arguments); };
  window.addEventListener('error', function(e) {
    send('error', [e.message + (e.lineno ? ' (linia ' + e.lineno + ')' : '')]);
  });
  window.addEventListener('unhandledrejection', function(e) {
    send('error', ['Promise nieobsłużony: ' + (e.reason?.message ?? e.reason)]);
  });
})();
<\/script>`,Re=JSON.stringify({imports:{phaser:`https://esm.sh/phaser@3.88.2`,"pixi.js":`https://esm.sh/pixi.js@8`,"matter-js":`https://esm.sh/matter-js`}});function R({code:e,html:t,container:n}){z(n);let r=document.createElement(`iframe`);r.setAttribute(`sandbox`,`allow-scripts allow-same-origin`),r.style.cssText=`width:100%;height:100%;border:none;background:#000;flex:1`,t?r.srcdoc=t.includes(`<head>`)?t.replace(`<head>`,`<head>`+L):L+t:r.srcdoc=`<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width,initial-scale=1">
  <style>*{margin:0;padding:0} body{background:#000;overflow:hidden}</style>
  ${L}
  <script type="importmap">${Re}<\/script>
</head>
<body>
  <canvas id="canvas"></canvas>
  <script type="module">
${e??``}
  <\/script>
</body>
</html>`,n.appendChild(r),I=r}function z(e){I&&=(I.remove(),null),e.querySelectorAll(`iframe`).forEach(e=>e.remove())}function ze(e){return new Worker(`/MobileCodeEditor/assets/compiler.worker-CKmcKM0R.js`,{type:`module`,name:e?.name})}var B=new ze,V=new Map;B.onmessage=e=>{let{id:t,code:n,errors:r}=e.data;V.get(t)?.({code:n,errors:r}),V.delete(t)};function Be(e,t){return new Promise(n=>{let r=Math.random().toString(36).slice(2);V.set(r,n),B.postMessage({id:r,files:e,entryPoint:t})})}var Ve=document.getElementById(`app`),He=document.getElementById(`sidebar`),H=document.getElementById(`editor-container`),Ue=document.getElementById(`run-container`),U=document.getElementById(`run-iframe-area`),We=document.getElementById(`status`),Ge=document.getElementById(`tab-editor`),Ke=document.getElementById(`tab-run`),W=document.getElementById(`tab-files`),qe=document.getElementById(`btn-run`),Je=document.getElementById(`btn-stop`),Ye=document.getElementById(`btn-save`),Xe=document.getElementById(`btn-open-dir`),Ze=document.getElementById(`current-filename`),G=null,K=null,q=null,J=null,Y=null,X=!1;async function Qe(){await et(),q=new Ee(document.getElementById(`file-tree`)),await q.refresh(),J=new Fe(document.getElementById(`asset-panel`)),Y=new Ie(document.getElementById(`console-panel`)),window.addEventListener(`message`,e=>{e.data?.__mce__&&Y.log(e.data.level,e.data.msg)}),document.getElementById(`btn-console`).addEventListener(`click`,()=>{Y.toggle()}),document.getElementById(`stab-files`).addEventListener(`click`,()=>st(`files`)),document.getElementById(`stab-assets`).addEventListener(`click`,()=>st(`assets`)),document.getElementById(`sidebar-backdrop`).addEventListener(`click`,()=>ot());let e=await E();e.length&&tt(e[0]),A(M.FILE_OPEN,e=>tt(e)),A(M.FILE_CREATE,()=>{q?.refresh(),J?.refresh()}),A(M.FILE_DELETE,e=>{K===e&&(K=null),q?.refresh(),J?.refresh()}),Ge.addEventListener(`click`,()=>Q(`editor`)),Ke.addEventListener(`click`,()=>Q(`run`)),W.addEventListener(`click`,()=>ot()),qe.addEventListener(`click`,nt),Je.addEventListener(`click`,()=>{z(U),$(`Zatrzymano`,`info`)}),Ye.addEventListener(`click`,Z),Xe.addEventListener(`click`,ct),document.addEventListener(`keydown`,e=>{(e.ctrlKey||e.metaKey)&&e.key===`s`&&(e.preventDefault(),Z())}),document.addEventListener(`paste`,e=>{if(!G)return;let t=e.clipboardData?.getData(`text/plain`);t&&(G.hasTextFocus()||(e.preventDefault(),G.focus(),G.executeEdits(`paste`,[{range:G.getSelection(),text:t}])))}),document.getElementById(`btn-paste`)?.addEventListener(`click`,async()=>{try{let e=await navigator.clipboard.readText();if(!e||!G)return;G.focus(),G.executeEdits(`paste`,[{range:G.getSelection(),text:e}])}catch{$(`Brak dostępu do schowka`,`error`)}}),window.visualViewport&&(window.visualViewport.addEventListener(`resize`,$e),window.visualViewport.addEventListener(`scroll`,$e)),Q(`editor`)}function $e(){let e=window.visualViewport,t=document.getElementById(`app`);t.style.height=`${e.height}px`,t.style.transform=`translateY(${e.offsetTop}px)`,requestAnimationFrame(()=>G?.layout())}async function et(){(await E()).length>0||await w(`main.ts`,`import Phaser from 'phaser'

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
`)}async function tt(e){K&&G&&await Z();let t=await C(e);if(t===null)return;K=e,Ze.textContent=e,q?.setActive(e);let r=ne(e);if(!G)G=te(H,t,r);else{let i=c.parse(`file:///${e}`),a=n.getModel(i),o=a??n.createModel(t,r,i);a&&n.setModelLanguage(o,r),G.setModel(o)}Q(`editor`)}async function Z(){if(!K||!G)return;let e=G.getValue();await w(K,e),$(`Zapisano: ${K}`,`ok`)}async function nt(){await Z(),Y?.clear(),$(`Kompilowanie…`,`info`),Q(`run`);let e=await E(),t={};for(let n of e){let e=await C(n);e!==null&&(t[n]=e)}let n=K?.includes(`/`)?K.split(`/`).slice(0,-1).join(`/`)+`/`:``,r=n?`${n}index.html`:`index.html`,i=t[r];if(i){let e=at(i,t,n),a=it(`HTML`,r,e.length);Y?.setBuildInfo(a),$(`Uruchomiono ▶ (HTML)`,`ok`),R({html:e,container:U});return}let a=K??e[0],o=performance.now(),s=await Be(t,a);if(s.errors?.length){$(`Błąd: `+s.errors[0],`error`),Y?.log(`error`,`✖ Błąd kompilacji: `+s.errors[0]),Q(`editor`);return}let c=Math.round(performance.now()-o),l=it(`ESM`,a,s.code.length,c);Y?.setBuildInfo(l),$(`Uruchomiono ▶`,`ok`),R({code:s.code,container:U})}var rt=`0.3.0`;function it(e,t,n,r){let i=(n/1024).toFixed(1),a=new Date,o=`${a.getHours().toString().padStart(2,`0`)}:${a.getMinutes().toString().padStart(2,`0`)}:${a.getSeconds().toString().padStart(2,`0`)}`;return[`▶ Build v${rt}`,`[${e}]`,t,`${i} KB`,r===void 0?``:`${r}ms`,`@ ${o}`].filter(Boolean).join(`  `)}function at(e,t,n){return e.replace(/<script\s+src="([^"]+)"\s*><\/script>/gi,(e,r)=>{let i=t[r.startsWith(`./`)?n+r.slice(2):n+r]??t[r];return i===void 0?e:`<script>\n${i}\n<\/script>`})}function Q(e){H.style.display=e===`editor`?`flex`:`none`,Ue.style.display=e===`run`?`flex`:`none`,Ge.classList.toggle(`active`,e===`editor`),Ke.classList.toggle(`active`,e===`run`),e===`editor`&&requestAnimationFrame(()=>G?.layout())}function ot(){X=!X,He.classList.toggle(`open`,X),W.classList.toggle(`active`,X),Ve.classList.toggle(`sidebar-open`,X)}function st(e){if(document.getElementById(`file-tree`).style.display=e===`files`?``:`none`,document.getElementById(`asset-panel`).style.display=e===`assets`?``:`none`,document.getElementById(`stab-files`).classList.toggle(`active`,e===`files`),document.getElementById(`stab-assets`).classList.toggle(`active`,e===`assets`),e===`assets`){let e=K?.includes(`/`)?K.split(`/`).slice(0,-1).join(`/`):``;J?.setFolder(e)}}function $(e,t){We.textContent=e,We.className=`status status-${t}`}async function ct(){try{let{openNativeFolder:e}=await o(async()=>{let{openNativeFolder:e}=await Promise.resolve().then(()=>xe);return{openNativeFolder:e}},void 0);await e(),await q?.refresh(),$(`Folder otwarty`,`ok`)}catch(e){$(e.message??`Błąd`,`error`)}}Qe();