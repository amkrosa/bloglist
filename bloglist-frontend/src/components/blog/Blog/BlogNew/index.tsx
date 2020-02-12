import React, { useState } from 'react';
import NewBlogForm from './NewBlogForm';
import { connect } from 'react-redux';
import { addBlog, initializeBlogs } from '../../../../store/blog/blogActions';
import { setNotification } from '../../../../store/notification/notificationActions';
import { withRouter } from 'react-router-dom';
const BlogNew = (props: any) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState();
  const [description, setDescription] = useState('');

  const submit = async (e: any) => {
    e.preventDefault();
    const newBlog = {
      title,
      author: props.user.name,
      content,
      description,
      user: props.user.username,
    };
    try {
      props.addBlog(newBlog, props.history);
      props.setNotification('Blog succesfully added.', 'success');
    } catch (e) {
      console.error(e);
      props.setNotification('An error has occurred.', 'error');
    }
  };

  return (
    <NewBlogForm
      title={title}
      setTitle={setTitle}
      content={content}
      setContent={setContent}
      description={description}
      setDescription={setDescription}
      submit={submit}
    />
  );
};

const mapStateToProps = (state: any) => {
  return {
    user: state.auth,
    blogs: state.blogs.blogs,
    status: state.blogs.pending,
  };
};

const mapDispatchToProps = {
  addBlog,
  setNotification,
  initializeBlogs,
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(BlogNew),
);
