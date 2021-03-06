import {
  AuthState,
  AuthActionTypes,
  LOGIN,
  LOGOUT,
  SET_USER,
  SET_TOKEN,
} from './types';

const initialState: AuthState | null = {
  token: '',
  username: '',
  id: '',
  name: '',
};

export default (state = initialState, action: AuthActionTypes) => {
  switch (action.type) {
    case LOGIN:
      return action.data;
    case LOGOUT:
      return null;
    case SET_USER:
      return action.data;
    case SET_TOKEN:
      return { ...state, token: action.data };
    default:
      return state;
  }
};
