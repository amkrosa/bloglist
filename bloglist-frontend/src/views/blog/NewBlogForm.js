import React, { useState } from "react";
import { connect } from "react-redux";
import { addBlog } from "../../actions/blogActions";
import { setNotification } from "../../actions/notificationActions";

import Form from "../common/Form";
import InputField from "../common/InputField";

import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import { Paper } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  item: {
    margin: theme.spacing(2, 3)
  },
  paper: {
    width: "60%",
    margin: "0 auto",
    padding: theme.spacing(4, 3)
  }
}));

const NewBlogForm = props => {
  const classes = useStyles();

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [url, setUrl] = useState("");

  const submit = e => {
    e.preventDefault();
    const newBlog = {
      title,
      author: props.user.name,
      content,
      url,
      user: props.user.username
    };
    try {
      props.addBlog(newBlog);
      props.setNotification("Blog succesfully added", "success");
    } catch (e) {
      console.error(e);
      props.setNotification("An error has occured", "error");
    }
  };

  return (
    <Paper className={classes.paper}>
      <Form onSubmit={submit}>
        <InputField
          label='Title'
          icon='title'
          value={title}
          onChange={({ target }) => setTitle(target.value)}
        />
        <InputField
          label='Content'
          icon='subject'
          value={content}
          onChange={({ target }) => setContent(target.value)}
        />
        <InputField
          label='URL'
          icon='link'
          value={url}
          onChange={({ target }) => setUrl(target.value)}
        />
        <Button
          className={classes.item}
          variant='contained'
          color='primary'
          type='submit'>
          submit
        </Button>
      </Form>
    </Paper>
  );
};

const mapStateToProps = state => {
  return {
    user: state.auth
  };
};

const mapDispatchToProps = {
  addBlog,
  setNotification
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NewBlogForm);
