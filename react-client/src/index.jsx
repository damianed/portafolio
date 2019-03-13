import React, { Component } from 'react';
import { BrowserRouter as Router, Route, BrowserRouter, Switch } from 'react-router-dom';
import ReactDom from 'react-dom';
import App from './Components/App';
import DashboardApp from './Components/Dashboard/DashboardApp';

ReactDom.render(
    <BrowserRouter>
    <Switch>
    <Route exact path="/" component={App} />
    <Route exact path="/dashboard" component={DashboardApp} />
    </Switch>
    </BrowserRouter>,
    document.getElementById('app')
);
