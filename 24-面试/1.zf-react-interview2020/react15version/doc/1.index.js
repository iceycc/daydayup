import React, { Component } from 'react';
import ReactDOM from 'react-dom';
class ClassCounter extends React.Component {
  constructor(props) {
    super(props);//this.props = props;
  }
  render() {
    //render 只会返回一个顶级元素
    //return React.createElement(FunctionCounter, { id: 'ClassCounter' }, 'xxx');
    return <FunctionCounter id='ClassCounter' >xxx</FunctionCounter>
  }
}
function FunctionCounter(props) {
  console.log();
  
  return <div id={props.id + 'FunctionCounter'}>hello world {props.children}</div>
  //return React.createElement('div', { id: props.id + 'FunctionCounter' }, 'hello', 'world', props.children);
}
//let element1 = React.createElement('div', { id: 'counter' }, 'hello');
let element2 = React.createElement(ClassCounter, { id: 'counter', a: 111 });
///React元素=虚拟DOM = {$$typeof:ELEMENT,type:'div'}
//let element3 = React.createElement(FunctionCounter);
ReactDOM.render(
  element2,
  document.getElementById('root')
);
/**
 * 1.如何渲染类组件和函数组件
 * 2.如果实现异步的setState
 */