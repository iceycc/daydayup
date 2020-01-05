import React, { Component } from 'react'

export default class Counter extends Component {
    constructor() {
        super();
        this.state = {number:0};
    }
    add = ()=>{
        this.setState({number:this.state.number+1});
    }
    render() {
        return (
            <div>
                <p>{this.state.number}</p>
                <button onClick={this.add}>+</button>
                <SubCounter number={this.state.number}/>
            </div>
        )
    }
}
class SubCounter extends Component {
    constructor(){
        super();
        this.state = {number:0};
    }
    //getDerivedStateFromProps() is defined as an instance method and will be ignored. Instead, declare it as a static method
    //根据新的属性对象派生状态对象 新的属性对象 和旧的状态对象
    static getDerivedStateFromProps(nextProps,prevState){
        if(nextProps.number%2==0){
            return {number:prevState.number+nextProps.number*2};
        }else{
            return {number:prevState.number+nextProps.number*3};
        }
    }
    render() {
        return (
            <div>
                {this.state.number} {this.state.date}
            </div>
        )
    }
}
