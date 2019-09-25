import React, { useReducer, useEffect } from "react";

import { connect } from "react-redux";
import { setUser, setToken } from "./actions/userActions";
import { clearNotification } from "./actions/notificationActions";

import loginService from "./services/login";
import blogService from "./services/blogs";
import Login from "./components/Login";
import Popup from "./components/Popup";
import BlogList from "./containers/BlogList";
import NavBar from "./components/NavBar";
import NewBlogForm from "./components/NewBlogForm";
import Togglable from "./components/Togglable";

const App = props => {
  const blogFormRef = React.createRef();

  const { blogs, user, notification } = props;

  console.log(blogs);

  /*useEffect(() => {
    console.log("useeffect getall");
    //get notes
    blogService
      .getAll()
      .then(initialBlogs => updateState({ blogs: initialBlogs }));
  }, []);*/

  useEffect(() => {
    console.log("useeffect login");
    //login system
    const loggedUserJSON = window.localStorage.getItem("loggedUser");
    console.log(loggedUserJSON);
    if (loggedUserJSON) {
      console.log("went through if");
      const currentUser = JSON.parse(loggedUserJSON);
      props.setUser(currentUser);
    }
  }, []);

  return (
    <>
      <NavBar />
      <Popup
        status={notification.status}
        message={notification.content}
        type={notification.type}
        onClose={props.clearNotification}
      />
      {user ? (
        <>
          <BlogList blogs={blogs} />
          <Togglable ref={blogFormRef}>
            <NewBlogForm />
          </Togglable>
        </>
      ) : (
        <Login />
      )}
    </>
  );
};

const mapStateToProps = state => {
  return {
    blogs: state.blogs,
    user: state.user,
    notification: state.notification
  };
};

const mapDispatchToProps = {
  setUser,
  clearNotification
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
