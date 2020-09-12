let o1 = { name: 'zhufeng' };
let o2 = { name: 'jiagou' };
let obj = {

}
obj[o1.toString()] = 1;//[object Object]
obj[o2.toString()] = 2;//[object Object]
console.log(obj[o1]);
console.log(obj[o2]);

/**
 * map hashmap set hashset
 *weakmapm map区别以及应用场景
 */
let sym = Symbol('a');
let newSym = Symbol.prototype.valueOf.call(sym);
console.log(sym === Object(newSym));

//Object(Symbol.prototype.valueOf.call(source));

let reg = /\.jpg$/gi;//g全局匹配 i忽略大小写 m多行匹配
const flags = /\w*$/;
// new Regexp();
console.log(reg.source, flags.exec(reg));

const target = new reg.constructor(reg.source, flags.exec(reg));
new RegExp