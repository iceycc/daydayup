import React from 'react';
import ReactDOM from 'react-dom';

class Form extends React.Component{
  constructor(props){
    super(props);
    this.textInput = createRef();//{current:null}
  }
  getFocus = ()=>{
    //console.log(this.textInput.current.textInput.current);
    this.textInput.current.focus()
  } 
  render(){
    return (
      <>
       <TextInput3 myref={this.textInput}/>
       <button onClick={this.getFocus}>focus</button>
      </>
    )
  }
}
function TextInput2(props,ref){
  return <input ref={ref}/>
}
function createRef(){return {current:null}}
let TextInput3 = forwardRef(TextInput2);

function forwardRef(funcComponent){
  return function(props){//{ref1:{current:null}}
      return funcComponent(props,props.myref);
  }
}

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
