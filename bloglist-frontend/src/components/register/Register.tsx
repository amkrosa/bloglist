export const nothing = null;
/*import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import InputField from '../common/InputField';
import Form from '../common/Form';
import { Paper, Grid, makeStyles, Button } from '@material-ui/core';
import Box from '../common/Box';
import { registerUser } from '../../store/user/userActions';

const useStyles = makeStyles(theme => ({
  item: {
    margin: theme.spacing(2, 3),
  },
  paper: {
    width: '100%',
    margin: '0 auto',
    padding: theme.spacing(4, 3),
  },
}));

const Register: React.FC = () => {
  const [login, setLogin] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [confPassword, setConfPassowrd] = useState('');
  const classes = useStyles();
  const dispatch = useDispatch();

  const handleSubmit = (event: any) => {
    event.preventDefault();
    const newUser = {
      username: login,
      name,
      password,
    };
    dispatch(registerUser(newUser));
    setLogin('');
    setName('');
    setPassword('');
    setConfPassowrd('');
  };

  return (
    <Box width="50%">
      <Grid container alignItems="center">
        <Paper className={classes.paper}>
          <Form onSubmit={handleSubmit}>
            <InputField
              label="Login"
              value={login}
              onChange={({ target }: any) => setLogin(target.value)}
            />
            <InputField
              label="Name"
              value={name}
              onChange={({ target }: any) => setName(target.value)}
            />
            <InputField
              label="Password"
              password
              value={password}
              onChange={({ target }: any) => setPassword(target.value)}
            />
            <InputField
              label="Confirm password"
              error={password === confPassword ? false : true}
              password
              value={confPassword}
              onChange={({ target }: any) => setConfPassowrd(target.value)}
            />
            <Button
              className={classes.item}
              variant="contained"
              color="primary"
              type="submit"
            >
              submit
            </Button>
          </Form>
        </Paper>
      </Grid>
    </Box>
  );
};

export default Register;*/
