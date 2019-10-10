import React from "react";
import { connect } from "react-redux";
import { getUserById } from "./actions/userActions";
import { getBlogById } from "./actions/blogActions";

import Login from "./views/login/Login";
import BlogList from "./views/blog/BlogList";
import Users from "./views/user/Users";
import User from "./views/user/User";
import ProtectedRoute from "./lib/ProtectedRoute";

import { Route, Switch } from "react-router-dom";
import Home from "./views/home/Home";
import Blog from "./views/blog/Blog";

const Main = props => {
  return (
    <Switch>
      <Route exact path='/'>
        <Home />
      </Route>
      <Route exact path='/blogs'>
        <BlogList />
      </Route>
      <Route exact path='/users'>
        <Users />
      </Route>
      <ProtectedRoute
        exact
        path='/users/:id'
        render={({ match }) => (
          <User user={getUserById(props.users, match.params.id)} />
        )}></ProtectedRoute>
      <Route
        exact
        path='/blogs/:id'
        render={({ match }) => (
          <Blog full blog={getBlogById(props.blogs, match.params.id)} />
        )}></Route>
      <Route exact path='/login'>
        <Login />
      </Route>
    </Switch>
  );
};

const mapStateToProps = state => {
  return {
    auth: state.auth,
    users: state.users,
    blogs: state.blogs
  };
};

export default connect(mapStateToProps)(Main);
