// 一个英文字符： 1byte(字节) = 8bit
// 一个汉字字符： 2byte = 16bit
// 一个汉字在utf-8中是3个字节
console.log(Math.pow(2,8))
// 二进制以 0b开头
console.log(0b111) // 1 * 4 + 1 * 2 + 1 - 3 


let a = 0b10100;//二进制
let b = 0o24;//八进制
let d = 0x14;//十六进制
let c = 20;//十进制
console.log(a == b);
console.log(b == c);
console.log(c == d);

console.log(c.toString(8))


