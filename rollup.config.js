import babel from 'rollup-plugin-babel'
export default {
  input: "./src/index.js", //入口文件
  output: {
    file: "./dist/index.js", //打包后的存放文件
    format: "es", //输出格式 amd es iife umd cjs
    name: "tree-helper", //如果iife,umd需要指定一个全局变量
    // sourcemap:true  //生成bundle.map.js文件，方便调试
  },
  plugins: [
    babel({
      exclude: 'node_modules/**'
    })
  ],
  external:['lodash'] //告诉rollup不要将此lodash打包，而作为外部依赖
};
