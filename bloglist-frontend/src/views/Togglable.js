import React, { useState, useImperativeHandle } from 'react';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import { IconButton, makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  button: {
    margin: '1% auto',
    textAlign: 'center',
  },
}));

const Togglable = React.forwardRef((props, ref) => {
  const classes = useStyles();
  const [visible, setVisible] = useState(false);
  const hideWhenVisible = { display: visible ? 'none' : '' };
  const showWhenVisible = { display: visible ? '' : 'none' };

  const toggleVisibility = () => {
    setVisible(!visible);
  };

  useImperativeHandle(ref, () => {
    return {
      toggleVisibility,
    };
  });

  return (
    <div>
      <div className={classes.button} style={hideWhenVisible}>
        <IconButton className={classes.button} onClick={toggleVisibility}>
          <AddIcon />
        </IconButton>
      </div>
      <div className={classes.button} style={showWhenVisible}>
        {props.children}
        <IconButton className={classes.button} onClick={toggleVisibility}>
          <RemoveIcon />
        </IconButton>
      </div>
    </div>
  );
});

export default Togglable;
