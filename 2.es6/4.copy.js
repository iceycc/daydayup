/**
 * 浅拷贝 :如果是多层的话 就是浅拷贝 一层就是深拷贝
 * 1 Object.assign 
 * 2 {...obj} 
 * 深拷贝:
 * 1 JSON.parse(JSON.stringify)：缺点 undefined / 正则 / 函数 / Date对象
 * 2 递归循环
 *  核心是判断数据类型校验
 *      null和undefiend
 *      正则/Date内置对象等
 *      函数不需要拷贝
 *      对象
 *      数组
 *   类型校验的方法：
 *      instanceof
 *      typeof
 *      Object.prototype.toString.call()
 * 3. 如何防止循环拷贝。
 * 4. 什么是弱引用
 * */ 

let obj = {name:'zf',age:{n:100},a:undefined,a:function(){},reg:/\d+/}
let obj1 = Object.assign(obj);
// obj1.age.n = 200;
// console.log(JSON.parse(JSON.stringify(obj)));

// 递归拷贝 (类型判断)
function deepClone(value,hash = new WeakMap){ // 弱引用，不要用map。防止内存泄露
    // weakMap的key值只能是对象。map的key可以是对象，可以是字符串等
    // null 和 undefiend 是不需要拷贝的
    if(value == null){ return value;}
    if(value instanceof RegExp){return new RegExp(value)}
    if(value instanceof Date){return new Date(value)}
    // 普通值，函数是不需要拷贝
    if(typeof value != 'object') return value;
    let obj = new value.constructor(); // [] {}
    // 说明是一个对象类型 。 防止循环拷贝。
    if(hash.get(value)){
        return hash.get(value)
    }
    hash.set(value,obj); // 弱引用 key为对象。弱引用变量销毁，
    for(let key in value){ // in 会遍历当前对象上的属性 和 __proto__指代的属性
        // 补考呗 对象的__proto__上的属性
        if(value.hasOwnProperty(key)){
            // 如果值还有可能是对象 就继续拷贝
            obj[key] = deepClone(value[key],hash);
        }
    }
    return obj
    // 区分对象和数组 Object.prototype.toString.call
}
// null / undefined
let o = {};
o.x = o;
let o1 = deepClone(o); // 如果这个对象拷贝过了 就返回那个拷贝的结果就可以了
console.log(o1);
