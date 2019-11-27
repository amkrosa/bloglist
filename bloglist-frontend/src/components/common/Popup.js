import React from 'react';
import ErrorIcon from '@material-ui/icons/Error';
import InfoIcon from '@material-ui/icons/Info';
import WarningIcon from '@material-ui/icons/Warning';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import CloseIcon from '@material-ui/icons/Close';
import {
  Snackbar,
  makeStyles,
  IconButton,
  SnackbarContent,
} from '@material-ui/core';
import { amber, green } from '@material-ui/core/colors';
import clsx from 'clsx';

import { connect } from 'react-redux';
import {
  clearNotification,
  setTimedNotification,
} from '../../store/notification/notificationActions';

const Popup = props => {
  const useStyles = makeStyles(theme => ({
    success: {
      backgroundColor: green[600],
    },
    error: {
      backgroundColor: theme.palette.error.dark,
    },
    info: {
      backgroundColor: theme.palette.primary.main,
    },
    warning: {
      backgroundColor: amber[700],
    },
    icon: {
      fontSize: 20,
    },
    iconVariant: {
      opacity: 0.9,
      marginRight: theme.spacing(1),
    },
    message: {
      display: 'flex',
      alignItems: 'center',
    },
  }));

  const variantIcon = {
    success: CheckCircleIcon,
    warning: WarningIcon,
    error: ErrorIcon,
    info: InfoIcon,
  };

  const classes = useStyles();
  const Icon = props.notification.category
    ? variantIcon[props.notification.category]
    : variantIcon['info'];

  return (
    <>
      <Snackbar
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
        key={'bottom, center'}
        open={props.notification.status}
        onClose={props.clearNotification}
        autoHideDuration={3000}
        ContentProps={{
          'aria-describedby': 'message-id',
        }}
      >
        <SnackbarContent
          className={classes[props.notification.category]}
          aria-describedby="client-snackbar"
          message={
            <span id="client-snackbar" className={classes.message}>
              <Icon className={clsx(classes.icon, classes.iconVariant)} />
              {props.notification.content}
            </span>
          }
          action={[
            <IconButton
              key="close"
              aria-label="close"
              color="inherit"
              onClick={props.clearNotification}
            >
              <CloseIcon className={classes.icon} />
            </IconButton>,
          ]}
        />
      </Snackbar>
    </>
  );
};

const mapStateToProps = state => {
  return {
    notification: state.notification,
  };
};

const mapDispatchToProps = {
  clearNotification,
  setTimedNotification,
};

export default connect(mapStateToProps, mapDispatchToProps)(Popup);
