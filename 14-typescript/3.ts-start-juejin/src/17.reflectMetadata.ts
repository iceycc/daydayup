/**
 * Reflect Metadata
 * 主要作用就是在声明的时候「添加和读取元数据」
 * 安装：npm i reflect-metadata --save
 * 然后在 tscofing.json配置 emitDecoratorMetadata
 */
// namespace reflectMetadata{
//   @Reflect.metadata('name', 'A')
//   class A {
//     @Reflect.metadata('hello', 'world')
//     public hello(): string {
//       return 'hello world'
//     }
//   }
//   Reflect.getMetadata('name', A) // 'A'
//   Reflect.getMetadata('hello', new A()) // 'world'
// }