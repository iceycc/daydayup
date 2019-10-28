/**
 * 1.判断数据类型
 * 2.实现柯理化： 将参数分批传入
 * 3. 偏函数
 */


// // 1 判断数据类型
// // typeof instanceof contructor Object.prototype.toString.call 

// function isType(type){ // 变量
//     return function(content){
//         return Object.prototype.toString.call(content) === "[object "+type+"]";
//     }
// }   
// // isString isArray isBoolean
// let types = ['String','Boolean','Number','Null','Undefined'];
// let utils = {}
// for(let i = 0 ; i< types.length;i++){
//     let type = types[i]
//     utils['is'+type] = isType(type);
//     // utils.isString = function 预制参数 和 bind一样
// }
// let flag = utils.isString('hello');
// console.log(flag);

// // 2. 如何实现柯理化，反柯理化
// // 作业:1
// function fn(a,b,c){
//     return a+b+c;
// }
// function fn(a){
//     return function(b){
//         return function (c){
//             return a+b+c
//         }
//     }
// }
// // 偏函数
// function fn(a,b){
//     return function(c){

//     }
// }

// function isType(content,type){
//     return Object.prototype.toString.call(content) == `[object ${type}]`
// }
// // console.log(Object.prototype.toString.call('111'))
// let flag1 = isType('hello','String')
// let flag2 = isType('hello','string')
// console.log(flag1,flag2)


function isType(type){
    return function(content){
        return Object.prototype.toString.call(content) == `[object ${type}]`
    }
}
const types = ['String','Boolean','Number','Null','Undefined'];
let utils = {};
for(let i = 0 ; i < types.length; i++){
    let type = types[i];
    utils['is' + type] = isType(type); 
}
let flag = utils.isString('hello')
console.log(flag)