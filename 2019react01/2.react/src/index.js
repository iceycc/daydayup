import React from 'react';
import ReactDOM from 'react-dom';
class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.state = { number: 0 }
    }

    add() {
        //
        this.setState({ number: this.state.number + 1 });
        console.log(this.state);//0
        this.setState({ number: this.state.number + 1 });
        console.log(this.state);//0
        setTimeout(() => {
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
