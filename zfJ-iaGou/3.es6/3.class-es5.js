
// // 继承
// // 实例的属性 公共属性


// function Animal(name){
//     this.type = '哺乳类'
//     this.name = name;
// }
// Animal.prototype.eat = function(){
//     console.log('吃饭')
// }
// function Tiger(name){
//     Animal.call(name);
// }
// // 1)老虎增加方法 可以增加到自己的身上 还可以找到Animal原型
// // Tiger.prototype = Animal.prototype 错误的
// // Tiger.prototype.__proto__ = Animal.prototype
// // Object.setPrototypeOf(Tiger.prototype,Animal.prototype); //es6
// // let tiger = new Tiger();
// // console.log(tiger.eat());


// // 2)Object.create()
// function create(Pproto){
//     let Fn = function(){}
//     Fn.prototype = Pproto; // 把父类的原型 放到Fn上
//     return new Fn(); 
// }
// // 让tiger的原型 执行 Fn函数的实例
// // 找的时候 想找自己身上 找不到找对应的链 链放的是fn的实例，fn找不到 会找到父类的原型
// // Tiger.prototype = Object.create(Animal.prototype,{constructor:{value:Tiger}});
// // let tiger = new Tiger();
// // console.log(tiger.constructor);

// // 3) 用不到 不能给父类传递参数
// // Tiger.prototype = new Animal(); // {动物的实例属性 公共属性}
// // let tiger = new Tiger('xxx');
// // console.log(tiger.name)


function Animal(name){
    this.type = '哺乳类:'+name
}
Animal.prototype.say = function(){
    console.log('I am' + this.type)
}
Animal.prototype.size = 'large'
let smallAnimal = new Animal()

// 1-继承实例上的属性
function Tiger(name){
    Animal.call(this,name)
}
let littleTiger =  new Tiger('Tiger')
console.log(littleTiger.type)
console.log(littleTiger.size)

// 2-继承公共上的方法
function Lion(){}
// Lion.prototype = Animal.prototype // 会改变父亲的公共属性
// Lion.prototype.__proto__ = Animal.prototype // >1-继承父亲的公共属性，Lion先找自己的prototype，找不到会通过__proto__继续找父亲的prototype
// Object.setPrototypeOf(Lion.prototype,Animal.prototype) //  >2- es6方法 设置同上 设置 后者的prototype到 __proto__上
Lion.prototype = Object.create(Animal.prototype,{constructor:{value:Lion}}) // >3- 原理和上面的不一样。通过创建一个新的类.注意将constructor只限
Lion.prototype = Object.create(Animal.prototype,{constructor:{value:Lion}}) // >3- 原理和上面的不一样。通过创建一个新的类.注意将constructor只限

// Lion.prototype = MyCreate(new Animal) 
Lion.prototype.size = 'big'
let smallLion = new Lion('lion')
// smallLion.size = 'big11' 
console.log(smallLion.size)
console.log(smallAnimal.size)
console.log(smallLion.constructor);

// 模拟 =》 Object.create()
function MyCreate(Pproto){
    let Fn = function(){}
    Fn.prototype = Pproto
    return new Fn()
}




