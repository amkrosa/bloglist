import React from 'react';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Blog from './Blog';

const useStyles = makeStyles(theme => ({
  box: {
    width: '60%',
    padding: '40px',
    margin: '5% auto',
  },
}));

const BlogList = ({ blogs }) => {
  const classes = useStyles();
  const blogsComponents = () =>
    blogs.map(blog => <Blog key={blog.id} blog={blog} />);

  return (
    <Grid container alignItems="center" spacing={2}>
      {blogsComponents()}
    </Grid>
  );
};

export default BlogList;
