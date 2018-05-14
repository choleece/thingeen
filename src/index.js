import 'babel-polyfill'
import React from 'react'
import { Router, Route } from 'react-router'
import createBrowserHistory from 'history/createBrowserHistory';
import {render} from 'react-dom'
import { Provider } from 'react-redux'
import store from './store/index.js'

import App from './App.jsx'
import HarmDerail from './pages/home/HarmDetail.jsx';
import EditInfo from './pages/personal/EditInfo.jsx';

const history = createBrowserHistory();

render(
    <Provider store ={store}>
        <Router history={history}>
            <div>
                <Route exact = {true} path = '/' component = {App}/>
                <Route exact = {true} path = '/harm/:id' component = {HarmDerail}/>
                <Route exact = {true} path = '/personal/:code' component = {EditInfo}/>
            </div>
        </Router>
    </Provider>
    ,
    document.getElementById('root')
);