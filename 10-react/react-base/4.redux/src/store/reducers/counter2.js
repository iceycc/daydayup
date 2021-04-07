import * as types from '../action-types';
export default function reducer(state=0,action){
    switch(action.type){
        case types.INCREMENT2:
          return state + 1;//返回一个加1的新状态
        case types.DECREMENT2:
          return state -1;
        default:
          return state;    
    }
 }