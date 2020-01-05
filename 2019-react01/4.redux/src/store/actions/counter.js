import * as types from '../action-types';
import { dispatch } from '../../../../../../../Users/张仁阳/AppData/Local/Microsoft/TypeScript/3.4.3/node_modules/rxjs/internal/observable/pairs';
import { resolveObject } from 'url';
export default   {
    increment(){
        //store.dispatch({type:INCREMENT})
        return {type:types.INCREMENT};
    },
    decrement(){
        //store.dispatch({type:DECREMENT});
        return {type:types.DECREMENT};
    },
    //延时一秒加1
    asyncIncrement(){
        return function(dispatch,getState,amount){
            setTimeout(()=>{
                dispatch({type:types.INCREMENT,payload:amount});
            },1000);
        }
    },
    promiseIncrement(){
        return {
            type:types.INCREMENT,
            payload:new Promise((resolve,reject)=>{
               setTimeout(function(){
                    let result = Math.random();
                    if(result<0){
                        resolve({number:result});
                    }else{
                        reject({number:result});
                    }
               },1000);
            })
        }
    },
    loadData(){
        return {
            type:'LOADDATA',
            payload:new Promise((resolve,reject)=>{
               return fetch().then(res=>res.json());
            })
        }
    }
}
/**
 * let {payload} =  store.dispatch(action);
 * payload.then(result=>onsole.log(result),error=>console.log(error));
 * 
 */