import React, {useContext, useEffect, useState} from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import UserContext from './context/user/UserContext';
import {routesPublic, routesAuth} from './Rutas';

export default function App() {
  const {user, setUser, isLogin} = useContext(UserContext);
  const [rutas, setRutas] = useState(routesPublic);
  useEffect(() => {
    setRutas(isLogin ? routesAuth : routesPublic);
  }, [isLogin])

  return (
    
      <BrowserRouter>
        <Switch>
         {/*  <Route path="/" exact component={Login} /> */}
         {rutas.map((route) => (
          <Route
            key={route.path}
            path={route.path}
            component={route.component}
          />
        ))}
        </Switch>
      </BrowserRouter>
    
  )
}
