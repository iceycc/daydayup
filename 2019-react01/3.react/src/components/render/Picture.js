import React,{Component} from 'react';
import MouseTracker from './MouseTracker';
function withMouseTracker(Comp){
   return props=><MouseTracker render={data=><Comp {...props} {...data}/>}/>;
}
class Picture extends Component {
    render() {
        return (
            <>
                <img src="http://localhost:3000/bg.jpg"/>
                <p>当前鼠标的位置是 x={this.props.x} y={this.props.y}</p>
            </>
        )
    }
}
export default withMouseTracker(Picture);