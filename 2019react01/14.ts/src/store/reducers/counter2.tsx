import * as types from '../action-types';
import {Action} from '../actions/counter';
let initState = {number:0};
export type Counter2State = typeof initState;
export default function (state:Counter2State=initState, action:Action):Counter2State {
    switch (action.type) {
        case types.INCREMENT:
            return { number: state.number + 1 };
        case types.DECREMENT:
            return { number: state.number - 1 };
        default:
            return state;
    }
}