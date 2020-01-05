import React from 'react';
import { Router as DefaultRouter, Route, Switch } from 'react-router-dom';
import dynamic from 'umi/dynamic';
import renderRoutes from 'umi/_renderRoutes';
import history from '@tmp/history';


const Router = DefaultRouter;

const routes = [
  {
    "path": "/",
    "component": require('../../layouts/index.js').default,
    "routes": [
      {
        "path": "/",
        "exact": true,
        "component": require('../index.js').default
      },
      {
        "path": "/login",
        "exact": true,
        "component": require('../login.js').default
      },
      {
        "path": "/profile",
        "exact": true,
        "component": require('../profile.js').default,
        "title": "个人中心",
        "Routes": [require('../../PrivateRoute.js').default]
      },
      {
        "path": "/signin",
        "exact": true,
        "component": require('../signin/index.js').default
      },
      {
        "path": "/user",
        "exact": false,
        "component": require('../user/_layout.js').default,
        "routes": [
          {
            "path": "/user/detail/:id",
            "exact": true,
            "component": require('../user/detail/$id.js').default
          },
          {
            "path": "/user",
            "exact": true,
            "component": require('../user/index.js').default
          },
          {
            "path": "/user/list",
            "exact": true,
            "component": require('../user/list.js').default
          },
          {
            "component": () => React.createElement(require('C:/Users/张仁阳/AppData/Roaming/npm/node_modules/umi/node_modules/_umi-build-dev@1.9.6@umi-build-dev/lib/plugins/404/NotFound.js').default, { pagesPath: 'pages', hasRoutesInConfig: false })
          }
        ]
      },
      {
        "component": () => React.createElement(require('C:/Users/张仁阳/AppData/Roaming/npm/node_modules/umi/node_modules/_umi-build-dev@1.9.6@umi-build-dev/lib/plugins/404/NotFound.js').default, { pagesPath: 'pages', hasRoutesInConfig: false })
      }
    ]
  },
  {
    "component": () => React.createElement(require('C:/Users/张仁阳/AppData/Roaming/npm/node_modules/umi/node_modules/_umi-build-dev@1.9.6@umi-build-dev/lib/plugins/404/NotFound.js').default, { pagesPath: 'pages', hasRoutesInConfig: false })
  }
];
window.g_routes = routes;
const plugins = require('umi/_runtimePlugin');
plugins.applyForEach('patchRoutes', { initialValue: routes });

// route change handler
function routeChangeHandler(location, action) {
  plugins.applyForEach('onRouteChange', {
    initialValue: {
      routes,
      location,
      action,
    },
  });
}
history.listen(routeChangeHandler);
routeChangeHandler(history.location);

export { routes };

export default function RouterWrapper() {
  return (
<Router history={history}>
      { renderRoutes(routes, {}) }
    </Router>
  );
}
