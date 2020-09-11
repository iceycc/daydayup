import *as React from 'react'
interface Props {
  name:string
}
interface State {
  number:number,
  amount:number
}
export default class Counter extends React.Component<Props,State> {
  state = {
    number:0,
    amount:1
  }
  handleClick = ()=>{
    this.setState({number:this.state.number+this.state.amount});
  }
  handleChagne = (event:React.ChangeEvent<HTMLInputElement>)=>{
    this.setState({amount:parseInt(event.target.value)});
  }
  render() {
    let {name} = this.props;
    let {number,amount} = this.state;
    let mystyle:React.CSSProperties = {
      color:'red',
      backgroundColor:'green'
    }
    return (
      <div style={mystyle}>
        <p>{name}:{number}</p>
        <input value={amount} onChange={this.handleChagne}/>
        <button onClick={this.handleClick}>+</button>
      </div>
    )
  }
}
