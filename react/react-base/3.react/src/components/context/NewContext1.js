import React, { Component } from 'react'
import PropTypes from 'prop-types';
//import ThemeContext from '.../ThemeContext';
var REACT_CONTEXT_TYPE =  Symbol.for('react.context') ;
var REACT_PROVIDER_TYPE = Symbol.for('react.provider');
//const ThemeContext = React.createContext();
const ThemeContext = createContext();
console.log('ThemeContext',ThemeContext)
//ThemeContext={Provider,Consumer}
function createContext(){
    class Provider extends Component{
        static value;
        $$typeof=REACT_PROVIDER_TYPE
        constructor(props){
            super(props);
            Provider.value = props.value;
            this.state = {value:props.value}
        }
        static getDerivedStateFromProps(props, state) {
            Provider.value = props.value;
            return {value:props.props};
        }
        render(){
            return this.props.children;
        }
    }
    class Consumer extends Component{
        render(){
            return this.props.children(Provider.value);
        }
    }
    return {$$typeof: REACT_CONTEXT_TYPE,Provider,Consumer}
}
class Header extends Component {
    render() {
        console.log(this.context)
        return <div style={{ border: '5px solid green', padding: '5px' }}>
            <Title></Title>
        </div>
    }
}
class Title1 extends Component {
    static contextType = ThemeContext
    render() {
        this.context = Title.contextType.Provider.value;
        console.log(this.context)
        return <div style={{ border: '5px solid orange', padding: '5px', color: this.context.color }}>
            Title
        </div>
    }
}
function Title (props){
    return (
        <ThemeContext.Consumer>
           {
               value=>(
                <div style={{ border: '5px solid orange', padding: '5px', color: value.color }}>
                    Title
                </div>
               )
           }
        </ThemeContext.Consumer>
    )
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
    static contextType = ThemeContext
    render() {
        this.context = Content.contextType.Provider.value;
        return <div style={{ border: '5px solid pink', padding: '5px', color: this.context.color }}>
            Content
            <button onClick={() => this.context.setColor('red')}>变红</button>
            <button onClick={() => this.context.setColor('green')}>变绿</button>
        </div>
    }
}
function Content1(){
    return (
        <ThemeContext.Consumer>
            {
                value=>(
                    <div style={{ border: '5px solid pink', padding: '5px', color: value.color }}>
                        Content
                        <button onClick={() => value.setColor('red')}>变红</button>
                        <button onClick={() => value.setColor('green')}>变绿</button>
                    </div>
                )
            }
        </ThemeContext.Consumer>
    )
}
export default class Page extends Component {
    constructor() {
        super();
        this.state = { color: 'red' };
    }
    setColor = (color) => {
        this.setState({ color });
    }
    render() {
        let ctx = {color:this.state.color,setColor:this.setColor};
        return (
            <ThemeContext.Provider value={ctx}>
                 <div style={{ border: '5px solid red', padding: '5px' }}>
                    Page
                    <Header><Title/></Header>
                    <Main><Content/></Main>
                </div>
            </ThemeContext.Provider>
           
        )
    }
}
