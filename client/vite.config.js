import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    proxy: {
      // Use VITE_API_URL if provided (e.g., http://localhost:3000), otherwise default to http://localhost:3000
      '/api': process.env.VITE_API_URL || 'http://localhost:3000'
    }
  }
})
