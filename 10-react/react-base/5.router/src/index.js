import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router,Route} from './react-router-dom';
import Home from './components/Home';
import User from './components/User';
import Profile from './components/Profile';
import Protected from './components/Protected';
import Login from './components/Login';
import MenuLink from './components/MenuLink';
import NavHeader from './components/NavHeader';
import 'bootstrap/dist/css/bootstrap.css'
//Router是路由的容器
ReactDOM.render(
<Router>
 <>
  <nav className="navbar navbar-inverse">
    <div className="container-fluid">
        <NavHeader/>
        <ul className="nav navbar-nav">
        <li><MenuLink to="/" exact>首页</MenuLink></li>
        <li><MenuLink to="/user" >用户管理</MenuLink></li>
        <li><MenuLink to="/profile" >个人中心</MenuLink></li>
        <li><MenuLink to="/login" >登录</MenuLink></li>
      {/*       <li><Link to={{pathname:"/",state:'首页'}}>首页</Link></li>
            <li><Link to={{pathname:"/user",state:'用户管理'}}>用户管理</Link></li>
            <li><Link to={{pathname:"/profile",state:'个人中心'}}>个人中心</Link></li>
            <li><Link to="/login">登录</Link></li> */}
        </ul>
    </div>
  </nav>
  <div className="container">
    <div className="row">
        <div className="col-md-12">
            <Route path="/" component={Home} exact/>
            <Route path="/user" component={User}/>
            <Route path="/login" component={Login}/>
            <Protected exact path="/profile" component={Profile}/>
        </div>
    </div>
  </div>
 </>
</Router>,
document.getElementById('root'));