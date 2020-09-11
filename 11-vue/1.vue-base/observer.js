// 观察一个数据Vue2.0 definePropety, 针对数组 length
// https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty

// 只针对对象 数组没有使用definePropety的

let arrayProto = Array.prototype; // 数组原型上的方法
let proto = Object.create(arrayProto);
['push','unshift','splice','reverse','sort','shift','pop'].forEach(method=>{
    proto[method] = function (...args) { // 这个数组应该也被监控
        // Array.prototype.push.call([1,2,3],4,5,6);
        let inserted; // 默认没有插入新的数据
        switch (method) {
            case 'push':
            case 'unshift':
                inserted = args
                break;
            case 'splice': // 数组的splice 只有传递三个参数 才有追加效果
                inserted = args.slice(2);
            default:
                break;
        }
        console.log('视图更新');
        ArrayObserver(inserted)
        arrayProto[method].call(this, ...args)
    }
});
function ArrayObserver(obj) {
    for (let i = 0; i < obj.length; i++) {
        let item = obj[i];
        // 如果是普通值 就不监控了
        observer(item); // 如果是对象会被 defineReactive
    }
}
function observer(obj) {
    if (typeof obj !== 'object' || obj == null) {
        return obj;
    }
    if (Array.isArray(obj)) {
        //  上面处理的是数组格式 push shift splice (如果调用这三个方法)应该把这个值判断一下是否是对象
        Object.setPrototypeOf(obj,proto); // 实现一个对数组的方法进行重写
        ArrayObserver(obj)
    } else {
        // 下面的是处理对象的
        for (let key in obj) {
            // 默认只循环第一层
            defineReactive(obj, key, obj[key]);
        }
    }
}

function defineReactive(obj, key, value) {
    observer(value); // 递归创建 响应式数据，性能不好
    Object.defineProperty(obj, key, {
        get() {
            return value;
        },
        set(newValue) { // 给某个key设置值的时候 可能也是一个对象
            if (value !== newValue) {
                observer(newValue);
                value = newValue
                console.log('视图更新');
            }
        }
    })
}
let data = {
    d: [1, 2, 3,{name:'zf'}]
};
observer(data);
data.d = [1,2,3]
// observer(data);
// data.name = {n:'jw'}
// data.name.n = 'zf';
// 特点： 使用对象的时候 必须先声明属性 ，这个属性才是响应式的
// 1.增加不存在的属性 不能更新视图 （vm.$set）
// 2。默认会递归增加 getter和setter
// 3.数组里套对象 对象是支持响应式变化的，如果是常量则没有效果
// 4.修改数组索引和长度 是不会导致视图更新的
// 5.如果新增的数据 vue中也会帮你监控（对象类型）
