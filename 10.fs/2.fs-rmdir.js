/**
 * 序
 * 先序 中序 后序
 * 方式
 * 广度 深度
 * 
 * 串行和并发
 * 异步并发：for循环 + 计数器 解决异步并发 类比promiseAll。
 * 
 */


// 1) 先序深度同步遍历
const fs = require('fs');
const path = require('path');
let pathUrl = path.resolve(__dirname, './c');
const rmdirSync = (filePath)=>{
    let statObj = fs.statSync(filePath);
    if(statObj.isDirectory()){
        let dirs = fs.readdirSync(filePath); // 读取儿子目录
        dirs = dirs.map(dir=>path.join(filePath,dir));
        dirs.forEach(dir => { // 删除儿子
            rmdirSync(dir);
        });
        fs.rmdirSync(filePath); // 再去删除自己
    }else{
        fs.unlinkSync(filePath); // 如果是文件删除即可
    }
}
rmdirSync(pathUrl);
// 2) 先序深度异步遍历  异步串行 series
const fs = require('fs');
const path = require('path');
let pathUrl = path.resolve(__dirname, './c');
const removeDir = (filePath,callback)=>{
    fs.stat(filePath,function(err,statObj){
        if(statObj.isDirectory()){
            fs.readdir(filePath,function(err,dirs){
                dirs = dirs.map(dir=>path.join(filePath,dir));
                let index = 0
                function next(){ // 终止条件
                    if(index == dirs.length) return fs.rmdir(filePath,callback); // 子目录删完了，删除自己
                    let currentDir = dirs[index++]; // e.js  e  // 删除下一个子目录
                    removeDir(currentDir,()=>next()); // express
                }
                next();
            });
        }else{
            // 删除文件变成成功态
            fs.unlink(filePath,callback);
        }
    });
}
removeDir(pathUrl,()=>{
    console.log('删除成功')
})
// 3) 异步并发 paralle 深度先序号。  
const fs = require('fs');
const path = require('path');
let pathUrl = path.resolve(__dirname, './c');
const removeDir = (filePath,callback)=>{
    fs.stat(filePath,function(err,stat){
        if(stat.isDirectory()){
            fs.readdir(filePath,function(err,dirs){
                dirs = dirs.map(dir=>path.join(filePath,dir));
                // 如果没有儿子直接删除即可
                if(dirs.length == 0){
                    return fs.rmdir(filePath,callback);
                }
                let index = 0;
                let done = ()=>{ // 如果删除的个数和儿子的个数相同 说明儿子已经删除完毕
                    if(++index === dirs.length){ 
                        // 删除父亲即可
                        return fs.rmdir(filePath,callback);
                    }
                }
                // 如果有儿子分别删除儿子，并且成功后调用done方法
                // for循环 + 计数器 解决异步并发 类比promiseAll。
                for(let i = 0 ; i< dirs.length;i++){
                    removeDir(dirs[i],done);
                }
            });
        }else{
            fs.unlink(filePath,callback)
        }
    })
}
removeDir(pathUrl,()=>{
    console.log('成功')
});

// 4) promise的写法
let fs = require('fs').promises;
let path = require('path')
let pathUrl = path.resolve(__dirname, './c');
const removeDir = async (filePath)=>{
      let statObj = await fs.stat(filePath);
      if(statObj.isDirectory()){
          let dirs = await fs.readdir(filePath);
          // 先把儿子的删除方法 变换成promise
          dirs = dirs.map(dir=>removeDir(path.join(filePath,dir)));
        //   for(let i = 0 ;i <dirs.length;i++){ series
        //        removeDir(dirs[i]);
        //   }
          await Promise.all(dirs); // 把儿子都删除成功后
          await fs.rmdir(filePath);// 删除自己
      }else{
          await fs.unlink(filePath)
      }
}
removeDir(pathUrl).then(data=>{
    console.log('成功')
})
// async + await 实现promise.all ? 

// 深度 广度


// 广度 横向的
let fs = require('fs');
let path = require('path');
let pathUrl = path.resolve(__dirname, './c');
const wideSync = (filePath) =>{
    let arr = [filePath]; // 存放目录结构
    let index = 0;
    let current;
    while(current = arr[index++]){// ['a']
        let dirs = fs.readdirSync(current); // [a/b,a/c]
        dirs = dirs.map(dir=>path.join(current,dir));
        arr = [...arr,...dirs]; // ['a','a/b','a/c','a/b/e'];
    }
    console.log(arr)
    // 倒序删除
    for(let i =  arr.length-1 ; i>=0;i--){
        let currentPath = arr[i];
        fs.rmdirSync(currentPath);
    }
}
wideSync(pathUrl);


//
let fs = require('fs')
let path = require('path')
function rmDir(){
    let arr = (fliePath)
}

// 1).作业：异步的写法 async + await;


// 流 流的模式 可读流 可写流 文件流  双工流  转化流
 

