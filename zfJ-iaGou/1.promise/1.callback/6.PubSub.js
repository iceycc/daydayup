
/**
 * 1. 发布订阅模式
 *  想做的事情放到数组，把事情往数组放的过程较订阅， 依次执行的过程较发布
 * on 订阅
 * emit 发布
 * 发布 订阅 两者没有直接关系
 * 
 * 2. 观察者模式基于 发布订阅的。
 * 观察者和被观察者
 * 被观察者状态变了 会主动通知观察者
 * 
 * 3. fs fileSystem 内置模块
 */


let fs = require('fs'); // fileSystem
 // 希望两次都完成 后 分别打印最终结果 在打印一次已经处理完毕
// 发布 emit 订阅 on  一种一对多的关系 [fn,fn,fn]

// 

class Events{
    constructor(){this.stack = [];}
    on(callback){this.stack.push(callback); } // 订阅 没次发布时将
    emit(){this.stack.forEach(callback=>callback())} // 发布
}
let events  = new Events();
let school = {};
events.on(function(){
    if(Object.keys(school).length === 2){
        console.log(school) 
    }
})
events.on(function(){
    console.log('当前获取完毕')
})
// 前端 服务端 好多原理都是基于发布订阅模式的
fs.readFile('./name.txt','utf8',function(err,data){ // 5s
    school.name = data;
    events.emit();
});
fs.readFile('./age.txt','utf8',function(err,data){ // 3s
    school.age = data;
    events.emit();
});
// 观察者模式 他是基于发布订阅模式的
// 发布和订阅 两者没有直接关系
// 观察者模式 被观察的 观察者  vue
// 把 观察者 放到被观察者中
// 小宝宝 很开心 把我放到小宝宝的内部 小宝宝不开心了 会通知我他不开心了

