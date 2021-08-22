import React from 'react';
import ReactDOM from 'react-dom';
//元素的更新
//元素是不可变的
let time = function(){
    return new Date().toLocaleString()
}
setInterval(function(){
    let clock = <table>
    <tbody>
    <tr><td>1</td><td>{time()}</td></tr> 
        <tr><td>2</td><td>2</td></tr>
        <tr><td>3</td><td>{new Date().toLocaleString()}</td></tr>
    </tbody>
    </table>
    // 每隔一秒 创建新的元素。 
    // 虽然重新render了，但是只会更新变化的地方 虚拟dom dom-diff
    ReactDOM.render(clock,document.getElementById('root'));
},1000);