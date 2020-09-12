import React, { Component } from 'react'
interface Props {
  name:string
}
interface State{
  number:number,
  amount:number
}
export default class Counter extends Component<Props,State> {
  state = {number:0,amount:1}
  add = ()=>{
    this.setState({number:this.state.number+this.state.amount});
  }
  handleChange = (event:React.ChangeEvent<HTMLInputElement>)=>{
    let value = event.target.value;
    this.setState({amount:parseInt(value)});
  }
  render() {
    let {number,amount} = this.state;
    let style:React.CSSProperties = {
      color:'red',
      backgroundColor:'green'
    }
    return (
        <div style={style}>
          <p>{number}</p>
          <input value={amount} onChange={this.handleChange}/>
          <button onClick={this.add}>+</button>
        </div>
    )
  }
}
