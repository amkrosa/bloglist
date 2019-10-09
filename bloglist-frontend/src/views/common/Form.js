import React from "react";
import { Grid, Typography, Paper } from "@material-ui/core";
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

const Form = ({ children, title, onSubmit }) => {

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
          <Typography variant="h5">{title}</Typography>
        </Grid>
        <Grid container alignItems="center" justify="center" spacing={3}>
          <form onSubmit={onSubmit}>
            {children}
          </form>
        </Grid>
      </Paper>
    </Grid>
  );
};

export default Form;
