import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig(({ mode }) => ({
  build: {
    sourcemap: false
  },
 server: {
    proxy: {
      "/api": {
        target: "http://localhost:5000",
        changeOrigin: true,
      },
    },
    headers:
      mode === 'development'
        ? {} // ✅ no CSP in dev
        : {
            "Content-Security-Policy":
              "default-src 'none'; base-uri 'self'; script-src 'self'; style-src 'self'; img-src 'self' data:; font-src 'self'; frame-ancestors 'self'; object-src 'none'; form-action 'self'; upgrade-insecure-requests;"
          }
  },
  plugins: [
    react({
      babel: {
        plugins: [['babel-plugin-react-compiler']],
      },
    }),tailwindcss()
  ], define: {
    __DEV__: mode === 'development'
  }
}))
