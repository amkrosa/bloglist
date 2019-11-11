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

export const registerUser = () => {
  return async dispatch => {
    const registeredUser = null
    dispatch({
      type: "REGISTER_USER",
      data: registerUser
    })
  }
}

export const deleteUser = () => {
  return async dispatch => {
    const deletedUser = null
    dispatch({
      type: "DELETE_USER",
      data: deletedUser
    })
  }
}

//selectors
export const getUserById = (state, id) =>
  state.filter(user => user.id === id)[0];

export const getCurrentUser = state => getUserById(state.users, state.auth.id);
