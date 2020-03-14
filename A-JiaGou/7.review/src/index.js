// 1 实现函数柯里化和反柯理化
function add1(a,b,c,d,e){
  return a + b + c + d + e
}
  // 柯里化
  function curring(fn,args=[]){
    // fn不一定是函数
    let len = fn.length;
    return (..._) =>{
      args.push(..._)
      if(args.length < len){
        return curring(fn,args)
      }
      return fn(...args)
    }
  }
  // add函数柯里化
  let r1 = curring(add1)(1)(2)(3)(4,5)
  console.log(r1)

  // eg:
  const isType = (type,content)=>{
    return Object.prototype.toString.call(content) === `[object ${type}]`
  }
  console.log(isType('String','1'))
  const isString = curring(isType)('String')
  console.log(isString('cccc'))

// 柯里化的反函数: 放大函数的使用范围
  let add2 = a=>b=>c=>d=>{
    return a + b + c + d
  }
  function uncurrying1(fn){
    return (...args)=>{
      args.forEach((item)=>{
          fn = fn(item)
      })
      return fn
    }
  }
  console.log(uncurrying1(add2)(1,2,3,4))
  // 反柯里化
  // 别人的东西可以拿来直接用，这里的this我可以手动传入
  // 原始写法
  console.log(Object.prototype.toString.call(1)) // [object Number]
  // 反柯里化写法
  const uncurrying2 = function(fn){
    return function(...args){
        return  fn.call(...args)
    }
  }
  let checkType = uncurrying2(Object.prototype.toString)
  let r2 = checkType([2,3])
  console.log('r2',r2)


// 2 实现new的原理
// 继承
//  创建一个新的空对象
//  将这个空对象的原型指向构造函数的原型
//  执行狗仔函数，将默认的属性挂载到这个空对象上，将this指向该空对象
//  判断构造函数的返回值，如果是对象返回该对象，否则返回新创建的对象
function myNew(cons){
   return function(){
    let obj = {}
    obj.__proto__ = cons.prototype
    let r = cons.apply(obj,arguments)
    return typeof r=== 'object'? r : obj
   }
}
function Animal(name){
     this.name = name
     this.age = '22'
}
Animal.prototype.say = function(){
  console.log('hi')
}
let el = myNew(Animal)('tiger')
el.say()
console.log('name',el.name ,'age',el.age)


// 3 实现数组扁平化 flatten方法
let arr1 = [1,2,3,4,[5,6,7,8,[9,10]]]
Array.prototype.myFlat = function(n){
  if(n = 0) return this
  return this.reduce((prev,current,index,arr)=>{
    if(Array.isArray(current)){
      // 如果当前的是数组，与之前的合并。不改变原数组
      return prev.concat(current.myFlat(--n))
    }else{
      return [...prev,current]
    }
  },[])
}
arr1 = arr1.flat(2)
arr2 = arr1.myFlat(2)
console.log(arr1)
console.log(arr2)
// 4 实现简易的commonjs规范

// 5 实现Promise.finnaly   /  try
// finnaly 无论成功失败都会执行。
Promise.prototype.finnaly = function(callback){
  return this.then(data=>{
    return Promise.resolve(callback()).then(()=>{data})
  },err=>{
    return Promise.resolve(callback()).then(()=>{
      throw err
    })
  })
}
// try
function testFn(){
  throw new Error('err123')
}
Promise.try = function(fn){
  return new Promise((resolve,reject)=>{
    resolve(fn()) // resolve 会等待传入的函数执行完毕 将成功或者失败的结果抛出
  })
}
Promise.try(testFn).catch(err=>{
  console.log('err',err)
})

// 6 Mixin
function Mixin(superClass){
  return class extends superClass{
    created(){
      console.log('mixin created')
      super.created()
    }
  }
}
class Parent {
  created(){
    console.log('parent created')
  }
}
class Child extends Mixin(Parent) {
  created(){
    super.created()
    console.log('child created')
  }
}
let chi =  new Child()
chi.created()