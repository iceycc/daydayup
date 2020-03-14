import {takeEvery,take,put,call,apply,all,select} from 'redux-saga/effects';
import * as types from '../action-types';
import {delay} from '../utils';
//为什么这个generator saga会自动执行完成，因为
export function* incrementAsync(){
   

}
export function* watchIncrementAsync(){
    for(let i=0;i<3;i++){
        //take 监听一次ASYNC_INCREMENT动作，如果有人向仓库派发了ASYNC_INCREMENT动作，向下继续
        const action = yield take(types.ASYNC_INCREMENT);
        console.log(action);
        yield put({type:types.INCREMENT});
    }
    alert('最多执行三次');
}
export function* watchAndLog(){
    while(true){
        console.log('beforeaction');
        let action = yield take('*');
        console.log('afteraction',action);
        //如何在saga中获取最新的状态树？
        let state = yield select(state=>state.counter);
        console.log('state',state);
    }
}
export default  function* (){
    yield all([
        watchAndLog(),//监听每一个动作，当动作发生的时候打印日志
        watchIncrementAsync() //监听异步加1的动作
    ]);
    console.log('end rootSaga');
}
