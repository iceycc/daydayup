import React, { Component } from 'react'
import {Counter1State} from "../store/reducers/counter1";
import {RootState} from '../store/reducers/index';
import {connect} from 'react-redux';
import actions,{incrementAction,decrementAction} from '../store/actions/counter';
/* interface Props {
  number:number,
  increment:()=>incrementAction,
  decrement:()=>decrementAction
} */
type mapStateToPropsType = ReturnType<typeof mapStateToProps>;
type actionsType = typeof actions;
type  Props = mapStateToPropsType & actionsType;
class Counter extends Component<Props> {
   render(){
      let {number,increment,decrement} = this.props;
      return (
        <>
           <p>Counter2:{number}</p>
           <button onClick={increment}>+</button>
           <button onClick={decrement}>-</button>
        </>
      )
   }
}
const mapStateToProps = (state:RootState):Counter1State=>state.counter2;
export default connect(
  mapStateToProps,
  actions
)(Counter);