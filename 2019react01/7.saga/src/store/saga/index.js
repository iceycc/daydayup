import {all,put,call,cps} from 'redux-saga/effects';
import race2Saga from './race2Saga';

export default function* rootSaga(){
   yield all([ 
      race2Saga()
   ]);
}
/**
 * saga相对于thunk有很多优点
 * 1. 单元测试非常容易
 */