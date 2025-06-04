import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import dts from "vite-plugin-dts";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    dts({
      tsconfigPath: "./tsconfig.app.json",
      rollupTypes: true,
      include: ["src"], // override `include` in `tsconfig.app.json` to exlude stories while building
    }),
    react(),
  ],
  build: {
    lib: {
      name: "@cw-game/react-ui",
      entry: ["src/main.ts"],
      fileName: (format, entryName) => `${entryName}.${format}.js`,
      cssFileName: "main",
    },
    rollupOptions: {
      external: [
        "react",
        "react-dom",
        "@mui/material",
        "@emotion/react",
        "@emotion/styled",
      ],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
          "@mui/material": "MaterialUI",
          "@emotion/react": "EmotionReact",
          "@emotion/styled": "EmotionStyled",
        },
      },
    },
  },
});
