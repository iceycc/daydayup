import React, {createRef, useEffect} from 'react';
import './App.css';

const FancyButton = React.forwardRef((props, ref) => (
    <button ref={ref} className="FancyButton">
        {props.children}
    </button>
));
function App() {
    const cRef = createRef(null)
    useEffect(() => {
        cRef && cRef.target.addEventListener('click', (e) => {
            console.log(e)
        })
    }, [cRef])
    return (
        <div className="App">
            <FancyButton ref={cRef}>点击</FancyButton>
        </div>
    );
}

export default App;
