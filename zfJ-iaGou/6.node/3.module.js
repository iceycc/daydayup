// 模块
// 1）解决命名冲突的问题 不能解决变量重名问题
// 2) 会污染全局变量
// 3) 自执行函数来实现
// 4）独立的  在node中每个js都是一个模块
// 浏览器 请求是异步的 amd cmd 
// node中是如何实现的：
// 1) 读取文件 同步读取 require 
// 2) 读取完后增加 自执行函数,并且默认返回module.exports

// node模块 分为三种
//  核心模块 fs path vm
// 1) fs.accessSync判断文件是否存在
// 2) fs.exists 报错 。不推荐 废弃
let fs = require('fs');
fs.accessSync('./.gitignore')

let path = require('path');
// path.join()  path.resolve()  path.dirname()
// path.extname()  path.basename()
// 需要最近添加/时用join
console.log('join',path.join('a','b','/')); // =》 xxx/a/b/
console.log('join',path.join(__dirname,'a','b','/')); // =》 /xxx/a/b/
// process.cwd() 有/的时候需要用join  默认前面增加工作目录，可以添加 __dirname代表当前目录
console.log('resolve',path.resolve(__dirname,'a','b','/')); // =>  resolve /
console.log('resolve',path.resolve(__dirname,'a','b',''));  // =>  resolve /xxx/a/b
console.log('dirname',path.dirname(__dirname)); // 取父路径
console.log('extname',path.extname('1.min.js')) // 取拓展名
console.log('basename',path.basename('1.min.js','.js'))

// 让字符串执行 eval
// eval缺陷？
let c = 'world'
eval("(function(){console.log(c)})()") // 模块不独立。理论改自执行模块内是不存在变量c的
// new Function
// vm模块执行了文件。
let vm = require('vm'); // 虚拟机模块
// 沙箱
var hello = 'xxx'
vm.runInThisContext('console.log(hello)') 



