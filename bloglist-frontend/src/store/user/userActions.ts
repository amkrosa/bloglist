import userService from "../../services/users";
import { ThunkAction, ThunkDispatch } from "redux-thunk";
import { AnyAction } from "redux";
import { User } from "../../common/types";
import { UserState } from "./types";

export const initializeUsers = (): ThunkAction<
  Promise<void>,
  {},
  {},
  AnyAction
> => {
  return async (dispatch: ThunkDispatch<{}, {}, AnyAction>): Promise<void> => {
    const users = await userService.getAll();
    dispatch({
      type: "INIT_USERS",
      data: users
    });
  };
};

export const registerUser = (
  user: User
): ThunkAction<Promise<void>, {}, {}, AnyAction> => {
  return async (dispatch: ThunkDispatch<{}, {}, AnyAction>): Promise<void> => {
    const registeredUser = await userService.create(user);
    console.log(registeredUser);
    dispatch({
      type: "REGISTER_USER",
      data: registeredUser
    });
  };
};

export const deleteUser = (
  user: User
): ThunkAction<Promise<void>, {}, {}, AnyAction> => {
  return async (dispatch: ThunkDispatch<{}, {}, AnyAction>): Promise<void> => {
    // const deletedUser = await userService.delete(user)
    dispatch({
      type: "DELETE_USER",
      data: user.id
    });
  };
};

//selectors
export const getUserById = (state: UserState, id: string) =>
  state.filter(user => user.id === id)[0];

export const getCurrentUser = (state: any) =>
  getUserById(state.users, state.auth.id);
