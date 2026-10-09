import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react' // или твой плагин

export default defineConfig({
  plugins: [react()],
  base: '/younochkq/', // 👈 ОБЯЗАТЕЛЬНО ДОБАВЬ ЭТУ СТРОКУ
})
