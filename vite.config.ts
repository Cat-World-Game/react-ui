import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import dts from "vite-plugin-dts";
import preserveDirectives from "rollup-preserve-directives";

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
      plugins: [preserveDirectives()],
      external: [
        "react",
        "react-dom",
        /^@mui\/.*/,
        /^@emotion\/.*/,
        "react/jsx-runtime",
        "react/jsx-dev-runtime",
      ],
    },
  },
});
