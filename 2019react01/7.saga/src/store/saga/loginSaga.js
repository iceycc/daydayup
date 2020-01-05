import {takeEvery,take,put,call,apply,all,select,fork,cancel,cancelled} from 'redux-saga/effects';
import * as types from '../action-types';
import {delay} from '../utils';
import Api from './Api';
function* login(username,password){
   try{
     Api.setItem('loading','true');
     const token = yield call(Api.login,username,password);
     yield put({type:types.LOGIN_SUCCESS,payload:token});
     Api.setItem('loading','false');
   }catch(error){
     alert(error);
     yield put({type:types.LOGIN_ERROR,error});
     Api.setItem('loading','false');
   }finally{
     if(yield cancelled()){
      Api.setItem('loading','false');
     }
   }
}
export default function*(){
    while(true){
        let {payload:{username,password}} = yield take(types.LOGIN);
        //const token = yield call(login,username,password);
        //fork就相当于开启了一个子进程，他会单独去执行而不会影响当前的主进程，主进程会立刻向下执行
       //我们拿 不到login的返回值，但是可以得到一个任务对象的  
        const task = yield fork(login,username,password);
        //if(token){//如果token拿到了，就认为登录成功了 
            //一旦登录成功了，就可以开监听退出的动作
        const action = yield take(types.LOGOUT);
        if(action.type === types.LOGOUT){
          yield cancel(task);
        }
            //派发一个退出成功的动作，把 token删除掉
        yield put({type:types.LOGOUT_SUCCESS});
        //}
    }
}