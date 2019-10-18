import React from "react";
import { Grid, Typography, Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  box: {
    width: "60%",
    margin: "3% auto"
  },
  item: {
    margin: theme.spacing(2, 3)
  }
}));

const Form = ({ children, title, onSubmit, paper = true }) => {
  const classes = useStyles();

  return (
    <Grid
      container
      alignItems='center'
      justify='center'
      spacing={3}
      className={classes.box}>
      {title ? (
        <Grid item className={classes.item}>
          <Typography variant='h5'>{title}</Typography>
        </Grid>
      ) : null}
      <Grid container alignItems='center' justify='center' spacing={3}>
        <form onSubmit={onSubmit}>{children}</form>
      </Grid>
    </Grid>
  );
};

export default Form;
