import React from 'react';
import ReactDOM from 'react-dom';
//非受控组件指的是DOM元素的值存在DOM元素的内部，不受React控制
//受控组件指的是DOM元素的值受React状态控制
class Form extends React.Component{
  constructor(props){
    super(props);
    this.state = {text:'hello'}
  }
  add = ()=>{
    console.log(this.state.text)
  }
  handleChange = (event)=>{
    this.setState({text:event.target.value});
  }
  changeText = (text)=>{
    this.setState({text});
  }
  render(){
    return (
      <>
       <input value={this.state.text} onChange={this.handleChange}/>
       <Son text={this.state.text} name={this.props.name} changeText={this.changeText}/>
       <button onClick={this.add}>add</button>
      </>
    )
  }
}
class Son extends React.Component{
  render(){
    return (
      <div style={{border:'1px solid red'}}>
        <div>text:{this.props.text},name: {this.props.name}</div>
        <input ref="myInput"/>
        <button onClick={()=>this.props.changeText(this.refs.myInput.value)}>改变父亲的text</button>
      </div>
    )
  }
}
ReactDOM.render(<Form name="zhufeng"/>,document.getElementById('root'));
