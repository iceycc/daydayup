import {mutableHandlers} from './baseHandlers'
import {isObject} from "../shared/utils";
export function reactive(target){
    // 创建一个响应式的对象，目标对象可能不一定是数组或者对象，可能还有set map
    return createReactiveObject(target,mutableHandlers)

}
function createReactiveObject(target,baseHandler){
    //  不是对象直接返回
    if(!isObject(target)){
        return target
    }
    const res = new Proxy(target,baseHandler)
    return res
}
