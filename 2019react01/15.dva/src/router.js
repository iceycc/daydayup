import React from 'react';
import { Router, Switch } from 'dva/router';
import routesConfig from './routesConfig';
import {renderRoutes} from './utils/routes';
function RouterConfig({ history,app }) {
  return (
    <Router history={history}>
      <Switch>
        {renderRoutes(routesConfig,app)}
      </Switch>
    </Router>
  );
}

export default RouterConfig;
