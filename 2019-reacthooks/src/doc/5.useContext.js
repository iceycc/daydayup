import React, { useCallback, useReducer, useState, useContext,createContext } from 'react';
import ReactDOM from 'react-dom';
let MyContext = createContext();
function Counter() {
    let { state, setState } = useContext(MyContext);
    return (
        <div>
            <p>{state.number}</p>
            <button onClick={() => setState({ number: state.number + 1 })}>+</button>
        </div>
    )
}
function App() {
    const [state, setState] = useState({ number: 0 });
    return (
        <MyContext.Provider value={{ state, setState }}>
            <Counter />
        </MyContext.Provider>
    )
}
ReactDOM.render(<App />, document.getElementById('root'));