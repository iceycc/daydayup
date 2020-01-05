/**
//交叉类型 把多种类型全并为一种
interface Bird{
    name:string|number,
    fly():void
}
interface Person{
    name:string|number;
    eat():void
}
type birdPerson = Bird & Person;
let bp:birdPerson = {
    name:'zhufeng',
    fly(){},
    eat(){}
}
 */
//typeof 可获取一个变量的类型
/* type Person = {
   name:string,
   age:number
} */
/*
let p = {
    name:'zhufeng',
    age:10
}
type Person2 = typeof p;//{name:string,age:number}
let p2:Person2 = {
    name:'jiagou',
    age:10
}
function getName(p:Person2){}
//访问索引操作符 我们可以通过[]获取一个类型的子类型
interface Person{
    name:string,
    age:10,
    job:{name:string},
    interests:{name:string,score:number}[]
}
let j:Person['job'] = {name:'frontend'};
let interest:Person['interests'][0] = {name:'basketball',score:10};

//keyof 索引类型查询操作符
interface Person{
    name:string,
    age:10,
    gender:'male'|'female',
}
type personKey = keyof Person;//[name,age,gender] Object.keys();
function attr(obj:Person,key:personKey):any{
    return obj[key];
}
let p:Person = {name:'zhufeng',age:10,gender:'male'};
console.log(attr(p,'name'))
//映射类型 用in操作符批量定义属性
enum Gender{
    Male,Female
}
interface Person {
    name:string
    age:10
    gender:Gender
}
type OptionalPerson = {
  [key in keyof Person]?:Person[key]
}

let p:OptionalPerson = {
    age:10,
    gender:Gender.Male
}

//Partial把每一项都变成可选的
interface A{
    a1:string,
    a2:number;
    a3:boolean
}
let a1:A = {a1:'1',a2:1,a3:true};
type Partials<T> = {[key in keyof T]?:T[key]};
type PartialA = Partial<A>;
let a2:PartialA = {};

//Required
interface A{
    a1?:string,
    a2?:number;
    a3?:boolean
}
let a1:A = {};
type Partials<T> = {[key in keyof T]-?:T[key]};
type RequiredA = Partials<A>;
let a3:RequiredA = {a1:'',a2:1,a3:true};

interface A{
    a1:string,
    a2:number;
    a3:boolean
}
//let a1:A = {};
type Readonlys<T> = {readonly [key in keyof T]-?:T[key]};
type ReadOnlyA = Readonlys<A>;
let a3:ReadOnlyA = {a1:'',a2:1,a3:true};
a3.a1 = '';


interface A{
    a1:string,
    a2:number;
    a3:boolean;
    getName():void;
}
type PickA = Pick<A,'a1'>;
let a:PickA = {a1:''}

interface A{
    a1?:string,
    a2?:number;
    a3?:boolean;
    getName():void;
}
let a:A = {
    getName(){}
}
//interface 新的类型 type类型别名
*/
interface Fish{
    fish:string
}
interface Water{
    water:string
}
interface Bird{
    bird:string
}
interface Sky{
    sky:string
}
type Condition<T> = T extends Fish?Water:Sky;
//let con:Condition<Bird> = {sky:'sky'};

//条件类型的分发
let con1:Condition<Fish|Bird> = {water:''};//Water|Sky
let con2:Condition<Fish|Bird> = {sky:''};//Water|Sky

//Exclude
type E = Exclude<string|number,number>;
let e:E = '';
//Extract 提取从T类型中提取U
type E2 = Extract<string|number|boolean,string>;
let e2:E2 = '';
//NonNullable
type  E3 = NonNullable<string|number|null|undefined>;
let e3:E3 = '';
//ReturnType
function getUserInfo():{name:string,age:number}{
    return {name:'zhufeng',age:10};
}
let t:ReturnType<typeof getUserInfo> = getUserInfo();

//InstanceType
class Person {
    constructor(public name:string){

    }
    getName(){
        console.log(this.name)
    }
}
type P = InstanceType<typeof Person>;
let p3:P = {name:'zhufeng',getName(){}};
let p4:P =  new Person('zhufeng');

type E5 = Extract<Person|{name:'zhufeng'}|9,9>;




