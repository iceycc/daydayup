// @ts-nocheck
const path = require('path')
const  CleanWebpackPlugin  = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin')
let {HelloAsyncPlugin,FileListPlugin,ConsoleLogOnBuildWebpackPlugin} = require('./webpack.plugins')
const ManifestWebpackPlugin = require('webpack-manifest-plugin')
const config1 = {
  mode: 'development',
  entry: {
    index: './src/index.js'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[chunkhash].[id].[name].dist.js',
    library: "MyLibrary",
    libraryExport: 'myLibrary',
    libraryTarget: 'umd',
    umdNamedDefine: true, // umd
    hashDigestLength: 5,
    hashFunction: function () {
      this.update = function (a) {
        // return a + 1
      }
      this.digest = function () {
        return 'umd1234'
      }
    }
  },
  module:{
    // noParse: /jquery|lodash/,
    // 从 webpack 3.0.0 开始
    noParse: function(content) {
      return /jquery|lodash/.test(content);
    },
    rules:[
    ]
  },
  plugins: [
    new ManifestWebpackPlugin(),
    new CleanWebpackPlugin.CleanWebpackPlugin(),
    new HelloAsyncPlugin(),
    new FileListPlugin(),
    new ConsoleLogOnBuildWebpackPlugin('dist1 '),
    new HtmlWebpackPlugin({
      template: './index.html',
      filename: 'index.html'
    })
  ]
}

module.exports = [config1
  // ,
  // function (env, args) {
  //   return {
  //     mode: 'development',
  //     entry: './src/index.js',
  //     output: {
  //       path: path.resolve(__dirname, 'dist'),
  //       filename: 'dist2.js'
  //     },
  //     plugins: [
  //       new ConsoleLogOnBuildWebpackPlugin('dist2 ')
  //     ]
  //   }
  // },
  //  ()=>{
  //    return new Promise((resove,reject)=>{
  //      setTimeout(()=>{
  //        resove({
  //         mode: 'development',
  //         entry: './src/index.js',
  //         output: {
  //           path: path.resolve(__dirname, 'dist'),
  //           filename: 'dist2.js'
  //         },
  //         plugins: [
  //           new ConsoleLogOnBuildWebpackPlugin('dist2 ')
  //         ]
  //       })
  //      },5000)
  //    }) 
  //  }
]