import React, { useEffect, useLayoutEffect, useState, useRef, useImperativeHandle } from 'react';
import ReactDOM from 'react-dom';

function useCounter() {
    let [number, setNumber] = useState(0);
    useEffect(() => {
        const timer = setInterval(() => {
            setNumber(Math.random());
        }, 1000);
        return () => {
            clearInterval(timer);
        }
    });
    return number;
}
function Counter1() {
    let number = useCounter();
    return (
        <div>
            {number}
        </div>
    )
}
function Counter2() {
    let number = useCounter();
    return (
        <div>
            {number}
        </div>
    )
}
ReactDOM.render(<><Counter1 /><Counter2 /></>, document.getElementById('root'));
/*
useMemo useCallback useRef
本质上都是为了缓存
这些东西在没有hooks之前。
在以前我们都类组件，类组件就有实例，类的实例 一旦创建就有实例 ，上面的属性也可以存在。
但是现在我们hooks,hooks只能用在函数组件里。函数组件没有this,就没有实例，没有办法在实例 上挂属性状态
现在就要靠useMemo、useCallback、useRef实现缓存
*/