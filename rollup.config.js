import { terser } from "rollup-plugin-terser";
import typescript from "@rollup/plugin-typescript"
import commonjs from "@rollup/plugin-commonjs"
import resolve from "@rollup/plugin-node-resolve"

const isProd = !process.env.ROLLUP_WATCH

export default {
  input: "src/index.ts",
  output: [
    {
      file: "dist/node/index.js",
      format: "cjs",
      sourcemap: !isProd,
    },
    {
      file: "dist/browser/index.js",
      format: "esm",
      sourcemap: !isProd,

    },
    {
      file: "dist/browser/index.min.js",
      format: "iife",
      name: "dodi_utils",
      plugins: [
        isProd && terser(),
      ],
      sourcemap: !isProd,
    }
  ],
  plugins: [
    typescript(),
    resolve(),
    commonjs(),
  ]
}