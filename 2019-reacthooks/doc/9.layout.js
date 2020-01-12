import React, { useEffect, useLayoutEffect, useState, useRef, useImperativeHandle } from 'react';
import ReactDOM from 'react-dom';
function LayoutEffect() {
    let [color, setColor] = useState('red');
    useLayoutEffect(() => {
        alert(color);
    });
    useEffect(() => {
        console.log('当前的颜色useEffect', color);
    });
    return (
        <>
            <div id="myDiv" style={{ backgroundColor: color }}>颜色</div>
            <button onClick={() => setColor('red')}>红</button>
            <button onClick={() => setColor('yellow')}>黄</button>
            <button onClick={() => setColor('blue')}>蓝</button>
        </>
    )
}

ReactDOM.render(<LayoutEffect />, document.getElementById('root'));
/*
useMemo useCallback useRef
本质上都是为了缓存
这些东西在没有hooks之前。
在以前我们都类组件，类组件就有实例，类的实例 一旦创建就有实例 ，上面的属性也可以存在。
但是现在我们hooks,hooks只能用在函数组件里。函数组件没有this,就没有实例，没有办法在实例 上挂属性状态
现在就要靠useMemo、useCallback、useRef实现缓存
*/