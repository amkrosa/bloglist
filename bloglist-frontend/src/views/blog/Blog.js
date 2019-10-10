import React from "react";
import { Grid, Typography, Paper, IconButton } from "@material-ui/core";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { addVote, deleteBlog } from "../../actions/blogActions";
import Box from "../common/Box";
import LikeIcon from "@material-ui/icons/ThumbUp";
import DeleteIcon from "@material-ui/icons/Delete";
import { makeStyles } from "@material-ui/core/styles";
import Comment from "./Comment";
import NewCommentForm from "./NewCommentForm";
import { generateId } from "../../lib/helpers";

const useStyles = makeStyles(theme => ({
  box: {
    width: "100%",
    margin: "2% auto"
  },
  delete: {
    marginLeft: "auto",
    marginRight: -12
  },
  paper: {
    padding: theme.spacing(2, 1)
  }
}));

const Blog = ({ blog, full = false, ...props }) => {
  const currentUser = JSON.parse(window.localStorage.getItem("loggedUser"));
  const classes = useStyles();
  return (
    <Box>
      <Grid item className={classes.box}>
        <Paper className={classes.paper}>
          {full ? (
            <>
              <Typography variant='h5'>{blog.title}</Typography>
              <Typography paragraph>{blog.content}</Typography>
              <Typography align='center'>
                <IconButton onClick={() => props.addVote(blog)}>
                  <LikeIcon />
                </IconButton>
                {blog.likes}
              </Typography>
              <Typography variant='subtitle1' align='right'>
                {blog.author}
              </Typography>
              {currentUser.username === blog.user.username ? (
                <IconButton
                  className={classes.delete}
                  onClick={() => {
                    props.deleteBlog(blog.id);
                    props.history.push(`/blogs`);
                  }}>
                  <DeleteIcon />
                </IconButton>
              ) : (
                ""
              )}
              <Grid
                container
                direction='column'
                justify='center'
                alignItems='center'>
                <Typography variant='h6'>Comments</Typography>
                {blog.comments.map(comment => (
                  <Comment key={generateId()}>{comment}</Comment>
                ))}
                <NewCommentForm blog={blog} />
              </Grid>
            </>
          ) : (
            <Typography
              variant='h5'
              onClick={() => props.history.push(`/blogs/${blog.id}`)}>
              {blog.title}
            </Typography>
          )}
        </Paper>
      </Grid>
    </Box>
  );
};

const mapDispatchToProps = {
  addVote,
  deleteBlog
};

export default withRouter(
  connect(
    null,
    mapDispatchToProps
  )(Blog)
);
