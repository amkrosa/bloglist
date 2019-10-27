import React, { useEffect } from "react";

import { connect } from "react-redux";
import { setUser } from "./actions/authActions";
import { initializeUsers } from "./actions/userActions";
import { initializeBlogs } from "./actions/blogActions";

import { BrowserRouter as Router } from "react-router-dom";

import Navbar from "./views/navbar/Navbar";
import Popup from "./views/common/Popup";
import Main from "./Main";

const App = props => {


  useEffect(() => {
    props.initializeBlogs();
    props.initializeUsers();
  }, []);

  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem("loggedUser");
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
        <Main/>
      </Router>
    </>
  );
};

const mapDispatchToProps = {
  setUser,
  initializeBlogs,
  initializeUsers
};

export default connect(
  null,
  mapDispatchToProps
)(App);
