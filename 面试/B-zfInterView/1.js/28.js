/* //97
//98
//25185
// 97..toString = (97).toString() = Number(97).toString()
console.log(97..toString(2));//01100001
console.log(98..toString(2));//01100010
console.log(98..toString(2) + 97..toString(2));
//parseInt就是把一个字符串，转成十进制
console.log(parseInt('0110001001100001', 2));

//两个字节组成一个数，10000000   00000001
//高位在前和高位两各种方式  大头在前， 小头在前

let buffer = Buffer.from('ab');
//61=>97  6*16+1=97
console.log(buffer);

console.log(parseInt('0X61', 16)); */
/**
.如何处理大文件上传
 深入学习blob
 上传文件
 分片上传
 秒传
 断点续传
 暂停
 恢复
 进度条
 重试
 []==![]=> [].valueOf().toString()得到空字符串'',![] = false,Number('') == Number(false)成立都是0
*/
//如果说其它 情况的话要进行两个等号的比较，都要转成数字
console.log(Number([].toString()) === 0);
console.log(Number(![]) == 0);
console.log([] == ![]);
/**
 * 常见的题
 * 1. 柯理化 bind原理
 * 2. 拷贝
 * 3. 进程线程 + 事件环+微任务+宏任务
 * 4. 大文件上传
 */