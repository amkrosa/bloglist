import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addBlog, initializeBlogs } from '../../store/blog/blogActions';
import { setNotification } from '../../store/notification/notificationActions';
import { withRouter } from 'react-router-dom';

import Form from '../common/Form';
import InputField from '../common/InputField';

import Button from '@material-ui/core/Button';
import Grow from '@material-ui/core/Grow';
import { makeStyles } from '@material-ui/core/styles';
import { Paper, Typography, Grid } from '@material-ui/core';
import Box from '../common/Box';

const useStyles = makeStyles(theme => ({
  item: {
    margin: theme.spacing(2, 3),
  },
  paper: {
    width: '100%',
    margin: '0 auto',
    padding: theme.spacing(4, 3),
  },
  input: {
    width: '100%',
  },
  header: {},
}));

const NewBlogForm = props => {
  const classes = useStyles();

  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [url, setUrl] = useState('');

  const submit = async e => {
    e.preventDefault();
    const newBlog = {
      title,
      author: props.user.name,
      content,
      url,
      user: props.user.username,
    };
    try {
      props.addBlog(newBlog, props.history);
      props.setNotification('Blog succesfully added', 'success');
    } catch (e) {
      console.error(e);
      props.setNotification('An error has occured', 'error');
    }
  };

  return (
    <Grow in={props.grow}>
      <Box width="80%">
        <Paper elevation={4} className={classes.paper}>
          <Grid container justify="flex-start" direction="column">
            <Grid container justify="center">
              <Typography as="h3">New blog</Typography>
            </Grid>
            <Grid item>
              <Form onSubmit={submit}>
                <InputField
                  className={classes.input}
                  label="Title"
                  icon="title"
                  required
                  variant="outlined"
                  value={title}
                  onChange={({ target }) => setTitle(target.value)}
                />
                <InputField
                  className={classes.input}
                  label="Content"
                  icon="subject"
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
                  className={classes.input}
                  label="URL"
                  icon="link"
                  variant="outlined"
                  value={url}
                  onChange={({ target }) => setUrl(target.value)}
                />
                <Grid container justify="center">
                  <Button
                    className={classes.item}
                    variant="contained"
                    color="primary"
                    type="submit"
                  >
                    submit
                  </Button>
                </Grid>
              </Form>
            </Grid>
          </Grid>
        </Paper>
      </Box>
    </Grow>
  );
};

const mapStateToProps = state => {
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
  connect(mapStateToProps, mapDispatchToProps)(NewBlogForm),
);
