import React from 'react'
import InputField from '../common/InputField'
import Form from '../common/Form'
import { Paper, Grid, makeStyles } from '@material-ui/core'
import Box from '../common/Box'

const useStyles = makeStyles(theme => ({
  item: {
    margin: theme.spacing(2, 3)
  },
  paper: {
    width: "100%",
    margin: "0 auto",
    padding: theme.spacing(4, 3)
  }
}));

const Register = () => {

  const classes = useStyles()

  return(
    <Box width="50%">
    <Grid container alignItems="center">
    <Paper className={classes.paper}>
    <Form>
      <InputField label="Login"/>
      <InputField label="Name"/>
      <InputField label="Password" password/>
      <InputField label="Confirm password" password/>
    </Form></Paper></Grid></Box>
  )
}

export default Register