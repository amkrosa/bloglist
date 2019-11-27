import userService from '../../services/users';

export const initializeUsers = () => {
  return async dispatch => {
    const users = await userService.getAll();
    dispatch({
      type: 'INIT_USERS',
      data: users,
    });
  };
};

export const registerUser = user => {
  return async dispatch => {
    const registeredUser = await userService.create(user);
    console.log(registeredUser);
    dispatch({
      type: 'REGISTER_USER',
      data: registeredUser,
    });
  };
};

export const deleteUser = user => {
  return async dispatch => {
    // const deletedUser = await userService.delete(user)
    dispatch({
      type: 'DELETE_USER',
      data: user.id,
    });
  };
};

//selectors
export const getUserById = (state, id) =>
  state.filter(user => user.id === id)[0];

export const getCurrentUser = state => getUserById(state.users, state.auth.id);
