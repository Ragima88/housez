import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/fonts.googleapis.com": {
        target: "https://fonts.googleapis.com",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/fonts.googleapis.com/, ""),
      },
    },
  },
});
