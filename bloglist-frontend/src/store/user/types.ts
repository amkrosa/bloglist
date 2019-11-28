import { User } from "../../common/types";

export const INIT_USERS = "INIT_USERS";
export const DELETE_USER = "DELETE_USER";
export const REGISTER_USER = "REGISTER_USER";

export interface InitUsersAction {
  type: typeof INIT_USERS;
  data: User[];
}
export interface DeleteUserAction {
  type: typeof DELETE_USER;
  data: { id: string };
}
export interface RegisterUserAction {
  type: typeof REGISTER_USER;
  data: User;
}

export type UserState = User[];
export type UserActions =
  | InitUsersAction
  | DeleteUserAction
  | RegisterUserAction;
