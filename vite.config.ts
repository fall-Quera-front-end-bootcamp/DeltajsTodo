import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: { port: 3000 },
  build: {
    outDir: 'build',
    sourcemap: true,
    chunkSizeWarningLimit: 1000,
    rollupOptions: {
      input: '/src/app/main.tsx' // مسیر جدید ورودی
    }
  },
  resolve: {
    alias: {
      '@': '/src'
    }
  },
  optimizeDeps: {
    include: ['react', 'react-dom', 'react-router-dom']
  }
})
