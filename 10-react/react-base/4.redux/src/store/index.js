import {createStore,applyMiddleware} from '../redux';
import reducers from './reducers';
import logger1 from '../redux-logger1';
import logger2 from '../redux-logger2';
import thunk from '../redux-thunk';
import promise from '../redux-promise';

let thunkwithExtraArgument= thunk.withExtraArgument({number:5});
let store = applyMiddleware(thunkwithExtraArgument,promise,logger1)(createStore)(reducers,0);

export default store;


/*
// 1 一般形式的中间件
let dispatch = store.dispatch;//缓存老的原始的派发方法
store.dispatch = function(action){
   console.log('老状态',store.getState());
   dispatch(action);
   console.log('新状态',store.getState());
}
//  2、
let logger = store => dispatch=>actions=>{
   console.log('老状态',store.getState());
   dispatch(action);
   console.log('新状态',store.getState());
} 
// 3、
function logger(store){
   return function(dispatch){
      return function(action){
         console.log('老状态',store.getState());
         dispatch(action);
         console.log('新状态',store.getState());
      }
   }
}
// 4 、
let store = applyMiddleware(logger)(createStore)(reducers);
function applyMiddleware(){
   
}
*/
