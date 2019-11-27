import React from 'react';
import {
  Typography,
  Grid,
  Divider,
  makeStyles,
  CircularProgress,
} from '@material-ui/core';
import Box from '../common/Box';
import { connect } from 'react-redux';
import {
  getBlogsMostPopular,
  getBlogsRecentlyAdded,
} from '../../store/blog/blogActions';
import BlogCard from '../blog/BlogCard';

const useStyles = makeStyles(theme => ({
  headers: {
    margin: '0.857rem',
  },
}));

const Home = props => {
  const classes = useStyles();

  const Row = ({ blogs }) => {
    return (
      <>
        {blogs.map(blog => (
          <Grid key={blog.id} item>
            <BlogCard key={blog.id} blog={blog} />
          </Grid>
        ))}
      </>
    );
  };

  const delaySpinner = () => {
    return (
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
    );
  };

  return (
    <Box width="90%">
      {props.pending ? (
        delaySpinner()
      ) : (
        <Grid container direction="row" justify="center">
          <Typography className={classes.headers} variant="h4">
            Most popular
          </Typography>
          <Grid container item xs={12} spacing={3}>
            <Row blogs={props.blogsMostPopular} />
          </Grid>
          <Divider />
          <Typography className={classes.headers} variant="h4">
            Recently added
          </Typography>
          <Grid container item xs={12} spacing={3}>
            <Row blogs={props.blogsRecentlyAdded} />
          </Grid>
        </Grid>
      )}
    </Box>
  );
};

const mapStateToProps = state => {
  return {
    blogsMostPopular: getBlogsMostPopular(state, 3),
    blogsRecentlyAdded: getBlogsRecentlyAdded(state, 3),
    pending: state.blogs.pending,
  };
};

export default connect(mapStateToProps)(Home);
