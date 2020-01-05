import React, { useLayoutEffect, useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
//只要说一个方法，方便名的前缀是use开头，并且在函数内使用了hooks ，那么它就是一个自定义的hook
function useNumber(){
  let [number,setNumber] = useState(0);
  useEffect(()=>{
    setInterval(()=>{
        setNumber(number=>number+1);
    },1000);
  },[]);
  return [number,setNumber];
}

function useNumber2(){
    console.log('xx');
}
class Counter3 extends React.Component{
    render(){
        useNumber2();
        return <div>hello</div>
    }
}
function Counter1(){
    let [number,setNumber] = useNumber();
    return (
        <div><button onClick={()=>{
            setNumber(number+1)
        }}>{number}</button></div>
    )
}
function Counter2(){
    let [number,setNumber] = useNumber();
    return (
        <div><button  onClick={()=>{
            setNumber(number+1)
        }}>{number}</button></div>
    )
}
ReactDOM.render(<><Counter3/></>, document.getElementById('root'));
