/**
 * es6 模块和 node模块的区别
    * es6: esmodle
    *      静态的：只能在最外层使用
    * node: commonjs规范
    *      动态： 可以在代码块使用  
    *       export只能到处一个接口
    *           export let a = 1
    *           export let b = 2
    *           let c = 1
    *           let d = 2
    *           export { //  接口 不是对象的赋值
    *               c,
    *               d          
    *           }
    * 区别：静态
 * 
 *      
 */





// npm install 
// npm run dev

// amd cmd umd
// es6 模块 esmodule node模块 commonjs规范
// 静态 只能在最外层使用 动态的 代码块中动态导入
// 模块化的好处 封装 保护变量名不冲突

// 导入 import 导出 export

// import _,{c} from './a';
// import * as obj from './a';
// // 每次拿到的是接口
// setInterval(() => {
//     console.log(obj.default) 
// }, 1000);
console.log(obj);
import * as obj from './useC';
// import 有声明的功能 function 但是不能重复声明

// 实验型语法里  import() 动态的导入
setTimeout(()=>{
    import(/* webpackChunkName: "MyFile" */ './a').then(data=>{
        console.log(data);
    })
},3000)
 // webpack
   


