import {createStore} from 'redux';
import reducer from './reducer';
//import logger from 'redux-logger';
//import thunk from 'redux-thunk';
//createStore(reducer,0,applyMiddleware(thunk,logger));
function thunk(middlewareAPI){
  return function(next){
    return function(action){
        if(typeof action == 'function'){
            action(middlewareAPI.dispatch,middlewareAPI.getState);
        }else{
            next(action);
        }
    }
  }
}
function logger(middlewareAPI){
   return function(next){
        return function(action){
            console.log(middlewareAPI.getState());
            next(action);
            console.log(middlewareAPI.getState());
        }
    }
}
function applyMiddleware(...middlewares){//[thunk,logger]
    return function(createStore){
        return function(reducer){
           
            let store = createStore(reducer);
            let dispatch;
            let middlewareAPI = {
                getState:store.getState,
                dispatch:(...args)=>dispatch(...args)
            }
            middlewares = middlewares.map(middleware=>middleware(middlewareAPI));
            for(let i=middlewares.length-1;i>=0;i--){
                dispatch = middlewares[i](i===middlewares.length-1?store.dispatch:dispatch);
            }
            return {
                ...store,
                dispatch
            }
        }
    }
}
let store = applyMiddleware(thunk,logger)(createStore)(reducer);
export default store;