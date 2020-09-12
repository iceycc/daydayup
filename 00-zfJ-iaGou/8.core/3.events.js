const EventEmitter =require('./events');
const util = require('util')
function Girl(){
}
util.inherits(Girl,EventEmitter);
const girl = new Girl();

// girl.on('newListener',(type)=>{
//     process.nextTick(()=>{ 
//         if(type === 'data'){
//           girl.emit('data','4561');
//         }
//     })
// })

// 新的事件。当你绑定事件后就会执行 当用户绑定了某data事件，就让函数执行
girl.on('newListener',(type)=>{
    process.nextTick(()=>{ // 微任务 当前主栈任务完成后 会先执行 微任务
        if(type === 'data'){
            girl.emit('data','123',123,1231,23);
        }
    })
})
let listener = (arg)=>{ // 触发完依次后就会移除掉此方法
    console.log('绑定了data',arg);
}
girl.on('data',listener);
girl.off('data',listener);

girl.on('data',(arg)=>{
    console.log('绑定了data',arg);
})
girl.on('data',(arg)=>{
    console.log('绑定了data',arg);
})
// 发布订阅
// on 每绑定依次 到时候就会触发 once只触发依次
// on off once newListener

