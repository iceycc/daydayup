import React,{useState,memo,useMemo,useCallback} from 'react';
import ReactDOM from 'react-dom';
class Counter extends React.Component{
    state = {number:0}
    add = ()=>{
        this.setState({number:this.state.number+1});
    }
    render(){
        return (
            <>
               <p>{this.state.number}</p>
               <button onClick={this.add}>+</button>
            </>
        )
    }
}
function Counter2(){
    let [number,setNumber] = useState(0);
    return (
        <>
           <p>{number}</p>
           <button onClick={()=>setNumber(number+1)}>+</button>
        </>
    )
}
function Counter3(){
    let [number,setNumber] = useState(0);
    function alertNumber(){
        setTimeout(()=>{
            alert(number);
        },3000);
    }
    return (
        <>
           <p>{number}</p>
           <button onClick={()=>setNumber(number+1)}>+</button>
           <button onClick={alertNumber}>alertNumber</button>
        </>
    )
}
function Counter4(){
    let [number,setNumber] = useState(0);
    function lazy(){
        setTimeout(() => {
            //setNumber(number+1);
            setNumber(number=>number+1);
        }, 3000);
    }
    return (
        <>
           <p>{number}</p>
           <button onClick={()=>setNumber(number+1)}>+</button>
           <button onClick={lazy}>lazy</button>
        </>
    )
}
function Counter5(props){
    console.log('Counter5 render');
    function getInitState(){
        return {number:props.number};
    }
    let [counter,setCounter] = useState(getInitState);
    //如果你修改状态的时候，直接 传的是老状态，则不重新渲染
    return (
        <>
           <p>{counter.number}</p>
           <button onClick={()=>setCounter({number:counter.number+1})}>+</button>
           <button onClick={()=>setCounter(counter)}>setCounter</button>
        </>
    )
}
function SubCounter({onClick,data}){
    console.log('SubCounter render');
    return (
        <button onClick={onClick}>{data.number}</button>
    )
}
//把此组件传递给memo之后，就会返回一个新的组件,新组件有了一个功能，如果属性不变，则不重新渲染
SubCounter = memo(SubCounter);
let oldData,oldAddClick;
function Counter6(props){
    console.log('Counter6 render');
    const [name,setName]= useState('计数器');
    const [number,setNumber] = useState(0);
    const data = useMemo(()=>({number}),[number]);
    console.log('data===oldData ',data===oldData);
    oldData=data;
    const addClick = useCallback(()=>{
        setNumber(number+1);
    },[number])
    console.log('addClick===oldAddClick ',addClick===oldAddClick);
    oldAddClick=addClick;
    return (
        <>
           <input type="text" value={name} onChange={(e)=>setName(e.target.value)}/>
           <SubCounter data={data} onClick={addClick}/>
        </>
    )
}
ReactDOM.render(<Counter6  />, document.getElementById('root'));
