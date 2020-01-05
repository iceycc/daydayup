import React from 'react';
import ReactDOM from 'react-dom';
import store from './store';
import Counter from './components/Counter';
import {Provider} from 'react-redux';
ReactDOM.render(
    <Provider store={store}><Counter/></Provider>,document.getElementById('root')
);
