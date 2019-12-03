import React from "react";
import { connect } from "react-redux";
import { Route, Redirect, withRouter } from "react-router-dom";

const ProtectedRoute: React.FC = ({ auth, children, ...rest }) => {
  return auth ? <Route {...rest}>{children}</Route> : <Redirect to='/' />;
};

const mapStateToProps = (state: any) => {
  return {
    auth: state.auth
  };
};

export default withRouter(connect(mapStateToProps)(ProtectedRoute));
