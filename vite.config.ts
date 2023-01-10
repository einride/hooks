/// <reference types="vitest" />
/// <reference types="vite/client" />
import { resolve } from "path"
import typescript from "@rollup/plugin-typescript"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"
import pkg from "./package.json"

export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, "src/main.ts"),
      formats: ["es", "cjs"],
    },
    rollupOptions: {
      external: [
        ...Object.keys(pkg.devDependencies ?? {}),
        ...Object.keys(pkg.peerDependencies ?? {}),
      ],
      plugins: [typescript({ tsconfig: "./tsconfig.build.json" })],
    },
  },
  plugins: [react()],
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "./src/lib/setupTests.ts",
  },
})
