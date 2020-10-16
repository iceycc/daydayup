import {isObject, hasOwn} from "../shared/utils";
import {reactive} from "./reactive";
// import {trigger} from "@vue/reactivity";
import {track,trigger} from './effect'
import {OperationTypes} from "./operations";
const get = createGetter();
const set = createSetter();
// proxy + reflect 都是es6
function createGetter(){
    return function get(target, key,receiver){
        const res = Reflect.get(target, key,receiver) // target[key]
        // todo
        // console.log('用户获取值了',target,key)
        track(target,OperationTypes.GET,key) // 依赖收集
        if(isObject(res)){ // 返回的还是对象的话需要在进行递归代理
            return reactive(res)
        }
        return res
    }
}

function createSetter(){
    return function set(target,key,value,receiver){
        // 判断是修改属性还是增加属性，如果原来的值和新设置的值一样什么都不做
        const hadKey = hasOwn(target,key)
        const oldValue = target[key]
        const res = Reflect.set(target,key,value,receiver) //  target[key] = value
        // todo...
        // console.log('用户设置值了',target,key)
        if(!hadKey){
            // console.log('属性新增操作',target,key)
            trigger(target,OperationTypes.ADD,key,value) // 触发更新
        }else if(value !== oldValue){
            // console.log('修改操作',target,key)
            trigger(target,OperationTypes.SET,key,value,oldValue) // 设置触发更新
        }
        return res
    }
}

export const mutableHandlers = {
    get,
    set,
    // 处理代理这些方法还有其他逻辑。deleteProperty，has ...
}
