import React, { Component } from 'react'
import withLocal from './withLocal';
import withAjax from './withAjax';
class UserNameInput extends Component {
  render() {
    return (
      <input defaultValue={this.props.value}/>
    )
  }
}
//高阶组件的多层嵌套也是hooks解决的问题之一
let UserNameInputWithAjax=withAjax(UserNameInput);
let UserNameInputWithLocal=withLocal(UserNameInputWithAjax,'username');
export default UserNameInputWithLocal;