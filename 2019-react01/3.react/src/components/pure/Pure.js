import React, { Component} from 'react'
import  PureComponent from './PureComponent';

class Counter extends PureComponent{
    render(){
        console.log('Counter render')
        return <div>{this.props.number}</div>
    }
}
export default class App extends PureComponent {
  constructor(props){
    super();
    this.state = {title:'计数器',number:0};
    this.inputRef = React.createRef();
  }
  add = ()=>{
      this.setState({
        number:this.state.number+parseInt(this.inputRef.current.value)
      });
  }
  render() {
    console.log('App render')
    return (
      <div>
        <Title title={this.state.title}/>
        <Counter number={this.state.number}/>
        <input ref={this.inputRef}/>
        <button onClick={this.add}>+</button>
      </div>
    )
  }
}

class Title1 extends PureComponent{
    render(){
        console.log('Title render')
        return <div>{this.props.title}</div>
    }
}
function Title(props){
    console.log('Title render ')
    return <div>{props.title}</div>
}
function memo(FuncComponent){
  return class  extends PureComponent{
      render(){
          return <FuncComponent {...this.props}/>
      }
  }
}
function memo2(FuncComponent){
    return class  extends PureComponent{
        render(){
            return FuncComponent(this.props);
        }
    }
  }
Title = memo2(Title);