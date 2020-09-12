//在编译阶段，不会去编译函数内部的代码
function Foo() {
    getName = function () {
        console.log(1);
    }
    return this;
}
Foo.getName = function () {
    console.log(2);
}
Foo.prototype.getName = function () {
    this.name = 'FOO'
    console.log(3);
}
var getName = function () {
    console.log(4);
}
function getName() {
    console.log(5);
}
Foo.getName();
getName();
Foo().getName();
getName();
new Foo.getName();
new Foo().getName();
let result = new new Foo().getName();
console.log('result',result);



