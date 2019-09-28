import React from "react";
import { Grid, Button, Typography, Box, Paper } from "@material-ui/core";
import InputField from "./InputField";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  box: {
    width: "60%",
    margin: "3% auto"
  },
  paper: {
    width: "60%",
    margin: theme.spacing(2, 3),
    padding: theme.spacing(4, 3)
  },
  item: {
    margin: theme.spacing(2, 3)
  }
}));

const NewBlogForm = ({ newBlog, updateState, onSubmit }) => {

  const placeholder = () => {}

  const classes = useStyles();
  return (
    <Grid
      container
      alignItems="center"
      justify="center"
      spacing={3}
      className={classes.box}>
      <Paper className={classes.paper}>
        <Grid item className={classes.item}>
          <Typography variant="h5">Add new blog</Typography>
        </Grid>
        <Grid container alignItems="center" justify="center" spacing={3}>
          <form onSubmit={placeholder}>
            <InputField
              label="Title"
              icon="title"
              value={''}
              onChange={placeholder}
            />
            <InputField
              label="Content"
              icon="subject"
              value={''}
              onChange={placeholder}
            />
            <InputField
              label="URL"
              icon="link"
              value={''}
              onChange={placeholder}
            />
            <Grid item m={5}>
              <Button
                className={classes.item}
                variant="contained"
                color="primary"
                type="submit">
                submit
              </Button>
            </Grid>
          </form>
        </Grid>
      </Paper>
    </Grid>
  );
};

export default NewBlogForm;
