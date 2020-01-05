import React from 'react';
import ReactDOM from 'react-dom';
import store from './store';
class Counter extends React.Component{
    state = {number:0}
    componentDidMount(){
        store.subscribe(()=>{
            this.setState({number:store.getState()});
        });
    }
    render(){
      return (
          <div>
              <p>{this.state.number}</p>
              <button onClick={()=>store.dispatch(function(dispatch){
                  dispatch({type:'add'});
              })}>+</button>
          </div>
      )  
    }
}
ReactDOM.render(<Counter/>,document.getElementById('root'));