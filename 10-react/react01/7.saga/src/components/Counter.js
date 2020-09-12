import React from 'react';
import {connect} from 'react-redux';
import actions from '../store/actions/counter';
class Counter extends React.Component{
    render(){
        return (
            <div>
                <p>{this.props.number}</p>
                <button onClick={this.props.increment}>+</button>
                <button onClick={this.props.asyncIncrement}>asyncIncrement</button>
                <button onClick={this.props.stop}>stop</button>
            </div>
        )
    }
}
export default connect(
    state=>state.counter,
    actions
)(Counter);