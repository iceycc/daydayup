// jsx原理 ： 
// babel转义：https://www.babeljs.cn/repl
// <h1>hello</h1>  => React.createElement("h1", null, "hello")
import React from 'react';
import ReactDOM from 'react-dom';
/**
 */

 //React.createElement("h1", null, "hello")=
 //<h1 className="title">hello<span>world</span></h1>
let element = React.createElement("h1", {
    className: "title"
  }, "hello", React.createElement("span", null, "world"));
  // element.props.chidren = ["hello", React.createElement("span", null, "world")]
console.log(JSON.stringify(element));
/**
React元素 就是一个普通的JS对象 虚拟DOM
{
	"type": "h1", // 类型
	"props": { // 属性对象
		"className": "title",
		"children": ["hello", {
			"type": "span",
			"props": {
				"children": "world"
			},
		}]
	}
}
 */
ReactDOM.render(element,document.getElementById('root'));