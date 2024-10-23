import typescript from "@rollup/plugin-typescript"
import pkg from "./package.json" with { type: "json" }

export default {
  input: "src/main.ts",
  output: [
    {
      file: pkg.main,
      format: "cjs",
    },
    {
      file: pkg.module,
      format: "esm",
    },
  ],
  external: [...Object.keys(pkg.dependencies ?? {}), ...Object.keys(pkg.peerDependencies ?? {})],
  plugins: [typescript({ tsconfig: "./tsconfig.build.json" })],
}
