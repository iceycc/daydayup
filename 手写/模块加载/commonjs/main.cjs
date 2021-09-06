// main.js
var mod1 = require('./lib.cjs');
var mod2 = require('./lib2.cjs');

console.log(mod1.counter);  // 3
mod1.incCounter();
console.log(mod1.counter); // 3

console.log(mod2.counter);  // 3
mod2.incCounter();
console.log(mod2.counter); // 4

;(async () => {
    // cjs加载mjs
    let {ma, mb} = await import('./lib.mjs')
    console.log(ma, mb)
})()
