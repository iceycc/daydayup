import React from 'react';
import {Menu,Icon} from 'antd';
import {Link} from 'dva/router';
import {connect} from 'dva';
const SubMenu = Menu.SubMenu;
class MenuList extends React.Component{
   renderMenus = (resources)=>{
       return resources.map(resource=>{
           if(resource.children.length>0){
                return (
                    <SubMenu key={resource.key} title={<span><Icon type={resource.icon}/>{resource.name}</span>}>
                        {this.renderMenus(resource.children)}
                    </SubMenu>
                )
           }else{
               return (
                   <Menu.Item key={resource.key}>
                    <Link to={resource.key}><Icon type={resource.icon}/>{resource.name}</Link>
                   </Menu.Item>
               )
           }
       });
   }
   render(){
       let {userInfo} = this.props;
       if(!userInfo){
           return null;
       }
       let {pathname} = this.props.location;
       console.log('pathname',pathname)
       return (
           <Menu
            theme="dark"
            defaultSelectedKeys = {["/admin",pathname]}
            defaultOpenKeys = {["/admin"]}
            mode="inline"
           >
            {this.renderMenus(userInfo.resources)}
           </Menu>
       )
   }
}
export default connect(state=>state.login)(MenuList);