// fs
// 文件操作  目录操作
// fs.readFile writeFile appendFile
// fs.access / fs.stat
// fs.mkdir  fs.rmdir
// fs.rname fs.unlink
// fs.readdir

// node实现 
//  同步创建目录 核心for循环是同步的
//  异步创建目录 核心next递归
const fs = require('fs');
const path = require('path')
let pathUrl = path.resolve(__dirname, './wc/b/c/d/e');
// 1) 同步创建
const mkdirSync = (pathUrl) => {
  pathUrl = pathUrl.replace(/\\/g, '/'); // 兼容windows
  let pathArr = pathUrl.split('/');
  for (let i = 0; i < pathArr.length; i++) {
    console.log(pathArr[i])
    if(pathArr[i]=='') continue // 第一项为空
    // for循环是同步的
    let current = pathArr.slice(0, i + 1).join('/');
    try {
      fs.accessSync(current)
    } catch (e) {
      fs.mkdirSync(current)
    }
  }
}
mkdirSync(pathUrl)

// 2）异步创建
let fs = require('fs');
let path = require('path')
let pathUrl = path.resolve(__dirname, './cc/b/c/d/e');
console.log(pathUrl)
const mkdir = (pathUrl, cb) => { // next
  let pathArr = pathUrl.split('/');
  console.log(pathArr)
  function next(index) {
    // 递归必须要有终止条件
    if (index === pathArr.length) return cb(); // 递归终止条件
    let current = pathArr.slice(0, ++index).join('/'); // 当前层级目录
    fs.access(current, (err, data) => {
      if (err) {
        fs.mkdir(current, function () {
          next(index); // 当前创建完毕后 创建下一次即可
        });
      } else { // 如果存在，创建下一层
        next(index);
      }
    })
  }
  next(0);
}
mkdir(pathUrl, function () {
  console.log('成功')
});
// 3）删除目录
// fs.rmdirSync不能删除非空目录
const fs = require('fs');
const path = require('path')
let pathUrl = path.resolve(__dirname, './c');
function rmDirSync(pathUrl){
  let arr = fs.readdirSync(pathUrl).map(dir=>path.join(pathUrl,dir))
  console.log(arr) 
  if(arr.length==0){
    
    return
  }
  arr.forEach(dir=>{
    let statObj = fs.statSync(dir)
    if(statObj.isFile()){
      // 是文件
      fs.unlinkSync(dir)
    }else{
      rmDirSync(dir)
      // fs.rmdirSync(dir)
    }
  })
}
rmDirSync(pathUrl)


// 4）删除文件
// fs.unlickSync
// 5）读取目录文件
// fs.readdirSync 读取的范围只有一层
// 6）判断文件状态
// statObj = fs.statSync 
// statObj.isFile()是文件

// 删除某多层嵌套目录？
let path = require('path')
let arr = fs.readdirSync('d'); // 读取的范围只有一层
arr = arr.map(dir => path.join('d', dir))
console.log(arr); // [ '1.rtxt', 'a' ]

arr.forEach(dir => {
  let statObj = fs.statSync(dir);
  if (statObj.isFile()) {
    fs.unlinkSync(dir);
  } else {
    fs.rmdirSync(dir);
  }
})
fs.rmdirSync('d');
// readdir  stat  unlink rmdir 