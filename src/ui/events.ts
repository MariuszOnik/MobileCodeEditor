type Handler<T = any> = (payload: T) => void

const listeners = new Map<string, Set<Handler>>()

export function on<T = any>(event: string, handler: Handler<T>): () => void {
  if (!listeners.has(event)) listeners.set(event, new Set())
  listeners.get(event)!.add(handler)
  return () => listeners.get(event)?.delete(handler)
}

export function emit<T = any>(event: string, payload?: T): void {
  listeners.get(event)?.forEach(h => h(payload))
}

// Typed event catalogue
export const Events = {
  FILE_OPEN:    'file:open',       // payload: string (path)
  FILE_SAVE:    'file:save',       // payload: { path, content }
  FILE_CREATE:  'file:create',     // payload: string (path)
  FILE_DELETE:  'file:delete',     // payload: string (path)
  FILE_RENAME:  'file:rename',     // payload: { from, to }
  RUN_START:    'run:start',
  RUN_STOP:     'run:stop',
  COMPILE_OK:   'compile:ok',      // payload: string (code)
  COMPILE_ERR:  'compile:error',   // payload: string[]
  PANEL_SWITCH: 'panel:switch',    // payload: 'editor' | 'run' | 'files'
} as const
