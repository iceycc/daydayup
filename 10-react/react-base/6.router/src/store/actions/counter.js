import * as types from '../action-types';
import { push } from '../../connected-react-router';
export default {
    increment(){
        return {type:types.INCREMNET};
    },
    decrement(){
        return {type:types.DECREMNET};
    },
    login(username,password){
       /*  return function(){
            Api.login(username,password).then(res=>{
                //跳到登录成功页
            })
        } */
    },
    goHome(){
        return push('/');//{type:xxxx,payload:...}
    }
}