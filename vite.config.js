import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// Project page lives at /solo-leveling-/, so assets must resolve under it.
export default defineConfig({
  base: '/solo-leveling-/',
  plugins: [react()],
})
