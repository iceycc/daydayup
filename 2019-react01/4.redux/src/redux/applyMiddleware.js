import compose from './compose';
export default function applyMiddleware(...middlewares){//[thunk,logger1]
    return function(createStore){ // 创建store
        return function(reducer){ // 干活的reducer
            let store = createStore(reducer);//这就是最原始的仓库
            let dispatch = ()=>{throw Error('现在还不能用!')};
            let middlewareAPI = {
                getState:store.getState,
                dispatch:(...args)=>dispatch(...args)
            }

            // 链条 
            const chain = middlewares.map(middleware=>middleware(middlewareAPI));
            //[thunk,logger1,store.dispatch]
            // compose组合 什么是组合呢
            // compose(a,b)(x)  (x)=>b=>a
            dispatch = compose(...chain)(store.dispatch);
            return {
                ...store,
                dispatch
            };
        }
    }
}