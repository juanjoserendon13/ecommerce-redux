import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route } from 'react-router';
import { createBrowserHistory } from 'history';
import { Provider } from 'react-redux';
import { syncHistoryWithStore } from 'react-router-redux';
import 'bootstrap/dist/css/bootstrap.css';
import 'babel-polyfill';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

import configureStore from './store/configStore';
import initialState from './reducers/initialState';

import App from './App';
const store = configureStore(initialState);
const history = syncHistoryWithStore(createBrowserHistory(), store);

ReactDOM.render(
    <Provider store={store}>
        <Router history={history}>
            <Route component={App} />
        </Router>
    </Provider>, document.getElementById('root'));
registerServiceWorker();
