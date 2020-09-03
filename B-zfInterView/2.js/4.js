/**
 * 
 */
/* let obj = { name: 'zhufeng', age: 10 };
let obj2 = JSON.parse(JSON.stringify(obj)); */
//基本类型类型  引用类型
let obj = {
    name: 'zhufeng',
    age: 10,
    home: { name: '北京' },
    hobbies: ['抽烟', '喝酒', '烫头']
};
function clone(source) {
    if (typeof source === 'object') {
        let target = Array.isArray(source) ? [] : {};
        for (const key in source) {
            target[key] = clone(source[key]);//对象或数组的还要递归深拷贝
        }
        return target;
    }
    return source;//基本类型值 直接拷贝
}
let obj2 = clone(obj);
obj2.home.name = '上海';
console.log(obj);

