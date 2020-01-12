import React from 'react';
import ReactDOM from 'react-dom';
//  自定义组件里用ref
// ref只能引用类组件，函数组件要用 React.forwardRef()
class Form extends React.Component{
  constructor(props){
    super(props);
    this.textInput = createRef();//{current:null}
  }
  getFocus = ()=>{
    //console.log(this.textInput.current.textInput.current);
    // 获取到TextInput3的组件实例，执行
    // ref只能引用类组件，函数组件没有实例
    this.textInput.current.focus()
  } 
  render(){
    return (
      <>
      {/* 点击 button 让 TextInput3中的input获取焦点 */}
       <TextInput3 myref={this.textInput}/>
       <button onClick={this.getFocus}>focus</button>
      </>
    )
  }
}
function TextInput2(props,ref){
  return <input ref={ref}/>
}
// React.forwardRef() :
function createRef(){return {current:null}}
// 如果自定义函数组件想用ref的话
// 需要用React.forwardRef(com),包裹转发一下ref属性
// 函数组件是不能获取 ref 的，改名了
// let TextInput3 = React.forwardRef(TextInput2)
let TextInput3 = forwardRef(TextInput2);
function forwardRef(funcComponent){
  return function(props){//{myref:{current:null}}
      return funcComponent(props,props.myref);
  }
}
// 返回一个类组件
function forwardRef1(funcComponent){
  class Comp extends React.Component{
    render(){
      return funcComponent(this.props,this.props.ref1);
    }
  }
  return Comp;
}
class TextInput extends React.Component{
  constructor(props){
    super(props);
    this.textInput = React.createRef();//{current:}
  }
  render(){
    return <input ref={this.textInput}/>
  }
}

ReactDOM.render(<Form/>,document.getElementById('root'));
