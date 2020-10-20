import {isFunction} from "../shared/utils";
import {effect, track, trigger} from "./effect";
import {OperationTypes} from "./operations";

export function computed(getterOrOptions){
    let getter;
    let setter;
    if(isFunction(getterOrOptions)){
        getter = getterOrOptions;
        setter = () => {}
    }else{
        getter = getterOrOptions.get;
        setter = getterOrOptions.set;
    }
    let dirty = true; // 默认第一次是执行getter方法的
    let computed;
    // 计算属性也是一个effect,会收集回调里的属性
    let runner = effect(getter,{
        lazy:true, // 懒加载
        computed: true, // 这里仅仅是标记而已，是一个计算属性
        scheduler:()=>{ //
            if(!dirty){
                dirty = true; // 等会儿依赖的属性发生变化后，会执行这个scheduler
                trigger(computed,OperationTypes.SET,'value')
            }
        }
    })
    let value;

    computed = {
        get value(){
            if(dirty){
                value = runner() // 其实就是用户computed回调函数里的那个值
                dirty = false; // 多次取值不会重新执行effect
                track(computed,OperationTypes.GET,'value')  // 计算属性的依赖收集
            }
            return value
        },
        set value(newVal){
            setter(newVal)
        }
    }
    return computed
}
