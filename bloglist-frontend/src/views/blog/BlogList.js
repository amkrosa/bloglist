import React, { useEffect } from "react";
import Blog from "./Blog";
import NewBlogForm from "./NewBlogForm";

import CircularProgress from "@material-ui/core/CircularProgress";

import { connect } from "react-redux";
import { initializeBlogs } from "../../actions/blogActions";
import Box from "../common/Box";
import { makeStyles } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  spinnerWrapper: {
    flex: 1,
    marginTop: 240,
    justifyContent: "center",
    alignItems: "center"
  },
  spinner: {
    flex: 1,
    alignSelf: "center"
  }
}));

const BlogList = props => {
  const classes = useStyles();

  useEffect(() => {
    props.initializeBlogs();
  }, []);

  const blogsComponents = () => {
    const blogs = props.blogs.map(blog => <Blog key={blog.id} blog={blog} />);
    return (
      <>
        {blogs}
        <NewBlogForm />
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
            direction='column'
            alignItems='center'
            justify='center'
            style={{ minHeight: "50vh" }}>
            <CircularProgress />
          </Grid>
        </Box>
      ),
      500
    );
  };

  return (
    <Box className={classes.root}>
      {props.pending ? delaySpinner() : blogsComponents()}
    </Box>
  );
};

const mapStateToProps = state => {
  return {
    blogs: state.blogs.blogs,
    pending: state.blogs.pending
  };
};
const mapDispatchToProps = {
  initializeBlogs
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BlogList);
