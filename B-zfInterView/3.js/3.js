//自执行函数和高阶函数
(function () {

})();
//高阶函数 函数可以作为函数的参数或者返回值 
function a(fn) {
    fn();
    return fn;
}