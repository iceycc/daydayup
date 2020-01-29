import React from 'react';
export default function (Component) {
    //从属性对象中接收到了一个val属性，存放着英文名，调用接口取得中文名，然后作为value属性传给了Component
    return class extends React.Component {
        constructor() {
            super();
            this.state = {value: ''};
        }
        componentDidMount() {
           fetch('http://localhost:3000/translation.json').then(response=>response.json()).then(result=>{
            // debugger;    
            this.setState({value:result[this.props.val]});
           })
           //{"zhangsan":"张三","lisi":"李四"}
        }
        render() {
            return <Component {...this.props} value={this.state.value}/>
        }
    }
}