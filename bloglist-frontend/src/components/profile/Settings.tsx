import React from 'react';
import { makeStyles } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import Button from '@material-ui/core/Button';
const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1),
  },
}));
const Settings: React.FC = props => {
  const classes = useStyles();

  return (
    <>
      <div>to be done</div>
      <Button
        variant="contained"
        color="secondary"
        className={classes.button}
        startIcon={<DeleteIcon />}
      >
        Delete account
      </Button>
    </>
  );
};

export default Settings;
