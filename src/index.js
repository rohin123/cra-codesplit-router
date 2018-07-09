import React from 'react';
import ReactDOM from 'react-dom';
import Loadable from 'react-loadable';
import { Provider as ReduxProvider } from 'react-redux'

import './index.css';
import configureStore from './store/configureStore';
//import store from './store/configureStore';
import routes from './routeConfig.js'
import RoutesWithSubRoutes from './helpers/routeswithsubroutes'
import {
    BrowserRouter as Router
} from 'react-router-dom'
// import registerServiceWorker from './registerServiceWorker';
const store = configureStore( window.__REDUX_STATE__ || {} );
console.log("array",routes.map((route)=><RoutesWithSubRoutes {...route}/>))
const AppBundle = (
    <ReduxProvider store={store}>
      <Router>
        <div>
          {routes.map((route)=><RoutesWithSubRoutes {...route}/>)}
        </div>
      </Router>
    </ReduxProvider>
);

window.onload = () => {
    Loadable.preloadReady().then(() => {
        ReactDOM.hydrate(
            AppBundle,
            document.getElementById('root')
        );
    });
};

//registerServiceWorker();
