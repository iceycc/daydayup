import {createStore,applyMiddleware} from 'redux';
import reducer from './reducers';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './saga';
let sagaMiddleware = createSagaMiddleware();
//let store = createStore(reducer);
let store = applyMiddleware(sagaMiddleware)(createStore)(reducer);
//sagaMiddleware就是一个执行器，可以启动helloSaga这个generator的执行
sagaMiddleware.run(rootSaga);//co库
window.store = store;
export default store;