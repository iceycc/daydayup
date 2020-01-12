import React, { Component } from 'react'
import PropTypes from 'prop-types';
// context 不建议使用 ， 子代不知道是谁的属性。 不好维护
// 就近使用，子会先找父亲，父亲有就用父亲的，没有就会找爷爷的。
// 父亲的会覆盖爷爷的属性

// 头
class Header extends Component {
    //定义子上下文对象的属性和类型
    static childContextTypes = {
        name: PropTypes.string,
        age: PropTypes.number
    }
    //返回或者说定义真正的子上下文
    getChildContext() {
        return {
            age: 10,
            name: 'Header'
        }
    }
    render() {
        console.log(this.context)
        return <div style={{ border: '5px solid green', padding: '5px' }}>

            <Title></Title>
        </div>
    }
}

// 标题
class Title extends Component {
    //表示或者 说指定我要获取哪些上下文对象
    static contextTypes = {
        color: PropTypes.string,
        name: PropTypes.string,
        age: PropTypes.number
    }
    render() {
        console.log(this.context)
        return <div style={{ border: '5px solid orange', padding: '5px', color: this.context.color }}>
            Title
        </div>
    }
}
class Main extends Component {
    render() {
        return <div style={{ border: '5px solid blue', padding: '5px' }}>
            Main
            <Content></Content>
        </div>
    }
}
class Content extends Component {
    static contextTypes = {
        color: PropTypes.string,
        name: PropTypes.string,
        age: PropTypes.number,
        setColor: PropTypes.func
    }
    render() {
        return <div style={{ border: '5px solid pink', padding: '5px', color: this.context.color }}>
            Content
            <button onClick={() => this.context.setColor('red')}>变红</button>
            <button onClick={() => this.context.setColor('green')}>变绿</button>
        </div>
    }
}
export default class Page extends Component {

    constructor() {
        super();
        this.state = { color: 'gray' };
    }
    //定义子上下文对象的属性和类型
    static childContextTypes = {
        name: PropTypes.string,
        color: PropTypes.string,
        setColor: PropTypes.func
    }
    //返回或者说定义真正的子上下文
    getChildContext() {
        return {
            color: this.state.color,
            setColor: this.setColor,
            name: 'Page'
        }
    }
    setColor = (color) => {
        this.setState({ color });
    }
    render() {
        return (
            <div style={{ border: '5px solid red', padding: '5px' }}>
                <h2> Page </h2>
                <Header>
                    <Title>

                    </Title>
                </Header>
                <Main>
                    <Content>

                    </Content>
                </Main>
            </div>
        )
    }
}
