// 高级类型之交叉类型、联合类型、类型别名


/**
 * 交叉类型
 */

interface IAnyObject {
  [prop: string]: any
}

function mixin<T extends IAnyObject, U extends IAnyObject>(first: T, second: U): T & U {
  const result = <T & U>{};
  for (let id in first) { 
    (<T>result)[id] = first[id];
  }
  for (let id in second) {
    if (!result.hasOwnProperty(id)) {
      (<U>result)[id] = second[id];
    }
  }

  return result;
}

const x9 = mixin({ a: 'hello' }, { b: 42 ,a:'2'});
// 现在 x 拥有了 a 属性与 b 属性
console.log
const a = x9.a;
const b = x9.b;

/**
 * 联合类型
 */

function formatCommandline(command: string[] | string) {
  let line = '';
  if (typeof command === 'string') {
    line = command.trim();
  } else {
    line = command.join(' ').trim();
  }
}


// 交叉类型和联合类型比较：
interface A {
  name: string,
  age: string,
  sayName: (name: string) => void
}
interface B {
  name: string,
  age: number,
  gender: string,
  sayGender: (gender: string) => void
}

let a91: A | B // 联合类型 取公共的成员，类型并且取并集
let a92: A & B // 交叉类型 合并成员，相同成员取公共的类型，不公共返回never类型

// a91.age = 1
// a91.age = '1'
// a91.name = 'Tom'
// a92.age  // (property) age: never


const obj9 = <string | {}>{}
const obj10 = <[] & number>{}
for(let i in obj10){
  console.log(i)
}

/**
 * 类型别名 type 
 * type 
    * 声明方式除了对象之外还可以定义交叉、联合、原始类型等，
    * 类型声明的方式适用范围显然更加广泛。
 * interface
    * 实现接口的extends和implements
    * 实现接口的合并
 */

type some = boolean | string

const b9: some = true // ok
const c92: some = 'hello' // ok
// const d92: some = 123 // Error 不能将类型“123”分配给类型“some”

type Container<T> = { value: T };

type Tree<T> = {
  value: T;
  left: Tree<T>;
  right: Tree<T>;
}
let tree9:Tree<string> = {
  value:'33',
  left:{} as Tree<string>,
  right:{} as Tree<string>
  
}


type Alias = { num: number }
interface Interface {
    num: number;
}

declare function aliased1(arg: Alias): Alias;
declare function interfaced(arg: Interface): Interface;
aliased1({num:2})
interfaced({num:1})
