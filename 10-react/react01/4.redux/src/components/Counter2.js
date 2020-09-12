import React,{Component} from 'react';
import {bindActionCreators} from '../redux';
import store from '../store';
import actions from '../store/actions/counter2';
// 起初：抽离 actions
// let actions1 = {
//     increment(){
//         store.dispatch({type:'INCREMENT2'})
//     },
//     decrement(){
//         store.dispatch({type:'DECREMENT2'})
//     },
// }

// 绑定actions和派发的dispath。
let boundActions = bindActionCreators(actions,store.dispatch);

export default class Counter extends Component{
   state = {number:store.getState().counter2}
   componentDidMount(){
       this.unsubscribe = store.subscribe(()=>{
           this.setState({number:store.getState().counter2});
       });
   }
   componentWillUnmount(){
    this.unsubscribe();
   }
   render(){
       return (
           <>
             <p>{this.state.number}</p>
             {/* 起初：派发actions */}
             {/* <button onClick={()=>{store.dispatch({type:'INCREMENT2'})}}>+</button> */}
             {/* <button onClick={()=>{store.dispatch({type:'DECREMENT2'})}}>-</button> */}
             
             <button onClick={boundActions.increment}>+</button>
             <button onClick={boundActions.decrement}>-</button>
           </>
       )
   }
}