import 'babel-polyfill'
import React from 'react'
import { Router, Route } from 'react-router'
import createBrowserHistory from 'history/createBrowserHistory';
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import store from './store/index.js'

import Login from './pages/Login.jsx'
import App from './App.jsx'
import HarmDerail from './pages/home/HarmDetail.jsx';
import EditInfo from './pages/personal/EditInfo.jsx';

//解决移动端300毫秒延迟
import FastClick from 'fastclick';
FastClick.attach(document.body)

const history = createBrowserHistory();

render(
    <Provider store ={store}>
        <Router history={history}>
            <div>
                <Route exact = {true} path = '/login' component = {Login}/>
                <Route exact = {true} path = '/app' component = {App}/>
                <Route exact = {true} path = '/harm/:id' component = {HarmDerail}/>
                <Route exact = {true} path = '/personal/:code' component = {EditInfo}/>
            </div>
        </Router>
    </Provider>
    ,
    document.getElementById('root')
);