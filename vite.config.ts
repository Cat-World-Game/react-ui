import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import dts from "vite-plugin-dts";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    dts({ tsconfigPath: "./tsconfig.app.json", rollupTypes: true }),
    react(),
  ],
  build: {
    lib: {
      name: "@cw-game/react-ui",
      entry: ["src/main.tsx"],
      fileName: (format, entryName) => `${entryName}.${format}.js`,
      cssFileName: "main",
    },
    rollupOptions: {
      external: ["react", "react-dom"],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
        },
      },
    },
  },
});
