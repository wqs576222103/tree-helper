import babel from "rollup-plugin-babel";
import resolve from "@rollup/plugin-node-resolve";
import typescript from "@rollup/plugin-typescript";
import commonjs from "@rollup/plugin-commonjs";
import { terser } from "rollup-plugin-terser";
// 开启服务
import serve from "rollup-plugin-serve";
// 热更新
import livereload from "rollup-plugin-livereload";

const plugins = [
  typescript(),
  resolve(),
  commonjs(),
  babel({
    exclude: "node_modules/**",
  }),
  // terser(),
  // livereload(),
  // serve({
  //   open: true,
  //   contentBase: "dist",
  // }),
];
const external = ["lodash"];

export default [
  {
    input: "./src/lib/find/index.ts", //入口文件
    output: [
      {
        file: "./dist/find.es.js", //打包后的存放文件
        format: "es", //输出格式 amd es iife umd cjs
        name: "find", //如果iife,umd需要指定一个全局变量
        // sourcemap:true  //生成bundle.map.js文件，方便调试
      },
      {
        file: "./dist/find.iife.js", //打包后的存放文件
        format: "iife", //输出格式 amd es iife umd cjs
        name: "find", //如果iife,umd需要指定一个全局变量
      },
      {
        file: "./dist/find.cjs.js", //打包后的存放文件
        format: "cjs", //输出格式 amd es iife umd cjs
        name: "find", //如果iife,umd需要指定一个全局变量
      },
    ],
    plugins,
  },
];
