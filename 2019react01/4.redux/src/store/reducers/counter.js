import * as types from '../action-types';
let initState = {number:1};
export default function reducer(state=initState,action){
    switch(action.type){
        case types.INCREMENT:
          if(action.error)action.payload.number = action.payload.number*-1;
          return {number:state.number+(action.payload?action.payload.number:1)};//返回一个加1的新状态
        case types.DECREMENT:
          return {number:state.number-(action.payload?action.payload.number:1)};//返回一个减1的新状态
        default:
          return state;    
    }
 }