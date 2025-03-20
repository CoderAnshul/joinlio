import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true,
    strictPort: true,
    port: 5174, // Change this to your desired port
    hmr: {
      protocol: "wss",
      clientPort: 443, // Forces WebSocket to use the correct port
    },
  },
});
