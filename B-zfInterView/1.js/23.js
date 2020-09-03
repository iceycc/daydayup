/**
let target = {
    name: 'zhufeng',
    age: 10
};
let handler = {
    get: function (target, key) {
        console.log('get', target, key);
        return target[key];
    },
    set(target, key, value) {
        console.log('set', target, key, value);
        target[key] = value;
    }
}

let proxy = new Proxy(target, handler);
console.log(proxy.name);
proxy.age = 11;
console.log(proxy.age);
 */

/* Object.getOwnPropertyDescriptor;
Object.getPrototypeOf;
Object.defineProperty; */

let target = {
    name: 'zhufeng',
    age: 10
};
//把Object一些系统方法放到Reflect上面
Reflect.defineProperty(target, 'home', {
    value: '北京',
    writable: true,
    enumerable: true,
    configurable: true
});
console.log(Reflect.getOwnPropertyDescriptor(target, 'home'));
console.log('home' in target);
console.log(target['home']);
console.log(target);