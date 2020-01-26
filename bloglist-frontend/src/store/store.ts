import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import blogReducer from './blog/blogReducer';
import notificationReducer from './notification/notificationReducer';
import authReducer from './auth/authReducer';
import userReducer from './user/userReducer';

const reducer = combineReducers({
  blogs: blogReducer as any,
  notification: notificationReducer as any,
  auth: authReducer as any,
  users: userReducer as any,
});

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;
