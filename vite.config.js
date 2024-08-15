import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/react-jobboard/', 
  root: "./",
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    publicDir: 'public',
  },
  plugins: [react()]
})
