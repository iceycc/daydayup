import React from 'react';
import './App.css';
import Button from 'doushen-ui-react/dist/components/button'
import { GlobalStyle } from "doushen-ui-react/dist/components/shared/global";
function App() {
	return (
		<div className="App">
			<GlobalStyle></GlobalStyle>
			<Button appearance="primary">2222</Button>
		</div>
	);
}

export default App;
