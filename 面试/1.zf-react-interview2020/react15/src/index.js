
import React, { Component } from './react';
import ReactDOM from 'react-dom';
class Child extends Component {
  render() {
    console.log(this.props.children);//就一个React元素 
    const mappedChildren = React.Children.map(
      this.props.children,
      function (item, index) {
        return [item, [item, [item, [item]]]];
      }
    );
    console.log(mappedChildren);
    return (
      <ul>
        {mappedChildren}
      </ul>
    )
  }
}
class App extends Component {
  render() {
    return (
      <Child>
        {[<span>A</span>, <span key="keyB">B</span>]}
        {[<span>C</span>, <span key="keyD">D</span>]}
      </Child>
    )
  }
}
console.log('App.prototype.isReactComponent', App.prototype.isReactComponent);
ReactDOM.render(<App />, document.getElementById('root'));
/**
 *
0: {$$typeof: Symbol(react.element), type: "span", key: ".0:0/.0", ref: null, props: {…}, …}
1: {$$typeof: Symbol(react.element), type: "span", key: ".0:0/.1:0", ref: null, props: {…}, …}
2: {$$typeof: Symbol(react.element), type: "span", key: ".0:0/.1:1:0", ref: null, props: {…}, …}
3: {$$typeof: Symbol(react.element), type: "span", key: ".0:0/.1:1:1:0", ref: null, props: {…}, …}
4: {$$typeof: Symbol(react.element), type: "span", key: ".0:1/.0", ref: null, props: {…}, …}
5: {$$typeof: Symbol(react.element), type: "span", key: ".0:1/.1:0", ref: null, props: {…}, …}
6: {$$typeof: Symbol(react.element), type: "span", key: ".0:1/.1:1:0", ref: null, props: {…}, …}
7: {$$typeof: Symbol(react.element), type: "span", key: ".0:1/.1:1:1:0", ref: null, props: {…}, …}
8: {$$typeof: Symbol(react.element), type: "span", key: ".1:0/.0", ref: null, props: {…}, …}
9: {$$typeof: Symbol(react.element), type: "span", key: ".1:0/.1:0", ref: null, props: {…}, …}
10: {$$typeof: Symbol(react.element), type: "span", key: ".1:0/.1:1:0", ref: null, props: {…}, …}
11: {$$typeof: Symbol(react.element), type: "span", key: ".1:0/.1:1:1:0", ref: null, props: {…}, …}
12: {$$typeof: Symbol(react.element), type: "span", key: ".1:1/.0", ref: null, props: {…}, …}
13: {$$typeof: Symbol(react.element), type: "span", key: ".1:1/.1:0", ref: null, props: {…}, …}
14: {$$typeof: Symbol(react.element), type: "span", key: ".1:1/.1:1:0", ref: null, props: {…}, …}
15: {$$typeof: Symbol(react.element), type: "span", key: ".1:1/.1:1:1:0", ref: null, props: {…}, …}
 */