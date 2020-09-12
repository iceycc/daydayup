/**
 * 1.判断数据类型
 * 2.实现柯理化： 将参数分批传入
 * 3. 偏函数
 */


// // 1 判断数据类型
// // typeof instanceof contructor Object.prototype.toString.call 
console.log(typeof Function) // function
console.log(typeof null) // object
function isType(type){ // 变量
    return function(content){
        return Object.prototype.toString.call(content) === "[object "+type+"]";
    }
} 
// instanceof  
console.log(Function instanceof Function)
console.log(Function instanceof Object)
// // isString isArray isBoolean
let types = ['String','Boolean','Number','Null','Undefined'];
let utils = {}
for(let i = 0 ; i< types.length;i++){
    let type = types[i]
    utils['is'+type] = isType(type);
    // utils.isString = function 预制参数 和 bind一样
}
let flag = utils.isString('hello');
console.log(flag);

// // 2. 如何实现柯理化，反柯理化
// // 作业:1
function fn(a,b,c){
    return a+b+c;
}
function fn(a){
    return function(b){
        return function (c){
            return a+b+c
        }
    }
}
// // 偏函数
function fn(a,b){
    return function(c){

    }
}



