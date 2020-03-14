import React from 'react';
import ReactDOM from 'react-dom';
import Counter from './components/Counter';
import {Provider} from './react-redux';
import store from './store';
import My from './my'
ReactDOM.render((
    <Provider store={store}>
         <Counter/> 
    </Provider>
),document.getElementById('root'));


