import React from 'react';
import ReactDOM from 'react-dom';
//非受控组件指的是DOM元素的值存在DOM元素的内部，不受React控制
//受控组件指的是DOM元素的值受React状态控制

// react是单向数据流 如何理解 ：只能从父 给 子 不能反过来

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
      {/* 设置默认值，如果只设置value会报错，不可修改，readOnly */}
      <input value={this.state.text}/>
      {/* 
        1 defaultValue 仅仅设置默认值，可以修改，并且还是个非受控组件
        2 value + onChange 可以设置值，并且可以修改，但是变成受控组件了
      */}
       <input defaultValue={this.state.text}/>
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
        {/* 子组件修改父组件的状态：
          1 父组件定义一个修改状态的方法
          2 父组件通过props将该方法传给子组件
          3 子组件修改状态时通过props传递的回调方法触发修改父组件的状态

          父亲给儿子一个银行账户，儿子每个月往父亲的账户打钱。。。
        */}
        <button onClick={()=>this.props.changeText(this.refs.myInput.value)}>改变父亲的text</button>
      </div>
    )
  }
}
ReactDOM.render(<Form name="zhufeng"/>,document.getElementById('root'));
