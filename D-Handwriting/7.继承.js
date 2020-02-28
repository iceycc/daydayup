
// 1. 原型链继承 + 构造函数继承 = 组合继承
function Animal(name){
    this.name = name
}
Animal.prototype.say=function(hi){
    console.log(this.name + hi)
}
function Cat(...args){
    Animal.call(this,...args)
}
Cat.prototype = new Animal()
let c = new Cat('Tom')
console.log(c.name)
c.say('miao')


// 2. 原型式继承：Object.create 
// 自己实现一个create
let A = {
    name:'old'
}
let B = Object.create(A,{
    name:{
        value:"ccc"
    }
})
console.log(B.name)
// 思考如何模拟？？？？TODO
function create(o,des = {}){
    function fn(){}
    fn.prototype = o
    Object.setPrototypeOf(fn,o,des)
    return new fn()
}
let C = create(A,{
    name:{
        value:'xxxxxxx'
    }
}) 
console.log(C.name)

// 3. 寄生式继承
function createAnother(original){
    var clone = Object(original)
    clone.sayHi = function(){
        console.log('hi')
    }
    return clone
}
let d = createAnother(A)
console.log(d.name)
d.sayHi()

// 4.

function inheritProperty(subType,superType){
    var prototype = Object(superType.prototype)
    prototype.constructor = prototype
    subType.prototype = prototype
}
function superType(){
    this.name = 'super'
}
superType.prototype.height = '19'
function subType(){
    superType.call(this)   
    this.age = '15'
}
inheritProperty(subType,superType) //  
let s1 =new subType()
console.log(s1.name)
console.log(s1.height)