/**
 * 装饰器
 * 最早在python
 */
namespace decorator15 {
  // function addAge(constructor: Function) {
  //   constructor.prototype.age = 18;
  // }
  
  // @addAge
  // class Person{
  //   name: string;
  //   age: number;
  //   constructor() {
  //     this.name = 'xiaomuzhu';
  //   }
  // }
  
  // let person = new Person();
  
  // console.log(person.age); // 18


  // 声明装饰器修饰方法/属性
function method(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
  // console.log(target);
  // console.log("prop " + propertyKey);
  // console.log("desc " + JSON.stringify(descriptor) + "\n\n");
  // descriptor.writable = false;
};
function log(target: Object, propertyKey: string) {
  console.log(target, propertyKey);
}
function logParameter(target: Object, propertyKey: string, index: number) {
  console.log(target, propertyKey, index);
}

class Person{
  @log 
  name: string;
 
 get count(){
   return 1
 }

 constructor() {
   this.name = 'xiaomuzhu';
 }

 @method
 say(@logParameter name:string,@logParameter age:number){
   return 'instance method' + name + ',' +age + ' y';
 }

 @method
 static run(){
   return 'static method';
 }
}

const xmz = new Person();

// 修改实例方法say
// xmz.say = function() {
//  return 'edit'
// }

// 打印结果,检查是否成功修改实例方法
console.log(xmz.say('xmz',11));
}