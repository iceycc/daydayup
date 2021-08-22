// vue.config.js
const path = require('path')
function resolve(dir){
  return path.join(__dirname,dir)
}
 module.exports = {
  // 选项...
  productionSourceMap:true,
  configureWebpack:{
    devtool: '#eval-source-map',
  },
  chainWebpack(config){
    // config.resolve.alias.set('vue',resolve('vue/vue.esm.js'))
  },
  runtimeCompiler: true // 
  // 如果在之后的开发中，你依然使用template，就需要选择runtimecompiler
  // 如果你之后的开发中，使用的是.vue文件夹开发，那么可以选择runtimeonly
}