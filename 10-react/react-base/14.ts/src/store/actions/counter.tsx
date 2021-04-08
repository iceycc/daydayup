import * as types from '../action-types';
import {push} from 'connected-react-router';
//import history from '../history';
export interface incrementAction{
   type:typeof types.INCREMENT
}
export interface decrementAction{
    type:typeof types.DECREMENT
 }
export type Action =  incrementAction|decrementAction;
export default {
    increment():incrementAction{
        return {type:types.INCREMENT};
    },
    decrement():decrementAction{
        return {type:types.DECREMENT};
    },
    goto(to:string){
        return push(to);
        //history.push(to);
    }
}
/**
 * 
 */