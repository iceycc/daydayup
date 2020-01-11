import React,{useState} from "react";
export class Home1 extends React.Component<any, any> {
  state = {
    count: 0
  };
  render() {
    return (
      <div>
        <p>Home1 You clicked {this.state.count} times</p>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          Click med{this.props.say}
        </button>
      </div>
    );
  }
}

class DataProvider extends React.Component<any,any> {

    state = { target: 'Zac' };

  render() {
    console.log(this.props)
    let {children}:any = this.props
    return (
      <div>
        {children(this.state)}
      </div>
    )
  }
}

function Ele(){
  const [count, setCount] = useState(0);
  return <div>Ele :{count}</div>
}

export function Home2() {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(1);
  return (
    <div>
      <p>Home2 You clicked {count}\{count2} times</p>
      <Ele/>
      <button onClick={() =>{
             setCount(count + 1)
             setCount2(count2 * 2)
      }
         }>
        Click me
      </button>
      <p>You clicked {count2} times</p>
      {/* <DataProvider render={(data: any)=>{
        return <Home1 say={data.target}/>
      }}/> */}
      <DataProvider>
        {
          (data:any)=>{
            return <Home1 say={data.target}/>
          }
        }
      </DataProvider>
    </div>
  );
}
