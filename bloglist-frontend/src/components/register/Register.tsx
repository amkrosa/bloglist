import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { registerUser } from '../../store/user/userActions';
import { Grid, Header, Form, Message } from 'semantic-ui-react';
import { User } from '../../common/types';
import { setNotification } from '../../store/notification/notificationActions';

const Register: React.FC = () => {
  const [login, setLogin] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [confPassword, setConfPassowrd] = useState('');
  const [err, setErr] = useState(false);
  const dispatch = useDispatch();
  let errors: Array<string> = [];

  const handleSubmit = (event: any) => {
    event.preventDefault();

    if (err === false) {
      const newUser: User = {
        username: login,
        name,
        password,
      };
      try {
        dispatch(registerUser(newUser));
        dispatch(setNotification('User succesfully added.', 'success'));
      } catch (e) {
        dispatch(setNotification('An error has occurred.', 'error'));
      }
    } else {
      setErr(false);
      setTimeout(() => (errors = []), 5000);
    }
    setLogin('');
    setName('');
    setPassword('');
  };

  return (
    <Grid style={{ height: '80vh' }} verticalAlign="middle" textAlign="center">
      <Grid.Column style={{ maxWidth: 450 }}>
        <Header as="h2" color="blue" textAlign="center">
          Register new account
        </Header>
        <Form onSubmit={handleSubmit}>
          <Form.Input
            label="Username"
            value={login}
            onChange={({ target }: any) => setLogin(target.value)}
            placeholder="Enter username..."
            minLength={3}
            required
          />
          <Form.Input
            label="Name"
            value={name}
            onChange={({ target }: any) => setName(target.value)}
            placeholder="Enter name..."
            minLength={3}
            required
          />
          <Form.Input
            type="password"
            label="Password"
            value={password}
            onChange={({ target }: any) => setPassword(target.value)}
            placeholder="Enter password..."
            required
            minLength={5}
          />
          <Form.Button>Register</Form.Button>
        </Form>
      </Grid.Column>
    </Grid>
  );
};

export default Register;
