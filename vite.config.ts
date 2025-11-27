import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  optimizeDeps: {
    include: ["@dimforge/rapier3d-compat"],
  },
  // resolve: {
  //   extensions: ["tsx", ".ts", ".exr"], // Add .exr if needed
  // },
  assetsInclude: ["**/*.exr"],
});
