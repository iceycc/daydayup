import React,{useLayoutEffect,useEffect,useState} from 'react';
import ReactDOM from 'react-dom';
function UseLayoutEffectComponent(){
    const [color,setColor] = useState('red');
    useLayoutEffect(()=>{
        console.log('useLayoutEffect color=',color);
        alert('useLayoutEffect color='+color);
        //document.getElementById('myDiv').style.backgroundColor = 'purple';
    });
    useEffect(()=>{
        console.log('useEffect color=',color);
        //document.getElementById('myDiv').style.backgroundColor = 'purple';
    });
    return (
        <>
         <div id="myDiv" style={{backgroundColor:color}}>颜色</div>
         <button onClick={()=>setColor('red')}>红</button>
         <button onClick={()=>setColor('yellow')}>黄</button>
         <button onClick={()=>setColor('blue')}>蓝</button>
        </>
    )
}

ReactDOM.render(<UseLayoutEffectComponent  />, document.getElementById('root'));
