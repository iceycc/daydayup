/**
 * 将构造函数和 构建过程进行分离
 * 单例与构建过程的分离
 */
export { }
interface Window {
    new(): Window
}
function Window() {

}
Window.prototype.hello = function () {
    console.log('hello');
}
let createInstance = (function () {
    let instance: Window;
    return function (Obj:any) {
        if (!instance) {
            instance = new (Obj as any);
        }
        return instance;
    }
})()
let w1 = createInstance(Window);
let w2 = createInstance(Window);
console.log(w1 === w2);

