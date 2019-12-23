/**
 * 如何解决异步并发问题：排队写入
 * 写入发现大了，会扔到内存。。
 * 可以通过分布暂停
 * 主线程执行是同步的，但是写的过程是异步的。
 * 多次依次执行，异步写同一文件时，会加入队列，按顺序一个一个写。
 * 
 * end过后不能再 write  Error：write after end
 */

const fs = require('fs');

// 如果解决异步并发的问题？？？？？多个异步同时操作一个文件
let ws = fs.createWriteStream('./a.txt',{
    flags:'w',
    encoding:'utf8',
    mode:0o666,
    autoClose:true,
    start:0,
    highWaterMark:4 // 16*1024
});
let flag = ws.write('1-','utf8',function(){
    console.log('写入成功')
})// buffer / string 写入内容 fs.write
console.log(flag)
flag = ws.write('2-',function(){
    console.log('写入成功')
})
console.log(flag)
// 同步执行 写的过程是同步的
flag = ws.write('33-',function(){
    console.log('写入成功')
    // 异步回调
}) // 返回的是是否达到预期。
console.log(flag)
flag = ws.write('444',function(){
    console.log('写入成功')
})
console.log(flag);
ws.end('ok'); // 遗言
ws.write('123');// 异步 write after end 已经结束就不能再写入了

// 64k 写入 发现超过了我的预期，不要在给我了,如果在给我我只能放到内存中

// write end