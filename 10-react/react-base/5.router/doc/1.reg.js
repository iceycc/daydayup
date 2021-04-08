//这是一个把路径转成正则的库
let pathToRegexp = require('path-to-regexp');
// /home  /home/
let regexp = pathToRegexp('/home',[],{end:false});
console.log(regexp);
let url = '/home//';
let result = url.match(regexp);
console.log(result);

