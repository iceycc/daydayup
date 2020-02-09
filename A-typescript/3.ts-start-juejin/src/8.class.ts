// 类 Class

/**
 * 抽象类 abstract
 * - 作为其他派生类的基类使用
 * - 不能实例化
 * - 可以实现包含成员的具体细节
 */

abstract class Animal {
  abstract makeSound(): void;
  move(): void {
    console.log('roaming the earch...');
  }
}
// new Animal() 
// Error :抽象类 abstract
// - 作为其他派生类的基类使用
// - 不能实例化
// - 可以实现包含成员的具体细节
// 无法创建抽象类的实例。

class Cat extends Animal {
  // Error1 :非抽象类“Cat”不会实现继承自“Animal”类的抽象成员“makeSound”。
  // 解决：内部定义一个makeSound方法
  makeSound() {
    console.log('miao miao')
  }
}
let cat = new Cat()
cat.makeSound()
cat.move()

/**
 * 访问限定符
 */
class Car {
  public run(name='') {
    console.log(name +' 启动...')
    this.say(name)
    this.move(name)
  }
  private move(type:string){ //  
    console.log(type + ' 移动...')
  }
  protected say(name:string){
    console.log( 'I am a '+name+' car')
  }
}

class GTR extends Car {
  public init(name='') {
    this.run(name + ' init')
    this.say(name) 
    // this.move(name) // 属性“move”为私有属性，只能在类“Car”中访问。
  }
}
const car = new Car()
const gtr = new GTR()
/**
 * public：可以被外部访问
 * ts中所有成员默认都是public，
 */
// Car.run() // Error 类型“typeof Car”上不存在属性“run”。
car.run('Car') // 启动...
gtr.init('gtr')
/**
 * private：私人的，属性为私有属性，只能在类中访问。子类也不可以访问
 */
// car.move('out') // Error: 属性“move”为私有属性，只能在类“Car”中访问。

/**
 * protected：属性受保护，只能在类及其子类中访问。。
 */
// car.say('car') // Error:属性“say”受保护，只能在类“Car”及其子类中访问。


/**
 * class 可以作为接口
 */
  // 属性的话需要要默认值，方法的话设置结构就行。
  // 不设置默认值就 Error 属性“xxx”没有初始化表达式，且未在构造函数中明确赋值。解决如下
      // 1 向属性添加为定义的类型 undefined
      // 2 向属性添加明确的赋值断言 !
      // 3 strictPropertyInitialization设置为false
 // props的类型
class Props {
  public children: never[] = []
  public speed!: number
  public height: number = 160
  public animation: string = 'easeInOutQuad'
  public isAuto: boolean = true
  public autoPlayInterval: number = 4500
  public afterChange: (() => {}) | undefined
  public beforeChange!:() =>void;
  public selesctedColor: string = 'red'
  public showDots: boolean = true
}

const defaultProps = new Props() // 这样其实就可以作为带默认值的接口使用了
defaultProps.speed = 50
defaultProps.beforeChange = function(){
  console.log('1')
}
console.log(defaultProps.height)
