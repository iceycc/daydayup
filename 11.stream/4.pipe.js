/**
 * 1. 读流 
 * 2. 写流
 * 3。双工流
 * 4. 转换流  压缩 可以把写入读转换出成可读读
 */

// 拷贝

let ReadStream = require('./ReadStream');
let WriteStream = require('./WriteStream');

let fs = require('fs');
// let rs = fs.createReadStream('./a.txt');
// let ws = fs.createWriteStream('./c.txt');
// ws.write('hello');
// ws.write('hello');
let rs = new ReadStream('./a.txt',{
    highWaterMark:4  // 每次读4个
});
let ws = new WriteStream('./b.txt',{
    highWaterMark:1  // 每次
});

// 拷贝：读a文件写到b里
// 1。读一下写一下
// 原生写法
// rs.on('data',function(data){
//     console.log(data)
//     let flag = ws.write(data) // 如果达到预期 暂定
//     if(!flag){
//         rs.pause()
//     }
// })
// ws.on('drain',()=>{
//     console.log('写完后 会清空')
//     rs.resume() // 再执行
// })

// 2.现在写法 pipe （封装的上面方法）
rs.pipe(ws) 
ws.end()
// 读流.pipe(写流) // 管道  ws.end();
// 异步 读一点写一点 不会导致内存溢出，
// 缺点：看不到文件的内容了 

//经常用到的方法 on("data") on("end") pipe write end



// fs中createReadStream读流 继承了可读流接口
// 可读流接口上有一个方法 read  父类会调用子类自己的_read方法 
// 子类要实现一个_read ，自己实现读取的方法调用push方法将读取到的结果传入
// 默认就会被发射出来 

// 读流
let {Readable,Writable,Duplex} = require('stream');
// let fs = require('fs');
class MyReadStream extends Readable{
    constructor(){
        super();
        this.index =0
    }
    _read(){
        if(this.index == 0){
            let r= fs.readFileSync('a.txt');
            this.push(r); // 调父类调push
            this.index = -1;
        }else{
            this.push(null);
        }
    }
}
let myreadStream = new MyReadStream();
myreadStream.on('data',function(data){
    console.log(data);
})
myreadStream.on('end',function(data){
    console.log('end');
})

// 可写流
// fs中 createWriteStream 继承了可写流接口
// 可读流接口上有一个方法 write  父类会调用子类自己的_write方法 
// 子类要实现一个_write ，fs.write() 如果写入完毕后 需要清空缓存
// 如果需要触发drain 内部会自动触发

class MyWriteStream extends Writable{
    _write(chunk,encoding,callback){
        console.log(chunk);
        callback(); // clearBuffer  回去缓存找
    }
}
let mywrite = new MyWriteStream();
mywrite.write('hello')
mywrite.write('hello')
mywrite.write('hello')
mywrite.end('ok');

// 双工流
// class My extends Duplex{
//     _write(){

//     }
//     _read(){

//     }
// }
// let my = new My();

// 转化流 压缩 可以把写入转化成可读取的 gzip

// crypto MD5摘要算法 不能反解  雪崩（只要里面一点不一样 整个就不一样） 长度固定
let crypto = require('crypto')
let r = crypto.createHash('md5').update('我爱你1').digest('base64');
console.log(r);



// 转化流 
// 1.
// 读 监听用户读输入，
process.stdin.on('data',function(data){
    // 写 控制台打印 就是console.log
    process.stdout.write(data);
})
// 2. 用pipe包装上面方法，该方法之间读流转换写流，中间无法操作。
// process.stdin.pipe(process.stdout)

// 3. Transform 转换：将输入的内容进行转换。
let {Transform} = require('stream');

class Mytransform extends Transform{
    _transform(chunk,encoding,callback){ // 参数和_write方法是一样的
        this.push(crypto.createHash('md5').update(chunk).digest('base64'));
        callback(); // 清空缓存区
    }
}
let transform = new Mytransform();

// 可读-》可写
process.stdin.pipe(transform).pipe(process.stdout);
// 流的四种方式 读 写 双工 转换

// 判断这个东西是不是一个流
let Stream = require('stream');
console.log(transform instanceof Stream); // 后面会经常用到 判断传入的是不是一个流对象


// http开头 http概念


// window.callbackId = 0;

// function callNative(methodName, arg, cb) {
//     const args = {
//       data: arg === undefined ? null : JSON.stringify(arg),
//     };
//     if (typeof cb === 'function') {
//       const cbName = 'CALLBACK' + window.callbackId++;
//       window[cbName] = cb;
//       args['cbName'] = cbName;
//     }

//     const url = 'jsbridge://' + methodName + '?' + JSON.stringify(args);
// }