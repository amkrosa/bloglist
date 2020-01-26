import React from 'react';
import { Form } from 'semantic-ui-react';

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
    <Form onSubmit={handleLogin}>
      <Form.Input
        label="Username"
        value={username}
        onSubmit={({ target }: any) => setUsername(target.value)}
        placeholder="Enter username..."
      />
      <Form.Input
        password
        label="Password"
        value={password}
        onSubmit={({ target }: any) => setPassword(target.value)}
        placeholder="Enter password..."
      />
      <Form.Button>Login</Form.Button>
    </Form>
  );
}
