import React, {createContext, useReducer, useContext } from 'react';
import UserReducer from './user/UserReducer';

const Auth = createContext({});

const AuthProvider = props => {
  const initialState = {
    user: {},
    time: 0
  }

  const [state, dispatch] = useReducer(UserReducer, initialState);

  const setUser = (user) => {    
    dispatch({
      type: 'SET_USER',
      payload: user
    })
  }
  
  return <Auth.Provider value={{setUser, user: state.user}} {...props} />
}

const useAuth = () => useContext(Auth);

export {AuthProvider, useAuth};