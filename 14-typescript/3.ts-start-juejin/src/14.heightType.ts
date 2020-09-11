
/**
 * 可辨识联合类型
 */



namespace HeightType14 {
  /**
   * 字面量类型
   * - 真值字面量类型（boolean literal types）
   * - 值字面量类型（boolean literal types）
   * - 枚举字面量类型（enum literal types）
   * - 大整数字面量类型（bigInt literal types）
   * - 字符串字面量类型（string literal types）
   */
  const a: 2333 = 2333 // ok
  const ab: 0b10 = 2 // ok
  const ao: 0o114 = 0b1001100 // ok
  const ax: 0x514 = 0x514 // ok
  // const b : 0x1919n = 6425n // ok
  const c: 'xiaomuzhu' = 'xiaomuzhu' // ok
  const d: false = false // ok

  // const g: 'github' = 'pronhub' // Error 不能将类型“"pronhub"”分配给类型“"github"”


  type Direction = 'North' | 'East' | 'South' | 'West';

  function move(distance: number, direction: Direction) {
    // ...
  }
  move(1, 'East')

  /**
   * 类型字面量
   * 类型字面量(Type Literal)不同于字面量类型（Literal Type),它跟 JavaScript 中的对象字面量的语法很相似:
   */

  type Foo = {
    baz: [
      number,
      'xiaomuzhu'
    ];
    toString(): string;
    readonly [Symbol.iterator]: 'github';
    0x1: 'foo';
    "bar": 12n;
  };

  interface FooI {
    baz: [
      number,
      'xiaomuzhu'
    ];
    toString(): string;
    readonly [Symbol.iterator]: 'github';
    0x1: 'foo';
    "bar": 12n;
  }
  let foo: Foo
  let fooI: FooI
  // foo.bar

  /**
   * 可辨识联合类型
   * - 找到可辨识标签
   * - 一个类型名包含联系类型
   * - 利用类型守卫：使用if或switch判断属于哪个作用域
   */
  interface Info {
    username: string
  }
  interface UserAction { //  用于创建用户和删除用户
    id?: number // id在创建用户时不需要，但是删除用户时必须要。
    action: 'create' | 'delete'
    info: Info
  }
  // 上面方法无法区分在create和delete两种情况下是否需要
  // 下面字面量类型进行区分
  type UserAction2 = | {
    id: number
    action: 'delete'
    info: Info
  } |
  {
    action: 'create'
    info: Info
  }
  const UserReducer = (userAcion: UserAction2) => {
    // console.log(userAcion.id) // Error 类型“{ action: "create"; info: Info; }”上不存在属性“id”。
    switch (userAcion.action) {
      case 'create':
        // console.log(userAcion.id) //Error
        break;
      case 'delete':
        console.log(userAcion.id) // Ok
    }
  }


}