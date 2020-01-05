import React, { Component } from 'react'
import withLogger from './withLogger';
class Counter extends Component {
  render() {
    return (
      <div>
        Counter {this.props.name}
      </div>
    )
  }
}
export default withLogger(Counter);