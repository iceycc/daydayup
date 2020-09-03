/**
 * 如何确定THIS
 * 思考 THIS为什么会出现？我们需要THIS干什么用?
 * this 谁来调用，或者 说当前执行这个逻辑的主体是谁？
 * 函数只是一个处理逻辑
 */
/* function eat() { }
eat();
function getName() {
    console.log(this.name);
}
 */
let zhangsan = {
    name: '张三',
    getName() {
        console.log(this.name);
    },
    eat() {
        console.log(this);
    }
}
//怎么确定THIS，谁干 这件事，那么this就是谁
//在JS里，谁调用哪个方法
zhangsan.getName();
zhangsan.eat();
//如何确定THIS。核心就一条  .前那个对象

/**
 * 如何确定THIS，其实就是知道当前函数执行主体是谁？
 */
//如果是对对象来调来调。this就是调用的对象

let zhangsan = {
    name: '张三',
    getName() {
        console.log(this.name);
    }
}
zhangsan.getName();

//如果没有人来调,直接执行
let getName = zhangsan.getName;
//如果非严格模式 主体window global 。如果是严格格式就是undefined
getName();
//其实THIS的确定只有一条规定，谁调方法就是谁
//如果事件绑定的时候 this就是绑定的元素
let dom = {
    addEventListener(type, callback) {
        dom["on" + type] = callback;
    },
    trigger(type) {
        dom.onclick();// .前那个对象
    }
}
dom.addEventListener('click', function () {
    console.log(this);//this就是当前的元素
});
dom.trigger('click');