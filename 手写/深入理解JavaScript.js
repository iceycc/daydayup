// 1 创建对象的多种方式以及优缺点
(function (done) {
    if (!done) return

    // 1. 工厂模式
    function createPerson(name) {
        var o = new Object();
        o.name = name;
        o.getName = function () {
            console.log(this.name);
        };

        return o;
    }

    var person1 = createPerson('kevin');

    // 构造函数模式
    function Person(name) {
        this.name = name;
        this.getName = function () {
            console.log(this.name);
        };
    }

    var person2 = new Person('kevin');

})();
// 2 寄生组合式继承
(function (done) {
    if (!done) return

    // 最佳实践
    function Parent(name) {
        this.name = name;
        this.colors = ['red', 'blue', 'green'];
    }

    Parent.prototype.getName = function () {
        console.log(this.name)
    }

    // 寄生原型a
    function Child(name, age) {
        Parent.call(this, name);
        this.age = age;
    }

    function prototype(child, parent) {
        // function object(o) {
        //     function F() {}
        //     F.prototype = o;
        //     return new F();
        // }
        // var prototype = object(parent.prototype);
        let prototype = Object.create(parent.prototype);
        prototype.constructor = child;
        child.prototype = prototype;
    }

    prototype(Child, Parent);
    let c = new Child('Tom', 17)
    console.log(c instanceof Child)
    console.log(c instanceof Parent)


    // 原型
    function Child2(name, age) {
        Parent.call(this, name);
        this.age = age;
    }

    function prototype2(child, parent) {
        child.prototype = new parent() // 调用两次
    }

    prototype2(Child2, Parent);
    let c2 = new Child2('Jerry', 18)
    console.log(c2 instanceof Child2)
    console.log(c2 instanceof Parent)
})();
// 3 promise题
(function (done) {
    if (!done) return
    Promise.resolve()
        .then(() => {
            console.log('then')
        })
    process.nextTick(() => {
        console.log('nextTick')
    })
    setImmediate(() => {
        console.log('setImmediate')
    })
    console.log('end')
})(1)
