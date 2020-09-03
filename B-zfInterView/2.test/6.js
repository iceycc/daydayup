/**
 * 1.不可扩展 不可以增加新的属性,老的属性可以删除，也可以改值
 * 2.密封     不可以增加新的属性,老的属性不可以删除，但可以改值
 * 3.冻结     不可以增加新的属性,老的属性不可以删除,不可以改值
 */
/* let obj = { name: 'zhufeng' };
console.log(Object.isExtensible(obj));//可扩展
Object.preventExtensions(obj);
console.log(Object.isExtensible(obj));//不可扩展
obj.age = 10;
obj.name = 'jiagou';
delete obj.name;
console.log(JSON.stringify(obj, null, 2));
 */
/* let obj = { name: 'zhufeng' };
console.log(Object.isExtensible(obj));//可扩展
console.log(Object.isSealed(obj));//没有密封
console.log(Object.getOwnPropertyDescriptor(obj, 'name'));
Object.seal(obj);
console.log(Object.getOwnPropertyDescriptor(obj, 'name'));
obj.name = 'jiagou';
console.log('delete', delete obj.name);
obj.age = 10;
console.log(obj);
console.log(Object.isExtensible(obj));//不可扩展 false
console.log(Object.isSealed(obj));//true */

/* let obj = { name: [1, 2] };
Object.freeze(obj);
obj.name.push(3);
console.log(obj); */
let obj = { names: { name: 'zhufeng' }, arr: [1, 2] };
//深拷贝实现思路是一样的
function deepFreeze(obj) {
    let newObj = {};
    for (let key in obj) {
        let value = obj[key];
        newObj[key] = Object.freeze(value);
    }
}
//Object.freeze(obj);
deepFreeze(obj);
obj.names.age = 10;
obj.arr.push(3);
console.log(JSON.stringify(obj, null, 2));
//bind多次绑定 有很多精典的题 目


