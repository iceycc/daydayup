import {take,put,takeEvery,call,cps} from '../../redux-saga/effects';
import * as types from '../action-types';
const delay = (ms,callback)=>{
   setTimeout(()=>{
    callback(ms);
   },ms);
}

function* increment(){
    //let result = yield call(delay,1000);
    //let result = yield delay(1000);
    let result = yield cps(delay,1000);
    console.log('result=',result)
    yield put({type:types.INCREMENT});
}
function* first(){
    console.log('开始执行counterSaga.js');
    for(let i=0;i<3;i++){
        //take 监听一次ASYNC_INCREMENT动作，如果有人向仓库派发了ASYNC_INCREMENT动作，向下继续
        const action = yield take(types.ASYNC_INCREMENT);
        yield increment();//interator
        console.log('gogogo');
    }
    alert('最多执行三次');
}

export default function*(){
  yield takeEvery(types.ASYNC_INCREMENT,increment);
  console.log('counterSaga立刻就结束了');
}