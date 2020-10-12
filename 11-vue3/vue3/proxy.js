const dinner = {
    meal: 'tacos'
}

const handler = {
    get(target, prop, receiver) {
        console.log('intercepted!')
        return Reflect.get(...arguments)
    }
}

const proxy = new Proxy(dinner, handler)
console.log(proxy.meal)

// intercepted!
// tacos