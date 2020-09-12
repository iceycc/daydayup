import React, { Component } from 'react'
import {connect} from 'react-redux';
import actions from '../store/actions/counter';
//纯UI组件
class Counter extends Component {
  render() {
    return (
      <div>
        <p>{this.props.number}</p>
        <button onClick={this.props.increment}>+</button>
        <button onClick={this.props.decrement}>-</button>
        <button onClick={this.props.goHome}>去首页</button>
      </div>
    )
  }
}

export default connect(
    state=>state.counter,//{number:0}
    actions
)(Counter);