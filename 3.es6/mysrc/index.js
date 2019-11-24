// 


// 导入
// 1.  _ 导入默认
// 2.  {}  导入接口（不是对象)
// 3.  * as _obj 导入所有
import _,{a,b,c,e,default as f,g,h} from './a'
import * as _obj from './a'
import {a1,a2} from './b'
console.log(a1,a2)
console.log(a,b,c,e,_,f,g,h)
// setInterval(()=>{
//   console.log(a)
// },5000)
console.log(_obj) //  可以取到所有值

setTimeout(()=>{
  // 试验性语法。 动态导出
  import('./a.js').then(data=>{
    console.log(data)
  })
},1000)