// 类型兼容性
// 用于确定一个类型是否能够赋值给其他类型。

/**
 * 结构类型
 * TypeScript 里的类型兼容性是基于「结构类型」的，结构类型是一种只使用其成员来描述类型的方式
 * x = y
 * 源类型必须是目标类型的子类型。x有的y都要有。
 * 如果 x 要兼容 y，那么 y 至少具有与 x 相同的属性。
 */

class Person {
  public weight!: number
  public name!: string
  public born!: string
  constructor(weight: number, name: string, born: string) {
    this.weight = weight
    this.name = name
    this.born = born
  }
  // constructor(public weight: number, public name: string, public born: string) {

  // }
}

interface Dog {
  name: string
  weight: number
}

let x: Dog
let y = {
  weight: 1,
  name: 'Tom',
  born: '2011-11-11'
}
let z = {
  name: 'Tom'
}
x = y // x有的属性y都有。
// x = z // Error:
// Property 'weight' is missing in type '{ name: string; }' but required in type 'Dog'。 'weight' is declared here.

x = new Person(120, 'cxk', '1996-12-12') // OK

/**
 * 函数的类型兼容性
 * 参数兼容：忽略参数。目标函数的参数能在源函数找到就行
 * 返回值兼容：源函数的返回值类型必须是目标函数的子类型。其实就是结构类型兼容
 */


// 参数兼容：
let fnx = (a: number) => 0;
let fny = (c: number, b: string) => 0;

fny = fnx // fnx的每个参数都能在fny中都找到，允许赋值。参数名无所谓，主要看类型。fny就兼容了fnx
// fnx = fny // fny必须要有两个参数，但是fnx只有一个，不允许赋值
// Error 函数的类型兼容性: 不能将类型“(a: number, b: string) => number”分配给类型“(a: number) => number”。ts(2322)

// 忽略参数在js挺常见的。
// 例如forEach的回调函数传入三个参数item, index, array，不过，传入一个item也是可以的。
let items = [1, 2, 3];
// Don't force these extra arguments
items.forEach((item, index, array) => console.log(item));
// Should be OK!
items.forEach((item) => console.log(item));

// 可选参数 或者 rest参数。
let foo = (x: number, y: number) => { };
let bar = (x?: number, y?: number) => { };
let bas = (...args: number[]) => { };
// 当我们把 strictNullChecks 设置为 false 时上述代码是兼容的。
foo = bar = bas; // OK
bas = bar = foo; // 

// 返回值类型兼容：类型系统强制源函数的返回值类型必须是目标函数返回值类型的子类型。
let fnX = () => ({ name: 'Alice' });
let fnY = () => ({ name: 'Alice', location: 'Seattle' });
// fnY = fnX; // Error :不能将类型“() => { name: string; }”分配给类型“() => { name: string; location: string; }”。
fnX = fnY; // OK fnX 的返回值类型是fnY的子类型。


/**
 * 枚举的类型兼容
 * 数字枚举时支持的
 * 字符串枚举不支持:需要指定string类型
 */

enum Status1 {
  Ready,
  Waiting,
  End = 'end' 
}
let status1 = Status1.Ready
let status2 = Status1.End
let status3:string = Status1.End // 
let m1 = 0
let m2 = 'end'
status1 = m1 // ok
m1 = status1 // ok
// status2 = m2 // Error 不能将类型“string”分配给类型“Status1”
// m2 = status2 // Error 不能将类型“Status1.End”分配给类型“string”。
status3 = m2
m2 = status3
console.log(m2) // end


/**
 * 类的兼容性
 * - 只有实例成员和方法会比较
 * - 构造函数和静态成员不会检查
 * - 私有的和受保护的成员必须来自于相同的类
 */

class Animal8 {
  feet: number;
  // 构造函数
  constructor(name: string, numFeet: number) {}
  // 静态成员
  static age:string = '19' 
  static getAge(){
    console.log(Animal8.age)
  }
}
class Size8 {

  feet: number;
  // 构造函数
  constructor(meters: number) {}
  static age:number = 18
  static getAge(){
    console.log(Size8.age)
  }
}

let a8: Animal8;
let s8: Size8;

a8 = s8; // OK
s8 = a8; // OK

// protected受保护的 和 private私有的的成员必须来自相同的类

class Animal9{
  private feet2:number
  protected feet:number
}
class Cat9 extends Animal9{
}
class Size9{
  private feet2:number
  protected feet:number
}
let a9:Animal9
let c9:Cat9
let s9:Size9
// c9 = s9 // Error:不能将类型“Size9”分配给类型“Cat9”。属性“feet”受保护，但类型“Size9”并不是从“Animal9”派生的类
a9 = c9 // ok


/**
 * 泛型的类型兼容性
 * - 没有成员使用泛型，不会有兼容问题
 * - 但是成员一旦使用了泛型，就无法兼容了
 */

interface Person8<T> {
  name:string,
  value:T
}

let x8 : Person8<string>
let y8 : Person8<number>
// 这里由于泛型 T 被成员 name 使用了,所以类型不再兼容。
// x8 = y8 // 不能将类型“Person8<string>”分配给类型“Person8<number>”。不能将类型“string”分配给类型“number”。
// y8 = x8 // 


/**
 * 课后题
 */
interface Person9 {
   name: string;
	age: number;
  weight: number;
  // with:number
}
interface An9 {
	name: string;
	age: number;
	weight: number;
}
function getPersonName(p: Person9) {
  // if(p instanceof Person9){
  //     console.log(p.name)
  //     return p.name
  // }else{
  //  throw Error('Type error') 
  // }
	// ...
}

let p9:Person9 = {
  name:'Tom1',
  age:10,
  weight:200,
  // with:200
}
let An9:An9 = {
  name:'Tom2',
  age:10,
  weight:200
}
getPersonName(p9)
getPersonName(An9)
