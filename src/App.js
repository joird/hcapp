import React, {useContext, useEffect} from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from './view/Login';
import UserContext from './context/user/UserContext';

export default function App() {
  const {user, setUser} = useContext(UserContext);
  useEffect(() => {
    console.log(user);
  }, [])
  return (
    
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Login} />
        </Switch>
      </BrowserRouter>
    
  )
}
