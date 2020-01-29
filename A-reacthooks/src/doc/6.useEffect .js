import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
/* class Counter extends React.Component {
    state = { number: 0 }
    componentDidMount() {
        document.title = this.state.number;
    }
    componentDidUpdate() {
        document.title = this.state.number;
    }
    render() {
        return (
            <div>
                <p>{this.state.number}</p>
                <button onClick={() => this.setState({ number: this.state.number + 1 })}>+</button>
            </div>
        )
    }
} */
function Counter() {
    let [state, setState] = useState({ number: 0 });
    //useEffect里的函数会在组件挂载完成后，或者组件更新完成后进行调用
    useEffect(() => {
        document.title = state.number;
    });
    return (
        <div>
            <p>{state.number}</p>
            <button onClick={() => setState({ number: state.number + 1 })}>+</button>
        </div>
    )
}
//跳过effect进行性能优化
//Can't perform a React state update on an unmounted component. This is a no-op, but it indicates a memory leak in your application. To fix, cancel all subscriptions and asynchronous tasks in a useEffect cleanup function.
function Counter2() {
    let [state, setState] = useState({ number: 0 });
    //useEffect里的函数会在组件挂载完成后，或者组件更新完成后进行调用
    //如果没有给第二个参数，那么函数会在每次执行渲染后调用
    useEffect(() => {
        console.log('开始一个定时器');
        let timer = setInterval(() => {
            setState(x => ({ number: x.number + 1 }));
        }, 1000);
        //useEffect会返回一个清理函数，当组件将要卸载的时候会执行清理函数
        return () => {
            console.log('销毁一个定时器');
            clearInterval(timer);
        }
    }, []);
    return (
        <div>
            <p>{state.number}</p>
            <button onClick={() => setState({ number: state.number + 1 })}>+</button>
        </div>
    )
}
function App() {
    let [visible, setVisible] = useState(true);
    return (
        <div>
            <button onClick={() => setVisible(false)}>hide</button>
            {visible && <Counter2 />}
        </div>
    )
}
ReactDOM.render(<App />, document.getElementById('root'));