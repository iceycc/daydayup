import React from 'react';
import ReactDOM from 'react-dom';
// 受控组件 非受控组件  以及ref
// 获取dom：ref
// input等里使用ref
// 判断Ref的值 
//1.ref=字符串 2. ref=函数　 3. ref = 对象 React.createRef()

// 1 ref=字符串 要废弃
class Sum extends React.Component{
  add = ()=>{
    let numA = this.refs.numA.value;
    let numB = this.refs.numB.value;
    let result = parseFloat(numA)+parseFloat(numB);
    this.refs.result.value = result;
  }
  render(){
    return (
      <>
       <input ref="numA"/>+<input ref="numB"/><button onClick={this.add}>=</button><input ref="result"/>
      </>
    )
  }
}

// 2. ref=函数
class Sum2 extends React.Component{
  add = ()=>{
    let numA = this.numA.value;
    let numB = this.numB.value;
    let result = parseFloat(numA)+parseFloat(numB);
    this.result.value = result;
  }
  render(){
    return (
      <>
       <input ref={inst=>this.numA = inst}/>+<input ref={inst=>this.numB = inst}/><button onClick={this.add}>=</button><input ref={inst=>this.result = inst}/>
      </>
    )
  }
}

// 3. ref = 对象  React.createRef()
function createRef(){
  return {current:null}
}
class Sum3 extends React.Component{
  constructor(props){
    super(props);
    this.numA = createRef();//{current:numAInput}
    this.numB = React.createRef();//{current:numBInput}
    this.result = createRef();//{current:resultInput}
  }
  add = ()=>{
    let numA = this.numA.current.value;
    let numB = this.numB.current.value;
    let result = parseFloat(numA)+parseFloat(numB);
    this.result.current.value = result;
  }
  render(){
    return (
      <>
      {/* ref会看后面是什么值 ，字符串的或同１，对象并且有current属性会将真实的dom赋到current上*/}
       <input ref={this.numA}/>+<input ref={this.numB}/><button onClick={this.add}>=</button><input ref={this.result}/>
      </>
    )
  }
}
ReactDOM.render(<Sum3/>,document.getElementById('root'));
