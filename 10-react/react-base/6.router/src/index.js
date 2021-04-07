import React from 'react';
import ReactDOM from 'react-dom';
import Home from './components/Home';
import Counter from './components/Counter';
import {Route,Link} from 'react-router-dom';
import {Provider} from 'react-redux';
import {store,persistor} from './store';
import {ConnectedRouter} from './connected-react-router';
import history from './store/history';
import { PersistGate } from './redux-persist/integration/react';

ReactDOM.render(<Provider store={store}>
  <PersistGate  persistor={persistor}>
    <ConnectedRouter history={history}>
    <>
       <Link to="/">Home</Link>
       <Link to="/counter">Counter</Link>
       <hr/>
       <Route path="/" exact={true} component={Home}/>
       <Route path="/counter" component={Counter}/>
    </>
   </ConnectedRouter>
   </PersistGate>
</Provider>, document.getElementById('root'));
