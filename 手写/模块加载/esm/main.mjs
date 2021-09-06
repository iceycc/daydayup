// main.js
import {counter, incCounter, foo} from './lib.mjs';
import mlib from './lib.cjs' // mjs加载cjs 这个浏览器不支持呀

console.log(mlib.counter)// 3
mlib.incCounter()
console.log(mlib.counter) // 3

console.log(counter); // 3
incCounter();
console.log(counter); // 4


console.log(foo);
setTimeout(() => console.log(foo), 500);
// foo = 122 // 只读的


