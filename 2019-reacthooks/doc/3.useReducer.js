import React, { useReducer } from 'react';
import ReactDOM from 'react-dom';
let initialState = { number: 0 };
const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';
function reducer(state, action) {
    switch (action.type) {
        case INCREMENT:
            return { number: state.number + 1 };
        case DECREMENT:
            return { number: state.number - 1 };
        default:
            return state;
    }
}
function useState() {

}
function App() {
    let [state, dispatch] = useReducer(reducer, initialState);
    return (
        <div>
            <p>{state.number}</p>
            <button onClick={() => dispatch({ type: INCREMENT })}>+</button>
            <button onClick={() => dispatch({ type: DECREMENT })}>-</button>
        </div>
    )

}
ReactDOM.render(<App />, document.getElementById('root'));