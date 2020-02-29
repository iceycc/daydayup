// yarn add webpack webpack-cli babel-loader babel-preset-env babel-preset-react babel-core -D
// yarn add antd react
module.exports = {
  entry: "./5.import.js",
  output: {
    filename: 'bundle.js',
    path: __dirname
  },
  module: {
    rules: [{
      test: /\.js$/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: [
            'env',
            'react'
          ],
          plugins: ['my-import']
        }
      },
      exclude:/node_modules/
    }]
  }
}
