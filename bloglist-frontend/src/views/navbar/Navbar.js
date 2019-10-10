import React from "react";

import { connect } from "react-redux";

import { Link } from "react-router-dom";

import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import HamburgerMenu from "./HamburgerMenu";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    width: "100%",
    margin: "0 auto",
    paddingBottom: 5,
    position: "fixed",
    alignItems: "center",
    top: 0,
    left: 0,
    right: 0,
    zIndex: 1000
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1,
    textDecoration: "none"
  }
}));

const Navbar = props => {
  const classes = useStyles();

  const handleLogout = () => {
    window.localStorage.removeItem("loggedUser");
    window.location.reload();
  };

  return (
    <div className={classes.root}>
      <AppBar position='static'>
        <Toolbar>
          <HamburgerMenu className={classes.menuButton} />
          <Typography
            variant='h6'
            className={classes.title}
            color='inherit'
            component={Link}
            to='/'>
            Blogs
          </Typography>
          <div style={{ textDecoration: "none" }}>
            <Button color='inherit' component={Link} to='/'>
              Home
            </Button>
            <Button color='inherit' component={Link} to='/blogs'>
              Blogs
            </Button>
            <Button color='inherit' component={Link} to='/users'>
              Users
            </Button>
            {props.auth ? (
              <Button onClick={handleLogout} color='inherit'>
                Logout
              </Button>
            ) : (
              <Button color='inherit' component={Link} to='/login'>
                Login
              </Button>
            )}
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    auth: state.auth
  };
};

export default connect(mapStateToProps)(Navbar);
