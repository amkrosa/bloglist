import blogService from '../../services/blogs';
import loginService from '../../services/login';
import { ThunkDispatch, ThunkAction } from 'redux-thunk';
import { AnyAction } from 'redux';
import { User } from '../../common/types';

export const login = (
  username: string,
  password: string,
): ThunkAction<Promise<void>, {}, {}, AnyAction> => {
  return async (dispatch: ThunkDispatch<{}, {}, AnyAction>): Promise<void> => {
    const user = await loginService.login({ username, password });
    blogService.api.token = user.token;
    window.localStorage.setItem('loggedUser', JSON.stringify(user));
    dispatch({
      type: 'LOGIN',
      data: user,
    });
  };
};
export const logout = (): ThunkAction<Promise<void>, {}, {}, AnyAction> => {
  return async (dispatch: ThunkDispatch<{}, {}, AnyAction>): Promise<void> => {
    window.localStorage.removeItem('loggedUser');
    blogService.api.token = null;
    dispatch({
      type: 'LOGOUT',
    });
  };
};
export const setUser = (
  user: any,
): ThunkAction<Promise<void>, {}, {}, AnyAction> => {
  return async (dispatch: ThunkDispatch<{}, {}, AnyAction>): Promise<void> => {
    blogService.api.token = user.token;
    dispatch({
      type: 'SET_USER',
      data: user,
    });
  };
};
export const setToken = (
  token: string,
): ThunkAction<Promise<void>, {}, {}, AnyAction> => {
  return async (dispatch: ThunkDispatch<{}, {}, AnyAction>): Promise<void> => {
    blogService.api.token = token;
    dispatch({
      type: 'SET_TOKEN',
      data: token,
    });
  };
};
