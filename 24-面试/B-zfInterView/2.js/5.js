let obj = {
    name: 'zhufeng',
    age: 10,
    home: { name: '北京' },
    hobbies: ['抽烟', '喝酒', '烫头']
};
obj.obj = obj;
//map key原对象的内存地址 值是克隆后的对象的内存地址
//基本类型 对象类型 数组类型
function clone(source, map = new Map()) {
    if (typeof source === 'object') {
        if (map.get(source)) {
            return map.get(source);
        }
        let target = Array.isArray(source) ? [] : {};
        map.set(source, target);
        for (const key in source) {
            target[key] = clone(source[key], map);//对象或数组的还要递归深拷贝
        }
        return target;
    }
    return source;//基本类型值 直接拷贝
}
let obj2 = clone(obj);
obj2.home.name = '上海';
console.log(obj);