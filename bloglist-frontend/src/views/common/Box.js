import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  box: {
    width: "60%",
    margin: "0 auto",
    paddingTop: "5.8572em"
  }
}));

const Box = props => {
  const classes = useStyles();

  return (
    <Grid className={classes.box} container alignItems='center' spacing={2}>
      {props.children}
    </Grid>
  );
};

export default Box;
