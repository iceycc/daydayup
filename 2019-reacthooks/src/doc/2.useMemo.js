import React, { useState, memo, useCallback, useMemo } from 'react';
import ReactDOM from 'react-dom';
//  useCallback useMemo  memo
function Child(props) {
    console.log('render Child');
    return (
        <button onClick={props.addClick}>{props.data.number}</button>
    )
}
//就让函数组件拥有了记忆的功能，只有当组件的属性发生变更的时候才会刷新，否则不刷新
Child = memo(Child);
let lastAddClick;
let lastData;
function App() {
    let [number, setNumber] = useState(0);
    let [name, setName] = useState('zhufeng');
    //第一个参数deps,表示此函数缓存依赖的变量，如果变量变了,会重新生成函数，
    const addClick = useCallback(() => setNumber(number + 1), [number]);
    console.log('lastAddClick === addClick', lastAddClick === addClick);
    lastAddClick = addClick;
    // 变量
    const data = useMemo(() => ({ number }), [number]);
    console.log('lastData === data', lastData === data);
    lastData = data;
    return (
        <div>
            <input type="text" value={name} onChange={e => setName(e.target.value)} />
            <Child addClick={addClick} data={data} />
        </div>
    )

}
ReactDOM.render(<App />, document.getElementById('root'));