/**
 * 装饰器的高阶用法
 */
// namespace decorator16 {
//   /**
//    * 参数装饰器
//    * 参数装饰器需要三个参数 target、propertyKey、index：
//       target —— 当前对象的原型，也就是说，假设 Person 是当前对象，那么当前对象 target 的原型就是 Person.prototype
//       propertyKey —— 参数的名称，上例中指的就是 greet
//       index —— 参数数组中的位置，比如上例中参数 name 的位置是 1, message 的位置为 0
//    */
//   function logParameter(target: Object, propertyKey: string, index: number) {
//     console.log(target, propertyKey, index);
//   }

//   class Person {
//     greet(@logParameter message: string, @logParameter name: string): string {
//       return `${message} ${name}`;
//     }
//   }
//   const p = new Person();
//   p.greet('hello', 'xiaomuzhu');

//   // Person { greet: [Function] } greet 1
//   // Person { greet: [Function] } greet 0



//   /**
//    * 装饰器工厂
//    */


// }
namespace decorator16_2 {

  @logClass
  class Person {
    @logProperty
    public name: string;

    constructor(name: string) {
      this.name = name;
    }

    @logMethod
    public greet(@logParameter message: string): string {
      return `${this.name} say: ${message}`;
    }
  }

  // 打印构造函数
  function logClass(target: typeof Person) {
    console.log(target)
  }

  // 打印属性名
  function logProperty(target: any, propertyKey: string) {
    console.log(propertyKey);
  }

  // 打印方法名
  function logMethod(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    console.log(propertyKey);
  }

  // 打印参数位置
  function logParameter(target: Object, propertyKey: string, index: number) {
    console.log(index);
  }

  // 上面装饰器过多了，可以封装成一个
  // function log(this: any, ...args : any[]) {
  //   switch(args.length) {
  //     case 1:
  //       return logClass.apply(this, args);
  //     case 2:
  //       return logProperty.apply(this, args);
  //     case 3:
  //       if(typeof args[2] === "number") {
  //         return logParameter.apply(this, args);
  //       }
  //       return logMethod.apply(this, args);
  //     default:
  //       throw new Error("Decorators are not valid here!");
  //   }
  // }
  let p = new Person('xxx')
  p.greet(' ssssssss ')


  /**
   * 多个装饰器的执行顺序
   */

  function f() {
    console.log("f(): evaluated");
    return function (target:C, propertyKey: string, descriptor: PropertyDescriptor) {
      console.log("f(): called");
    }
  }

  function g() {
    console.log("g(): evaluated");
    return function (target:C, propertyKey: string, descriptor: PropertyDescriptor) {
      console.log("g(): called");
    }
  }

  class C {
    @f()
    @g()
    method() { }
  }
  new C().method()
  // f(): evaluated
  // g(): evaluated
  // g(): called
  // f(): called
}