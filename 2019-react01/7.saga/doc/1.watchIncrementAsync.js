import {takeEvery,put,call,apply} from 'redux-saga/effects';
import * as types from '../action-types';
import {delay} from '../utils';
//为什么这个generator saga会自动执行完成，因为
export function* incrementAsync(){
    //当你yield一个promise的时候，saga中间件可以接收到这个promise,它会等待这个promise完成，
   //完成后会把这个resolve的值赋给msg,再接着往下走
   //let msg = yield delay(1000);
   //{type:'CALL',payload:{context:null,delay:f,args:[1000]}}
   //console.log(delay(1000));
   //let msg = yield delay(1000);
   //delay(1000);
   //delay.call(thisObject,1000);
   //delay.apply(thisObject,[1000]);
   //let obj = {username:'zhufeng'};
   //let msg = yield call([obj,delay],1000);
   //let msg = yield apply(obj,delay,[1000]);
   //call就是调用一个函数
   //let msg = yield call(delay,1000);
   //console.log('msg',msg);
   /* try{
    let result = yield call(delay,1000);
    console.log('result',result);
    //再次向仓库派发 INCREMENT动作
    yield put({type:types.INCREMENT});
   }catch(error){
    alert(error);
   } */
   let {code,data,error} = yield call(delay,1000);
   if(code === 0 ){
    yield put({type:types.INCREMENT});
   }else{
       alert(error);
   }

}
/**
 * 1.rootSaga 入口saga 是用来组织和调用别的saga generator的
 * 2.监听saga  监听向仓库派发的动作的，如果监听到某些动作的会通知worker去执行
 * 3.worker saga 真正干活的saga,真正执行任务的saga
 */
export default  function* watchIncrementAsync(){
    //监听每一次的ASYNC_INCREMENT动作，每次当有人向仓库里派发这个动作的时候，就会调用另一个worker saga执行任务
   //每当yield一个值，一般被称为effect ,就相当告诉saga中间件进行某些处理
    yield takeEvery(types.ASYNC_INCREMENT,incrementAsync);
}
