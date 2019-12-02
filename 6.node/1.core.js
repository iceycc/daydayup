/**
 * 1 .global  全局
 */
// console.log(Object.keys(global));
/**
 global  windiw.window
 process 进程
 Buffer 16进制 2进制
 clearInterval clearTimeout
 setTimeout setInterval
 setImmediate clearImmediate
 console.dir(global,{showHidden:true});
 **/

    // console.log(this); // {}module.exports 我们文件在执行的时候为了实现模块化 外面特意套了一个函数而且this指向被改变了
    // (function(){
    //     console.log(Object.keys(this)) //  自执行函数指向 global
    // })()

/**
 * 2 process
 */
// console.log(Object.keys(process)) 
// 1).argv   webpack --config webpack.config,js --port 3000
// let argv = process.argv.slice(2).reduce((prev,current,index,arr)=>{
//     if(current.includes('--')){
//         prev[current.slice(2)] = arr[index+1];
//     }
//     return prev
// },{});
// console.log(argv)
// tj co commander
// 1) 可以配置命令快捷键（接受用户参数） 监听用户的动作
// node 1.core.js --port 2000 --config web
// let program = require('commander')
// program
//     .command('rm <div>')
//     .version('1.0.0')
//     .option('-p, --port <value>', 'config port')
//     .option('-c, --config <value>', 'config file')
//     .action(function(){
//         console.log('--config')
//     })
 
// program
//   .command('rmdir <dir> [otherDirs...]')
//   .action(function (dir, otherDirs) {
//     console.log('rmdir %s', dir);
//     if (otherDirs) {
//       otherDirs.forEach(function (oDir) {
//         console.log('rmdir %s', oDir);
//       });
//     }
//   })

// program
//   .command('install [name]', 'install one or more packages')
//   .command('search [query]', 'search with optional query')
//   .command('update', 'update installed packages', {executableFile: 'myUpdateSubCommand'})
//   .command('list', 'list packages installed', {isDefault: true})


// program
//   .on('--help',function(){
//     console.log('帮助手册')
// })

// program.parse(process.argv);



// 3. env 环境变量  
// mac export NODE_ENV=production
// win set NODE_ENV=production
// 通用 cross-env
// export NODE_ENV=ccc && node 1.core.js
console.log(process.env.NODE_ENV)
 // 开发的时候 可能用到url 是 www.baidu.com  www.zf.cn
//  let url = '';
//  if(process.env.NODE_ENV === 'production'){
//     url = ' www.zf.cn'
//  }else{
//      url = 'www.baidu.com'
//  }
// console.log(url);


// 4. 工作目录
// console.log(process.cwd()) // current working dircotory

// // chdir  changeDiretory 当前进程的工作目录
// process.chdir('6.node');


// 6.  nextTick promise.then
// node事件环 20分钟

// // node中的模块






// Command implemented using action handler (description is supplied separately to `.command`)
// Returns new command for configuring.
