import React from 'react';
import {Layout} from 'antd';
import {connect} from 'dva';
import styles from './index.less';
const {Header} = Layout;
class AdminHeader extends React.Component{
    componentWillMount(){
        this.props.dispatch({type:'login/loadUser'});
    }
    render(){
        return (
            <Header>
               <img src="http://img.zhufengpeixun.cn/zfpxlogo.png" alt="logo" className={styles.logo}/>
               {this.props.userInfo&&<span className={styles.welcome}>欢迎 {this.props.userInfo.username}</span>}
            </Header>
        )
    }
}
export default connect(state=>state.login)(AdminHeader);