import React from 'react';
import local from '../local';
import {Prompt} from '../react-router-dom';
export default class UserAdd extends React.Component{
    //默认不阻止
    state = {blocking:false}
    constructor(){
        super();
        this.usernameRef = React.createRef();
        this.emailRef = React.createRef();
    }
    handleSubmit = (event)=>{
        event.preventDefault();
        let username = this.usernameRef.current.value;
        let email = this.emailRef.current.value;
        let user = {id:Date.now(),username,email};
        local.add(user);
        
        this.props.history.push('/user/list');
    }
    render(){
        return (
            <form onSubmit={this.handleSubmit}>
                <Prompt
                   when={this.state.blocking}
                   message={location=>`你确定你要跳转到${location.pathname}吗`}
                />
                <div className="form-group">
                    <label className="control-label">用户名</label>
                    <input className="form-control" ref={this.usernameRef} 
                    onChange={event=>this.setState({blocking:this.state.blocking.block||event.target.value.length>0})}/>
                </div>
                <div className="form-group">
                    <label className="control-label">邮箱</label>
                    <input className="form-control"  ref={this.emailRef}
                    onChange={event=>this.setState({blocking:this.state.blocking.block||event.target.value.length>0})}/>
                </div>
                <div className="form-group">
                    <button className="btn btn-primary" type="submit">提交</button>
                </div>
            </form>
        )
    }
}