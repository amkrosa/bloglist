import React, { useState } from 'react';
import { connect } from 'react-redux';
import LoginComponent from './Login';
import { login } from '../../store/auth/authActions';
import { setNotification } from '../../store/notification/notificationActions';
import { useHistory } from 'react-router-dom';

const Login: React.FC = (props: any) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  let history = useHistory();
  const handleLogin = (e: any) => {
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

  return (
    <LoginComponent
      username={username}
      setUsername={setUsername}
      password={password}
      setPassword={setPassword}
      handleLogin={handleLogin}
    />
  );
};

const mapStateToProps = (state: any) => {
  return {
    user: state.user,
  };
};

const mapDispatchToProps = {
  login,
  setNotification,
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
