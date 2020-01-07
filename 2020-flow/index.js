/*@flow*/


// 类型推断
// function split(str) {
//     return str.split(' ')
// }
// split(11)

// 类型注释
function add(x: number, y: number): number {
  return x + y
}
add('Hello', 11)

// 数组
var arr: Array<number> = [1, 2, 3]
arr.push('Hello')

// 类和对象
class Bar {
  x: string;           // x 是字符串
  y: string | number;  // y 可以是字符串或者数字
  z: boolean;

  constructor(x: string, y: string | number) {
    this.x = x
    this.y = y
    this.z = false
  }
}

var bar: Bar = new Bar('hello', 4)

var obj: { a: string, b: number, c: Array<string>, d: Bar } = {
  a: 'hello',
  b: 11,
  c: ['hello', 'world'],
  d: new Bar('hello', 3)
}


// Null
// 若想任意类型 T 可以为 null 或者 undefined，只需类似如下写成 ?T 的格式即可。
var foo: ?string = null


// Flow 提出了一个 libdef 的概念