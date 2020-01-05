import React from 'react';
import ReactDOM from 'react-dom';
/**
 * 解决this指针的三种方法
 * 1. this.add.bind(this) 把add方法里面的this指针绑定为组件实例 
 * 2. 使用匿名函数
 * 3. 类的属性
 */
class Counter extends React.Component{
  constructor(props){
    super(props);
    this.state = {number:0,name:'zhufeng'};//初始值是number:0
  }
  //给类的实例增加一个add的属性，而这个属性里的this绑死为组件的实例 
  //这个方法是直接 赋给组件实例 ，而不是放在原型上的
  add = ()=>{
    //console.log('this.replaceState',this.replaceState)
    //Cannot read property 'setState' of undefined
    //修改状态的唯一方法是调用this.setState 
    //this.setState({number:this.state.number+1});
    //this.state.number = this.state.number+1;
    //强制更新，不管状态和属性修改没有，都会强制刷新界面
    //this.forceUpdate();
    //this.setState({number:this.state.number+1});
    //console.log(this.state.number);//0
    //this.setState({number:this.state.number+1});
    //console.log(this.state.number);//0
    //当调用setState的时候，其实状态并没有直接改变，而是放入一个队列当中。
    /**
    this.setState((state)=>({number:state.number+1}),()=>{
      console.log('state=',this.state)
    });
    this.setState((state)=>({number:state.number+2}),()=>{
      console.log('state=',this.state)
    });
    this.setState((state)=>({number:state.number+3}),()=>{
      console.log('state=',this.state)
    });
     */
    //this.setState({number:this.state.number+1});
    //Object.assign(this.state,{number:this.state.number+1});
    //this.replaceState({number:this.state.number+1});
    //this.state = {number:this.state.number+1};
    this.setState({number:this.state.number+1,name:null});
  }
  render(){
    return (
      <>
        <p>{this.state.name}:{this.state.number}</p>
        <button onClick={this.add}>+</button>
      </>
    )
  }
}
ReactDOM.render(<Counter/>,document.getElementById('root'));
