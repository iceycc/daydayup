import React from 'react/index';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import reportWebVitals from './reportWebVitals';

// ReactDOM.render(
//   // <React.StrictMode>
//     <App />
//   // </React.StrictMode>
//   ,
//   document.getElementById('root')
// );

// https://react.docschina.org/docs/concurrent-mode-adoption.html

ReactDOM.createRoot(
  document.getElementById('root')
).render(<App />);