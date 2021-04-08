const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
module.exports = {
    entry: './src/index.js',
    output: {
        filename: "bundle.js",
        path: path.join(__dirname, 'dist')
    },
    devServer: {
        contentBase:'./dist'
    },
    devtool: 'source-map',
    plugins:[
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            title: 'Development'
        })
    ]
}
