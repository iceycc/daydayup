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
  }
}