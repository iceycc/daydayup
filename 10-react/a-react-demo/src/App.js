// import logo from './logo.svg';
// import './App.css';
import {useState, useLayoutEffect, useEffect} from 'react';
function App() {
  const [num,setNum] = useState(0)
  useLayoutEffect(()=>{
    if(num === 2){
      setNum(num + 'layout')
    }
  },[num])
  useEffect(()=>{
    console.log('useEffect')
  },[])
  
  useLayoutEffect(()=>{
    console.log('useLayoutEffect')
  },[])
  
  return (
    <div className="App">
        App
        <div onClick={()=>setNum(num+1)}>增加</div>
        <span>{num}</span>
    </div>
  );
}

export default App;
