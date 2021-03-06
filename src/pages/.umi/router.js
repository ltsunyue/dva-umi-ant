import React from 'react';
import {
  Router as DefaultRouter,
  Route,
  Switch,
  StaticRouter,
} from 'react-router-dom';
import dynamic from 'umi/dynamic';
import renderRoutes from 'umi/lib/renderRoutes';
import history from '@@/history';
import { routerRedux } from 'dva';

const Router = routerRedux.ConnectedRouter;

const routes = [
  {
    path: '/',
    component: require('../../layouts/index').default,
    routes: [
      {
        path: '/login',
        component: require('../index').default,
        exact: true,
        _title: 'app',
        _title_default: 'app',
      },
      {
        path: '/',
        component: require('../../layouts/securityLayout.js').default,
        routes: [
          {
            path: '/',
            component: require('../home.js').default,
            routes: [
              {
                path: '/',
                component: require('../crm.js').default,
                exact: true,
                _title: 'app',
                _title_default: 'app',
              },
              {
                path: '/enterprise',
                component: require('../enterprise.js').default,
                exact: true,
                _title: 'app',
                _title_default: 'app',
              },
              {
                path: '/en',
                component: require('../en.js').default,
                exact: true,
                _title: 'app',
                _title_default: 'app',
              },
              {
                component: () =>
                  React.createElement(
                    require('E:/sy/Breastplate/web/ai-brand/web/node_modules/umi-build-dev/lib/plugins/404/NotFound.js')
                      .default,
                    { pagesPath: 'src/pages', hasRoutesInConfig: true },
                  ),
                _title: 'app',
                _title_default: 'app',
              },
            ],
            _title: 'app',
            _title_default: 'app',
          },
          {
            component: () =>
              React.createElement(
                require('E:/sy/Breastplate/web/ai-brand/web/node_modules/umi-build-dev/lib/plugins/404/NotFound.js')
                  .default,
                { pagesPath: 'src/pages', hasRoutesInConfig: true },
              ),
            _title: 'app',
            _title_default: 'app',
          },
        ],
        _title: 'app',
        _title_default: 'app',
      },
      {
        component: () =>
          React.createElement(
            require('E:/sy/Breastplate/web/ai-brand/web/node_modules/umi-build-dev/lib/plugins/404/NotFound.js')
              .default,
            { pagesPath: 'src/pages', hasRoutesInConfig: true },
          ),
        _title: 'app',
        _title_default: 'app',
      },
    ],
    _title: 'app',
    _title_default: 'app',
  },
  {
    component: () =>
      React.createElement(
        require('E:/sy/Breastplate/web/ai-brand/web/node_modules/umi-build-dev/lib/plugins/404/NotFound.js')
          .default,
        { pagesPath: 'src/pages', hasRoutesInConfig: true },
      ),
    _title: 'app',
    _title_default: 'app',
  },
];
window.g_routes = routes;
const plugins = require('umi/_runtimePlugin');
plugins.applyForEach('patchRoutes', { initialValue: routes });

export { routes };

export default class RouterWrapper extends React.Component {
  unListen() {}

  constructor(props) {
    super(props);

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
    this.unListen = history.listen(routeChangeHandler);
    // dva ??? history.listen ?????????????????????
    // ??????????????? dva ???????????????????????? onRouteChange ????????? dva ???????????????????????????????????????
    const isDva =
      history.listen
        .toString()
        .indexOf('callback(history.location, history.action)') > -1;
    if (!isDva) {
      routeChangeHandler(history.location);
    }
  }

  componentWillUnmount() {
    this.unListen();
  }

  render() {
    const props = this.props || {};
    return <Router history={history}>{renderRoutes(routes, props)}</Router>;
  }
}
