/**
function createArray<T>(length:number,val:T):Array<T>{
   let result:T[] = [];
   for(let i=0;i<length;i++){
       result[i]=val;
   }
   return result;
}
let r = createArray<string>(3,'a');
console.log(r);
*/
//类数组
/**
function sum(...params:number[]){
  let args:IArguments =   arguments;
  for(let i=0;i<args.length;i++){
      console.log(args[i])
  }
}
let root = document.getElementById('root');
let children:HTMLCollection = root.children;
children.length;
let nodeList:NodeList = root.childNodes;
nodeList.length;
let input = null;
(input  as HTMLInputElement).value;

 */
/**

 class MyArray<T>{
  private list:T[]=[]
  add(val:T){
    this.list.push(val);
  }
  getMax():T{
      let result:T = this.list[0];
      for(let i=1;i<this.list.length;i++){
          if(this.list[i]>result){
            result = this.list[i];
          }
      }  
      return result;
  }
 }
 let array = new MyArray<string>();
 array.add('a');
 array.add('b');
 array.add('c');
 console.log(array.getMax())

 * 
 */
/* 
 //泛型接口  这个泛型是用来约束函数
 interface Calculate{
     <T>(a:T,b:T):T
 }
 let first:Calculate= function<T>(a:T,b:T):T{
    return b;
 }
 let result = first<number>(1,2);
 console.log(result);

//泛型是否能有多个，名字是否固定的？
//默认泛型类型
function swap<A=number,B=number>(tuple:[A,B]):[B,A]{
  return [tuple[1],tuple[0]];
}
let r2 = swap([1,2]);
console.log(r2);

//默认类型
//泛型约束 指的是在函数中使用泛型的时候，由于事先并不知道泛型的类型，所以不能访问泛型上的属性
interface LengthWise{
    length:number
}
function len<T extends LengthWise>(a:T,b:T):number{
    return a.length+b.length;
}
/* class MyString implements LengthWise{
    length:10;
}
let s1 = new MyString();
let s2 = new MyString(); 
let r3 = len<string>('a','b');


interface Cart<T>{
  list:T[]
}
let cart:Cart<string> = {list:['1','2']};
//泛型类型别名
type t = number|string;
type Cart<T> = {list:T[]} | T[];
let c1:Cart<string> = {list:['a','b']};
let c2:Cart<string> = ['a','b']

interface User{
    name:string
}
type myUser = User|string|1;

let u1:User = {name:'zhufeng'};
let u2:myUser = {name:'zhufeng'};

 
//接口兼容性

interface Animal{
    name:string;
    age:number
}
interface Person{
    name:string;
    age:number;
    gender:boolean
}
function getName(animal:Animal):string{
    return animal.name;
}
let person:Person = {
    name:'zhufeng',age:10,gender:true
}
//getName(Person);

let num:string|number;
let str:string = 'zhufeng';
num = str;
let num2 : {
    toString():string
}
num2 = 'dd';
//类的兼容性
class Animal4{
    name:string
}
class Bird4 extends Animal4{
    swing:number
}
//在TS是结构类似系统，只会比较结构而不在意类型
let a:Animal4;
a = {name:'zhufeng'};

class Animal5{
  name:string;
}
class Bird5 {
    name:string;
    age:number
}
//let a1:Animal5 = new Bird5();
//let b1:Bird5 = new Animal5();

//函数的兼容性
type sumFunc = (a:number,b:number)=>number;
let sum:sumFunc;
function f1(a:number,b:number):number{
    return a+b;
}
sum = f1;
function f2(a:number):number{
    return a;
}
sum = f2;
function f3():number{
    return 0;
}
sum = f3;
function f4(a:number,b:number,c:number):number{
    return a+b+c;
}
//sum = f4;
function f5(a:number,b:number):string{
    return '';
}
//sum = f5;
// 协变
type logFunc = (a:number|string)=>void;
let log:logFunc;
log = (a:number)=>{

}
log = (a:number|string|boolean)=>{

}
*/
//泛性的兼容性
interface Empty<T>{

}
let x:Empty<string>;
let y:Empty<number>;
x = y;

interface NotEmpty<T>{
  data:T
}
let x1:NotEmpty<string>; //{data:string}
let y1:NotEmpty<number>; //{data:number}
//x1 = y1;
//枚举的兼容性
enum Colors{
    Red,
    Yellow
}
let num:number = Colors.Red;
num = 0;
//num= '1';



