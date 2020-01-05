import React from 'react';
import { connect } from 'dva';
import NavHeader from '../components/NavHeader'
import {Layout} from 'antd';
import {Switch,Redirect} from 'dva/router';
import {renderRoutes,renderRedirect} from '../utils/routes';
const {Content,Footer} = Layout;

function IndexPage(props) {
  return (
    <Layout>
      <NavHeader {...props}/>
      <Content>
        <Switch>
            {renderRoutes(props.routes,props.app)}
            {renderRedirect(props.routes,"/",false)}
            {/**<Redirect from="/" to="/home"/> */}
        </Switch>
      </Content>
      <Footer style={{textAlign:'center'}}>@珠峰架构</Footer>
    </Layout>
  );
}

IndexPage.propTypes = {
};

export default connect()(IndexPage);
