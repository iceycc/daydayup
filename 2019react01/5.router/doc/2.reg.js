//这是一个把路径转成正则的库
let pathToRegexp = require('path-to-regexp');
// /home  /home/
let paramNames = [];//[ 'id', 'name' ]
let regexp = pathToRegexp('/user/:id/:name',paramNames,{end:false});
paramNames = paramNames.map(item=>item.name);
let str = '/user/1/zhufengjiagou/100';
let [url,...values] = str.match(regexp);
console.log(str,url);
//url = /user/1/zhufengjiagou  values=[1,'zhufengjiagou']
let params = {};
for(let i=0;i<paramNames.length;i++){
    params[paramNames[i]] = values[i];
}
console.log(params);

//{id:1,name:'zhufengjiagou'}