import isPlainObject from "./utils/isPlainObject";
import ActionTypes from "./utils/actionTypes";

// function reducer(initState,action){
//     // action.type
// }

export default function createStore(reducer,preloadedState){
    if(typeof reducer != 'function'){
        throw new Error('reducer必须是一个函数');
    }
    let currentReducer = reducer;// 当前的处理器 initStae,action
    let currentState = preloadedState;// 当前状态
    let currentListeners = [];// 定义一数组保存当前的监听函数
    function getState(){//  返回当前状态
        return currentState;
    }
    
    // 派发 
    function dispatch(action){//{type:'xx'}
        // 判断是不是纯对象
        if(!isPlainObject(action)){
            throw new Error('action必须是一个纯对象');
        }
        // 判断type
        if(typeof action.type =='undefined'){
            throw new Error('action的type属性不能是 undefined');
        }
        // 获取当前state
        currentState = currentReducer(currentState,action);
        // 获取到新的信息，对订阅者发布
        for(let i=0;i<currentListeners.length;i++){
            const listener = currentListeners[i];
            listener();
        }
        return action;
    }

    // 将里listener进行登记订阅
    function subscribe(listener){
        let subscribed = true;
        currentListeners.push(listener);

        // 取消订阅
        return function unsubscribe(){
            if(!subscribed) return ; // 防止重复取消订阅
            const index = currentListeners.indexOf(listener);    
            currentListeners.splice(index,1);
            subscribed = false;
        }
    }
    // 第一次创建store时立即派发一次默认的状态
    dispatch({type:ActionTypes.INIT});

    return {
        getState,// 返回当前状态
        dispatch, // 发布
        subscribe // 订阅
        
    }
}