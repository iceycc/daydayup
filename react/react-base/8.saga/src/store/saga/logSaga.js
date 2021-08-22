import {takeEvery,take} from '../../redux-saga/effects';

function* logger(){
    console.log('logger');
}
export default function*(){
    for(let i=0;i<3;i++){
        yield take('ASYNC_INCREMENT');
        yield logger();
    }
    console.log('logSaga立刻就结束了');
}