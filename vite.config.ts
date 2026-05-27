import { defineConfig } from 'vite'

export default defineConfig({
  base: '/MobileCodeEditor/',
  worker: { format: 'es' },
  optimizeDeps: {
    exclude: ['esbuild-wasm'],
  },
  define: {
    // Injected at build time — shows exact date+time of `npm run build`
    __BUILD_TIME__: JSON.stringify(new Date().toISOString()),
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
