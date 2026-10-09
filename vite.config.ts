import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // На GitHub Pages сайт живёт в /younochkq/, на Vercel (и локально) — в корне
  base: process.env.GITHUB_ACTIONS ? '/younochkq/' : '/',
})
