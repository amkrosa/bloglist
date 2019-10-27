import React, { useState } from "react";

import InputField from "../common/InputField";
import Form from "../common/Form";
import { addComment } from "../../actions/blogActions";
import { setTimedNotification, setNotification } from "../../actions/notificationActions"
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import AddIcon from "@material-ui/icons/Add";
import { IconButton } from "@material-ui/core";

const NewCommentForm = props => {
  const [err, setErr] = useState(false)
  const [comment, setComment] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    if (comment.length<3) {
      props.setNotification("Too few characters","error")
      setErr(true)
      setTimeout(()=>setErr(false), 3000)
      return
    }
    const newComment = {
        content: comment,
        likes: 0,
        user: props.user
      }
    setComment("");
    props.addComment(props.blog, newComment);
    props.setNotification("Comment succesfully added","success")
  };

  return (
    <>
      <InputField
        error={err}
        icon='comment'
        label='New Comment'
        value={comment}
        onChange={({ target }) => setComment(target.value)}
      />
      <IconButton onClick={handleSubmit}>
        <AddIcon />
      </IconButton>
    </>
  );
};

const mapStateToProps = state => {
  return{
    user: state.auth.username
  }
}

const mapDispatchToProps = {
  addComment,
  setTimedNotification,
  setNotification
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(NewCommentForm)
);
