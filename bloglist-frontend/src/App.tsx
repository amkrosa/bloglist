import React, { useEffect } from 'react';

import { connect } from 'react-redux';
import { setUser } from './store/auth/authActions';
import { initializeUsers } from './store/user/userActions';
import { initializeBlogs } from './store/blog/blogActions';

import { BrowserRouter as Router } from 'react-router-dom';

import Navbar from './components/navbar/Navbar';
import Popup from './components/common/Popup';
import Routes from './Routes';
import blogService from './services/blogs';

const App = (props: any) => {
  useEffect(() => {
    props.initializeBlogs();
    props.initializeUsers();
  }, []);

  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem('loggedUser');
    if (loggedUserJSON) {
      const currentUser = JSON.parse(loggedUserJSON);
      props.setUser(currentUser);
    } else props.setUser({});
  }, []);

  return (
    <>
      <Router basename="/bloglist">
        <Popup />
        <Navbar />
        <Routes />
      </Router>
    </>
  );
};

const mapDispatchToProps = {
  setUser,
  initializeBlogs,
  initializeUsers,
};

export default connect(null, mapDispatchToProps)(App);
