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
// 派发一个函数
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
// 派发一个Promise 延迟效果
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
    // let [state, dispatch] = useLogger(reducer, initialState);
    let [state, dispatch] = useThunk(reducer, initialState);
    // let [state, dispatch] = usePromise(reducer, initialState);
    return (
        <div>
            <p>{state.number}</p>
            <hr/>
            <button onClick={() => dispatch({ type: INCREMENT })}>+</button>
            <hr/>
            <button onClick={() => dispatch(new Promise(function (resolve) {
                setTimeout(function () {
                    resolve({ type: INCREMENT });
                }, 1000);
            }))}>派发promise +</button>
            <hr/>
            <button onClick={() => dispatch(function(dispatch,getState){
                dispatch({ type: DECREMENT })
            })}>useThunk派发函数 -</button>
            <hr/>
            <button onClick={() => dispatch({ type: DECREMENT })}>-</button>

        </div>
    )

}
export default App
// ReactDOM.render(<App />, document.getElementById('root'));