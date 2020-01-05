import React,{useState,memo,useMemo,useCallback,useReducer,createContext,useContext} from 'react';
import ReactDOM from 'react-dom';
const initialState = 0;
function reducer(state=initialState,action){
    switch(action.type){
        case 'ADD':
            return {number:state.number+1};
        default:
            break; 
    }
}
let CounterContext = createContext();
function SubCounter_bak(){
    return (
        <CounterContext.Consumer>
            {
                value=>(
                    <>
                    <p>{value.state.number}</p>
                    <button onClick={()=>value.dispatch({type:'ADD'})}>+</button>
                    </>
                )
            }
         
        </CounterContext.Consumer>
    )
}
function SubCounter(){
    const {state, dispatch} = useContext(CounterContext);
    return (
        <>
            <p>{state.number}</p>
            <button onClick={()=>dispatch({type:'ADD'})}>+</button>
        </>
    )
}
/* class SubCounter extends React.Component{
    static contextTypes = CounterContext
    this.context =  {state, dispatch}
} */

function Counter(){
    const [state, dispatch] = useReducer((reducer), initialState, ()=>({number:initialState}));
    return (
        <CounterContext.Provider value={{state, dispatch}}>
            <SubCounter/>
        </CounterContext.Provider>
    )
}
ReactDOM.render(<Counter  />, document.getElementById('root'));
