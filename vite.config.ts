import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig(({ command }) => ({
  base: command === 'build' ? '/dawhale/' : '/',
  plugins: [
    vue(),
    tailwindcss()
  ],
}))
