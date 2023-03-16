import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  resolve: {
    // it shows to vite how to build
    alias: {
      '@' : '/src'
    }
  }
})
