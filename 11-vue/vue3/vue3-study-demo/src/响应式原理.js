// 检测值是否变化
// 用track函数修改值
// 用trigger函数更新为最新的值

const dinner = {
    meal: 'tacos'
}

const handler = {
    get(target, prop, receiver){
        track(target, prop)
        return Reflect.get(...arguments)
    }
}

function track(target, prop){
    console.log('track',target, prop)
}

const p1 = new Proxy(dinner, handler)

console.log(p1.meal)


