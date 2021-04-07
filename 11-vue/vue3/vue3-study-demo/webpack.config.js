const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
module.exports = {
    mode:'development',
    entry:'./src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename:'bundle.js',
        publicPath: '/'
    },
    devServer: {
        contentBase: './dist',
        compress: true,
        port: 5678
    },
    devtool: 'inline-source-map',
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template:'./public/index.html',
            title:'vue3'
        })
    ]
}