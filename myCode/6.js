// // function Person() {

// // }
// // // 虽然写在注释里，但是你要注意：
// // // prototype是函数才会有的属性
// // Person.prototype.name = 'Kevin';
// // var person1 = new Person();
// // var person2 = new Person();
// // console.log(person1.name) // Kevin
// // console.log(person2.name) // Kevin



// // class Sleep {
// //     constructor(timeout) {
// //       this.timeout = timeout;
// //     }
// //     then(resolve, reject) {
// //       const startTime = Date.now();
// //       setTimeout(
// //         () => resolve(Date.now() - startTime),
// //         this.timeout
// //       );
// //     }
// //   }
  
// //   (async () => {
// //     const sleepTime = await new Sleep(1000);
// //     console.log(sleepTime);
// //   })();
// //   // 1000



//   function sleep(interval) {
//     return new Promise(resolve => {
//       setTimeout(resolve, interval);
//     })
//   };
  
//   // 用法
//   async function one2FiveInAsync() {
//     for(let i = 1; i <= 5; i++) {
//       console.log(i);
//       await sleep(1000);
//     }
//   }
  
//   one2FiveInAsync();


//   async function f() {
//     await Promise.reject('出错了')
//       .catch(e => console.log(e));
//     return await Promise.resolve('hello world');
//   };
  
//   f()
//   .then(v => console.log(v))

// var obj = new Proxy({}, {
//     get: function (target, propKey, receiver) {
//       console.log(`getting ${propKey}!`);
//       return Reflect.get(target, propKey, receiver);
//     },
//     set: function (target, propKey, value, receiver) {
//       console.log(`setting ${propKey}!`);
//       return Reflect.set(target, propKey, value, receiver);
//     },
//     defineProperty(target, key, attribute) {
//         console.log('defineProperty');
//         Reflect.defineProperty(target, key, attribute);
//       }
//   });
//   obj.count = 1
//   console.log(obj.count)

//   // Reflect.has 
//   console.log('count' in obj)
//   console.log(Reflect.has(obj,'count'))

//   obj.name = 'www'
//   Reflect.deleteProperty(obj,'name')

//   function Person(name){
//       this.name = name
//   }
//   let p =Reflect.construct(Person,['wby'])
//   console.log(p.name)

//   const ages = [11, 33, 12, 54, 18, 96];

// // 旧写法
// console.log(Math.min(...ages))
// const youngest = Math.min.apply(Math, ages);
// // const oldest = Math.max.apply(Math, ages);
// const oldest = Reflect.apply(Math.max,null,ages)

// // const type = Object.prototype.toString.call(youngest);
// const type =Reflect.apply(Object.prototype.toString,youngest,[])
// console.log('young',youngest)
// console.log('old  ',oldest)
// console.log(type)
// var myObject = {};
// Object.defineProperty(myObject, 'hidden', {
//   value: true,
//   enumerable: false,
// });

// // 旧写法
// var theDescriptor = Object.getOwnPropertyDescriptor(myObject, 'hidden');
// console.log(theDescriptor)
// // 新写法
// var theDescriptor = Reflect.getOwnPropertyDescriptor(myObject, 'hidden');
// console.log(theDescriptor)

// let s = Symbol();

// let obj = {
//   [s]: function (arg) { console.log(arg) }
// };

// obj[s](123);((o))

// let o = Symbol.for('o')
// let o1 = Symbol.for('o')
// console.log(o===o1)
// console.log(Symbol.keyFor(o))
class Point {
}
class ColorPoint extends Point {
  constructor(x, y, color) {
    // super(x, y); // 调用父类的constructor(x, y)
    this.color = color;
  }

  toString() {
    return this.color + ' ' + super.toString(); // 调用父类的toString()
  }
}
let c = new ColorPoint(1,2,'red')