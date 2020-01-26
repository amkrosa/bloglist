import React from 'react';
import { connect } from 'react-redux';
import {
  Route,
  Redirect,
  withRouter,
  RouteProps,
  RouteComponentProps,
} from 'react-router-dom';
import { AuthState } from '../store/auth/types';

interface ProtectedRouteProps {
  auth: AuthState;
}

const ProtectedRoute = ({
  auth,
  children,
  ...rest
}: RouteProps & ProtectedRouteProps): JSX.Element => {
  return auth ? <Route {...rest}>{children}</Route> : <Redirect to="/" />;
};

const mapStateToProps = (state: any) => {
  return {
    auth: state.auth,
  };
};

//deleted withRouter before

export default connect<{}, {}, ProtectedRouteProps>(mapStateToProps)(
  ProtectedRoute,
) as any;
