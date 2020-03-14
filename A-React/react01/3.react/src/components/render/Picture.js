import React,{Component} from 'react';
import MouseTracker from './MouseTracker';

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
function withMouseTracker(Comp){
    // 方法一：放到children 就从children取
    // return props=>{
    //     <MouseTracker>
    //         {
    //             data=><Comp {...props} {...data}/>
    //         }
    //     </MouseTracker>
    // };

    // render props
    return props=><MouseTracker render={data=><Comp {...props} {...data}/>}/>;

 }
export default withMouseTracker(Picture);