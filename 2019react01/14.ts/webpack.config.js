const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    mode:'development',
    entry:'./src/index.tsx',
    output:{
        path:path.resolve(__dirname,'dist'),
        filename:'bundle.js'
    },
    devtool:'source-map',
    devServer:{
        hot:true,
        contentBase:path.resolve(__dirname,'dist'),
    },
    resolve:{
        extensions:['.ts','.tsx','.js','.json']
    },
    module:{
        rules:[
            {
                test:/\.tsx?$/,
                loader:'ts-loader'
            },
            {
                test:/\.tsx?$/,
                enforce:'pre',//loader pre normal post
                loader:'source-map-loader'
            }
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({
            template:'./src/index.html'
        }),
        new webpack.HotModuleReplacementPlugin()
    ]
}