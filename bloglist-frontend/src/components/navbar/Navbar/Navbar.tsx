import React, { useState, MouseEvent } from 'react';
import {
  Menu,
  Dropdown,
  Icon,
  Responsive,
  Header,
  Button,
} from 'semantic-ui-react';
import NavbarMobile from './NavbarMobile';
import { AuthState } from '../../../store/auth/types';
import './Navbar.scss';
import { useHistory } from 'react-router-dom';

interface INavbarProps {
  auth?: AuthState;
  logout?: any;
}

const Navbar: React.FC<INavbarProps> = props => {
  let history = useHistory();

  const handleLogoutClick = () => {
    props.logout();
    history.push('/');
  };

  return (
    <>
      <Responsive
        minWidth={500}
        as={Menu}
        size="large"
        secondary
        className="navbar"
      >
        <Menu.Item name="/" content="Home" link href="/bloglist" />
        <Menu.Item name="/blogs" content="Blogs" link href="/bloglist/blogs" />
        {props.auth?.token ? (
          <>
            <Menu.Item
              name="/profile"
              content="Profile"
              link
              href="/bloglist/profile"
            />
            <Menu.Item name="/new" content="New" link href="/bloglist/new" />
          </>
        ) : null}
        <Menu.Menu position="right">
          {props.auth?.token ? (
            <>
              <Menu.Item>
                <Header as="h4">Logged in as {props.auth.name}</Header>
              </Menu.Item>
              <Menu.Item
                name="logout"
                active={true}
                onClick={handleLogoutClick}
              />
            </>
          ) : (
            <Button.Group>
              <Menu.Item>
                <Button.Group>
                  <Button positive as="a" href="./register">
                    Signup
                  </Button>
                  <Button.Or />
                  <Button color="blue" as="a" href="./login">
                    Login
                  </Button>
                </Button.Group>
              </Menu.Item>
            </Button.Group>
          )}
        </Menu.Menu>
      </Responsive>
      <Responsive maxWidth={499} as={Menu}>
        <NavbarMobile handleLogout={handleLogoutClick} />
      </Responsive>
    </>
  );
};

export default Navbar;
