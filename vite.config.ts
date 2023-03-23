import react from '@vitejs/plugin-react'
import svgr from "vite-plugin-svgr";
import { visualizer } from "rollup-plugin-visualizer";
import { defineConfig, type PluginOption } from 'vite'


export default defineConfig({
  plugins: [svgr(), react(), visualizer({
    template: "sunburst", // or sunburst
    open: true,
    gzipSize: true,
    brotliSize: true,
    filename: "analice.html"
  }) as PluginOption],
  resolve: {
    // it shows to vite how to build
    alias: {
      '@' : '/src'
    }
  }
})
