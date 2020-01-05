import React from 'react';
import local from '../local';
import {Link} from '../react-router-dom';
export default class UserList extends React.Component{
    state = {users:[]}
    componentDidMount(){
        let users = local.getList();
        this.setState({users});
    }
    render(){
        return (
            <ul className="list-group">
                {
                    this.state.users.map(item=>(
                        <li className="list-group-item" key={item.id}>
                            <Link to={{pathname:`/user/detail/${item.id}`,state:item}}>{item.username}</Link>
                        </li>
                    ))
                }
            </ul>
        )
    }
}