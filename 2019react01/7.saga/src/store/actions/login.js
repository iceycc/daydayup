import * as types from '../action-types';
export default {
    login(username,password){
        return {
            type:types.LOGIN,
            payload:{username,password}
        }
    },
    logout(){
        return {
            type:types.LOGOUT
        }
    }
}