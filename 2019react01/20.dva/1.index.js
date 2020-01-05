//首尾不能是空格
var reg = /^[^\s]+(.*[^\s]+)*$/;

console.log(reg.test(' s'));
console.log(reg.test('s '));
console.log(reg.test('  '));
console.log(reg.test(' '));
console.log(reg.test('  s')); //true
console.log(reg.test('ss  ss'));//true

