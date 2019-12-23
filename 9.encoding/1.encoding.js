/**
 * buffer是什么
 * buffer的方法
 * ： copy \ concat \ toString  \ isBUffer \ from \ indexOf \ slice \ length
 * 
 * 自己封装一个 split
 * 
 * base64
 * 汉字的话将 3 * 8 => 4 * 6 把三个字节转换成四个字节
 * 
 *
 */



// 将gbk编码转化成utf8 
// iconv-lite 可以将gbk转化成utf8
const fs = require('fs');
const path = require('path');
const iconv = require('iconv-lite'); // 编码问题
const r = fs.readFileSync(path.resolve(__dirname,'a.txt')); // 二进制
const r2 = fs.readFileSync(path.resolve(__dirname,'a.txt'),'utf-8'); // 将gbk转换成utf-8
console.log(r2); // 乱码
console.log(r);
const result = iconv.decode(r,'gbk'); // 转换编码格式，将gdk转换为utf-8。比如 爬虫 爬gdk的页面
console.log(result);

// 进制 和 每个编码不对应的

// 进制转化
// toString 将任意进制转化成10进制 11 => 3  十六进制中的16 => 十进制: 1*16^1 6*16^0
// parseInt 将10进制转化成任意进制 100 => 16
100..toString(8)
100..toString(16)
console.log(parseInt('11111111',2));
console.log(0x16.toString(8)); 


// 0.1 + 0.2 == 0.3 ? 怎么解决这种问题
// 先转换成2进制，0.1的二进制是无限循环的值
// 如何解决：转整数

// Buffer global上的属性  他表示是内存 但是 把二进制变成了16进制存起来
// 2 进制 8个1  = 255
// 255 => 16  0xff
console.log(255..toString(16));

// node可以读取文件 
// buffer可以表示二进制 可以和字符串相互转化

// toString() slice() 内存一旦申请好不能更改

// 三种声明buffer的方式
let buffer = Buffer.alloc(3);
buffer = Buffer.from('珠峰');//  <Buffer e7 8f a0 e5 b3 b0> utf-8编码下，一个汉字是三个字节
buffer = Buffer.from([0x16,0x22]); // <Buffer 16 22>
buffer = Buffer.from([100,200,300]);// <Buffer 64 c8 2c>
console.log(buffer);

// 对buffer进行操作 大小不能改变 

let buf1 = Buffer.from('珠峰');
let buf2 = Buffer.from('姜文'); // 
let buff = Buffer.alloc(12); // 声明一个buffer

// copy 拷贝
// Buffer.prototype.copy = function(targetBuffer,targetStart,sourceStart,sourceEnd){
//     for(let i = 0 ; i< sourceEnd - sourceStart;i++){
//         targetBuffer[targetStart+i] = this[i];
//     }
// }
buf1.copy(buff,0,0,6); 
// 目标 目标的开始 拷贝源的开始  拷贝源的结束
// target,targetStart sourceStart sourceEnd
buf2.copy(buff,6,0,6);
console.log(buff.toString())
Buffer.myconcat = function(bufferList,len =bufferList.reduce((a,b)=>a+b.length,0) ){
    let buffer = Buffer.alloc(len); // 当前buffer的总长度 
    let offset = 0; // 偏移量 ，每次技术时的第一个位置
    bufferList.forEach(item => {
        item.copy(buffer,offset,0,item.length);
        offset += item.length
    });
    return buffer;
}
let newBuffer = Buffer.myconcat([buf1,buf2],100);
console.log(newBuffer.slice(3,6).toString());

console.log(Buffer.isBuffer(newBuffer));
// concat toString slice isBuffer length字节的长度
// indexOf

let buffer = Buffer.from('珠爱峰我爱你爱哈'); // n+ 1
console.log(buffer.indexOf('爱',6))
console.log(buffer.indexOf('爱'))



// split 方法 解析请求体
// 根据传入的分隔符将字符串分割成数组
Buffer.prototype.split = function(sep){
    let arr = [];
    let offset = 0;
    let current;
    let len = Buffer.from(sep).length;
    while(-1 != (current = this.indexOf(sep,offset))){
        arr.push(this.slice(offset,current));
        offset = current + len
    }
    arr.push(this.slice(offset))
    return arr;
}
let arr = buffer.split('爱');
console.log(arr);

// base64 （加密 解密 ） 编码 大家都知道他的特点
// 3 * 8 = 4 * 6 
let r = Buffer.from('珠');
console.log(r); // e7 8f a0

console.log(0xe7.toString(2)) // 11100111
console.log(0x8f.toString(2)) // 10001111
console.log(0xa0.toString(2)) // 10100000

// 将 11100111 10001111 10100000 分成4等分
// 111001 111000 111110 100000
// 前面补0，成8位
// 00111001 00111000 00111110 00100000  bas64编码后会比之前更大

console.log(parseInt('00111001',2))
console.log(parseInt('00111000',2))
console.log(parseInt('00111110',2))
console.log(parseInt('00100000',2))
// 57 56 62 32
let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' // 26
str+= str.toLowerCase();
str+='0123456789+/'
console.log(str);
console.log(str[57]+str[56]+str[62]+str[32]); // 54+g
// BASE64可以放到任何带连接的地方

console.log(Buffer.from('珠').toString('base64'))

// fs 流


// 

console.log(Math.pow(2,8))
