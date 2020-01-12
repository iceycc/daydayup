import React, { useEffect, useReducer } from 'react';
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
//实现redux-logger 在重组次状态变更后打印新的状态值 redux中件间，是用新的dispatch替换老dispatch
function useLogger(reducer, initialState) {
    let [state, dispatch] = useReducer(reducer, initialState);
    function loggerDispatch(action) {
        console.log('老状态', state);
        dispatch(action);
    }
    useEffect(() => console.log('新状态', state));
    return [state, loggerDispatch];
}
function useThunk(reducer, initialState) {
    let [state, dispatch] = useReducer(reducer, initialState);
    function thunkDispatch(action) {
        if (typeof action === 'function') {
            action(thunkDispatch, () => state);
        } else {
            dispatch(action);
        }
    }
    return [state, thunkDispatch];
}
function usePromise(reducer, initialState) {
    let [state, dispatch] = useReducer(reducer, initialState);
    function promiseDispatch(action) {
        if (typeof action.then === 'function') {
            action.then(promiseDispatch);
        } else {
            dispatch(action);
        }
    }
    return [state, promiseDispatch];
}
function App() {
    let [state, dispatch] = usePromise(reducer, initialState);
    return (
        <div>
            <p>{state.number}</p>
            <button onClick={() => dispatch(new Promise(function (resolve) {
                setTimeout(function () {
                    resolve({ type: INCREMENT });
                }, 1000);
            }))}>+</button>
            <button onClick={() => dispatch({ type: DECREMENT })}>-</button>
        </div>
    )

}
ReactDOM.render(<App />, document.getElementById('root'));