// // 默认修饰符。
// // 对同一包内对类都是可见对
// // 接口对变量都隐式声明为 public static final，
// // 接口内对方法默认访问权限为public
// String version = "1.5.1";
// boolean processOrder(){
//     return true;
// }

// // 私有访问符 private
// // 最严格对访问级别
// // 只能被所属类访问，变量、方法，构造方法
// public class Test{
//     private String name = 'Text';
//     public String getName(){
//         return this.name;
//     }
//     public void setName(String name){
//         this.name = name
//     }
// }