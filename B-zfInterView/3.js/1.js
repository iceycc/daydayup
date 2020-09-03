/**
 * 把逻辑封装在方法内部
 * 1.多人开发的可能会命名冲突
 * 2.命名空间
 */
/* let zhangsan = {
    a() { console.log('a') },
    b() { console.log('b') }
}
let lisi = {
    a() { console.log('a') },
    b() { console.log('b') }
}
 */
let zhangsan = (function () {
    function a() {
        b();
    }
    //自执行函数的方式可以很方便的隐藏内部变量
    function b() {

    }
    return { a };
})();
zhangsan.a;
let lisi = (function () {
    function a() {
        b();
    }
    //自执行函数的方式可以很方便的隐藏内部变量
    function b() {

    }
    return { a };
})();