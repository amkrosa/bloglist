import React, { useState } from "react";
import { connect } from "react-redux";
import { addBlog } from "../../actions/blogActions";
import { setNotification } from "../../actions/notificationActions";
import { withRouter } from "react-router-dom"

import Form from "../common/Form";
import InputField from "../common/InputField";

import Button from "@material-ui/core/Button";
import Grow from '@material-ui/core/Grow';
import { makeStyles } from "@material-ui/core/styles";
import { Paper, Typography } from "@material-ui/core";
import Box from "../common/Box";

const useStyles = makeStyles(theme => ({
  item: {
    margin: theme.spacing(2, 3)
  },
  paper: {
    width: "100%",
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
      setTimeout(()=>props.history.push(`/blogs/${props.addedBlog.id}`), 2000)
    } catch (e) {
      console.error(e);
      props.setNotification("An error has occured", "error");
    }
  };

  return (
    <Grow in={props.grow}>
    <Box width="80%">
    <Paper elevation={4} className={classes.paper}>
    <Typography as="h3">New blog</Typography>
      <Form onSubmit={submit}>
        <InputField
          label='Title'
          icon='title'
          required
          variant="outlined"
          value={title}
          onChange={({ target }) => setTitle(target.value)}
        />
        <InputField
          label='Content'
          icon='subject'
          multiline
          required
          fullWidth
          variant="outlined"
          rows={10}
          margin="normal"
          value={content}
          onChange={({ target }) => setContent(target.value)}
        />
        <InputField
          label='URL'
          icon='link'
          variant="outlined"
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
    </Paper></Box></Grow>
  );
};

const mapStateToProps = state => {
  return {
    user: state.auth,
    addedBlog: state.blogs.blogs[state.blogs.blogs.length-1]
  };
};

const mapDispatchToProps = {
  addBlog,
  setNotification
};

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(NewBlogForm));
