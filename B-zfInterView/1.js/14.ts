class Father {
    static staticFatherName = 'FatherName';
    static staticGetFatherName = function () {
        console.log(Father.staticFatherName);
    }
    constructor(public name) {
        this.name = name;
    }
    getName() {
        console.log(this.name);
    }
}
class Child extends Father {
    static staticChildName = 'ChildName';
    static staticGetChildName = function () {
        console.log(Child.staticChildName);
    }
    constructor(public name, public age) {
        super(name);
        this.age = age;
    }
    getAge() {
        console.log(this.age);
    }
}
let child = new Child('zhufeng', 10);
child.getName();
child.getAge();
Child.staticGetChildName();
Child.staticGetFatherName();

