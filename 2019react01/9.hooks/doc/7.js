import React, { useLayoutEffect, useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
class Counter extends React.Component {
    state = { number: 0 }
    componentDidMount() {
        setInterval(() => this.setState({ number: this.state.number + 1 }), 1000);
    }
    render() {
        return this.props.render({number:this.state.number})
    }
}
function withCounter(Component) {
    return class extends React.Component {
        state = { number: 0 }
        componentDidMount() {
            setInterval(() => {
                this.setState({ number: this.state.number + 1 });
            }, 1000);
        }
        render() {
            return (
                <Component number={this.state.number}/>
            )
        }
    }
}
class App1 extends React.Component {
    render() {
        return (
            <>
                <button>{this.props.number}</button>
            </>
        )
    }
}
App1 = withCounter(App1);
class App2 extends React.Component {
    render() {
        return (
            <>
                <button>{this.props.number}</button>
            </>
        )
    }
}
App2 = withCounter(App2);
//ReactDOM.render(<><Counter render={props=><p>{props.number}</p>}/><Counter render={props=><button>{props.number}</button>}/></>, document.getElementById('root'));
