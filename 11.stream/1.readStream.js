/**
 * 
 * https://www.cnblogs.com/wushanbao/p/7003308.html
 *  自己实现可读流（fs.createReadStream）
 *  什么是？非流动模式 
 *  buffer中是16进制。31（十六进制）-》49(十进制)-》1（ASCII字符）
 *  resume pause //启动 暂停
 * 
 */

// 可以自己实现可读流
// 实现大文件的读取的分割，分断读取
let fs = require('fs');
// 返回的是可读对象
let rs = fs.createReadStream('./a.txt',{
    // ...各种option 
    flags:'r', // 读取模式
    encoding:'utf8', // 读取到的结果都是buffer类型
    autoClose:true, // fs.close
    start:0,// 
    //end:4, // 包前又包后
    highWaterMark: 3 // 每次读多少，buff多长，默认64*1024。node中最小的单位是字节
})
// 基于fs.open fs.read fs.close封装
// let str = ''
// rs.on('data',function(data){
//     console.log(data) // <Buffer 31 32 33 34 35 36 37 38 39>  // buffer中是16进制。31（十六进制）-》49(十进制)-》1（ASCII字符）
//     str+=data
//     console.log(data.toString()) // 123456
// })

// rs.on('end',function(){
//     console.log(str)
// })


// let ReadStream = require('./ReadStream')
let ReadStream = require('./myReadStream')
let rs =  new ReadStream('./a.txt',{
    flags:'r', // 读取模式
    encoding:'utf8', // 读取到的结果都是buffer类型
    autoClose:true, // fs.close
    start:0,// 
    //end:4, // 包前又包后
    highWaterMark: 3 // 每次读多少字符，buff多长，默认64*1024。node中最小的单位是字节
}); // 45 67 89 0  7 2 2 2
// 默认叫非流动模式 什么事
// http

let arr = [];

/**
 * 读取或打开文件错误时报错。end close不用触发
 */
rs.on('error',function(err){
    console.log(err);
})
/**
 * 打开文件触发，读不读先打开
 */
rs.on('open',function(fd){
    // console.log(fd);
})
/**
 * 1. 监听data事件，一直在坚挺，达到要求会一直在读
 * // newListener type=='data' !!!
// 异步
 */
rs.on('data',function(data){ // newListener type=='data' !!!
    console.log(data);
    arr.push(data);
    rs.pause(); // 暂停读取事件
});
setInterval(()=>{
    rs.resume();
},1000)
/**
 * 监听end，读取结束时触发
 */
rs.on('end',function(){ // newListener type=='data'
//  console.log( Buffer.concat(arr).toString())
});
/**
 * 关闭时触发，先end再close
 */
rs.on('close',function(){
    console.log('close');
})
// data / end
// resume pause //启动 暂停

// 文件中有close / open
// on("error")