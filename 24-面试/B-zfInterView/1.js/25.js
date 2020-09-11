
/**
 * 
 */
/* if (a == 1 && a == 2 && a == 3) {
    console.log('成功');
} */

//在隐式转换的过程中，调用了`toString`方法
let obj = { name: 'zhufeng' };
//如果有三个等号，则不需要进行类型转换，直接比较
//
/**
 * 如果是两个等号，则尝试进行类型转换，再进行比较
 * NaN和任何值都不相等，包括NaN
 * null  undefined 如果他们两个自己用二个等号比是相等的，跟其它值都不相等
 * 对象跟字符串比，会把对象转成字符串然后相比  obj.toString()
 * 其它类型的比较都要转成数字进行比较
 *
 */
/* console.log(obj === "[object Object]");//false
console.log(obj.toString());
console.log(obj == "[object Object]");//true */

//如果把一个字符串转成数字，如何转?
//toString valueOf 都是对象继承自Object.prototype的方法
//toString会返回一个对象的字符中描述 valueOf返回对象本身
//在把字符串跟数字相比的时候，尝试把字符串转成数字
//先调用a的valueOf方法判断，如果返回的不是数字，则尝试调用toString方法
//然后再用toString的返回值转成数字去比较
/* var a = {
    count: 1,
    valueOf() {
        return this.count++;
    },
     toString() {
        return this.count++;
    }
} 
*/
//var a = true;
/* var i = 1;
Object.defineProperty(window, 'a', {
    get() {
        return i++;
    }
}); */
/* var a = {
    i: 1,
    [Symbol.toPrimitive](hint) {
        if (hint === 'default') {
            return this.i++;
        }
        return null;
    }
} */
/* var a = [1, 2, 3];
a.toString = a.shift;

if (a == 1 && a == 2 && a == 3) {
    console.log('OK');
} */