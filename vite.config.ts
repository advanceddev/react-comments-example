import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path';

// https://vite.dev/config/
export default defineConfig({
  base: '/react-comments-example',
  plugins: [react({
    babel: {
      plugins: [
        ["babel-plugin-react-compiler"],
      ]
    }
  })],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  build: {
    emptyOutDir: true,
    rollupOptions: {
      output: {
        manualChunks: {
          shoelace: ['@shoelace-style/shoelace']
        }
      }
    }
  }
})
