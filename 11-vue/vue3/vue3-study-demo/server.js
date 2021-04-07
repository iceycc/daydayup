const express = require('express');
const webpack = require('webpack');
const webpackMiddleware = require('webpack-dev-middleware');

const app = express();
const config = require('./webpack.config');
const compiler = webpack(config);

app.use(webpackMiddleware(compiler,{
    publicPath: config.output.publicPath
}));

app.listen(3000, function (){
    console.log('Vue3 app listening on port 3000')
})
