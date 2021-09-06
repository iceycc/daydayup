// ES6更新的内容主要分为以下几点
//
// 表达式：声明、解构赋值
// 内置对象：字符串扩展、数值扩展、对象扩展、数组扩展、函数扩展、正则扩展、Symbol、Set、Map、Proxy、Reflect
// 语句与运算：Class、Module、Iterator
// 异步编程：Promise、Generator、Async


// 声明
(function (done) {
    if (!done) return;
    let a = 1;
    const b = 2

    function fn() {

    }

    class c {

    }

    // import { d } from './d'
})();
// 解构赋值
(function (done) {
    if (!done) return;
    const [s1, s2, s3, s4] = 'abcd'
    const {toString: numberS} = 123
    const {toString: booleanS} = true

    const {o1, o2 = 3, o3: o4} = {o1: 1, o2: 2, o3: 3}
    const [a1, a2 = '2', a3, a4] = [1, 2, 3, 4]

    function FuncA([x = 0, y = 1]) {
    }

    function FuncO({a = 0, b = 1} = {}) {
    }

    // 交换变量值：[x, y] = [y, x]
    // 返回函数多个值：const [x, y, z] = Func()
    // 定义函数参数：Func([1, 2])
    // 提取JSON数据：const { name, version } = packageJson
    // 定义函数参数默认值：function Func({ x = 1, y = 2 } = {}) {}
    // 遍历Map结构：for (let [k, v] of Map) {}
    // 输入模块指定属性和方法：const { readFile, writeFile } = require("fs")

    // 匹配模式：只要等号两边的模式相同，左边的变量就会被赋予对应的值
    // 解构赋值规则：只要等号右边的值不是对象或数组，就先将其转为对象
    // 解构默认值生效条件：属性值严格等于undefined
    // 解构遵循匹配模式
    // 解构不成功时变量的值等于undefined
    // undefined和null无法转为对象，因此无法进行解构

})();
// 字符串扩展
(function (done) {
    if (!done) return;
    // Unicode表示法：大括号包含表示Unicode字符(\u{0xXX}或\u{0XXX})
    // 字符串遍历：可通过for-of遍历字符串
    // 字符串模板：可单行可多行可插入变量的增强版字符串
    // 标签模板：函数参数的特殊调用
    // String.raw()：返回把字符串所有变量替换且对斜杠进行转义的结果
    // String.fromCodePoint()：返回码点对应字符
    // codePointAt()：返回字符对应码点(String.fromCodePoint()的逆操作)
    // normalize()：把字符的不同表示方法统一为同样形式，返回新字符串(Unicode正规化)
    // repeat()：把字符串重复n次，返回新字符串
    // matchAll()：返回正则表达式在字符串的所有匹配
    // includes()：是否存在指定字符串
    // startsWith()：是否存在字符串头部指定字符串
    // endsWith()：是否存在字符串尾部指定字符串
    // 以上扩展方法均可作用于由4个字节储存的Unicode字符上

})();

// 数值扩展
(function (done) {
    if (!done) return;
    // 二进制表示法：0b或0B开头表示二进制(0bXX或0BXX)
    // 八进制表示法：0o或0O开头表示二进制(0oXX或0OXX)
    // Number.EPSILON：数值最小精度
    // Number.MIN_SAFE_INTEGER：最小安全数值(-2^53)
    // Number.MAX_SAFE_INTEGER：最大安全数值(2^53)
    // Number.parseInt()：返回转换值的整数部分
    // Number.parseFloat()：返回转换值的浮点数部分
    // Number.isFinite()：是否为有限数值
    // Number.isNaN()：是否为NaN
    // Number.isInteger()：是否为整数
    // Number.isSafeInteger()：是否在数值安全范围内
    // Math.trunc()：返回数值整数部分
    // Math.sign()：返回数值类型(正数1、负数-1、零0)
    // Math.cbrt()：返回数值立方根
    // Math.clz32()：返回数值的32位无符号整数形式
    // Math.imul()：返回两个数值相乘
    // Math.fround()：返回数值的32位单精度浮点数形式
    // Math.hypot()：返回所有数值平方和的平方根
    // Math.expm1()：返回e^n - 1
    // Math.log1p()：返回1 + n的自然对数(Math.log(1 + n))
    // Math.log10()：返回以10为底的n的对数
    // Math.log2()：返回以2为底的n的对数
    // Math.sinh()：返回n的双曲正弦
    // Math.cosh()：返回n的双曲余弦
    // Math.tanh()：返回n的双曲正切
    // Math.asinh()：返回n的反双曲正弦
    // Math.acosh()：返回n的反双曲余弦
    // Math.atanh()：返回n的反双曲正切

})();
// 对象扩展
(function (done) {
    if (!done) return;
    // 简洁表示法：直接写入变量和函数作为对象的属性和方法({ prop, method() {} })
    // 属性名表达式：字面量定义对象时使用[]定义键([prop]，不能与上同时使用)
    // 方法的name属性：返回方法函数名
    //
    // 取值函数(getter)和存值函数(setter)：get/set 函数名(属性的描述对象在get和set上)
    // bind返回的函数：bound 函数名
    // Function构造函数返回的函数实例：anonymous
    //
    //
    // 属性的可枚举性和遍历：描述对象的enumerable
    // super关键字：指向当前对象的原型对象(只能用在对象的简写方法中method() {})
    // Object.is()：对比两值是否相等
    // Object.assign()：合并对象(浅拷贝)，返回原对象
    // Object.getPrototypeOf()：返回对象的原型对象
    // Object.setPrototypeOf()：设置对象的原型对象
    // __proto__：返回或设置对象的原型对象

})();
// Iterator 和 for...of 循环
(function (done) {
    if (!done) return;
    let obj = {
        length: 10,
        [Symbol.iterator]() {
            let i = 0
            return {
                next() {
                    return {
                        done: i >= 10,
                        value: i++
                    }
                }
            }
        }
    }
    for (let i of obj) {
        console.log(i);
    }
    console.log(obj instanceof Array);
    console.log(Array.from(obj) instanceof Array);

    function rang(a, b) {
        return {
            [Symbol.iterator]() {
                let value = a
                return {
                    next() {
                        return {
                            value: value++,
                            done: value > b
                        }
                    }
                }
            }
        }
    }

    for (let i of rang(0, 3)) {
        // console.log(i);
    }


})();
// 函数
(function (done) {
    if (!done) return;

    //
    function throwMissing() {
        throw Error('missing')
    }

    function Func(x = throwMissing()) {
        return function () {
        }
    }

    Func('x')

    console.log((new Function).name);// anonymous
    console.log((function foo() {
    }).bind({}).name); // "bound "
})(1);
// 模块
(function (done) {
    if (!done) return;
//
// CommonJS 模块输出的是一个值的拷贝，ES6 模块输出的是值的引用。
    // CommonJS原值异步改变了，导出的值不会改变
    //
// CommonJS 模块是运行时加载，ES6 模块是编译时输出接口。
// CommonJS 模块的require()是同步加载模块，ES6 模块的import命令是异步加载，有一个独立的模块依赖的解析阶段。


    //
})();
(function (done) {
    if (!done) return;


})();
(function (done) {
    if (!done) return;


})();
