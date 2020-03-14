import React from 'react';
import ReactDOM from 'react-dom';
class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.state = { number: 0 }
    }

    add() {
        // 合并更新 提高效率

        // 异步的 第一次进入时 批量更新标志时true
        this.setState({ number: this.state.number + 1 });
        console.log(this.state);//0
        this.setState({ number: this.state.number + 1 });
        console.log(this.state);//0
        // 第一组的队列处理完后设置为false
        setTimeout(() => {
            // 这里的 开始执行，批量更新标志已经变成false了。无法进行脏组件收集了
            // 此时同步的了
            this.setState({ number: this.state.number + 1 });
            console.log(this.state);//3
            this.setState({ number: this.state.number + 1 });
            console.log(this.state);//4
        });
    }
    render() {
        return <button onClick={this.add.bind(this)}>
            {this.props.name}:{this.state.number}
        </button>;
    }
}
ReactDOM.render(<Counter />, document.getElementById('root'));
