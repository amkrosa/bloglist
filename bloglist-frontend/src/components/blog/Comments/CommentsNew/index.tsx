import React, { useState } from 'react';
import { addComment, getBlogById } from '../../../../store/blog/blogActions';
import {
  setTimedNotification,
  setNotification,
} from '../../../../store/notification/notificationActions';
import { connect } from 'react-redux';
import CommentsNewComponent from './CommentsNew';
import { withRouter, useHistory } from 'react-router-dom';

const CommentsNew = (props: any) => {
  let history = useHistory();
  const [err, setErr] = useState(false);
  const [comment, setComment] = useState('');

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (comment.length < 3) {
      props.setNotification('Too few characters', 'error');
      setErr(true);
      setTimeout(() => setErr(false), 3000);
      return;
    }
    const newComment = {
      content: comment,
      likes: 0,
      user: props.user,
    };
    setComment('');
    const blog = getBlogById(props.blogs, history.location.state);
    props.addComment(blog, newComment);
    props.setNotification('Comment succesfully added', 'success');
  };

  return (
    <CommentsNewComponent
      comment={comment}
      setComment={setComment}
      handleSubmit={handleSubmit}
    />
  );
};

const mapStateToProps = (state: any) => {
  return {
    user: state.auth.username,
    blogs: state.blogs,
  };
};

const mapDispatchToProps = {
  addComment,
  setTimedNotification,
  setNotification,
};

export default connect(mapStateToProps, mapDispatchToProps)(CommentsNew);
