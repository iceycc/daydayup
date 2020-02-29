// yarn add webpack webpack-cli babel-loader babel-preset-env babel-preset-react babel-core -D
// yarn add antd react
module.exports = {
  entry: "./4.import.js",
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
          plugins: []
        }
      },
      exclude:/node_modules/
    }]
  }
}
