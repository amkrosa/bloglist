import React, { useEffect } from "react";

import { connect } from "react-redux";
import { setUser, setToken } from "./actions/userActions";
import { clearNotification } from "./actions/notificationActions";
import { initializeBlogs } from "./actions/blogActions"

import Login from "./containers/Login";
import Popup from "./components/Popup";
import BlogList from "./containers/BlogList";
import NavBar from "./components/NavBar";
import NewBlogForm from "./containers/NewBlogForm";
import Togglable from "./components/Togglable";

const App = props => {
  const blogFormRef = React.createRef();

  const { blogs, user, notification } = props;

  console.log(blogs);

  useEffect(()=>{
    props.initializeBlogs()
  },[])

  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem("loggedUser");
    console.log(loggedUserJSON);
    if (loggedUserJSON) {
      const currentUser = JSON.parse(loggedUserJSON);
      props.setUser(currentUser);
    }
  }, []);

  return (
    <>
      <NavBar />
      <Popup/>
      {user ? (
        <>
          <BlogList blogs={props.blogs} />
            <NewBlogForm/>
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
  initializeBlogs
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);