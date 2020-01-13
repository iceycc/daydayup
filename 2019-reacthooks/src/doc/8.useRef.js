import React, { useEffect, useState, useRef, useImperativeHandle } from 'react';
import ReactDOM from 'react-dom';
import { AST_PropAccess } from '_terser@4.4.2@terser';
/* let currentRefObject;
// 简单实现useRef
function useRef() {
    if (!currentRefObject) {
        currentRefObject = { current: null };
    }
    return currentRefObject;
} */
//useRef React.createRef
//let lastRef;
function Child(props, ref) {
    //let refObject = React.createRef();//refObject={current:要引用的组件}
    //console.log('lastRef === refObject', lastRef === refObject);
    //lastRef = refObject; // false 传统的方法 每次创建的ref都不是一个
    let refObject1 = useRef(); // true
    let refObject2 = useRef();
    useImperativeHandle(ref, () => ({
        focus() {
            refObject1.current.focus();
            refObject2.current.focus();
        },
        setVal(val) {
            refObject1.current.value = val;
            refObject2.current.value = val;
        }
    }));
    return (
        <div>
            <input ref={refObject1}></input>
            <hr />
            <input ref={refObject2}></input>
        </div>
    )
}
/**
 * Function components cannot be given refs. 
 * Attempts to access this ref will fail.
 * Did you mean to use React.forwardRef()?
 * 直接这样传递的话破坏了封装的原则，很危险!
 */
let ForwardChild = React.forwardRef(Child); // 给函数组件挂载ref
function Parent() {
    let [number, setNumber] = useState(0);
    let refObject = useRef();
    function getFocus() {
        console.log('refObject.current', refObject.current);

        refObject.current.focus();
        refObject.current.value = 'xx';
    }
    function setVal(val) {
        refObject.current.setVal(val);
    }
    return (
        <div>
            <ForwardChild ref={refObject} />
            <button onClick={getFocus}>获得焦点</button>
            <button onClick={() => setVal(Date.now())}>设置值</button>
            <button onClick={() => setNumber(x => x + 1)}>+</button>
        </div>
    )
}
ReactDOM.render(<Parent />, document.getElementById('root'));
/*
useMemo useCallback useRef
本质上都是为了缓存
这些东西在没有hooks之前。
在以前我们都类组件，类组件就有实例，类的实例 一旦创建就有实例 ，上面的属性也可以存在。
但是现在我们hooks,hooks只能用在函数组件里。函数组件没有this,就没有实例，没有办法在实例 上挂属性状态
现在就要靠useMemo、useCallback、useRef实现缓存
*/