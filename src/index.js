import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
/* import Registro from './view/Registro';
import Rol from './view/Rol'; */
import Login from './view/Login';

ReactDOM.render(
  <BrowserRouter>
  <Switch>
    <Route path="/" exact component={Login} />
  </Switch>
</BrowserRouter>,
  document.getElementById('root')
);
