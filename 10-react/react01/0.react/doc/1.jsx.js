/**
 * 1. jsx语法
 */

import React from 'react';
import ReactDOM from 'react-dom';
/**
 * jsx javascript+xml 是一种把JS和HTML混合书写的一种语法
 * JSX是用来描述界面上的元素长什么样子的
 * JSX可增加属性 js dom xx.className。但是
 * JSX里面如果想使用一个变量，我们需要把它放在大括号里面
 * 表达式就是变量和运算符的组合 a+b  a a+1
 */
let styles = {color:'red'};
let name ='珠峰架构';
function getName(){
    return '珠峰架构'
}
ReactDOM.render(<h1 id="mytitle" className="mytitle" style={styles}>
hello {name}
</h1>,document.getElementById('root'));