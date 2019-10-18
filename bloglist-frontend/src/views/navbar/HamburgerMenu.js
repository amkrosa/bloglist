import React from "react";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import { Link } from "react-router-dom";

const HamburgerMenu = props => {
  const [anchorElement, setAnchorElement] = React.useState(null);

  const handleClick = event => {
    setAnchorElement(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorElement(null);
  };

  return (
    <div>
      <IconButton
        edge='start'
        className={props.className}
        color='inherit'
        aria-label='menu'
        onClick={handleClick}>
        <MenuIcon />
      </IconButton>
      <Menu
        id='simple-menu'
        anchorEl={anchorElement}
        keepMounted
        open={Boolean(anchorElement)}
        onClose={handleClose}>
        <div style={{ textDecoration: "none" }}>
          <MenuItem component={Link} to='/profile'>
            Profile
          </MenuItem>
          <MenuItem onClick={handleClose}>My account</MenuItem>
          <MenuItem onClick={handleClose}>Logout</MenuItem>
        </div>
      </Menu>
    </div>
  );
};

export default HamburgerMenu;
