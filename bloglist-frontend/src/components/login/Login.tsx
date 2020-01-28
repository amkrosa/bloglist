import React from 'react';
import { Form, Grid, Header } from 'semantic-ui-react';

export default function({
  username,
  setUsername,
  password,
  setPassword,
  handleLogin,
  history,
  ...props
}: any) {
  return (
    <Grid style={{ height: '80vh' }} verticalAlign="middle" textAlign="center">
      <Grid.Column style={{ maxWidth: 450 }}>
        <Header as="h2" color="blue" textAlign="center">
          Log-in to your account
        </Header>
        <Form onSubmit={handleLogin}>
          <Form.Input
            label="Username"
            value={username}
            onChange={({ target }: any) => setUsername(target.value)}
            placeholder="Enter username..."
          />
          <Form.Input
            type="password"
            label="Password"
            value={password}
            onChange={({ target }: any) => setPassword(target.value)}
            placeholder="Enter password..."
          />
          <Form.Button>Login</Form.Button>
        </Form>
      </Grid.Column>
    </Grid>
  );
}
