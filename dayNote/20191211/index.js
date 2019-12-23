/**
 * 1. Object.entries()的用法?与for in的区别
 */
// 用法：返回一个对象自身可枚举的键值对的数组。排列顺序和for in一致。区别是for in 会枚举出原型链中的属性
// 语法：Object.entries(obj)
// 参数：obj 可以返回起枚举属性的键值对的对象
// 返回值：给定对象自身的可枚举的键值对数组
const obj = {
  foo: 'bar',
  baz: 42
};
console.log(Object.entries(obj)); // [ ['foo', 'bar'], ['baz', 42] ]

// array like object 数组
const obj = {
  0: 'a',
  1: 'b',
  2: 'c'
};
console.log(Object.entries(obj)); // [ ['0', 'a'], ['1', 'b'], ['2', 'c'] ]

// array like object with random key ordering
const anObj = {
  100: 'a',
  2: 'b',
  7: 'c'
};
console.log(Object.entries(anObj)); // [ ['2', 'b'], ['7', 'c'], ['100', 'a'] ]

// getFoo is property which isn't enumerable
const myObj = Object.create({}, {
  getFoo: {
    value() {
      return this.foo;
    }
  }
});
myObj.foo = 'bar';
console.log(Object.entries(myObj)); // [ ['foo', 'bar'] ]

// non-object argument will be coerced to an object
console.log(Object.entries('foo')); // [ ['0', 'f'], ['1', 'o'], ['2', 'o'] ]

// iterate through key-value gracefully
const obj = {
  a: 5,
  b: 7,
  c: 9
};
for (const [key, value] of Object.entries(obj)) {
  console.log(`${key} ${value}`); // "a 5", "b 7", "c 9"
}

// Or, using array extras
Object.entries(obj).forEach(([key, value]) => {
  console.log(`${key} ${value}`); // "a 5", "b 7", "c 9"
});

// 将Object转换为Map
const obj = {
  name:'wby',
  age:'20',
  getName(){
    return obj.name
  }
}
let map = new Map(Object.entries(obj))
console.log(map.get('getName')())


// 写vue/reac项目是为什么要在列表组件中写key

