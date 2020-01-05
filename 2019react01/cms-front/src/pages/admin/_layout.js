import React from 'react';
import {Layout} from 'antd';
import AdminHeader from '../../components/AdminHeader';
import MenuList from '../../components/MenuList';
const {Footer,Sider,Content} = Layout;
export default class Admin extends React.Component{
    render(){
        return (
            <Layout>
              <AdminHeader {...this.props}/>
              <Layout>
                 <Sider>
                   <MenuList {...this.props}/>
                 </Sider>
                 <Content>{this.props.children}</Content>
              </Layout>
              <Footer style={{textAlign:'center'}}>
                 珠峰架构 @2019
              </Footer>
            </Layout>
        )
    }
}