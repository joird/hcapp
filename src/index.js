import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Registro from './view/Registro';
import Rol from './view/Rol';

ReactDOM.render(
  <BrowserRouter>
  <Switch>
    <Route path="/" exact component={Registro} />
  </Switch>
</BrowserRouter>,
  document.getElementById('root')
);
