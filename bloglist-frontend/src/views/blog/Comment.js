import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Divider from "@material-ui/core/Divider";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";

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

const Comment = ({ children }) => {
  const classes = useStyles();

  return (
    <List className={classes.root}>
      <ListItem alignItems='flex-start'>
        <ListItemAvatar>
          <Avatar className={classes.avatar}>U</Avatar>
        </ListItemAvatar>
        <ListItemText primary='Username' secondary={<>{children}</>} />
      </ListItem>
      <Divider variant='inset' component='li' />
    </List>
  );
};

export default Comment;
