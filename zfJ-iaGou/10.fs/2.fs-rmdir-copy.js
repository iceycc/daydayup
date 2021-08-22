
let fs = require('fs')
let path = require('path')
let pathUrl = path.resolve(__dirname,'./c')
const rmdirSync = (filePath)=>{
  let statObj = fs.statSync(filePath);
  if(statObj.isDirectory()){
    // 是文件的话
    let dirs = fs.readdirSync(filePath);
    dirs = dirs.map(dir=>path.join(filePath,dir))
    console.log(dirs)
    dirs.forEach(dir=>{
      rmdirSync(dir)
    })
    fs.rmdirSync(filePath)
  }else{
    fs.unlinkSync(filePath);
  }
}
rmdirSync(pathUrl)