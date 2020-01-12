import React, { useCallback, useReducer } from 'react';
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
//叫自定义hooks
function useState(initialState) {
    const reducer = useCallback((state, action) => action);
    let [state, dispatch] = useReducer(reducer, initialState);
    function setState(payload) {
        dispatch(payload);
    }
    return [state, setState];
}
function App() {
    //let [state, dispatch] = useReducer(reducer, initialState);
    let [state, setState] = useState(initialState);
    return (
        <div>
            <p>{state.number}</p>
            <button onClick={() => setState({ number: state.number + 1 })}>+</button>
            <button onClick={() => setState({ number: state.number - 1 })}>-</button>
        </div>
    )

}
ReactDOM.render(<App />, document.getElementById('root'));