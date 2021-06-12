import { SET_USER } from '../Types';

const UserReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case SET_USER:
      return { ...state, user: payload }
    default:
      return state
  }
}

export default UserReducer;