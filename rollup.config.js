// eslint-disable-next-line import/no-extraneous-dependencies
import typescript from "@rollup/plugin-typescript"

// eslint-disable-next-line import/no-default-export
export default {
  external: ["react"],
  input: "src/main.ts",
  output: {
    dir: "dist",
    format: "esm",
  },
  plugins: [typescript({ tsconfig: "./tsconfig.build.json" })],
}
