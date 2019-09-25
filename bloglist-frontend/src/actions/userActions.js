import blogService from "../services/blogs";
import loginService from "../services/login";

export const login = (username, password) => {
  return async dispatch => {
    const user = await loginService.login({ username, password });
    blogService.setToken(user.token);
    window.localStorage.setItem("loggedUser", JSON.stringify(user));
    dispatch({
      type: "LOGIN",
      data: user
    });
  };
};
export const logout = () => {
  return dispatch => {
    blogService.setToken(null);
    dispatch({
      type: "LOGOUT"
    });
  };
};
export const setUser = user => {
  return dispatch => {
    blogService.setToken(user.token);
    dispatch({
      type: "SET_USER",
      data: user
    });
  };
};
export const setToken = token => {
  return dispatch => {
    blogService.setToken(token);
    dispatch({
      type: "SET_TOKEN",
      data: token
    });
  };
};
