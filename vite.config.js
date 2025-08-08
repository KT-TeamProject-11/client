import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    port: 8666,                         // ✅ 프론트: 8666
    // vite.config.js
    proxy: {
  '/api': {
    target: 'http://localhost:8555',
    changeOrigin: true,
    rewrite: (path) => path.replace(/^\/api/, ''),
  },
},}})
