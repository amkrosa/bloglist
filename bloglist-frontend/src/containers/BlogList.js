import React from "react";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Blog from "../components/Blog";

import { connect } from "react-redux"
import { addVote, deleteBlog } from "../actions/blogActions";

const useStyles = makeStyles(theme => ({
  box: {
    width: "60%",
    padding: "40px",
    margin: "5% auto"
  }
}));

const BlogList = props => {
  const classes = useStyles();
  const blogsComponents = () =>
    props.blogs.map(blog => (
      <Blog
        key={blog.id}
        blog={blog}
        onDelete={() => props.deleteBlog(blog.id)}
        onLike={() => props.addVote(blog.id)}
      />
    ));

  return (
    <Grid container alignItems='center' spacing={2}>
      {blogsComponents()}
    </Grid>
  );
};

const mapStateToProps = state => {
  return {
    blogs: state.blogs
  }
}
const mapDispatchToProps = {
  addVote,
  deleteBlog
}

export default connect(mapStateToProps,mapDispatchToProps)(BlogList);
