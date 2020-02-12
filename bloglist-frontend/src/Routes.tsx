import React from 'react';
import { connect } from 'react-redux';
import { getUserById, getCurrentUser } from './store/user/userActions';
import { getBlogById } from './store/blog/blogActions';

import Login from './components/login';
import BlogList from './components/blog/Blog/BlogList/';
import User from './components/user/User';
import ProtectedRoute from './lib/ProtectedRoute';

import { Route, Switch } from 'react-router-dom';
import Home from './components/home';
import BlogSingle from './components/blog/Blog/BlogSingle';
import Profile from './components/profile';
import NewBlogForm from './components/blog/Blog/BlogNew';
import Blog from './components/blog/Blog';
import Register from './components/register/Register';

const Routes = (props: any) => {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/blogs">
        <Blog />
      </Route>
      <Route exact path="/register">
        <Register />
      </Route>
      <ProtectedRoute
        exact
        path="/users/:id"
        render={({ match }: any) => (
          <User user={getUserById(props.users, match.params.id)} />
        )}
      ></ProtectedRoute>
      <Route
        exact
        path="/blogs/:id"
        render={({ match }) => (
          <BlogSingle
            full
            blog={getBlogById(props.blogs, match.params.id)}
            currentUser={props.auth}
          />
        )}
      ></Route>
      <Route exact path="/login">
        <Login />
      </Route>
      <ProtectedRoute exact path="/profile">
        <Profile />
      </ProtectedRoute>
      <ProtectedRoute exact path="/new" render={() => <NewBlogForm />} />
    </Switch>
  );
};

const mapStateToProps = (state: any) => {
  return {
    auth: state.auth,
    users: state.users,
    blogs: state.blogs,
  };
};

export default connect(mapStateToProps)(Routes);
