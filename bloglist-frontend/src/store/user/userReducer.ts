import {
  INIT_USERS,
  DELETE_USER,
  REGISTER_USER,
  UserActions,
  UserState
} from "./types";

const initialState: UserState = [];

export default (state = initialState, action: UserActions) => {
  switch (action.type) {
    case INIT_USERS:
      return action.data;
    case DELETE_USER:
      return [state.filter(element => element.id === action.data.id)];
    case REGISTER_USER:
      return [...state, action.data];
    default:
      return state;
  }
};
