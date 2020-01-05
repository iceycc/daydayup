import React from 'react';
import ReactDOM from 'react-dom';
//元素的更新
//元素是不可变的

 let clock = <table>
        <tbody>
            <tr><td>1</td><td>1</td></tr>
            <tr><td>2</td><td>2</td></tr>
            <tr><td>3</td><td>{new Date().toLocaleString()}</td></tr>
        </tbody>
    </table>
setInterval(function(){
   
    ReactDOM.render(clock,document.getElementById('root'));
},1000);