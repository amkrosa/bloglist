import React, { useState } from "react";

import InputField from "../common/InputField";
import Form from "../common/Form";
import { addComment } from "../../actions/blogActions";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import AddIcon from "@material-ui/icons/Add";
import { IconButton } from "@material-ui/core";

const NewCommentForm = props => {
  const [comment, setComment] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    props.addComment(props.blog, comment);
  };

  return (
    <>
      <InputField
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

const mapDispatchToProps = {
  addComment
};

export default withRouter(
  connect(
    null,
    mapDispatchToProps
  )(NewCommentForm)
);
