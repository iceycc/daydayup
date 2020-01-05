import React from 'react';
export default class Login extends React.Component{
    handleLogin = ()=>{
        localStorage.setItem('login','true');
        if(this.props.location.state){
            this.props.history.push(this.props.location.state.from);
        }else{
            this.props.history.push('/');
        }
    }
    render(){
        return (
            <button className="btn btn-primary" onClick={this.handleLogin}>登录</button>
        )
    }
}