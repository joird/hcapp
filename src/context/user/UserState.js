import React, { useReducer } from 'react';
import UserReducer from './UserReducer';
import UserContext from './UserContext';

const UserState = (props) => {
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

  return (
    <UserContext.Provider value={{
      user: state.user,
      time: state.time,
      setUser,
    }}>
      {props.children}
    </UserContext.Provider>
  )
}

export default UserState;