import React, { useState } from 'react';
import { connect } from 'react-redux';

import { login } from '../../store/auth/authActions';
import { setNotification } from '../../store/notification/notificationActions';

import { useHistory } from 'react-router-dom';

import { Grid, Button, Typography, Box } from '@material-ui/core';
import InputField from '../common/InputField';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  loginBox: {
    width: '40%',
    padding: '50px',
    margin: '10% auto',
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const Login = props => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  let history = useHistory();

  const handleLogin = e => {
    e.preventDefault();
    try {
      props.login(username, password);
      //window.localStorage.setItem("loggedUser", JSON.stringify(props.user));
      setUsername('');
      setPassword('');
      history.push('/');
    } catch (error) {
      props.setNotification('error', 'An error has occured.');
      console.error(error);
    }
  };

  const classes = useStyles();
  return (
    <Box className={classes.loginBox} boxShadow={3}>
      <Grid container alignItems="center" spacing={3} justify="center">
        <Grid item>
          <Typography variant="h5">Login</Typography>
        </Grid>
        <Grid container alignItems="center" justify="center" spacing={3}>
          <form onSubmit={handleLogin}>
            <Grid item>
              <InputField
                label="Username"
                icon="account_circle"
                value={username}
                onChange={({ target }) => setUsername(target.value)}
              />
            </Grid>
            <Grid item>
              <InputField
                label="Password"
                icon="vpn_key"
                value={password}
                password
                onChange={({ target }) => setPassword(target.value)}
              />
            </Grid>
            <Grid item m={5}>
              <Button
                className={classes.submit}
                variant="contained"
                color="primary"
                type="submit"
              >
                Login
              </Button>
            </Grid>
          </form>
        </Grid>
      </Grid>
    </Box>
  );
};

const mapStateToProps = state => {
  return {
    user: state.user,
  };
};

const mapDispatchToProps = {
  login,
  setNotification,
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
