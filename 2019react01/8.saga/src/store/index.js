import {createStore,applyMiddleware} from 'redux';
import reducer from './reducers';
import createSagaMiddleware from '../redux-saga';
import rootSaga from './saga/AutoSaga';
let sagaMiddleware = createSagaMiddleware();
let store = applyMiddleware(sagaMiddleware)(createStore)(reducer);
sagaMiddleware.run(rootSaga);
window.store = store;
export default store;