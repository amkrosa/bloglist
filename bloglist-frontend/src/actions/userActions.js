import userService from "../services/users";

export const initializeUsers = () => {
  return async dispatch => {
    const users = await userService.getAll();
    dispatch({
      type: "INIT_USERS",
      data: users
    });
  };
};

//selectors
export const getUserById = (state, id) =>
  state.filter(user => user.id === id)[0];

export const getCurrentUser = state => getUserById(state.users, state.auth.id);
