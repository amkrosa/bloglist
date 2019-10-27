import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Divider from "@material-ui/core/Divider";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper
  },
  inline: {
    display: "inline"
  }
}));

const Comment = ({ comment, children }) => {
  const currentUser = JSON.parse(window.localStorage.getItem("loggedUser"));
  const classes = useStyles();

  return (
    <List className={classes.root}>
      <ListItem alignItems='flex-start'>
        <ListItemAvatar>
          <Avatar className={classes.avatar}>{currentUser.name[0]}</Avatar>
        </ListItemAvatar>
        <ListItemText>{comment.date}</ListItemText>
        <ListItemText primary={currentUser.name} secondary={<>{children}</>} />
        <ListItemText>{comment.likes}</ListItemText>
      </ListItem>
      <Divider variant='inset' component='li' />
    </List>
  );
};

export default Comment;
