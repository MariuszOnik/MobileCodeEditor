import * as monaco from 'monaco-editor'
import editorWorker from 'monaco-editor/esm/vs/editor/editor.worker?worker'
import tsWorker from 'monaco-editor/esm/vs/language/typescript/ts.worker?worker'
import htmlWorker from 'monaco-editor/esm/vs/language/html/html.worker?worker'
import cssWorker from 'monaco-editor/esm/vs/language/css/css.worker?worker'
import jsonWorker from 'monaco-editor/esm/vs/language/json/json.worker?worker'

self.MonacoEnvironment = {
  getWorker(_: unknown, label: string) {
    if (label === 'typescript' || label === 'javascript') return new tsWorker()
    if (label === 'html' || label === 'handlebars') return new htmlWorker()
    if (label === 'css' || label === 'scss' || label === 'less') return new cssWorker()
    if (label === 'json') return new jsonWorker()
    return new editorWorker()
  },
}

// Type stubs for common game engines available via esm.sh
const ENGINE_DEFS = `
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
`

const tsLang = (monaco.languages as any).typescript
if (tsLang?.typescriptDefaults) {
  const compilerOpts = {
    target: tsLang.ScriptTarget?.ES2022 ?? 99,
    module: tsLang.ModuleKind?.ESNext ?? 99,
    allowNonTsExtensions: true,
    allowSyntheticDefaultImports: true,
    esModuleInterop: true,
    checkJs: true,
  }
  tsLang.typescriptDefaults.addExtraLib(ENGINE_DEFS, 'ts:engine-defs.d.ts')
  tsLang.typescriptDefaults.setCompilerOptions(compilerOpts)
  tsLang.javascriptDefaults.addExtraLib(ENGINE_DEFS, 'ts:engine-defs.d.ts')
  tsLang.javascriptDefaults.setCompilerOptions(compilerOpts)
}

export { monaco }

export type EditorLanguage = 'typescript' | 'javascript' | 'html' | 'css' | 'json'

export function createEditor(
  container: HTMLElement,
  value: string,
  language: EditorLanguage = 'typescript',
  fontSize = 14,
): monaco.editor.IStandaloneCodeEditor {
  return monaco.editor.create(container, {
    value,
    language,
    theme: 'vs-dark',
    fontSize,
    minimap: { enabled: false },
    lineNumbers: 'on',
    scrollBeyondLastLine: false,
    automaticLayout: true,
    tabSize: 2,
    wordWrap: 'off',
    scrollBeyondLastColumn: 8,
    scrollbar: {
      horizontal: 'auto',
      vertical: 'auto',
      useShadows: false,
    },
    padding: { top: 8 },
    lineDecorationsWidth: 8,
    renderLineHighlight: 'line',
  })
}

export function getLanguage(path: string): EditorLanguage {
  if (path.endsWith('.ts')) return 'typescript'
  if (path.endsWith('.html') || path.endsWith('.htm')) return 'html'
  if (path.endsWith('.css')) return 'css'
  if (path.endsWith('.json')) return 'json'
  return 'javascript'
}
