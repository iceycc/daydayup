/* import counter1 from './counter1';
import counter2 from './counter2'; */
import counter from './counter';
/* import {combineReducers} from '../../redux';
let reducers = combineReducers({
    counter1,//0
    counter2//0
}); */

export default counter;


function combineReducers(reducers){
  let newState = {}
  newState.counter1 = counter1(state.counter1.action)
  newState.counter2 = counter2(state.counter2.action)
  return newState
}