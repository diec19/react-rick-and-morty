import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: "https://diec19.github.io/react-react-and-morty/",
  plugins: [react()]
})
