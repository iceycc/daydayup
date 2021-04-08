import {createStore,applyMiddleware,compose} from 'redux';
import reducers from './reducers';
import {routerMiddleware} from '../connected-react-router';
import history from './history';
import { persistStore, persistReducer } from '../redux-persist';
import storage from '../redux-persist/lib/storage' // defaults to localStorage for web
const persistConfig = {
  key: 'root',
  storage,
}

const persistedReducer = persistReducer(persistConfig, reducers);
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
//let store = applyMiddleware(routerMiddleware(history))(createStore)(reducers);
let store = createStore(persistedReducer,composeEnhancers(applyMiddleware(routerMiddleware(history))));
let persistor = persistStore(store);
window.store = store;
export {store,persistor};

