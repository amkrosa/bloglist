import React, { useEffect } from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';

import { connect } from 'react-redux';
import { initializeBlogs } from '../../store/blog/blogActions';
import Box from '../common/Box';
import AddIcon from '@material-ui/icons/Add';
import { makeStyles, Fab } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import BlogCard from './BlogCard';
import { Link } from 'react-router-dom';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  spinnerWrapper: {
    flex: 1,
    marginTop: 240,
    justifyContent: 'center',
    alignItems: 'center',
  },
  spinner: {
    flex: 1,
    alignSelf: 'center',
  },
  floatButton: {
    position: 'fixed',
    width: '60px',
    height: '60px',
    bottom: '40px',
    right: '40px',
    marginTop: '22px',
  },
}));

const BlogList = props => {
  const classes = useStyles();

  console.log(props.blogs);

  const blogsComponents = () => {
    const blogs = props.blogs.map(blog => (
      <BlogCard key={blog.id} blog={blog} />
    ));
    return (
      <>
        {blogs}
        <Fab
          className={classes.floatButton}
          color="primary"
          aria-label="add"
          component={Link}
          to="/new"
        >
          <AddIcon />
        </Fab>
      </>
    );
  };
  const delaySpinner = () => {
    const id = setTimeout(
      () => (
        <Box className={classes.spinnerWrapper}>
          <Grid
            container
            spacing={0}
            direction="column"
            alignItems="center"
            justify="center"
            style={{ minHeight: '50vh' }}
          >
            <CircularProgress />
          </Grid>
        </Box>
      ),
      200,
    );
  };

  return (
    <Box width="80%" className={classes.root}>
      {props.pending ? delaySpinner() : blogsComponents()}
    </Box>
  );
};

const mapStateToProps = state => {
  return {
    blogs: state.blogs.blogs,
    pending: state.blogs.pending,
  };
};
const mapDispatchToProps = {
  initializeBlogs,
};

export default connect(mapStateToProps, mapDispatchToProps)(BlogList);
