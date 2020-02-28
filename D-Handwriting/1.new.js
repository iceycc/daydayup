

function Person(name){
    this.name = name
}
Person.prototype.say = function(hi){
    console.log(this.name + hi)
}

// 1 创建新对象
// 2 讲空对象的原型指向构造函数的原型
// 3 执行默认函数，将默认的属性挂载到这个空对象上
// 4 判断构造函数的返回返回，如果是对象就返回这个对象，否则返回新创建的对象

// 模拟1
function new1(fn){
    let obj = {}
    let Constructor = [].shift.call(arguments)
    obj.__proto__ = Constructor.prototype
    let result = Constructor.apply(obj,arguments)
    return result instanceof Object ? result : obj
}
let p1 = new1(Person,'小白1')
console.log(p1.name)
p1.say('new1 Hi')


// 模拟2 讲构造函数和实例化参数区分
function new2(Constructor){
    return function(){
        let obj = {}
        obj.__proto__ = Constructor.prototype
        let result = Constructor.apply(obj,arguments)
        return result instanceof Object ? result : obj
    }
}
let p2 = new2(Person)('小白2')
console.log(p2.name)
p2.say('new2 Hi')
