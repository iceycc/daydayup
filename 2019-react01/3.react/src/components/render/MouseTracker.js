// https://zh-hans.reactjs.org/docs/render-props.html

import React, { Component } from 'react'

// 该组件作用：动态获取鼠标移动时的坐标
export default class MouseTracker extends Component {
    constructor() {
        super();
        this.state = { x: 0, y: 0 };
    }
    handleMouseMove = (event)=>{
        this.setState({
            x:event.clientX,
            y:event.clientY
        });
    }
    render() {
        return (
            <div onMouseMove={this.handleMouseMove}>
                {/* 插槽 */}
                {/* {this.props.children(this.state)} */}
                {this.props.render(this.state)}
            </div>
        )
    }
}

