// 泛型 generic
// 泛型的关键是给成员之间提供有意义的约束，这些成员可以是：
  // 接口
  // 类的实例成员
  // 类的方法
  // 函数参数
  // 函数返回值
  // 类型变量
function returnItem<T>(parent:T):T{
  return parent
}
let value1 = returnItem(2) // function returnItem<2>(parent: 2): 2
let value2 = returnItem<string>('2') // function returnItem<string>(parent: string): string
let value3 = returnItem(false)
// console.log(value)

// 多个类型参数
function swap<T,U>(tuple:[T,U]):[U,T]{
  return [tuple[1],tuple[0]]
}

swap([20,'Tom']) // function swap<number, string>(tuple: [number, string]): [string, number]

// 泛型变量

function getArrayLength<T>(arr:Array<T>){
  console.log(arr.length)
  return arr
}
console.log(getArrayLength([1,2,3,4]))

// 泛型类
// 泛型约束 extends
type Params = number | string
class Stack<T extends Params>{
  private arr:T[] = []
  public push(item:T){
    this.arr.push(item)
  }
  public pop(){
    this.arr.pop()
  }
}

const stack1 = new Stack<string>()
// const stack2 = new Stack<boolean>() // Error :类型“boolean”不满足约束“string | number”。


// 泛型约束与索引类型
// Error1: Element implicitly has an 'any' type because expression of type 'string' can't be used to index type '{}'.

function getValue<T extends object, U extends keyof T>(obj: T, key: U) {
  return obj[key] // ok
}

let obj = {
  name:'Tom',
  age:'10'
}
getValue(obj,'age')



// 使用多重类型进行泛型约束
// 注意，本示例是在非 「--strictPropertyInitialization」或者「--strict」下测试的
interface FirstInterface {
  doSomething(): number
}

interface SecondInterface {
  doSomethingElse(): string
}
interface childInterface extends FirstInterface,SecondInterface{

}
class Demo1<T extends childInterface> {
  private genericProperty!: T

  useT() {
    this.genericProperty.doSomething()
    this.genericProperty.doSomethingElse() // 类型“T”上不存在属性“doSomethingElse”
  }
}
class Demo<T extends FirstInterface & SecondInterface> {
  private genericProperty!: T

  useT() {
    this.genericProperty.doSomething()
    this.genericProperty.doSomethingElse() // 类型“T”上不存在属性“doSomethingElse”
  }
}
//泛型与new
// 传入类型是可以进行new操作的
function factory<T>(type:{new ():T}):T{
  return new type()
}
factory<any>(Demo)

