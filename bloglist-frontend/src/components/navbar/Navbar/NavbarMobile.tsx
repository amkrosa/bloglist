import React from 'react';
import { Menu, Dropdown, Icon } from 'semantic-ui-react';

const NavbarMobile = ({ handleLogout }: any) => {
  return (
    <Dropdown item icon="bars" simple>
      <Dropdown.Menu>
        <Dropdown.Item link href="/bloglist">
          Home
        </Dropdown.Item>
        <Dropdown.Item link href="/bloglist/blogs">
          Blogs
        </Dropdown.Item>
        <Dropdown.Item link href="/bloglist/profile">
          Profile
        </Dropdown.Item>
        <Dropdown.Item link href="/bloglist/new">
          New
        </Dropdown.Item>
        <Dropdown.Divider />
        <Dropdown.Item onClick={handleLogout}>Logout</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default NavbarMobile;
