import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import App from './doc/11.middleware'
// function useNumber(init){
//   let [number,setNumber] = useState(init)
//   const add = (num)=>{
//     setNumber(number + num)
//   }
//   return [number,add]
// }
// function App(){
//   let [number,add] = useNumber(10)
//   return <div>
//     App
//     {number}
//     <button onClick={()=>{add(11)}}>点击</button>
//   </div>
// }
ReactDOM.render(<App />, document.getElementById('root'));
