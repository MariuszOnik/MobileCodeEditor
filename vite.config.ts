import { defineConfig } from 'vite'

export default defineConfig({
  base: './',
  worker: { format: 'es' },
  optimizeDeps: {
    exclude: ['esbuild-wasm'],
  },
  build: {
    target: 'es2022',
    rollupOptions: {
      output: {
        manualChunks: {
          monaco: ['monaco-editor'],
        },
      },
    },
  },
})
