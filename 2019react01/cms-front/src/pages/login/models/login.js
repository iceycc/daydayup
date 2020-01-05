import * as service from '../services/login';
import {message} from 'antd';
import {decode} from 'jsonwebtoken';
import {routerRedux} from 'dva/router';//react-redux-router
export default {
    namespace:'login',
    state:{
        isLogin:true,//是否正在登录
        userInfo:null,//当前的登录用户
        errorInfo:null//如果出错的话会把错误信息放在这里
    },
    effects:{
        *signup({payload},{call,put}){
            let {code} = yield call(service.signup,payload);
            if(code === 0 ){
                yield put({type:'save',payload:{isLogin:true}});
            }else{
                message.error('注册失败，请重试');
            }
        },
        *signin({payload},{call,put}){
            let {code,data} = yield call(service.signin,payload);
            if(code === 0 ){
               let userInfo = decode(data);
               yield put({type:'save',payload:{userInfo}});
               localStorage.setItem('userInfo',JSON.stringify(userInfo));
               yield put(routerRedux.push('/admin'));
            }else{
                message.error('登录失败，请重试');
            }
        },
        *loadUser({},{put}){
            let userInfoString = localStorage.getItem('userInfo');
            if(userInfoString){
                let userInfo = JSON.parse(userInfoString);
                yield put({type:'save',payload:{userInfo}});
            }else{
                 yield put(routerRedux.push('/login'));
            }
        }
    },
    //订阅方法，监听路径的变化 ，如果说路径 切换成/admin的话，就要去先加载本地的数据
    subscriptions:{
        setup({dispatch,history}){
            /* history.listen(({pathname,query})=>{
                if(pathname === '/admin'){
                    dispatch({type:'login/loadUser'});
                }
            }); */
        }
    },
    reducers:{
        save(state,action){
            return {...state,...action.payload};
        }
    }
}