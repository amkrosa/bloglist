import { User } from '../../common/types';

export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';
export const SET_TOKEN = 'SET_TOKEN';
export const SET_USER = 'SET_USER';

interface LoginAction {
  type: typeof LOGIN;
  data: User;
}
interface LogoutAction {
  type: typeof LOGOUT;
}
interface SetTokenAction {
  type: typeof SET_TOKEN;
  data: String;
}
interface SetUserAction {
  type: typeof SET_USER;
  data: User;
}

export interface AuthState {
  token: String;
  id: String;
  username: String;
  name: String;
}

export type AuthActionTypes =
  | LoginAction
  | LogoutAction
  | SetTokenAction
  | SetUserAction;
