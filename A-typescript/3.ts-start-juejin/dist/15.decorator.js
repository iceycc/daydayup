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
var decorator15;
(function (decorator15) {
    function method(target, propertyKey, descriptor) {
    }
    ;
    function log(target, propertyKey) {
        console.log(target, propertyKey);
    }
    function logParameter(target, propertyKey, index) {
        console.log(target, propertyKey, index);
    }
    class Person {
        constructor() {
            this.name = 'xiaomuzhu';
        }
        get count() {
            return 1;
        }
        say(name, age) {
            return 'instance method' + name + ',' + age + ' y';
        }
        static run() {
            return 'static method';
        }
    }
    __decorate([
        log,
        __metadata("design:type", String)
    ], Person.prototype, "name", void 0);
    __decorate([
        method,
        __param(0, logParameter), __param(1, logParameter),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String, Number]),
        __metadata("design:returntype", void 0)
    ], Person.prototype, "say", null);
    __decorate([
        method,
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], Person, "run", null);
    const xmz = new Person();
    console.log(xmz.say('xmz', 11));
})(decorator15 || (decorator15 = {}));
