import React, { useEffect } from 'react';

import { connect } from 'react-redux';
import { setUser } from './store/auth/authActions';
import { initializeUsers } from './store/user/userActions';
import { initializeBlogs } from './store/blog/blogActions';

import { BrowserRouter as Router } from 'react-router-dom';

import Navbar from './components/navbar/Navbar';
import Popup from './components/common/Popup';
import Main from './Main';

const App = props => {
  useEffect(() => {
    props.initializeBlogs();
    props.initializeUsers();
  }, []);

  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem('loggedUser');
    if (loggedUserJSON) {
      const currentUser = JSON.parse(loggedUserJSON);
      props.setUser(currentUser);
    }
  }, []);

  return (
    <>
      <Router>
        <Popup />
        <Navbar />
        <Main />
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
