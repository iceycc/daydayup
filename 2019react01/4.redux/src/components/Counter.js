import React,{Component} from 'react';
import actions from '../store/actions/counter';
import {connect} from '../react-redux';
 class Counter extends Component{
   render(){
       console.log(this.props);
       return (
           <>
             <p>{this.props.number}</p>
             <button onClick={this.props.increment}>+</button>
             <button onClick={this.props.decrement}>-</button>
             <button onClick={this.props.asyncIncrement}>过一秒后加1</button>
             <button onClick={this.props.promiseIncrement}>promise加1</button>
           </>
       )
   }
}
//<button onClick={()=>this.props.dispatch({type:'INCREMENT'})}>INCREMENT</button>
// {number:0}=> {number:0}将成为当前组件的属性对象
//1 状态可能很大，但此组件用的很少。 2.可能需要增加或者 减少或者修改一些属性 
//即使映射的会不会也会触发渲染,也是为了性能优化
const mapStateToProps = state=>state;
const mapDispatchToProps = (dispatch) => {
  return {
    increment: (...args) => dispatch(actions.increment(...args)),
    decrement: (...args) => dispatch(actions.decrement(...args))
  }
}
//conect负责连接仓库和组件
export default connect(
    mapStateToProps,
    actions
)(Counter);