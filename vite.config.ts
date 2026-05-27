import { defineConfig } from 'vite'

export default defineConfig({
  base: '/MobileCodeEditor/',
  worker: { format: 'es' },
  optimizeDeps: {
    exclude: ['esbuild-wasm'],
  },
  build: {
    target: 'es2022',
    rollupOptions: {
      output: {
        manualChunks(id: string) {
          if (id.includes('monaco-editor')) return 'monaco'
        },
      },
    },
  },
})
