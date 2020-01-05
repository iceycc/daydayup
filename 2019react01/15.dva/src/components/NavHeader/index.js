import React from 'react';
import {Layout,Menu} from 'antd';
import {Link} from 'dva/router';
import styles from './index.less';//css modules
const {Header} = Layout;
let logo = require('../../assets/yay.jpg');

//style-components

/* styles.div`
   color:'red'
` */
export default class NavHeader extends React.Component{
    //history location match
    render(){
        return (
            <Header className={styles.header}>
                <img alt="logo" src={logo}/>
                <Menu className={styles.menu} mode="horizontal" selectedKeys={[this.props.location.pathname]}>
                    <Menu.Item key="/home"><Link to="/home">首页</Link></Menu.Item>
                    <Menu.Item key="/user"><Link to="/user">用户管理</Link></Menu.Item>
                    <Menu.Item key="/profile"><Link to="/profile">个人中心</Link></Menu.Item>
                    <Menu.Item key="/signup"><Link to="/signup">注册</Link></Menu.Item>
                    <Menu.Item key="/signin"><Link to="/signin">登录</Link></Menu.Item>
                </Menu>
            </Header>
        )
    }
}