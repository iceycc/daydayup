import React from 'react';
import {connect} from 'dva';
class Home extends React.Component{
    render(){
        return (
          <div>{this.props.title}</div>
        )
    }
}
export default connect(
  state=>state.home
)(Home);