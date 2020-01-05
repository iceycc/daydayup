import React from 'react';
import {connect} from 'dva';

class Comp extends React.Component{
    render(){
        return (
            <input value={this.props.value} ref={this.props.myRef} onChange={this.props.onChange}/>
        )
    }
}
//Function components cannot be given refs. Attempts to access this ref will fail. Did you mean to use React.forwardRef()?
let WrappedComp = connect(state=>state)(Comp);
const ForwardWrapped = React.forwardRef((props,ref)=>(
    <WrappedComp {...props} myRef={ref}/>
));
export default ForwardWrapped;


/**
    handleChange = (event)=>{
        console.log(this.wrapped);
        this.setState({value:event.target.value})
    }
    state = {value:''}

    <Wrapped value={this.state.value} ref={inst=>this.wrapped = inst} onChange={this.handleChange}/>
 */