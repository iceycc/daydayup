// // Symbol.iterato
// var o = new Object

// o[Symbol.iterator] = function () {
//   var v = 0
//   return {
//     next: function () {
//       return {
//         value: v++,
//         done: v > 10
//       }
//     }
//   }
// };
// for (var v of o) {
//   console.log(v)
// }

// let a = 3
// let b = new Number(3)
// let c = Number('3')
// console.log(a)
// console.log(b)
// console.log(c)
// console.log(a === b)
// console.log(a === c)



// // var symbolObject = (function () {
// //   return this;
// // }).call(Symbol("a"));
// var symbolObject = Object(Symbol('a'))

// console.log(typeof symbolObject); //object
// console.log(symbolObject instanceof Symbol); //true
// console.log(symbolObject.constructor == Symbol); //true



// var b = Symbol('b')
// console.log(b)


// var o = {
//   valueOf: () => {
//     console.log("valueOf");
//     return {}
//   },
//   toString: () => {
//     console.log("toString");
//     return {}
//   }
// }
// String(o)


var cat = {
  say(){
    console.log('cat')
  }
}

var tiger = Object.create(cat,{
  say:{
    writable:true,
    configurable:true,
    enumerable:true,
    value:function(){
      console.log('tiger')
    }
  }
})
tiger.say()
console.log(Object.getPrototypeOf(tiger))



var o = new Object;
var n = new Number;
var s = new String;
var b = new Boolean;
var d = new Date;
var arg = function(){ return arguments }();
var r = new RegExp;
var f = new Function;
var arr = new Array;
var e = new Error;
console.log([o, n, s, b, d, arg, r, f, arr, e].map(v => Object.prototype.toString.call(v))); 






    var o = { [Symbol.toStringTag]: "MyObject" }
    var o1 = {}
    var n = 1
    console.log(Object.prototype.toString.call(o))
    console.log(o + "");
    console.log(o1 + "");

class Rectangle{
  constructor(height,width){
    this.height = height;
    this.width = width;
  }

  get area(){
      return this.calcArea()
  }
  set width(val){
      this.width = val 
  }
  calcArea(){
    return this.height * this.width
  }
}

let rec = new Rectangle(10,5)

console.log(rec.area)
rec.width = 10
console.log(rec.area)