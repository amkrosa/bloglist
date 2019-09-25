import React from "react";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Blog from "../components/Blog";

const useStyles = makeStyles(theme => ({
  box: {
    width: "60%",
    padding: "40px",
    margin: "5% auto"
  }
}));

const BlogList = ({ blogs, actions }) => {
  const classes = useStyles();
  const blogsComponents = () =>
    blogs.map(blog => (
      <Blog
        key={blog.id}
        blog={blog}
        onDelete={() => actions.onDelete(blog)}
        onLike={() => actions.onLike(blog)}
      />
    ));

  return (
    <Grid container alignItems='center' spacing={2}>
      {blogsComponents()}
    </Grid>
  );
};

export default BlogList;
