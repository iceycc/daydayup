/**
 * call 调用方法
 * apply 调用方法
 * bind 绑定方法
 */

/*
obj.getName = getName;
obj.getName();
delete obj.getName;
 */
//以OBJ作为调用方，或者说执行主体，调用 getName方法
//

!(function (prototype) {
    function getDefaultContext(context) {
        //context null undefined context=window
        context = context || window;
        //基本 'a' true 1
        let type = typeof context;
        /*  if (['number', 'string', 'boolean'].includes(type)) {
             context = new context.constructor(context);
         } */
        context = Object(context);
        return context;
    }
    function call2(context, ...args) {
        context = getDefaultContext(context);
        let symbol = Symbol('fn');
        context[symbol] = this;
        context[symbol](...args);
        delete context[symbol];
    }
    function apply2(context, args) {
        context = getDefaultContext(context);
        let symbol = Symbol('fn');
        context[symbol] = this;
        context[symbol](...args);
        delete context[symbol];
    }
    function bind2(context, ...outerArgs) {
        //this=getName
        return (...args) => this.call(context, ...outerArgs, ...args);
    }
    prototype.call2 = call2;
    prototype.apply2 = apply2;
    prototype.bind2 = bind2;
})(Function.prototype);
function getName(age, home) {
    console.log(this.name, age, home);
}
let obj = { name: 'zhufeng' };
getName.call2(obj, 10, 'beijing');
getName.apply2(obj, [10, 'beijing']);

let bindGetName = getName.bind2(obj, 10);
bindGetName('zhufeng');

//this 当前的执行主体   this如何确定只记住 一条    