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
`,l=i.typescript;if(l?.typescriptDefaults){let e={target:l.ScriptTarget?.ES2022??99,module:l.ModuleKind?.ESNext??99,allowNonTsExtensions:!0,allowSyntheticDefaultImports:!0,esModuleInterop:!0,checkJs:!0};l.typescriptDefaults.addExtraLib(c,`ts:engine-defs.d.ts`),l.typescriptDefaults.setCompilerOptions(e),l.javascriptDefaults.addExtraLib(c,`ts:engine-defs.d.ts`),l.javascriptDefaults.setCompilerOptions(e)}function ne(e,t,r=`typescript`,i=14){return n.create(e,{value:t,language:r,theme:`vs-dark`,fontSize:i,fontFamily:`"Roboto Mono", "Fira Mono", "Courier New", monospace`,fontLigatures:!1,minimap:{enabled:!1},glyphMargin:!1,folding:!1,lineNumbers:`on`,lineNumbersMinChars:3,lineDecorationsWidth:0,scrollBeyondLastLine:!1,scrollBeyondLastColumn:5,automaticLayout:!0,tabSize:2,wordWrap:`off`,scrollbar:{horizontal:`auto`,vertical:`auto`,useShadows:!1},overviewRulerLanes:0,padding:{top:8},renderLineHighlight:`line`,guides:{indentation:!1,bracketPairs:!1,highlightActiveIndentation:!1}})}function re(e){return e.endsWith(`.ts`)?`typescript`:e.endsWith(`.html`)||e.endsWith(`.htm`)?`html`:e.endsWith(`.css`)?`css`:e.endsWith(`.json`)?`json`:`javascript`}var u=(e,t)=>t.some(t=>e instanceof t),ie,ae;function oe(){return ie||=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction]}function se(){return ae||=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey]}var d=new WeakMap,f=new WeakMap,p=new WeakMap;function ce(e){let t=new Promise((t,n)=>{let r=()=>{e.removeEventListener(`success`,i),e.removeEventListener(`error`,a)},i=()=>{t(h(e.result)),r()},a=()=>{n(e.error),r()};e.addEventListener(`success`,i),e.addEventListener(`error`,a)});return p.set(t,e),t}function le(e){if(d.has(e))return;let t=new Promise((t,n)=>{let r=()=>{e.removeEventListener(`complete`,i),e.removeEventListener(`error`,a),e.removeEventListener(`abort`,a)},i=()=>{t(),r()},a=()=>{n(e.error||new DOMException(`AbortError`,`AbortError`)),r()};e.addEventListener(`complete`,i),e.addEventListener(`error`,a),e.addEventListener(`abort`,a)});d.set(e,t)}var m={get(e,t,n){if(e instanceof IDBTransaction){if(t===`done`)return d.get(e);if(t===`store`)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return h(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&(t===`done`||t===`store`)?!0:t in e}};function ue(e){m=e(m)}function de(e){return se().includes(e)?function(...t){return e.apply(g(this),t),h(this.request)}:function(...t){return h(e.apply(g(this),t))}}function fe(e){return typeof e==`function`?de(e):(e instanceof IDBTransaction&&le(e),u(e,oe())?new Proxy(e,m):e)}function h(e){if(e instanceof IDBRequest)return ce(e);if(f.has(e))return f.get(e);let t=fe(e);return t!==e&&(f.set(e,t),p.set(t,e)),t}var g=e=>p.get(e);function pe(e,t,{blocked:n,upgrade:r,blocking:i,terminated:a}={}){let o=indexedDB.open(e,t),s=h(o);return r&&o.addEventListener(`upgradeneeded`,e=>{r(h(o.result),e.oldVersion,e.newVersion,h(o.transaction),e)}),n&&o.addEventListener(`blocked`,e=>n(e.oldVersion,e.newVersion,e)),s.then(e=>{a&&e.addEventListener(`close`,()=>a()),i&&e.addEventListener(`versionchange`,e=>i(e.oldVersion,e.newVersion,e))}).catch(()=>{}),s}var me=[`get`,`getKey`,`getAll`,`getAllKeys`,`count`],he=[`put`,`add`,`delete`,`clear`],_=new Map;function v(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&typeof t==`string`))return;if(_.get(t))return _.get(t);let n=t.replace(/FromIndex$/,``),r=t!==n,i=he.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||me.includes(n)))return;let a=async function(e,...t){let a=this.transaction(e,i?`readwrite`:`readonly`),o=a.store;return r&&(o=o.index(t.shift())),(await Promise.all([o[n](...t),i&&a.done]))[0]};return _.set(t,a),a}ue(e=>({...e,get:(t,n,r)=>v(t,n)||e.get(t,n,r),has:(t,n)=>!!v(t,n)||e.has(t,n)}));var ge=[`continue`,`continuePrimaryKey`,`advance`],y={},b=new WeakMap,x=new WeakMap,_e={get(e,t){if(!ge.includes(t))return e[t];let n=y[t];return n||=y[t]=function(...e){b.set(this,x.get(this)[t](...e))},n}};async function*ve(...e){let t=this;if(t instanceof IDBCursor||(t=await t.openCursor(...e)),!t)return;t=t;let n=new Proxy(t,_e);for(x.set(n,t),p.set(n,g(t));t;)yield n,t=await(b.get(n)||t.continue()),b.delete(n)}function ye(e,t){return t===Symbol.asyncIterator&&u(e,[IDBIndex,IDBObjectStore,IDBCursor])||t===`iterate`&&u(e,[IDBIndex,IDBObjectStore])}ue(e=>({...e,get(t,n,r){return ye(t,n)?ve:e.get(t,n,r)},has(t,n){return ye(t,n)||e.has(t,n)}}));var be=e({deleteFile:()=>E,hasNativeFs:()=>Ce,listFiles:()=>D,openNativeFolder:()=>we,readFile:()=>w,writeFile:()=>T}),xe=`mce-fs`,S=`files`,Se=null;async function C(){return Se||=await pe(xe,1,{upgrade(e){e.createObjectStore(S,{keyPath:`path`})}}),Se}async function w(e){return(await(await C()).get(S,e))?.content??null}async function T(e,t){await(await C()).put(S,{path:e,content:t,updatedAt:Date.now()})}async function E(e){await(await C()).delete(S,e)}async function D(){return(await(await C()).getAll(S)).map(e=>e.path).sort()}var O=null;function Ce(){return`showDirectoryPicker`in window}async function we(){if(!Ce())throw Error(`File System Access API not supported`);O=await window.showDirectoryPicker({mode:`readwrite`}),await Te()}async function Te(){if(O)for await(let[e,t]of O.entries())t.kind===`file`&&(e.endsWith(`.ts`)||e.endsWith(`.js`))&&await T(e,await(await t.getFile()).text())}var k=new Map;function A(e,t){return k.has(e)||k.set(e,new Set),k.get(e).add(t),()=>k.get(e)?.delete(t)}function j(e,t){k.get(e)?.forEach(e=>e(t))}var M={FILE_OPEN:`file:open`,FILE_SAVE:`file:save`,FILE_CREATE:`file:create`,FILE_DELETE:`file:delete`,FILE_RENAME:`file:rename`,RUN_START:`run:start`,RUN_STOP:`run:stop`,COMPILE_OK:`compile:ok`,COMPILE_ERR:`compile:error`,PANEL_SWITCH:`panel:switch`};function N(e){return new Promise(t=>{let n=De();n.innerHTML=`
      <div class="mini-dialog">
        <div class="mini-msg">${e}</div>
        <div class="mini-btns">
          <button class="mini-btn mini-cancel">Anuluj</button>
          <button class="mini-btn mini-ok mini-ok-danger">Usuń</button>
        </div>
      </div>
    `,n.querySelector(`.mini-cancel`).addEventListener(`click`,()=>{n.remove(),t(!1)}),n.querySelector(`.mini-ok`).addEventListener(`click`,()=>{n.remove(),t(!0)}),document.body.appendChild(n)})}function Ee(e,t=``){return new Promise(n=>{let r=De();r.innerHTML=`
      <div class="mini-dialog">
        <div class="mini-msg">${e}</div>
        <input class="mini-input" type="text" value="${t}" autocomplete="off" autocorrect="off" spellcheck="false">
        <div class="mini-btns">
          <button class="mini-btn mini-cancel">Anuluj</button>
          <button class="mini-btn mini-ok">OK</button>
        </div>
      </div>
    `;let i=r.querySelector(`.mini-input`),a=e=>{r.remove(),n(e)};r.querySelector(`.mini-cancel`).addEventListener(`click`,()=>a(null)),r.querySelector(`.mini-ok`).addEventListener(`click`,()=>a(i.value.trim()||null)),i.addEventListener(`keydown`,e=>{e.key===`Enter`&&a(i.value.trim()||null),e.key===`Escape`&&a(null)}),document.body.appendChild(r),requestAnimationFrame(()=>{i.focus(),i.select()})})}function De(){let e=document.createElement(`div`);return e.className=`mini-overlay`,e}var Oe=class{el;activeFile=null;collapsed=new Set;constructor(e){this.el=e,this.el.className=`file-tree`,this.render()}async refresh(){let e=ke(await D());this.renderTree(e)}setActive(e){this.activeFile=e,this.el.querySelectorAll(`.ft-item`).forEach(t=>{t.classList.toggle(`active`,t.getAttribute(`data-path`)===e)})}render(){this.el.innerHTML=``;let e=document.createElement(`div`);e.className=`ft-header`,e.innerHTML=`
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
        `,i.querySelector(`.ft-folder-header`).addEventListener(`click`,e=>{let t=e.target;t.classList.contains(`ft-del`)||t.classList.contains(`ft-add-here`)||(this.collapsed.has(r.path)?this.collapsed.delete(r.path):this.collapsed.add(r.path),this.refresh())}),i.querySelector(`.ft-add-here`).addEventListener(`click`,e=>{e.stopPropagation(),this.createFile(r.path)}),i.querySelector(`.ft-del`).addEventListener(`click`,async e=>{if(e.stopPropagation(),!await N(`Usuń folder „${r.name}" i wszystkie pliki?`))return;let t=await D();for(let e of t)(e===r.path||e.startsWith(r.path+`/`))&&await E(e);j(M.FILE_DELETE,r.path),await this.refresh()}),e.appendChild(i),t&&r.children?.length&&this.renderNodes(i,r.children,n+1)}else{let t=r.name.split(`.`).pop()??``,i=t===`ts`?`📄`:t===`js`?`📜`:t===`html`||t===`htm`?`🌐`:t===`json`?`📋`:t===`css`?`🎨`:`📝`,a=document.createElement(`div`);a.className=`ft-item`+(r.path===this.activeFile?` active`:``),a.setAttribute(`data-path`,r.path),a.style.paddingLeft=`${8+n*14}px`,a.innerHTML=`
          <span class="ft-icon">${i}</span>
          <span class="ft-name">${r.name}</span>
          <button class="ft-btn ft-del" title="Usuń">✕</button>
        `,a.querySelector(`.ft-name`).addEventListener(`click`,()=>j(M.FILE_OPEN,r.path)),a.querySelector(`.ft-del`).addEventListener(`click`,async e=>{e.stopPropagation(),await N(`Usuń plik „${r.path}"?`)&&(await E(r.path),j(M.FILE_DELETE,r.path),await this.refresh())}),e.appendChild(a)}}async createFile(e){let t=await Ee(e?`Nowy plik w „${e}":`:`Nowy plik (np. main.ts):`,``);if(!t?.trim())return;let n=e?`${e}/${t.trim()}`:t.trim();await T(n,`// ${n}\n`),j(M.FILE_CREATE,n),await this.refresh(),j(M.FILE_OPEN,n)}async createFolder(){let e=await Ee(`Nazwa folderu (np. Gra1):`);e?.trim()&&(await T(`${e.trim()}/.gitkeep`,``),await this.refresh())}async copyFileToProject(e,t,n){let r=n??``,i=r?`${r}/${e}`:e;await T(i,t),await this.refresh(),j(M.FILE_OPEN,i)}};function ke(e){let t=[],n=new Map;for(let r of e){let e=r.split(`/`);if(e.length===1)t.push({type:`file`,name:r,path:r});else{let i=t;for(let t=0;t<e.length-1;t++){let r=e.slice(0,t+1).join(`/`);if(!n.has(r)){let a={type:`folder`,name:e[t],path:r,children:[]};n.set(r,a),i.push(a)}i=n.get(r).children}let a=e[e.length-1];a!==`.gitkeep`&&i.push({type:`file`,name:a,path:r})}}return t}var P=[`png`,`jpg`,`jpeg`,`gif`,`webp`,`svg`],F=[`mp3`,`ogg`,`wav`],I=[...P,...F];function Ae(e){let t=e.split(`.`).pop()?.toLowerCase()??``;return I.includes(t)}async function je(e=``){let t=await D(),n=[];for(let r of t){if(!Ae(r)||e&&!r.startsWith(e+`/`)&&r!==e)continue;let t=await w(r);if(!t?.startsWith(`data:`))continue;let i=r.split(`/`).pop(),a=i.split(`.`).pop().toLowerCase(),o=P.includes(a)?`image`:F.includes(a)?`audio`:`other`;n.push({key:i.replace(/\.[^.]+$/,``),name:i,path:r,dataUrl:t,type:o})}return n}async function Me(e,t=``){let n=[];for(let r of Array.from(e)){let e=await Ne(r,t);e&&n.push(e)}return n}async function Ne(e,t){let n=e.name.split(`.`).pop()?.toLowerCase()??``;if(!I.includes(n))return null;let r=await Pe(e),i=t?`${t}/${e.name}`:e.name;await T(i,r);let a=P.includes(n)?`image`:F.includes(n)?`audio`:`other`;return{key:e.name.replace(/\.[^.]+$/,``),name:e.name,path:i,dataUrl:r,type:a}}function Pe(e){return new Promise((t,n)=>{let r=new FileReader;r.onload=()=>t(r.result),r.onerror=n,r.readAsDataURL(e)})}async function Fe(e){await E(e)}var Ie=class{el;folder=``;assets=[];constructor(e){this.el=e,this.el.className=`asset-panel`,this.render()}setFolder(e){this.folder=e,this.refresh()}async refresh(){this.assets=await je(this.folder),this.renderGrid()}render(){this.el.innerHTML=``;let e=document.createElement(`div`);e.className=`ft-header`,e.innerHTML=`
      <span class="ft-title">Zasoby</span>
      <label class="ft-btn ft-btn-new" title="Dodaj zasoby (PNG, JPG, MP3…)" style="cursor:pointer">
        +
        <input type="file" id="asset-upload" multiple accept="image/*,audio/*" style="display:none">
      </label>
    `,e.querySelector(`#asset-upload`).addEventListener(`change`,async e=>{let t=e.target.files;t?.length&&(await Me(t,this.folder),e.target.value=``,await this.refresh(),j(M.FILE_CREATE,this.folder))}),this.el.appendChild(e);let t=document.createElement(`div`);t.className=`asset-grid`,this.el.appendChild(t),this.renderGrid()}renderGrid(){let e=this.el.querySelector(`.asset-grid`);if(e.innerHTML=``,this.assets.length===0){e.innerHTML=`<div class="asset-empty">Brak zasobów.<br>Kliknij + aby dodać.</div>`;return}for(let t of this.assets){let n=document.createElement(`div`);n.className=`asset-card`,n.title=`${t.name} — kliknij aby skopiować kod`,t.type===`image`?n.innerHTML=`
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
        `,n.addEventListener(`click`,e=>{e.target.classList.contains(`asset-del`)||(e.stopPropagation(),this.showSnippetPopup(t))}),n.querySelector(`.asset-del`).addEventListener(`click`,async e=>{e.stopPropagation(),confirm(`Usuń ${t.name}?`)&&(await Fe(t.path),j(M.FILE_DELETE,t.path),await this.refresh())}),e.appendChild(n)}}showSnippetPopup(e){document.querySelector(`.asset-snippet-popup`)?.remove();let t=`import ${e.key}Url from './${e.name}'`,n=`'./${e.name}'`,r=document.createElement(`div`);r.className=`asset-snippet-popup`,r.innerHTML=`
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
    `,r.querySelector(`.asp-esm`).textContent=t,r.querySelector(`.asp-js`).textContent=n;let i=r.querySelectorAll(`.asp-copy`);i[0].addEventListener(`click`,e=>{e.stopPropagation(),L(t,i[0])}),i[1].addEventListener(`click`,e=>{e.stopPropagation(),L(n,i[1])}),r.querySelector(`.asp-close`).addEventListener(`click`,e=>{e.stopPropagation(),r.remove()}),document.body.appendChild(r);let a=e=>{r.contains(e.target)||(r.remove(),document.removeEventListener(`click`,a))};setTimeout(()=>document.addEventListener(`click`,a),10)}};async function L(e,t){let n=!1;try{await navigator.clipboard.writeText(e),n=!0}catch{let t=document.createElement(`textarea`);t.value=e,t.style.cssText=`position:fixed;top:0;left:0;opacity:0;pointer-events:none`,document.body.appendChild(t),t.focus(),t.select();try{n=document.execCommand(`copy`)}catch{n=!1}t.remove()}t.textContent=n?`✓`:`✗`,setTimeout(()=>{t.textContent=`📋`},1400)}var Le=class{el;listEl;buildInfoEl;entries=[];visible=!1;maxEntries=200;constructor(e){this.el=e,this.el.className=`console-panel`,this.el.innerHTML=`
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
    `,this.listEl=this.el.querySelector(`.console-list`),this.buildInfoEl=this.el.querySelector(`.console-build-info`),this.el.querySelector(`.console-clear`).addEventListener(`click`,()=>this.clear()),this.el.querySelector(`.console-close`).addEventListener(`click`,()=>this.hide()),this.el.style.display=`none`}setBuildInfo(e){this.buildInfoEl.textContent=e,this.buildInfoEl.style.display=e?``:`none`}log(e,t){let n=new Date,r={level:e,msg:t,time:`${n.getHours().toString().padStart(2,`0`)}:${n.getMinutes().toString().padStart(2,`0`)}:${n.getSeconds().toString().padStart(2,`0`)}`};this.entries.push(r),this.entries.length>this.maxEntries&&this.entries.shift(),this.appendEntry(r),this.updateCount(),e===`error`&&this.show()}clear(){this.entries=[],this.listEl.innerHTML=`<div class="console-row console-info console-build-banner"><span class="console-msg" style="color:#4a5568;font-size:10px">Mobile Code Editor — logi z gry pojawią się tutaj</span></div>`,this.updateCount()}show(){this.visible=!0,this.el.style.display=`flex`,this.scrollBottom()}hide(){this.visible=!1,this.el.style.display=`none`}toggle(){this.visible?this.hide():this.show()}isVisible(){return this.visible}appendEntry(e){let t=document.createElement(`div`);t.className=`console-row console-${e.level}`,t.innerHTML=`<span class="console-icon">${e.level===`error`?`✖`:e.level===`warn`?`⚠`:e.level===`info`?`ℹ`:`›`}</span><span class="console-time">${e.time}</span><span class="console-msg">${Re(e.msg)}</span>`,this.listEl.appendChild(t),this.visible&&this.scrollBottom()}scrollBottom(){requestAnimationFrame(()=>{this.listEl.scrollTop=this.listEl.scrollHeight})}updateCount(){let e=this.entries.filter(e=>e.level===`error`).length,t=this.el.querySelector(`.console-count`);t.textContent=e>0?`${e} błąd`:`${this.entries.length}`,t.className=`console-count ${e>0?`has-errors`:``}`}};function Re(e){return e.replace(/&/g,`&amp;`).replace(/</g,`&lt;`).replace(/>/g,`&gt;`)}var R=null,z=`<script>
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
<\/script>`,ze=JSON.stringify({imports:{phaser:`https://esm.sh/phaser@3.88.2`,"pixi.js":`https://esm.sh/pixi.js@8`,"matter-js":`https://esm.sh/matter-js`}});function B({code:e,html:t,container:n}){Be(n);let r=document.createElement(`iframe`);r.setAttribute(`sandbox`,`allow-scripts allow-same-origin`),r.style.cssText=`width:100%;height:100%;border:none;background:#000;flex:1`,t?r.srcdoc=t.includes(`<head>`)?t.replace(`<head>`,`<head>`+z):z+t:r.srcdoc=`<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width,initial-scale=1">
  <style>*{margin:0;padding:0} body{background:#000;overflow:hidden}</style>
  ${z}
  <script type="importmap">${ze}<\/script>
</head>
<body>
  <canvas id="canvas"></canvas>
  <script type="module">
${e??``}
  <\/script>
</body>
</html>`,n.appendChild(r),R=r}function Be(e){R&&=(R.remove(),null),e.querySelectorAll(`iframe`).forEach(e=>e.remove())}function Ve(e){return new Worker(`/MobileCodeEditor/assets/compiler.worker-CKmcKM0R.js`,{type:`module`,name:e?.name})}var He=new Ve,V=new Map;He.onmessage=e=>{let{id:t,code:n,errors:r}=e.data;V.get(t)?.({code:n,errors:r}),V.delete(t)};function Ue(e,t){return new Promise(n=>{let r=Math.random().toString(36).slice(2);V.set(r,n),He.postMessage({id:r,files:e,entryPoint:t})})}(function(){let e=new Date(`2026-05-27T19:30:48.870Z`),t=e=>e.toString().padStart(2,`0`),n=`${e.getFullYear()}-${t(e.getMonth()+1)}-${t(e.getDate())}  ${t(e.getHours())}:${t(e.getMinutes())}`;document.getElementById(`app-build`).textContent=`build  ${n}`})();var We=document.getElementById(`app`),Ge=document.getElementById(`sidebar`),Ke=document.getElementById(`editor-container`),qe=document.getElementById(`run-container`),H=document.getElementById(`run-iframe-area`),Je=document.getElementById(`status`),Ye=document.getElementById(`tab-editor`),Xe=document.getElementById(`tab-run`),Ze=document.getElementById(`tab-files`),Qe=document.getElementById(`btn-run`),$e=document.getElementById(`btn-stop`),et=document.getElementById(`btn-save`),tt=document.getElementById(`btn-open-dir`),nt=document.getElementById(`current-filename`),U=null,W=null,G=null,K=null,q=null,J=!1,rt=10,it=28,at=1,Y=parseInt(localStorage.getItem(`mce-font-size`)??`14`,10);function X(e){Y=Math.min(it,Math.max(rt,e)),localStorage.setItem(`mce-font-size`,String(Y)),U?.updateOptions({fontSize:Y})}async function ot(){await document.fonts.ready,await ct(),G=new Oe(document.getElementById(`file-tree`)),await G.refresh(),K=new Ie(document.getElementById(`asset-panel`)),q=new Le(document.getElementById(`console-panel`)),window.addEventListener(`message`,e=>{e.data?.__mce__&&q.log(e.data.level,e.data.msg)}),document.getElementById(`btn-console`).addEventListener(`click`,()=>{q.toggle()}),document.getElementById(`stab-files`).addEventListener(`click`,()=>ht(`files`)),document.getElementById(`stab-assets`).addEventListener(`click`,()=>ht(`assets`)),document.getElementById(`sidebar-backdrop`).addEventListener(`click`,()=>mt());let e=await D();e.length&&lt(e[0]),A(M.FILE_OPEN,e=>lt(e)),A(M.FILE_CREATE,()=>{G?.refresh(),K?.refresh()}),A(M.FILE_DELETE,e=>{W===e&&(W=null),G?.refresh(),K?.refresh()}),Ye.addEventListener(`click`,()=>Q(`editor`)),Xe.addEventListener(`click`,()=>Q(`run`)),Ze.addEventListener(`click`,()=>mt()),Qe.addEventListener(`click`,ut),$e.addEventListener(`click`,()=>{Be(H),$(`Zatrzymano`,`info`)}),et.addEventListener(`click`,Z),tt.addEventListener(`click`,_t),document.getElementById(`btn-zoom-in`).addEventListener(`click`,()=>X(Y+at)),document.getElementById(`btn-zoom-out`).addEventListener(`click`,()=>X(Y-at)),document.getElementById(`btn-editor-menu`).addEventListener(`click`,e=>{e.stopPropagation(),gt(document.getElementById(`btn-editor-menu`))}),document.addEventListener(`keydown`,e=>{(e.ctrlKey||e.metaKey)&&e.key===`s`&&(e.preventDefault(),Z())}),document.addEventListener(`paste`,e=>{if(!U)return;let t=e.clipboardData?.getData(`text/plain`);t&&(U.hasTextFocus()||(e.preventDefault(),U.focus(),U.executeEdits(`paste`,[{range:U.getSelection(),text:t}])))}),document.getElementById(`btn-paste`)?.addEventListener(`click`,async()=>{try{let e=await navigator.clipboard.readText();if(!e||!U)return;U.focus(),U.executeEdits(`paste`,[{range:U.getSelection(),text:e}])}catch{$(`Brak dostępu do schowka`,`error`)}}),window.visualViewport&&(window.visualViewport.addEventListener(`resize`,st),window.visualViewport.addEventListener(`scroll`,st)),Q(`editor`)}function st(){let e=window.visualViewport,t=document.getElementById(`app`);t.style.height=`${e.height}px`,t.style.transform=`translateY(${e.offsetTop}px)`,requestAnimationFrame(()=>U?.layout())}async function ct(){(await D()).length>0||await T(`main.ts`,`import Phaser from 'phaser'

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
`)}async function lt(e){W&&U&&await Z();let t=await w(e);if(t===null)return;W=e,nt.textContent=e,G?.setActive(e);let r=re(e);if(!U)U=ne(Ke,t,r,Y),U.getModel()?.updateOptions({tabSize:2,indentSize:2});else{let i=ee.parse(`file:///${e}`),a=n.getModel(i),o=a??n.createModel(t,r,i);o.updateOptions({tabSize:2,indentSize:2}),a&&n.setModelLanguage(o,r),U.setModel(o)}Q(`editor`)}async function Z(){if(!W||!U)return;let e=U.getValue();await T(W,e),$(`Zapisano: ${W}`,`ok`)}async function ut(){await Z(),q?.clear(),$(`Kompilowanie…`,`info`),Q(`run`);let e=await D(),t={};for(let n of e){let e=await w(n);e!==null&&(t[n]=e)}let n=W?.includes(`/`)?W.split(`/`).slice(0,-1).join(`/`)+`/`:``,r=n?`${n}index.html`:`index.html`,i=t[r];if(i){let e=pt(i,t,n),a=ft(`HTML`,r,e.length);q?.setBuildInfo(a),$(`Uruchomiono ▶ (HTML)`,`ok`),B({html:e,container:H});return}let a=W??e[0],o=performance.now(),s=await Ue(t,a);if(s.errors?.length){$(`Błąd: `+s.errors[0],`error`),q?.log(`error`,`✖ Błąd kompilacji: `+s.errors[0]),Q(`editor`);return}let ee=Math.round(performance.now()-o),te=ft(`ESM`,a,s.code.length,ee);q?.setBuildInfo(te),$(`Uruchomiono ▶`,`ok`),B({code:s.code,container:H})}var dt=`0.3.0`;function ft(e,t,n,r){let i=(n/1024).toFixed(1),a=new Date,o=`${a.getHours().toString().padStart(2,`0`)}:${a.getMinutes().toString().padStart(2,`0`)}:${a.getSeconds().toString().padStart(2,`0`)}`;return[`▶ Build v${dt}`,`[${e}]`,t,`${i} KB`,r===void 0?``:`${r}ms`,`@ ${o}`].filter(Boolean).join(`  `)}function pt(e,t,n){return e.replace(/<script\s+src="([^"]+)"\s*><\/script>/gi,(e,r)=>{let i=t[r.startsWith(`./`)?n+r.slice(2):n+r]??t[r];return i===void 0?e:`<script>\n${i}\n<\/script>`})}function Q(e){Ke.style.display=e===`editor`?`flex`:`none`,qe.style.display=e===`run`?`flex`:`none`,Ye.classList.toggle(`active`,e===`editor`),Xe.classList.toggle(`active`,e===`run`),e===`editor`&&requestAnimationFrame(()=>U?.layout())}function mt(){J=!J,Ge.classList.toggle(`open`,J),Ze.classList.toggle(`active`,J),We.classList.toggle(`sidebar-open`,J)}function ht(e){if(document.getElementById(`file-tree`).style.display=e===`files`?``:`none`,document.getElementById(`asset-panel`).style.display=e===`assets`?``:`none`,document.getElementById(`stab-files`).classList.toggle(`active`,e===`files`),document.getElementById(`stab-assets`).classList.toggle(`active`,e===`assets`),e===`assets`){let e=W?.includes(`/`)?W.split(`/`).slice(0,-1).join(`/`):``;K?.setFolder(e)}}function $(e,t){Je.textContent=e,Je.className=`status status-${t}`}function gt(e){document.querySelector(`.editor-menu-popup`)?.remove();let t=document.createElement(`div`);t.className=`editor-menu-popup`;let n=[{label:`Zaznacz wszystko`,icon:`⊡`,action:()=>{U?.focus(),U?.trigger(`menu`,`editor.action.selectAll`,null),t.remove()}},{label:`Wyczyść plik`,icon:`🗑`,action:async()=>{t.remove(),!(!U||!W)&&await N(`Wyczyścić całą zawartość pliku „${W}"?`)&&(U.setValue(``),U.focus(),$(`Plik wyczyszczony`,`info`))}}];for(let e of n){let n=document.createElement(`button`);n.className=`emp-item`,n.innerHTML=`<span class="emp-icon">${e.icon}</span><span>${e.label}</span>`,n.addEventListener(`click`,t=>{t.stopPropagation(),e.action()}),t.appendChild(n)}document.body.appendChild(t);let r=e.getBoundingClientRect();t.style.top=`${r.bottom+4}px`,t.style.left=`${Math.min(r.left,window.innerWidth-t.offsetWidth-8)}px`;let i=e=>{t.contains(e.target)||(t.remove(),document.removeEventListener(`click`,i))};setTimeout(()=>document.addEventListener(`click`,i),10)}async function _t(){try{let{openNativeFolder:e}=await o(async()=>{let{openNativeFolder:e}=await Promise.resolve().then(()=>be);return{openNativeFolder:e}},void 0);await e(),await G?.refresh(),$(`Folder otwarty`,`ok`)}catch(e){$(e.message??`Błąd`,`error`)}}ot();