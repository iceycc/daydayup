import React, { Component } from 'react'
import withLocal from './withLocal';
 class EmailInput extends Component {
  render() {
    return (
      <input defaultValue={this.props.value}/>
    )
  }
}
export default withLocal(EmailInput,'email');