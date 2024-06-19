import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import path from "path"

import dns from 'node:dns'

dns.setDefaultResultOrder('verbatim')


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})
