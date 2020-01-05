import React,{Component} from 'react';
import {bindActionCreators} from '../redux';
import store from '../store';
import actions from '../store/actions/counter1';
let boundActions = bindActionCreators(actions,store.dispatch);

export default class Counter extends Component{
   state = {number:store.getState().counter1}
   componentDidMount(){
       this.unsubscribe = store.subscribe(()=>{
           //store.getState()={counter1:0,counter2:0}
           this.setState({number:store.getState().counter1});
       });
   }
   componentWillUnmount(){
    this.unsubscribe();
   }
   render(){
       return (
           <>
             <p>{this.state.number}</p>
             <button onClick={boundActions.increment}>+</button>
             <button onClick={boundActions.decrement}>-</button>
           </>
       )
   }
}