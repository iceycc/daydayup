import React, { useState } from "react";

function App() {
  const [num, setNum] = useState(0);
  return (
    <div className="App">
      <header className="App-header">
        <p onClick={()=>setNum(num + 1)}>点击增加</p>
        <div>{num}</div>
      </header>
    </div>
  );
}

export default App;
