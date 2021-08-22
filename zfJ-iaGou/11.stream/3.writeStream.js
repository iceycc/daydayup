const fs = require('fs');
//1) 缓存区 是否正在像文件中写入
const WriteStream = require('./WriteStream')
let ws = new WriteStream('./b.txt',{
    flags:'w',
    encoding:'utf8',
    mode:0o666,
    autoClose:true,
    start:0,
    highWaterMark:3
});
// 像一个文件里写 9 个数
let i = 4 ;
function write(){444444444444444
    let flag = true;
    while(i>=0 && flag){
        flag = ws.write(i--+'');
        // console.log(flag);
    }
}
write();
ws.on('drain',()=>{ // 这个drain代表的是内容达到预期后，当内存中的内容都写入完毕后会触发此回调函数
    console.log('drain')
    write();
})
// write end / drain
// 流的模式 自定义流 http

// on('data') on('end') 可读流 。
// write end 可写流 。
// 既包含读又包含写：双工流


