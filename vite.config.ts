/// <reference types="vitest" />
/// <reference types="vite/client" />
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"

// eslint-disable-next-line import/no-default-export
export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "./src/lib/setupTests.ts",
  },
})
