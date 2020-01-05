import * as types from '../action-types';
let initialState = {number:0};
//1.参数一样，返回值一样 2.没有改变当前函数作用域之外的变量
export default function(state=initialState,action){
    switch(action.type){
        case types.INCREMENT:
          return {number:state.number+1};
        default:
          return state;  
    } 
}