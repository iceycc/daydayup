import React from 'react';
import {Route,Link} from '../react-router-dom';
import   './MenuLink.css'
//这个菜单相对于Link多了一个功能，如果当前地址栏中的路径和自己匹配的话，则加一个漂亮的背景色
//在Route要想指定渲染的内容有三种方式 component render children
//component render只要在路径匹配的时候才会渲染，否则不渲染
//children不管路径 匹配不匹配都会渲染
export default function({to,exact,children}){
   return (
       <Route path={to} exact={exact} children={
         props=>{
             return <Link className={props.match?'active':''} to={to}>{children}</Link>;
         }
       } />
   )
}