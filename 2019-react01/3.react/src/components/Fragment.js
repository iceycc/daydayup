import React, { Component } from 'react'
class TodoItems extends Component{
    //render方法能且只能返回一个顶级元素   React.Fragement
    render(){
        return (
          <>
               <div>a</div>
               <div>b</div>
          </>
        )
    }
}
export default class Todos extends Component {
    constructor(){
        super();
        this.state = {items:['a','b','c']};
    }
  render() {
    return (
      <div>
          <input/><button>+</button>
          <TodoItems items={this.state.items}/>
      </div>
    )
  }
}
