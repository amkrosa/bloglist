import React from "react";
import { connect } from "react-redux";
import { Route, Redirect, withRouter } from "react-router-dom";

const ProtectedRoute = ({ auth, children, ...rest }) => {
  return auth ? <Route {...rest}>{children}</Route>  : <Redirect to='/' />;
};

const mapStateToProps = state => {
  return {
    auth: state.auth
  };
};

export default withRouter(connect(mapStateToProps)(ProtectedRoute));
