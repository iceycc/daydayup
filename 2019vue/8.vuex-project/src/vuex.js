let Vue;
// new Vuex.Store
// $store.state.age
class ModuleCollection{ // 格式化
    constructor(options){
        this.register([],options); // 注册模块 将模块注册成树结构
    }
    register(path,rootModule){
        let module = { // 将模块格式化
            _rawModule:rootModule,
            _chidlren:{},
            state:rootModule.state
        }
        if(path.length == 0){
            this.root = module; // 如果是根模块 将这个模块挂在到根实例上
        }else{
            // 递归都用reduce方法   // 通过_children 属性进行查找
            let parent = path.slice(0,-1).reduce((root,current)=>{
                return root._chidlren[current]
            },this.root)
            parent._chidlren[path[path.length-1]] = module
        }
        // 看当前模块是否有modules 
        if(rootModule.modules){ // 如果有modules 开始重新再次注册
            forEach(rootModule.modules,(moduleName,module)=>{
                this.register(path.concat(moduleName),module)
            })
        }
    }
}
const forEach = (obj,cb)=>{ // 迭代对象的 会将对象的 key 和value 拿到
    Object.keys(obj).forEach(key=>{
        cb(key,obj[key]);
    })
}
const installModule = (store,rootState,path,rootModule)=>{
    if(path.length > 0){
        // [a]
        // 是儿子,儿子要找到爸爸将自己的状态 放到上面去
        let parent = path.slice(0,-1).reduce((root,current)=>{
            return root[current]
        },rootState)
        // vue 不能在对象上增加不存在的属性 否则不会导致视图更新
        Vue.set(parent,path[path.length-1],rootModule.state);
        // {age:1,a:{a:1}}
        // 实现了 查找挂在数据格式
    }
    // 以下代码都是在处理  模块中 getters actions mutation
    let getters = rootModule._rawModule.getters;
    if(getters){
        forEach(getters,(getterName,fn)=>{
            Object.defineProperty(store.getters,getterName,{
                get(){
                    // 让getter执行当自己的状态 传入
                    return fn(rootModule.state); // 让对应的函数执行
                }
            });
        })
    }
    let mutations = rootModule._rawModule.mutations;
    if(mutations){
        forEach(mutations,(mutationName,fn)=>{
            let mutations = store.mutations[mutationName] || [];
            mutations.push((payload)=>{
                fn(rootModule.state,payload);
                // 发布 让所有的订阅依次执行
                store._subscribes.forEach(fn=>fn({type:mutationName,payload},rootState));
            })
            store.mutations[mutationName] = mutations;
        })
    }
    let actions = rootModule._rawModule.actions;
    if(actions){
        forEach(actions,(actionName,fn)=>{
            let actions = store.actions[actionName] || [];
            actions.push((payload)=>{
                fn(store,payload);
            })
            store.actions[actionName] = actions;
        })
    }
    // 挂在儿子
    forEach(rootModule._chidlren,(moduleName,module)=>{
        installModule(store,rootState,path.concat(moduleName),module)
    })
}
class Store {
    constructor(options = {}){
        // 将用户的状态放到了store中
        this.s = new Vue({ // 核心 定义了响应式变化 数据更新 更新视图
            data(){
                return {state:options.state}
            }
        }); // 用来维护全局数据的
        this.getters = {};
        this.mutations = {};
        this.actions = {};
        this._subscribes = [];
        this._modules = new ModuleCollection(options); // 把数据格式化成一个 想要的树结构
        // let getters = options.getters;
        // 递归将结果进行分类
        // this 整个store 
        // this.state 当前的根状态
        // [] 为了递归来创建的
        // this._modules.root 从根模块开始安装
        installModule(this,this.state,[],this._modules.root);

        // 计算属性
        // forEach(getters,(getterName,fn)=>{
        //     Object.defineProperty(this.getters,getterName,{
        //         get:()=>{
        //             return fn(this.state)
        //         }
        //     })
        // })
        // let mutations = options.mutations; // 获取所有的同步的更新操作方法
        
        // forEach(mutations,(mutationName,fn)=>{
        //     this.mutations[mutationName] = (payload)=>{
        //         // 内部的第一个参数是状态
        //         fn(this.state,payload)
        //     }
        // });
      
        
        // forEach(actions,(actionName,fn)=>{
        //     this.actions[actionName] = (payload)=>{
        //         fn(this,payload);
        //     }
        // });
        options.plugins.forEach(plugin=>plugin(this));
       
    }
    subscribe(fn){
        this._subscribes.push(fn);
    }
    // 提交更改 会在当前的 store上 找到对应的函数执行
    commit = (mutationName,payload)=>{ // 保证this
        this.mutations[mutationName].forEach(fn=>fn(payload))
        // this.mutations[mutationName](payload)
    }
    dispatch =(actionName,payload)=>{
        this.actions[actionName](payload); //源码里有一个变量 来控制是否是通过mutation 来更新状态的
    }
    get state(){ // 类的属性访问器
        return this.s.state
    }
}
const install = (_Vue)=>{
    Vue = _Vue; // vue的构造函数
    console.log('install');
    // vue的组件渲染顺序
    Vue.mixin({
        // 创建之前会被执行
        beforeCreate(){ // api
            // 没有将 $store 放在原型上
            // 我需要拿到store,给每个组件都增加$store属性
            if(this.$options && this.$options.store){
                // 给根实例增加$store属性
                // 根
                this.$store = this.$options.store;
            }else{
                // 有可能单独创建了一个实例没有父亲 那就无法获取到store属性
                this.$store = this.$parent &&this.$parent.$store
            }
        }
    })
}


export default {
    // 给用户提供一个install方法 默认会被掉用
    install,
    Store
}
// namespaced


/// 源码只会将 当前用户传递的内容 进行格式化

// store
// let root = {
//     _raw:options,
//     _chidlren:{
//         a:{
//             _raw:{},
//             _chidlren:{},
//             state:{a:1}
//         },
//         b:{}
//     },
//     state:options.state
// }

