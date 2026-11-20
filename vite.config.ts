import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/mv_sivut/',
  plugins: [
    react(),
  ],
  assetsInclude: ['**/*.svg', '**/*.csv'],
})