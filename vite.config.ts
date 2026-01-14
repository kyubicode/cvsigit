import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // Tambahkan bagian ini untuk memaksa Vite memproses PostCSS
  css: {
    // Arahkan ke file PostCSS dengan ekstensi .cjs
    postcss: './postcss.config.cjs',
  }
})
