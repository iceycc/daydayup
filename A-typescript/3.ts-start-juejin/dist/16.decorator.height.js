"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var decorator16_2;
(function (decorator16_2) {
    let Person = class Person {
        constructor(name) {
            this.name = name;
        }
        greet(message) {
            return `${this.name} say: ${message}`;
        }
    };
    __decorate([
        logProperty,
        __metadata("design:type", String)
    ], Person.prototype, "name", void 0);
    __decorate([
        logMethod,
        __param(0, logParameter),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String]),
        __metadata("design:returntype", String)
    ], Person.prototype, "greet", null);
    Person = __decorate([
        logClass,
        __metadata("design:paramtypes", [String])
    ], Person);
    function logClass(target) {
        console.log(target);
    }
    function logProperty(target, propertyKey) {
        console.log(propertyKey);
    }
    function logMethod(target, propertyKey, descriptor) {
        console.log(propertyKey);
    }
    function logParameter(target, propertyKey, index) {
        console.log(index);
    }
    let p = new Person('xxx');
    p.greet(' ssssssss ');
    function f() {
        console.log("f(): evaluated");
        return function (target, propertyKey, descriptor) {
            console.log("f(): called");
        };
    }
    function g() {
        console.log("g(): evaluated");
        return function (target, propertyKey, descriptor) {
            console.log("g(): called");
        };
    }
    class C {
        method() { }
    }
    __decorate([
        f(),
        g(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], C.prototype, "method", null);
    new C().method();
})(decorator16_2 || (decorator16_2 = {}));
