import {combineReducers} from 'redux';
import counter from './counter';
import {connectRouter} from '../../connected-react-router';
import history from '../history';
let reducers = combineReducers({
    router:connectRouter(history),
    counter
});
export default reducers;