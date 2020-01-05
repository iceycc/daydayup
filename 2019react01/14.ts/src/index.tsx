import React from 'react';
import ReactDOM from 'react-dom';
import Counter1 from './components/Counter1';
import Counter2 from './components/Counter2';
import store from './store';
import {Provider} from 'react-redux';
import {Route,Link} from 'react-router-dom';
import {Router} from 'react-router';
import {ConnectedRouter} from 'connected-react-router';
/**
 * 1.在仓库中保存当前的路径状态
 * 2.如果我们希望在action中跳转路径，希望用派发动作的方式跳转路径的话
 */
import history from './store/history';
ReactDOM.render(<Provider store={store}>
<ConnectedRouter history={history}>
    <>
      <Link to="/counter1">counter1</Link>
      <Link to="/counter2">counter2</Link>
      <Route path="/counter1" component={Counter1}/>
      <Route path="/counter2" component={Counter2}/>
    </>
</ConnectedRouter>
</Provider>,document.getElementById('root'));

/**
 * BrowserRouter 
 * <Router history={createBrowserHistory()}></Router>
 * 
 * HashRouter
 *  <Router history={createHashHistory()}></Router>
 */