// 枚举
/**
 * 数字枚举
 */
// 声明一个枚举时，虽然没有给他们赋值，默认值时数字类型，默认从0开始依次累加：
// 如果给第一个值赋值后，后面的会根据前面的依次累加，
enum Directions {
  Up = 10,
  Down,
  Left,
  Right
}
console.log(Directions.Up) // 10
console.log(Directions[10]) // Up // 反向映射
console.log(Directions.Down)
console.log(Directions.Left)
console.log(Directions.Right)

/**
 * 字符串枚举
 * 枚举的值可以是字符串
 */
enum DirectionsString {
  Up = 'Up',
  Down = 'Down',
  Left = 'Left',
  Right = 'Right'
}


/**
 * 异构枚举
 * 字符串枚举和数字枚举混合使用
 * 可行的但是不推荐
 */

 enum BooleanNum {
   No = 1,
   Yes = "YES"
 }

 /**
  * 反向映射
  * - 反向映射时数字枚举序号不存在的返回undefined
  * - 对字符串枚举不可行
  */

 console.log(Directions[10]) // Up // 反向映射
 console.log(BooleanNum[0]) // undefined
 console.log(BooleanNum[1]) // No
//  console.log(BooleanNum['YES']) //  反向映射对字符串枚举不可行


/**
 * 枚举的本质
 */

// var Directions;
// (function (Directions) {
//     Directions[Directions["Up"] = 10] = "Up";
//     Directions[Directions["Down"] = 11] = "Down";
//     Directions[Directions["Left"] = 12] = "Left";
//     Directions[Directions["Right"] = 13] = "Right";
// })(Directions || (Directions = {}));
// console.log(Directions.Up);
// console.log(Directions[10]);
// console.log(Directions.Down);
// console.log(Directions.Left);
// console.log(Directions.Right);


/**
 * 常量枚举
 * 常用枚举的作用，下面的变量已经用过枚举了，之后就没用了，也没必要存在与js里。
 * 如果你非要 TypeScript 保留对象 Direction ,那么可以添加编译选项 --preserveConstEnums
 * "build:w": "tsc -w --preserveConstEnums",
 */

 const enum const_Direction {
   Up = 'up'
 }
 const con_a = const_Direction.Up

// 编译后 => var con_a = "up";


/**
 * 联合枚举与枚举成员的类型
 * 假设枚举所有的成员都是字面量类型的值，那么枚举每个成员和枚举值本身都可以作为类型使用。
 */
enum DirectionF {
  Up= 'Up', // 字符串字面量
  Down = 2, // 数字字面量
  Left = -3, // 应用了 一元 - 符号的数字字面量
  // Right = false // Error
}
console.log(DirectionF.Up === 'Up') // 把成员当成值使用

type c_Dir = 'Up'
declare let b_Dir:c_Dir // 定义一个类型 b_Dir
// b_Dir = 1 // Error 不能将类型“1”分配给类型“"up"”。
// b_Dir = DirectionF.Up // ok

/**
 * 联合枚举类型
 */

 enum DirectionD{
   Up,
   Down,
   Left,
   Right
 }
 enum AnimalD{
  Dog,
  Cat
}
 declare let d_a:DirectionD
// 我们把 a 声明为 Direction 类型，
// 可以看成我们声明了一个联合类型 Direction.Up | Direction.Down | Direction.Left | Direction.Right，
// 只有这四个类型其中的成员才符合要求
console.log(AnimalD.Dog)

// d_a = DirectionD.Up // ok 0
// d_a = DirectionD.Down // ok
// d_a = AnimalD.Dog // Error 0 不能将类型“AnimalD.Dog”分配给类型“DirectionD”


/**
 * 枚举合并
 * 分开声明枚举,他们会自动合并
 */
enum DirectionH {
  Up = 'Up',
  Down = 'Down',
  Left = 'Left',
  Right = 'Right'
}

enum DirectionH {
  Center = 1
}
// 编译后 
// var DirectionH;
// (function (DirectionH) {
//     DirectionH["Up"] = "Up";
//     DirectionH["Down"] = "Down";
//     DirectionH["Left"] = "Left";
//     DirectionH["Right"] = "Right";
// })(DirectionH || (DirectionH = {}));
// (function (DirectionH) {
//     DirectionH[DirectionH["Center"] = 1] = "Center";
// })(DirectionH || (DirectionH = {}));


/**
 * 为枚举添加静态方法
 * 利用命名空间
 */
enum Month {
  January,
  February,
  March,
  April,
  May,
  June,
  July,
  August,
  September,
  October,
  November,
  December,
}
namespace Month {
  export function isSummer(month: Month) {
      switch (month) {
          case Month.June:
          case Month.July:
          case Month.August:
              return true;
          default:
              return false
      }
  }
}

console.log(Month.isSummer(Month.January)) // false