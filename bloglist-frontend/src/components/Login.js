import React from 'react';
import { Grid, Button, Typography, Box } from '@material-ui/core';
import InputField from './InputField';
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

const Login = ({ username, password, updateState, handleLogin }) => {
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
                onChange={({ target }) =>
                  updateState({ username: target.value })
                }
              />
            </Grid>
            <Grid item>
              <InputField
                label="Password"
                icon="vpn_key"
                value={password}
                password
                onChange={({ target }) =>
                  updateState({ password: target.value })
                }
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

export default Login;
