// function greeter(person: string): string
// 函数返回值自动加上返回值类型了，这是typescript自带的类型推断
function greeter(person: string) {
  return "hello" + person
}

const user = 'Tom'
console.log(greeter(user))

/**
 * 基本数据类型
 */

/**
 *  1. 布尔类型 boolean。
 */
const isLoading: boolean = false
// 注意ts中标示类型的话是小写，大写代表的是Javascript中的对象。
// 这里需要提示一下，很多 TypeScript 的原始类型比如 boolean、number、string等等，
// 在JavaScript中都有类似的关键字 Boolean、Number、String，后者是 JavaScript 的构造函数，
// 比如我们用 Number 用于数字类型转化或者构造 Number 对象用的，而 TypeScript 中的 number 类型仅仅是表示类型，两者完全不同。

/**
 * 2. 数字 number：二进制、十进制、十六进制都可以用number标示
 */
const decLiteral: number = 6
const hexLiteral: number = 0xf00d // 16进制
const binaryLiteral: number = 0b1010 // 2进制
const octalLiteral: number = 0o744 // 8进制

/**
 * 3. 字符串 string
 */
const book: string = 'ts-start'

/**
 * 4. 空值 void
 */
// 表示没有任何类型，当一个函数没有返回值时，其返回值类型是 void：
function warn(): void {
  // 使用console的时候，必须加dom的编译辅助库。
  //  "lib": ["dom"],     
  // 否则报错：
  // Cannot find name 'console'. Do you need to change your target library? Try changing the `lib` compiler option to include 'dom'.ts(2584)
  console.log('warn')
}
warn()
// null和undefined只能只能给any和各自的类型
// (undefined是个例外能赋值给void)
// null要想设置给void，strictNullChecks要设置为false
// const void_a:void = null
const void_b: void = undefined

/**
 *  5. Null 和 Undefined
 */
let undefined_a: undefined = undefined;
let null_b: null = null;

// strictNullChecks设置为false时，
//  null 和 undefined 是所有类型的子类型，
// 就是说你可以把 null 和 undefined 赋值给 number，string等 类型的变量。
// 但是不推荐：
// 正式项目中一般都是开启 --strictNullChecks 检测的
// 即 null 和 undefined 只能赋值给 any 和它们各自
// (一个例外是 undefined 是也可以分配给void)，可以规避非常多的问题。

// let number_a: number = undefined; 
// let string_b: string = null; 

/**
 * 6. Symbol
 */
// 使用Symbol的时候，必须加es6的编译辅助库。es2015 或者 es6
//  "lib": ["dom","es6"],     
// 否则报错：
// Cannot find name 'Symbol'. Do you need to change your target library? Try changing the `lib` compiler option to es2015 or later.
// Symbol 是在ES2015之后成为新的原始类型,它通过 Symbol 构造函数创建:
const sym1 = Symbol('key1');
const sym2 = Symbol('key2');
Symbol('key1') === Symbol('key1') // false

/**
 * 7. BigInt
 */

// 双精度出现的问题：
const o_max = Number.MAX_SAFE_INTEGER;
const o_max1 = o_max + 1
const o_max2 = o_max + 2
console.log('双精度出现的问题', o_max1 === o_max2) //true ？？？？

// 利用BigInt解决
// 注意，
//  1 这里是 JavaScript 代码，并不是 typescript。
//  2 target设置es5时是无法使用的
// 错误1：找不到名称“BigInt”。=> 解决："lib": ["ESNext"]  或   "target": "ESNext"（该方法肯定不行的）
// 错误2: 上面1如果选用"lib": ["ESNext"]而不是修改target，1n 和 2n 这种写法也会报错：
//    BigInt literals are not available when targeting lower than ESNext.
//    是因为Bigint是一项新功能， "target": "es5"是不支持的。如果想支持设置为"target": "ESNext"
const max: bigint = BigInt(Number.MAX_SAFE_INTEGER);
// const max1:bigint = max + 1n // BigInt literals are not available when targeting lower than ESNext.
// const max2:bigint = max + 2n // BigInt literals are not available when targeting lower than ESNext.
const max1: bigint = max + BigInt(1)
const max2: bigint = max + BigInt(2)
console.log('bigint解决双精度问题', max1 === max2)


declare let number_foo: number;
declare let bigint_bar: bigint;
// number_foo = bigint_bar; // 不能将类型“bigint”分配给类型“number” error: Type 'bigint' is not assignable to type 'number'.
// bigint_bar = number_foo; // 不能将类型“number”分配给类型“bigint” error: Type 'number' is not assignable to type 'bigint'.



/**
 *  TypeScript中常见的其他数据类型
 */

/**
 * 计算机类型系统理论中的顶级类型：Top type
 * 通用超类型，https://en.wikipedia.org/wiki/Top_type
 * any unknown
 * 相同点：unknown 与 any 的不同之处,虽然它们都可以是任何类型
 * 不同点：
 *    是当 unknown 类型被确定是某个类型之前,它不能被进行任何操作比如实例化、getter、函数执行等等
 *    unknown 是更安全的
 */
// 1 any
// 不优先考虑
let notSure: any = 4;
notSure = "maybe a string instead";
// 2 unknown 
//    TypeScript 3.0 引入了新类型,是 any 类型对应的安全类型。
let any_value: any;
any_value = true;             // OK
any_value = 1;                // OK
any_value = "Hello World";    // OK
any_value = Symbol("type");   // OK
any_value = {}                // OK
any_value = []                // OK
// any_value.foo.bar;  // OK
// any_value();        // OK
// new any_value();    // OK
// any_value[0][1];    // OK

let unknown_value: unknown;
unknown_value = true;             // OK
unknown_value = 1;                // OK
unknown_value = "Hello World";    // OK
unknown_value = Symbol("type");   // OK
unknown_value = {}                // OK
unknown_value = []                // OK
// 对象的类型为 "unknown"
// unknown_value.foo.bar;  // ERROR  对象的类型为 "unknown"
// unknown_value();        // ERROR  对象的类型为 "unknown"
// new unknown_value();    // ERROR  对象的类型为 "unknown"
// unknown_value[0][1];    // ERROR  对象的类型为 "unknown"

// unknown 可以缩小缩小其类型范围。类型保护
function getValue(value: unknown): string {
  if (value instanceof Date) { // 这里由于把value的类型缩小为Date实例的范围内,所以`value.toISOString()`
    return value.toISOString();
  }

  return String(value);
}




/**
 * 比如类型系统中的底部类型: Bottom type
 * 没有类型的类型
 * never
 *    永远不存在值的类型 
 *    两个场景never比较常见
 *        抛出异常
 *        空数组，永远为空
 */
// 抛出异常的函数永远不会有返回值
function error(message:string):never{
  throw new Error(message);
}
// 空数组，而且永远是空的
const empty:never[] = []

/**
 * 1、非原始类型(non-primitive type)
 *  Object、数组、元组等
 */

/**
 * 1) 数组
 */
//  1. 使用泛型
const numList:Array<number> = [1,1,2,3]
//  2. 元素类型后接上[]
const strList:string[] = ['2','2']

/**
 *  2) 元组 Tuple
 */
// Tuple与Array类似，标示一个元素数量、类型已知的数组，各个元素类型不必相同
let x_Tuple:[string,number];
// x_Tuple = ['Tom',15,false] // Error 长度多
// x_Tuple = ['Tom'] // Error 长度少
// x_Tuple = [15,'Tom'] // Error 顺序导致类型不一致
x_Tuple = ['Tom',15]

// 可以把元组看成严格版的数组，[string,number]
interface Tuple_S_N extends Array<string | number>{
  0:string,
  1:number,
  length:2
}
let y_Tuple:Tuple_S_N
y_Tuple = ['Tom',20]

// 元组越界问题，可以push元素进去，并且可以打印出来，但是无法直接访问。
const tuple:[string,number] = ['Jam',20]
// tuple.push(false) // Error
tuple.push(23)
console.log('元组越界',tuple) // 打印无错误：元组越界  ["Jam", 20, 23]
// tuple[2] // Error 直接访问报错 ：Tuple type '[string, number]' of length '2' has no element at index '2'.ts(2493)


/**
 * 3）对象Object
 * 除去 number、string、boolean
 */
let obj_value:object;
enum Direction { // 枚举类型
  Center = 1
}
obj_value = Direction
obj_value = [1]
obj_value = [2,'Tom']
obj_value = {}
