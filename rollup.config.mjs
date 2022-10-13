import typescript from "@rollup/plugin-typescript"

export default {
  external: ["react"],
  input: "src/main.ts",
  output: [
    {
      file: "dist/cjs/main.js",
      format: "cjs",
    },
    {
      file: "dist/esm/main.js",
      format: "esm",
    },
  ],
  plugins: [typescript({ tsconfig: "./tsconfig.build.json" })],
}
