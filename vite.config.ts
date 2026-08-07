import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import vue from '@vitejs/plugin-vue'

// GitHub Pages serves this project at /Webdaw/, but the dev server runs at /
export default defineConfig(({ command }) => ({
  base: command === 'build' ? '/Webdaw/' : '/',
  plugins: [
    vue(),
    tailwindcss()
  ],
}))
