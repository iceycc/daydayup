import React from 'react';
import local from '../local';
export default class UserDetail extends React.Component{
    state = {user:{}}
    componentDidMount(){
        let user = this.props.location.state;
        if(!user){
            user = local.get(this.props.match.params.id);
        }
        this.setState({user});
    }
    render(){
        console.log(this.props);
        let {user={}} = this.state;
        return (
            <table className="table table-bordered">
                <thead>
                   <tr>
                    <th>ID</th>
                    <th>用户名</th>
                    <th>邮箱</th>
                   </tr>
                </thead>
                <tbody>
                    <tr>
                    <td>{user.id}</td>
                    <td>{user.username}</td>
                    <td>{user.email}</td>
                    </tr>
                </tbody>
            </table>
        )
    }
}