/**
 * 压缩 转化流
 * Accept-Encoding：请求头内的 客户端告诉服务器支持的压缩格式
 * content-encoding ： 响应头内的 服务器告诉客户端，内容是用什么格式压缩的
 */
const zlib = require('zlib');
// .gz 
// 压缩zlib.gzip()
// 解压zlib.unzip()
const fs = require('fs');
// let content = fs.readFileSync('./a.txt')
// zlib.gzip(content,function(err,data){
//     fs.writeFileSync('c.txt.gz',data)
// });
// gzip 压缩视频 服务器和浏览器说我用了哪种压缩 浏览器会自动解析
let content = fs.readFileSync('./c.txt.gz')
zlib.unzip(content,function(err,data){
    fs.writeFileSync('c.txt',data)
})

