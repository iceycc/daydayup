namespace inter24{
  /**
   * 高级类型之强大的infer关键字
   */
  // ReturnType 获取函数返回值类型
  interface User {
    id: number
    name: string
    form?: string
}

type Foo = (name:string) => User

// ParamType 获取参数类型
type ParamType<T> = T extends (param:infer P) => any ? P : T // 
 // 自己实现的ReturnType
type myReturnType<T> = T extends (...args:any[]) => infer P ? P :T

type R1 = ReturnType<Foo> // User
type R2 = myReturnType<Foo> // User
type P1 = ParamType<Foo> // stringw

// 获取构造函数参数的工具类型 
class TestClass {
  constructor(public name: string, public age: number) {}
}
const TestObj = {}
// MyConstructorParameters尖括号内接受参数 , new (...args: any[]) 约束参数可以被实例化。
// 1. new (...args: any[]指构造函数,因为构造函数是可以被实例化的.
// 2. infer P代表待推断的构造函数参数,如果接受的类型T是一个构造函数,那么返回构造函数的参数类型P,否则什么也不返回,即never类型
type MyConstructorParameters<T extends new (...args: any[]) => any> = T extends new (...args: infer P) => any
  ? P
  : never;
type C1 = ConstructorParameters<typeof TestClass> // [string, number]
// type C2 = MyConstructorParameters<typeof TestObj> // Error 类型“{}”不满足约束“new (...args: any[]) => any”。
type C3 = MyConstructorParameters<typeof TestClass> // [string, number]

// infer的应用
// 1  tuple转union,比如[string, number] -> string | number:
type ElementOf<T> = T extends Array<infer E> ? E : never;

type TTuple = [string, number];

type ToUnion = ElementOf<TTuple>; // string | number

// 2 union 转 intersection，如：string | number -> string & number
type UnionToIntersection<U> = (U extends any ? (k: U) => void : never) extends ((k: infer I) => void) ? I : never;

type Result = UnionToIntersection<string | number>;
}