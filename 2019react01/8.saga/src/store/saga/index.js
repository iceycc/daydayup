import {all} from '../../redux-saga/effects';
import counterSaga from './counterSaga';
import logSaga from './logSaga';
export default function* rootSaga(){
   //立刻启动所有的iterator,等全部完成后当前saga才算完成
   yield all([ 
    counterSaga(),
    logSaga()
   ]);
   console.log('rootSaga立刻就结束了');
}