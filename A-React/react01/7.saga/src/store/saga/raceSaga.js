import {takeEvery,take,put,call,apply,all,select,fork,cancel,cancelled,race} from 'redux-saga/effects';
const delay = ms =>new Promise(function(resolve,reject){
    setTimeout(()=>{
        resolve(ms);
    },ms);
});
export default function*(){
  const {a,b} = yield race({
      a:call(delay,1000),
      b:call(delay,500)
  });
  console.log('a=',a,'b=',b)
}