import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import dts from "vite-plugin-dts";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    dts({
      tsconfigPath: "./tsconfig.app.json",
      rollupTypes: true,
      include: ["src"], // override `include` in `tsconfig.app.json` to exlude stories while building
    }),
    react({
      jsxImportSource: "@emotion/react",
    }),
  ],
  build: {
    lib: {
      name: "@cw-game/react-ui",
      entry: "src/main.ts",
      formats: ["es"],
    },
    rollupOptions: {
      external: (id) => {
        return [
          "react",
          "react-dom",
          "@mui/material",
          "@emotion",
        ].some(prefix => id.startsWith(prefix));
      },
      output: {
        preserveModules: true,
        preserveModulesRoot: "src",
        entryFileNames: "[name].js",
        banner: (chunk) => {
          if (
            chunk.fileName.endsWith('ThemeProvider.js') ||
            chunk.fileName.endsWith('ThemeDispatchContext.js') ||
            chunk.fileName.endsWith('createCustomTheme.js') ||
            chunk.fileName.endsWith('useTheme.js')
          ) {
            return `'use client';`;
          }
          return '';
        },
      },
    },
  },
});
