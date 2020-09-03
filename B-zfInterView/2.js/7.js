/**
[object Boolean]
[object Number]
[object String]
[object Null]
[object Undefined]
[object Symbol]
[object Object]
[object Function]
[object Array]
[object Error]
[object RegExp]
[object Math]
[object JSON]
[object HTMLDocument]
[object Window]"
 */

/**
 * 在JS中如何判断变量的类型
 * typeof
 *    返回都是字符串
 *    字符串包含对应的类型 number string boolean undefined symbol
 *    typeof null object
 *    typeof {} [] /^$/ Date object
 * instanceof 
 * Object.prototype.toString.call
 */
let obj = {
    married: true,
    age: 10,
    name: 'zhufeng',
    girlfriend: null,
    boyfriend: undefined,
    flag: Symbol('man'),
    home: { name: '北京' },
    set: new Set(),
    map: new Map(),
    getName: function () { },
    hobbies: ['1', '2', '3'],
    error: new Error('我错了'),
    pattern: /^reg$/,
    math: Math,
    json: JSON,
    //document: document,
    //window: window
}
obj.set.add(1);
obj.map.set('name', 'zhufeng');
obj.obj = obj;

/**
 * 首先我们要对类型进行分类
 */
let OBJECT_TYPES = [{}, [], new Map(), new Set(), new Error(), new Date(), /^$/].map(item => getType(item))
let MAP_TYPE = getType(new Map());
let SET_TYPE = getType(new Set());
let SYMBOL_TYPE = getType(Symbol('1'));
let REGEXP_TYPE = getType(/^$/);
let CONSTRUCT_TYPES = [new Error(), new Date()].map(item => getType(item));
function clone(source, map = new Map()) {
    let type = getType(source);
    if (!OBJECT_TYPES.includes(type)) {
        return source;//基本类型直接返回  string boolean number
    }
    if (map.get(source)) {
        return map.get(source);
    }
    if (CONSTRUCT_TYPES.includes(type)) {
        return new source.constructor(source);// new Date(oldDate); new Error(oldError);
    }
    let target = new source.constructor();//{} []
    map.set(source, target);
    if (SYMBOL_TYPE === type) {
        return Object(Symbol.prototype.valueOf.call(source));
    }
    if (REGEXP_TYPE === type) {
        const flags = /\w*$/;
        let target = new RegExp(source.source, flags.exec(source));
        target.lastIndex = source.lastIndex;
        return target;
    }
    if (SET_TYPE == type) {
        source.forEach(value => target.add(clone(value, map)));
        return target;
    }
    if (MAP_TYPE == type) {
        source.forEach((value, key) => target.set(key, clone(value, map)));
        return target;
    }
    /*  for (const key in source) {//处理普通 对象 和数组
         target[key] = clone(source[key], map);//对象或数组的还要递归深拷贝
     } */
    let keys = Object.keys(source);
    let length = keys.length;
    let index = 0;
    while (index < length) {
        let key = keys[index];
        target[key] = clone(source[key], map);
        index++;
    }
    return target;
}
console.time('cost');
for (let i = 0; i < 100000; i++) {
    clone(obj);
}
console.timeEnd('cost');//cost: 3257.316ms







function getType(source) {
    return Object.prototype.toString.call(source);//[object Object]
}