import {OperationTypes} from "./operations";

export function effect(fn,options={}){ // 相当于vue2的watch
    const effect = createReactiveEffect(fn,options)
    if(!options.lazy){ // 后续能有
        effect(); // 默认就要执行
    }
    return effect
}

// 创建响应式的effect
let uid = 0;
let activeEffect; // 当前的effect
const effectStack = []; // 栈结构
function createReactiveEffect(fn,options){
    const effect = function reactiveEffect(){
        if(!effectStack.includes(effect)){// 防止不停的更改属性导致死循环
            try{
                effectStack.push(effect);
                activeEffect = effect;
                return fn();// 返回是为了以后的计算
            }finally{
                // 执行完就销毁
                effectStack.pop();
                activeEffect = effect[effect.length-1]; // null
            }
            }
        }
    effect.options = options;
    effect.id = uid++;
    effect.deps = []; // 依赖了哪些属性。哪个属性变化了触发effect
    return effect
}

// let arr = []// 模拟1

const targetMap = new WeakMap();// 用法与map一致
export function track(target,type,key){ // 不同变量可以对应不同的effect 。weakmap
    // arr.push(activeEffect)
    if(activeEffect === undefined){
        return; //说明取值的属性 不依赖与effect
    }
    let depsMap = targetMap.get(target); // 根据key 进行取值
    if(!depsMap){
        targetMap.set(target,(depsMap = new Map()))
    }
    let dep = depsMap.get(key);
    if(!dep){
        depsMap.set(key,(dep = new Set()))
    }
    if(!dep.has(activeEffect)){
        dep.add(activeEffect); // {"{name:'zf'}":{name:set(effect)}}
        activeEffect.deps.push(dep); // 让这个effect 记录dep属性
    }
}

export function trigger(target,type,key,value,oldValue){
    // debugger
    // arr.forEach(fn=>fn && fn())
    const depsMap = targetMap.get(target); // 获取当前map
    if(!depsMap){
        return ;
    }
    // 计算属性要优先于effect执行
    const effects = new Set();
    const computedRunners = new Set();
    const add = (effectsToAdd)=>{
        // 分别收集
        if(effectsToAdd){
            effectsToAdd.forEach(effect=>{
                if(effect.options.computed){
                    computedRunners.add(effect)
                }else{
                    effects.add(effect)
                }
            })
        }
    }
    // const run = (effects)=>{
    //     if(effects){
    //         effects.forEach(effect=>effect())
    //     }
    // }
    if(key !== null){
        // run(depsMap.get(key)) // 让拿到的属性里的effect依次执行
        add(depsMap.get(key)) // 让拿到的属性里的effect依次执行
    }
    // arr.push(4)    [1,2,3,4]  push length  新增属性
    if(type ===OperationTypes.ADD){
        // 对数组新增属性 会触发length对应的依赖 取值的时候返回length的属性进行依赖收集
        // 数组新增
        // run(depsMap.get(Array.isArray(target) ? 'length' : ''));
        add(depsMap.get(Array.isArray(target) ? 'length' : ''));
    }

    const run = (effect)=> {
        if(effect.options.scheduler){
            effect.options.scheduler()
        }else{
            effect()
        }
    }
    // 执行的时候分情况执行，先执行计算属性，在执行effect。并且判断是否有scheduler调度
    computedRunners.forEach(run);
    effects.forEach(run)
}
