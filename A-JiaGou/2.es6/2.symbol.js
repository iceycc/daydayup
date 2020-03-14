/**
 * 1. Symbol 独一无二
 * 2. 对象：如果这个属性是用symbol 来声明的，不可枚举. 不可枚举就是 通过keys和for in 无法获取。getOwnPropertySymbols获取私有属性
 * 3. Symbol.for():如果有这一个并不会重复声明。  Symbol.keyFor():反向获取
 * 4. Symbol 具备着原编程的功能 想改变默认系统级的方法 修改原生js的属性
 * 5. 可以做 私有属性 默认js 中没有私有属性
 **/  

// 1 独一无二
let s01 = Symbol()
let s02 = Symbol()
console.log(s01 === s02) // false
// 2 对象：如果这个属性是用symbol 来声明的，不可枚举
let s1 = Symbol('my'); // 描述这个symbol 内部会将描述符 toString
let s2 = Symbol('my');
let obj = {
    [s2]:1 // 对象：如果这个属性是用symbol 来声明的，不可枚举
}
console.log(s1 === s2);
console.log(obj)
for(let key in obj){
    console.log(obj[key]);
}
console.log(Object.keys(obj))
console.log(Object.getOwnPropertySymbols(obj)); // Symbol的Object.keys()

// Symbol.for
let s3 = Symbol.for('xxx'); //  如果有这个symbol 并不会重新声明
let s4 = Symbol.for('xxx');
console.log(s3===s4)

console.log(Symbol.keyFor(s4)); 

// js中原始数据类型 string number boolean null undefined symbol / object


// Symbol 具备着原编程的功能 想改变默认系统级的方法
// 11种
class MyArray {  
    static [Symbol.hasInstance](instance) {
      return false;
    }
    // // static [Symbol.length](){

    // }
 }
console.log([] instanceof MyArray);
console.log(MyArray.length)

// 可以做 私有属性 默认js 中没有私有属性

function Obj(){}
console.log(Obj)



var arr = {
  [Symbol.iterator]: (() => {
    var data = ['随', '机', '试', '一', '下'];
    return () => {
      var cursor = 0;
      return {
        next: () => {
          if (cursor ++ < 10) {
            return {
              value: data[~~(5 * Math.random())],
              done: false
            }
          }
          return {
            done: true 
          }
        } 
      }
    }
  })()
};
// 这下就不用自己搞一个随机数组生成器了
console.log([...arr]);


