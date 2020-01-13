import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';

function Example(props) {
  const [count, setCount] = useState(0);
  const {name} = props
  useEffect(() => {
    console.log(count)
    document.title = `${name} ${count}`;
  },[name,count]);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        {name} 
      </button>
    </div>
  );
}

function App(){
  return <Example {...{name:'wby'}}/>
}
ReactDOM.render(<App />, document.getElementById('root'));
