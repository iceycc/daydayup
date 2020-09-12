import React,{useState,useEffect} from 'react';
import ReactDOM from 'react-dom';
class Counter extends React.Component{
    state = {number:0}
    add = ()=>{
        this.setState({number:this.state.number+1});
    }
    componentDidMount(){
        this.changeTitle();
    }
    componentDidUpdate(){
        this.changeTitle();
    }
    changeTitle = ()=>{
        document.title = `你已经点击了${this.state.number}次`;
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
    function add(){
        setNumber(number+1);
    }
    /**
     * useEffect里面的这个函数会在第一次渲染之后，和更新完成后执行
     */
    useEffect(()=>{
        document.title = `你已经点击了${number}次`;
    });
    return (
        <>
          <p>{number}</p>
          <button onClick={add}>+</button>
        </>
    )
}
function Counter3(){
    let [number,setNumber] = useState(0);
    let [text,setText] = useState('');
    /**
     * useEffect里面的这个函数会在第一次渲染之后，和更新完成后执行
     * 0 1 2 3
     * 0 1 3 7
     */
    useEffect(()=>{
        console.log('useEffect');
        let $timer = setInterval(()=>{
            setNumber(number=>number+1);
        },1000);
       /*  return ()=>{
            console.log('destroy effect');
            clearInterval($timer);
        } */
    },[text]);//数组表示effect依赖的变量，只有当这个变量发生改变之后才会重新执行 efffect函数
    return (
        <>
          <input value={text} onChange={(event)=>setText(event.target.value)}/>
          <p>{number}</p>
          <button>+</button>
        </>
    )
}
ReactDOM.render(<Counter3  />, document.getElementById('root'));
