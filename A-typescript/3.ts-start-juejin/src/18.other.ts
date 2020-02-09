namespace other {
  class StrictClass {
    foo: number;
    bar = 'hello';
    baz!: boolean; // 属性“baz”没有初始化表达式，且未在构造函数中明确赋值
    constructor() {
      this.foo = 42;
    }
  }

  // ！明确赋值断言
  let x: number;
  initialize();
  console.log(x! + x!); //ok

  function initialize() {
    x = 10;
  }

  // is关键词
  function isString(test: any): test is string {
    return typeof test === 'string';
  }

  function example(foo: number | string) {
    if (isString(foo)) {
      console.log('it is a string' + foo);
      console.log(foo.length); // string function
    }
  }
  example('hello world');

  // 可调用类型注解
  interface ToString {
    (): string
    new(): string
  }
  declare const sometingToString: ToString;
  // sometingToString()
  // new sometingToString() // 其目标缺少构造签名的 "new" 表达式隐式具有 "any" 类型


  // 类型推导
  // 函数返回类型推导：返回值自动添加了类型
  function greeter(person: string) {
    return "Hello, " + person 
  }
  
  // 多类型联合推导
  let arr1 = [1, 'one', 1n] // let arr1: (string | number | bigint)[]

  // 解构推导
  // 在解构赋值过程中，也会有类型推导
  const bar = [1, 1];
  let [a, b] = bar;
  // a = '1' // 不能将类型“"1"”分配给类型“number”。


  // 类型推导的不足
  const action1 = {
    type: 'update', // type: string; 我们需要的是字符串字面量 update 
    payload: {
      id: 10
    }
  }
  // 这时候用类型断言帮助器，或者声明一个接口，类型推导就难有勇武之地了
  interface Action {
    type: 'update',
    payload: {
      id: number
    }
  }
  const action: Action = {
    type: 'update',
    payload: {
      id: 10
    }
  }
}