import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    port: 8666,
    proxy: {
      "/api": "http://localhost:8555",   // POST /api/chat → FastAPI
    },
  },
});
