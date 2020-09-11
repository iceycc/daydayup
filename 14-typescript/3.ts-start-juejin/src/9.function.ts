// 函数是 JavaScript 应用程序的基础,它帮助你实现抽象层、模拟类、信息隐藏和模块。

/**
 * 定义函数
 * 函数参数详解：
 * 1- 可选参数 ? 
 * 2- 默认参数 = 默认参数同时定义了参数类型
 * 3- 剩余参数
 */
 const add = (a:number,b=10,...ext:number[]):number => {
   console.log(ext)// 剩余参数
  return a + b
 }
 console.log(add(1,2,3,4,5,6))

 /**
  * 函数的重载 overload
  * 传入不同数量的参数函数执行的逻辑是不一样的，
  * 对于函数调用者来说，单单通过参数类型是无法推断传入不同长度的参数，函数的执行的区别
  */

  // 重载
interface Direction5 {
  top: number
  right: number
  bottom: number
  left: number
}

function assigned(all: number): Direction5
function assigned(topAndBottom: number, leftAndRight: number): Direction5
function assigned(top: number, right: number, bottom: number, left: number): Direction5

 function assigned (a: number, b?: number, c?: number, d?: any) {
  if (b === undefined && c === undefined && d === undefined) {
    b = c = d = a
  } else if (c === undefined && d === undefined) {
    c = a
    d = b
  }
  return {
    top: a,
    right: b,
    bottom: c,
    left: d
  }
}
assigned(1) // function assigned(all: number): Direction5 (+2 overloads)
assigned(1,2) // function assigned(topAndBottom: number, leftAndRight: number): Direction5 (+2 overloads)
// assigned(1,2,3) //Error:No overload expects 3 arguments, but overloads do exist that expect either 2 or 4 arguments.
assigned(1,2,3,4) // function assigned(top: number, right: number, bottom: number, left: number): Direction5 (+2 overloads)

