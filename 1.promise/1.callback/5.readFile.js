/**
 * 1.node方法：异步的读写 i/o 
 * 2. fs ： file system
 * 3. try catch 捕获异步的错误。
 * 4. 
 */

// node 方法 异步的i/o
// file system
let fs = require('fs');
// 异步的 回调
// let school = {}
// // 异步并发问题
// function out(){
//     if(Object.keys(school).length == 3){
//         console.log(school)
//     }
// }
// 解决异步并发问题 计数器
function after(times,callback){
    let school = {}
    return function out(key,value){
        school[key] = value;
        if(--times === 0){
            callback(school);
        }
    }
}
let out = after(2,(school)=>{
    console.log(school)
});
// 发布订阅
fs.readFile('./1.promise/name.txt','utf8',function(err,data){ // 5s
    console.log(data)
    // school.name = data;
    out('name',data);
});
fs.readFile('./1.promise/age.txt','utf8',function(err,data){ // 3s
    // school.age = data;
    out('age',data);
});

// 异步代码会等待同步先执行完
// 分别读取到name 和 age 属性 读取后拿到最后的结果


// let sc = {}
// function out2(){
//     if(Object.keys(sc).length == 2){
//         console.log(22)
//     }
// }
function after2(times,callback){
    let sc = {}
    return function(key,value){
        sc[key] = value
        if(--times == 0){
            callback(sc)
        }
    }
}
let out2 = after2(2,(sc)=>{
    console.log(sc)
})
fs.readFile('./1.promise/name.txt','utf8',function(err,data){
    out2('name',data)
})
fs.readFile('./1.promise/age.txt','utf8',function(err,data){
    out2('age',data)
})