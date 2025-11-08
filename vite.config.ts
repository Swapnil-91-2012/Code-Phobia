import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  
  server: {
    headers: {
      // Add 'unsafe-inline' to this line
      'Content-Security-Policy': "script-src 'self' 'unsafe-eval' 'unsafe-inline'"
    }
  }
})