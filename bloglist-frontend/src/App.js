import React, { useReducer, useEffect } from "react";
import loginService from "./services/login";
import blogService from "./services/blogs";
import Login from "./components/Login";
import Popup from "./components/Popup";
import BlogList from "./components/BlogList";
import NavBar from "./components/NavBar";
import NewBlogForm from "./components/NewBlogForm";
import Togglable from "./components/Togglable";

const App = () => {
  const [state, updateState] = useReducer(
    (state, newState) => ({ ...state, ...newState }),
    {
      user: null,
      username: "",
      password: "",
      blogs: [],
      popup: {
        message: "",
        type: "",
        status: false
      },
      newBlog: {
        title: "",
        content: "",
        url: ""
      }
    }
  );

  const { blogs, user, username, password, popup, newBlog } = state;

  const blogFormRef = React.createRef();

  useEffect(() => {
    console.log("useeffect getall");
    //get notes
    blogService
      .getAll()
      .then(initialBlogs => updateState({ blogs: initialBlogs }));
  }, []);

  useEffect(() => {
    console.log("useeffect login");
    //login system
    const loggedUserJSON = window.localStorage.getItem("loggedUser");
    if (loggedUserJSON) {
      const currentUser = JSON.parse(loggedUserJSON);
      updateState({ user: currentUser });
      blogService.setToken(currentUser.token);
    }
  }, []);

  const promptPopup = (type, message) => {
    updateState({
      popup: {
        status: true,
        type,
        message
      }
    });
  };

  const handleLogin = async e => {
    e.preventDefault();
    try {
      const currentUser = await loginService.login({ username, password });
      window.localStorage.setItem("loggedUser", JSON.stringify(currentUser));
      blogService.setToken(currentUser.token);
      updateState({
        user: currentUser,
        username: "",
        password: ""
      });
    } catch (error) {
      promptPopup("error", "An error has occured.");
      console.error(error);
    }
  };

  const handleLogout = () => {
    window.localStorage.removeItem("loggedUser");
    window.location.reload();
  };

  const handleNewBlog = async e => {
    e.preventDefault();
    //user.id doesnt work, find a way to get id from database in frontend
    blogFormRef.current.toggleVisibility();
    console.log(user);
    try {
      const newObject = {
        title: newBlog.title,
        author: user.name,
        content: newBlog.content,
        url: newBlog.url,
        user: user.username
      };
      console.log(newObject);
      const response = await blogService.create(newObject);
      promptPopup("success", "Blog has been successfully created");
      updateState({
        blogs: blogs.concat(response),
        newBlog: {
          title: "",
          content: "",
          url: ""
        }
      });
    } catch (e) {
      promptPopup("error", "An error has occured.");
      console.error(e);
    }
  };

  const handleAddlike = async blog => {
    try {
      const newObject = {
        ...blog,
        likes: blog.likes + 1
      };
      const response = await blogService.update(blog.id, newObject);

      const index = blogs.findIndex(item => item.id === blog.id);
      const updatedBlogs = [
        ...blogs.slice(0, index),
        newObject,
        ...blogs.slice(index + 1)
      ];
      updateState({
        blogs: updatedBlogs
      });
    } catch (e) {
      promptPopup("error", "An error has occured.");
      console.error(e);
    }
  };
  const handleDelete = async blog => {
    try {
      const response = await blogService.remove(blog.id);
      promptPopup("success", "Blog has been successfully removed");
      updateState({
        blogs: blogs.filter(item => item.id !== blog.id)
      });
    } catch (e) {
      promptPopup("error", "An error has occured.");
      console.error(e);
    }
  };

  return (
    <>
      <NavBar user={user} logout={handleLogout} />
      <Popup
        status={popup.status}
        message={popup.message}
        type={popup.type}
        onClose={() =>
          updateState({
            popup: {
              status: false,
              message: ""
            }
          })
        }
      />
      {user ? (
        <>
          <BlogList
            blogs={blogs}
            actions={{ onLike: handleAddlike, onDelete: handleDelete }}
          />
          <Togglable ref={blogFormRef}>
            <NewBlogForm
              newBlog={newBlog}
              updateState={updateState}
              onSubmit={handleNewBlog}
            />
          </Togglable>
        </>
      ) : (
        <Login
          username={username}
          password={password}
          updateState={updateState}
          handleLogin={handleLogin}
        />
      )}
    </>
  );
};

export default App;
