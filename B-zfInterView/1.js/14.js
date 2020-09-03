var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        //extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Father = /** @class */ (function () {
    function Father(name) {
        this.name = name;
    }
    Father.prototype.getName = function () {
        console.log(this.name);
    };
    Father.staticFatherName = 'FatherName';
    Father.staticGetFatherName = function () {
        console.log(Father.staticFatherName);
    };
    return Father;
}());
var Child = /** @class */ (function (_super) {
    __extends(Child, _super);
    function Child(name, age) {
        var _this = _super.call(this, name) || this;
        _this.age = age;
        return _this;
    }
    Child.prototype.getAge = function () {
        console.log(this.age);
    };
    Child.staticChildName = 'ChildName';
    Child.staticGetChildName = function () {
        console.log(Child.staticChildName);
    };
    return Child;
}(Father));
var child = new Child('zhufeng', 10);
child.getName();
child.getAge();
Child.staticGetChildName();
Child.staticGetFatherName();

export { };
