import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
<<<<<<< HEAD
=======
/* import Rol from './view/Rol'; */
>>>>>>> master
import Registro from './view/Registro';

ReactDOM.render(
  <BrowserRouter>
  <Switch>
    <Route path="/" exact component={Registro} />
  </Switch>
</BrowserRouter>,
  document.getElementById('root')
);
