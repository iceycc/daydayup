import * as types from '../action-types';
export default {
    increment(){
        return {
            type:types.ASYNC_INCREMENT
        }
    },
    stop(){
        return {
            type:types.STOP_INCREMENT
        }
    }
}