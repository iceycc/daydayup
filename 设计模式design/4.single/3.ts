/**
 * 透明单例
 * 不需要调取相应的方法进行实例化
 * 客户端或者说使用者并不需要知道要按单例使用
 */
export { }
let Window = (function () {
    let window: Window;
    let Window = function (this: Window) {
        if (window) {// 如果有值 直接进行复制
            return window;
        } else {
            // 没有的化
            //如果说构造函数返回一个对象的话，那么new 构造函数就会把该对象返回
            return (window = this);
        }
    }
    return Window;
})();
let w1 = new (Window as any)();
let w2 = new (Window as any)();
console.log(w1 === w2);
