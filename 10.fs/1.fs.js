/**
 * fs是什么，有什么作用，什么好处
 * 既有同步，又有异步。
 * 同步方法
 *    好处：速度快，可以离开拿到返回结果
 *    坏处：阻塞主线程
 * 异步方法
 *    好处：不阻塞
 *    坏处：回调函数不好写。回调地狱。
 * readFile
 *    第二项编码不写的化默认返回的data是buffer字符串
 *    fs.readFile('../a.txt','utf-8',callback)  
 *        一次性读完再写的化，文件过大不合适，会导致内存淹没
 * 
 * 一个文件中可能包含多种编码格式 
 * 
 * // 边读边写
 * fs.open fs.read fs.write fs.close
 *  flags：
 *   r	读文件，文件不存在报错
 *   r+	读取并写入，文件不存在报错
 *   rs	同步读取文件并忽略缓存
 *   w	写入文件，不存在则创建，存在则清空
 *   wx	排它写入文件
 *    w+	读取并写入文件，不存在则创建，存在则清空
 *   wx+	和w+类似，排他方式打开
 *   a	追加写入
 *   ax	与a类似，排他方式写入
 *   a+	读取并追加写入，不存在则创建
 *   ax+	作用与a+类似，但是以排他方式打开文件
 * 
 * fs.open
 * fs.read(fd,buffer,从buffer哪个位置开始读取,读取多少字符,从文件哪个位置开始读写,回调函数)
 * 
 * read write open close
 */


// file system 文件相关的操作都使用fs模块
// 同步的方法 sync 没有sync

// 同步方法的好处 速度快 可以立即拿到返回结果，阻塞主线程
// 异步好处 不会阻塞主线程 callback async + await
const fs = require("fs");
const path = require("path");
const resolve = filename => {
  return path.resolve(__dirname, filename);
};

// 这种读取文件的方式不适合大文件，文件过大 可能会导致淹没可用内存
// 小于64k的
// fs.readFile(resolve('./a.txt'),function(err,data){
//     // 一个文件中可以包含多个编码格式 存储的都是二进制
//     fs.writeFile(resolve('./c.txt'),data,function(err){
//         console.log('拷贝成功')
//     });
// })
// console.log(path.resolve(__dirname)); // process.cwd()

// 读取完毕（部分完毕）后在写入 流
// fs.open fs.read fs.write fs.close
// 权限分为 读取 2 写入 4 执行 1  chmod -R 777 *   8进制
// 分组分为三组 1） 我自己的权限 2) 我所在组的权限 3） 其它人的权限
const mode = 0o666 // mode权限 读2写4为6,三组权限就是666。 最高权限0o777  。默认438 8进制就是666
console.log(438..toString(8)) // 666
/*
  fs.open(path,flags,mode,callback);
  path - 文件的路径。
  flags - 文件打开的行为。
  mode - 设置文件模式(权限)，文件创建默认权限为 0666(可读，可写)。
  callback - 回调函数，带有两个参数如：callback(err, fd)。
*/
fs.open(resolve("a.txt"), "r",function(err, rfd) {
  // file descriptor
  fs.open(resolve("c.txt"), "w", mode,function(err, wfd) {
    // widnow 3开始  1024
    // 读取 和写入 相反的 读取 是往电脑的内存中写入  写入 读取内存中的数据写到磁盘中
    let buffer = Buffer.alloc(3);
    let roffset = 0;
    let woffset = 0;
    let next = () => {
      
      /**
       * fs.read(fd, buffer, offset, length, position, callback);
       * fd, 使用fs.open打开成功后返回的文件描述符
       * buffer, 一个Buffer对象，v8引擎分配的一段内存
       * offset, 整数，向缓存区中写入时的初始位置，以字节为单位
       * length, 整数，读取文件的长度
       * position, 整数，读取文件初始位置；文件大小以字节为单位
       * callback(err, bytesRead, buffer), 读取执行完成后回调函数，bytesRead实际读取字节数，被读取的缓存区对象
       */
      fs.read(rfd, buffer, 0, 3, roffset, function(err, bytesRead) {
          if(err){

          }
        if (bytesRead === 0) {
            fs.close(rfd,()=>{});
            fs.close(wfd,()=>{});
            console.log('文件拷贝完毕');
        } else {
          //真实读取的个数
          roffset += bytesRead;
          /**
           * fs.write(fd,buffer,offset,length,position,callback);
           * fd, 使用fs.open打开成功后返回的文件描述符
           * buffer, 一个Buffer对象，v8引擎分配的一段内存
           * offset, 整数，从缓存区中读取时的初始位置，以字节为单位
           * length, 整数，从缓存区中读取数据的字节数
           * position, 整数，写入文件初始位置；
           * callback(err, written, buffer), 写入操作执行完成后回调函数，written实际写入字节数，buffer被读取的缓存区对象
           */
          fs.write(wfd, buffer, 0, 3, woffset, function(err, bytesWritten) {
              if(err){
                  
              }
            woffset += bytesWritten;
            next();
          });
        }
      });
    };
    next();
  });
});
// read write open close



