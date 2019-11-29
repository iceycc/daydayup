
@addType('man')
class Im{
    constructor(){
        this.name = 'Tom'
    }
    @Readonly
    height = '170'

    get age(){
        return '18'
    }
    @beforeSay
    addNum(){
        console.log('old add')
        return '2333'
    }
}
let m = new Im()

function addType(type){
    return function(target){
        // console.log('2',target.name)
        target.prototype.type = type
    }
}
// 装饰方法 descriptor aop
function beforeSay(target,key,descriptor){
    // descriptor{
        // configurable: true
        // enumerable: false
        // value: ƒ ()
        // writable: true
    // }
    console.log('装饰方法>>',key,descriptor)
    let oldSay = descriptor.value
    descriptor.value = function(){
        console.log('before add ')
        return oldSay.call(this)
    }
}
// 
function Readonly(target,key,descriptor){
    console.log('装饰属性>>',key,descriptor)
    // descriptor对象原来的值如下
        // configurable: false // 是否可配置
        // enumerable: true //是否可枚举
        // initializer: ƒ ()
        descriptor.writable = false //  是否可写
}
m.height = '180'
console.log(m.height)



@logger2()
@logger1()
class Logger{

}
function logger1(){
    console.log('outter 1')
   return function(){
        console.log('logger1');
   }
}   
function logger2(){
    console.log('outter 2')
    return function(){
        console.log('logger2');
    }
}