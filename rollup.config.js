import babel from "rollup-plugin-babel";
import resolve from "@rollup/plugin-node-resolve";
import typescript from "@rollup/plugin-typescript";
import commonjs from "@rollup/plugin-commonjs";
import { terser } from "rollup-plugin-terser";
import serve from "rollup-plugin-serve";
import livereload from "rollup-plugin-livereload";

export default {
  input: "./src/index.js", //入口文件
  output: {
    file: "./dist/index.js", //打包后的存放文件
    format: "es", //输出格式 amd es iife umd cjs
    name: "tree-helper", //如果iife,umd需要指定一个全局变量
    // sourcemap:true  //生成bundle.map.js文件，方便调试
  },
  plugins: [
    typescript(),
    resolve(),
    commonjs(),
    babel({
      exclude: "node_modules/**",
    }),
    terser(),
    livereload(),
    serve({
      open: true,
      contentBase: "dist",
    }),
  ],
  // external: ["lodash"], //告诉rollup不要将此lodash打包，而作为外部依赖
};
