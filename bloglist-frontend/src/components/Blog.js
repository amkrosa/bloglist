import React, { useState } from "react";
import { Grid, Typography, Paper, IconButton } from "@material-ui/core";
import LikeIcon from "@material-ui/icons/ThumbUp";
import DeleteIcon from "@material-ui/icons/Delete";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  box: {
    width: "60%",
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

const Blog = ({ blog }) => {
  const [isExpanded, setExpanded] = useState(false);
  const currentUser = JSON.parse(window.localStorage.getItem("loggedUser"));

  const onDelete = () => {};
  const onLike = () => {};

  const toggleExpanded = () => {
    setExpanded(!isExpanded);
  };

  const classes = useStyles();
  return (
    <Grid item className={classes.box}>
      <Paper className={classes.paper}>
        {isExpanded ? (
          <>
            <Typography onClick={toggleExpanded} variant='h5'>
              {blog.title}
            </Typography>
            <Typography paragraph>{blog.content}</Typography>
            <Typography align='center'>
              <IconButton onClick={onLike}>
                <LikeIcon />
              </IconButton>
              {blog.likes}
            </Typography>
            <Typography variant='subtitle1' align='right'>
              {blog.author}
            </Typography>
            {currentUser.username === blog.user.username ? (
              <IconButton className={classes.delete} onClick={onDelete}>
                <DeleteIcon />
              </IconButton>
            ) : (
              ""
            )}
          </>
        ) : (
          <Typography variant='h5' onClick={toggleExpanded}>
            {blog.title}
          </Typography>
        )}
      </Paper>
    </Grid>
  );
};

export default Blog;
