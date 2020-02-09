/**
 * 接口 interface
 * TypeScript的核心原则之一对值的结构进行类型校验，填鸭辨型法
 * 接口的作用就是：为这些类型命名和为你的代码或者第三方代码定义契约
 */

 /**
  * 接口的使用
  * 隐式any：Error1:参数“user”隐式具有“any”类型
  */

 /**
  *  可选属性：？
  *  只读属性：readonly 无法对他进行修改。修改时报错 Error:Cannot assign to 'isMale' because it is a read-only property
  *  函数类型
  */
  interface say2{
    (word:string):string
  }
  interface User {
    name:string,
    age?:number, // 可选属性 (property) User.age?: number | undefined
    readonly isMale:boolean // 只读属性：
    say:(word:string)=>string, // 函数类型
    say2:say2 // 函数类型
  }
  const getUserName = (user:User) => user.isMale 

  /**
   * 属性检查
   */
  interface Config{
    width?:number,
    // [propName:string]: any // 索引签名
  }
  function CalulateAreas(config:Config):{area:number}{
    let square = 100
    if(config.width){
      square = config.width * config.width
    }
    return {
      area:square
    }
  }
  let mySquare;
  // mySquare = CalulateAreas({widdth:4}) // 默认  Error 类型“{ widdth: number; }”的参数不能赋给类型“Config”的参数。对象文字只能指定已知的属性，但“widdth”中不存在类型“Config”。是否要写入 width?
  mySquare = CalulateAreas({width:4}) // 属性检查
  // 如果非要传未进行类型定义的参数
  // 第一种：类型断言
  mySquare = CalulateAreas({widdth:5} as Config)

  // 第二种添加字符串索引签名。这样新传入的参数就无所谓啦
  // interface Config{
  //   width?:number
  //   [propName:string]: any
  // }

  // 第三种，将字面量赋值给一个新的变量 不推荐
  let options = {
    width:4,
    widdth:5
  };
  mySquare = CalulateAreas(options)

  /**
   * 可索引类型
   */
interface Phone {
    [name: string]: string
}

interface BaseUser {
    name: string
    age?: number
    readonly isMale: boolean
    say: () => string
    phone: Phone
}
interface SuperUser {
  broadcast:()=>void
}
/**
 * 继承接口
 * 可以继承多个
 */
interface VIPUser extends BaseUser,SuperUser{
}
