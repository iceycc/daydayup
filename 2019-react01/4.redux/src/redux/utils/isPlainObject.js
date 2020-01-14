// 是否时纯对象
export default function isPlainObject(obj){
   if(typeof obj != 'object' || obj === null){
     return false;
   }
   return Object.getPrototypeOf(obj) === Object.prototype;
 /*   let xx = obj;
   while(Object.getPrototypeOf(xx)){//proto.__proto__.__proto__.__proto__ Object.prototype
    xx = Object.getPrototypeOf(xx);
   }
   return Object.getPrototypeOf(obj)  === xx; */
}



/**

let obj = {name:'xxxx'}
console.log(Object.getPrototypeOf(obj) === obj.__proto__) // true
console.log(Object.prototype === obj.__proto__) // true

function P(){

}
let p =new P()
console.log(p)
console.log(isPlainObject(p)) // false
 * 
 */