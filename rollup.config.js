import dotenv from "dotenv";
import resolve from "rollup-plugin-node-resolve";
import commonjs from "rollup-plugin-commonjs";
import typescript from "rollup-plugin-typescript";

dotenv.config();

export default [
  {
    input: "./src/index.ts",
    output: {
      format: "iife",
      file: "public/app.js",
    },
    plugins: [
      resolve(),
      commonjs(),
      typescript(),
    ],
  },
];