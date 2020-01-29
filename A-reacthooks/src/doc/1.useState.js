import React, { useState, useCallback } from 'react';
import ReactDOM from 'react-dom';
class Counter1 extends React.Component {
    state = { number: 0 }
    render() {
        return (
            <div>
                <p>{this.state.number}</p>
                <button onClick={() => this.setState({ number: this.state.number + 1 })}>+</button>
            </div>
        )
    }
}

function Counter2() {
    let [state, setState] = useState({ number: 0 });
    const alertNumber = () => {
        setTimeout(() => {
            alert(state.number);
        }, 3000);
    }
    return (
        <div>
            <p>{state.number}</p>
            <button onClick={() => setState({ number: state.number + 1 })}>+</button>
            <button onClick={alertNumber}>alertNumber</button>
        </div>
    )
}
//函数式更新
//如果新的状态需要使用先前的状态计算出来，
function Counter3() {
    let [state, setState] = useState({ number: 0 });
    function lazy() {
        setTimeout(() => {
            setState({ number: state.number + 1 })
        }, 1000);
    }
    function lazyFunction() {
        setTimeout(() => {
            setState(state => ({ number: state.number + 1 }));
            setState(state => ({ number: state.number + 1 }));
        }, 3000);
    }
    return (
        <div>
            <p>{state.number}</p>
            <button onClick={() => setState({ number: state.number + 1 })}>+</button>
            <button onClick={lazy}>lazy</button>
            <button onClick={lazyFunction}>lazyFunction</button>
        </div>
    )
}
//惰性初始state
//initialState初始状态参数只会有组件初始渲染的时候调用，后续渲染会被忽略 
//跟类组件setState不同，这里的状态不会自动合并 ，更新的时候要传入完整的值
function Counter4() {
    let [state, setState] = useState(function () {
        console.log('初始状态');
        return { number: 0, name: '计数器' };
    });

    return (
        <div>
            <p>{state.name}:{state.number}</p>
            <button onClick={() => setState({ ...state, number: state.number + 1 })}>+</button>
        </div>
    )
}
// 传入的是老的不会重复触发
function Counter5() {
    let [state, setState] = useState(function () {
        return { number: 0, name: '计数器' };
    });
    console.log('Counter5 render');
    return (
        <div>
            <p>{state.name}:{state.number}</p>
            <button onClick={() => setState({ ...state, number: state.number + 1 })}>+</button>
            <button onClick={() => setState(state)}>+</button>
        </div>
    )
}
let lastAddClick;
let lastChangeName;
function Counter6() {
    let [number, setNumber] = useState(0);
    let [name, setName] = useState('zhufeng');
    //会在每次渲染的时候都 会生成一个新的函数
    //只有在依赖的变量发生变化的时候才会重新生成
    const addClick = useCallback(() => setNumber(number + 1), [number]);
    console.log(lastAddClick === addClick);
    lastAddClick = addClick;
    const changeName = useCallback(() => setName(Date.now()), [name]);
    console.log(lastChangeName === changeName);
    lastChangeName = changeName;
    return (
        <div>
            <p>{name}:{number}</p>
            <button onClick={addClick}>addClick</button>
            <button onClick={changeName}>changeName</button>
        </div>
    )
}
ReactDOM.render(<Counter6 />, document.getElementById('root'));