import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";

const Box = props => {
  const useStyles = makeStyles(theme => ({
    box: {
      width: props.width,
      margin: "0 auto",
      paddingTop: "5.8572em"
    }
  }));
  const classes = useStyles();

  return (
    <Grid className={classes.box} container alignItems='center' spacing={2}>
      {props.children}
    </Grid>
  );
};

export default Box;
