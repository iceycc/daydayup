import {createStore,applyMiddleware} from 'redux';
import reducers from './reducers';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import {routerMiddleware} from 'connected-react-router'
import history from './history';
let router = routerMiddleware(history);
let store = applyMiddleware(thunk,router,logger)(createStore)(reducers);
export default store;