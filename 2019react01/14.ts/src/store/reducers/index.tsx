import {combineReducers} from 'redux';
import counter1 from './counter1';
import counter2 from './counter2';
import {connectRouter} from 'connected-react-router';
import history from '../history';
let reducers = {
    counter1,
    counter2,
    router:connectRouter(history)
};
//keyof typeof combineReducersObject=[counter1,counter2]
export type RootState = {
  [key in keyof typeof reducers]:ReturnType<typeof reducers[key]>
}
// {counter1:{nubmer:number},counter2:{number:number}}
export default  combineReducers(reducers);
// {counter1:{number:0},counter2:{number:0}}

