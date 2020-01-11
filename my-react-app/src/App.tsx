import React from 'react';
import {Home1,Home2} from './pages/useState'
import {Efferct} from './pages/useEffect'


const App: React.FC = () => {
  return (
    <div className="App">
      <Home1></Home1>
      <Home2/>
      <Efferct/>
    </div>
  );
}

export default App;
