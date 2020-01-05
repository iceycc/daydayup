import React,{useState,useEffect,createRef,useRef,forwardRef,useImperativeHandle} from 'react';
import ReactDOM from 'react-dom';
//useRef   React.createRef();
function Child(props,parentRef){
    let focusRef = useRef();
    let inputRef = useRef();
    useImperativeHandle(parentRef,()=>{
        return {
            focusRef,
            inputRef,
            name:'计数器',
            focus(){
                focusRef.current.focus();
            },
            changeText(text){
                inputRef.current.value = text;
            }
        }
    });
    return (
        <>
            <input ref={focusRef}/>
            <input ref={inputRef}/>
        </>
    )

}
let ForwardChild = forwardRef(Child);
//hook有什么特别 可以在用在函数组件中，并且可以在函数组件的多次渲染之间保持不变
function Parent(){
  const parentRef = useRef();//{current:''}
  function getFocus(){
    parentRef.current.focus();
    parentRef.current.changeText ('<script>alert(1)</script>');
    console.log(parentRef.current.name);
  }
  return (
      <>
        <ForwardChild ref={parentRef}/>
        <button onClick={getFocus}>获得焦点</button>
      </>
  )
}



ReactDOM.render(<Parent  />, document.getElementById('root'));
