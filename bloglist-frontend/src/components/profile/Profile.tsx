import React, { useState } from 'react';
//import Edit from './Edit';
import Settings from './Settings';
import Statistics from './Statistics';
import { Tab, Grid } from 'semantic-ui-react';

const Profile: React.FC = props => {
  const panes = [
    {
      menuItem: 'Statistics',
      render: () => (
        <Tab.Pane attached={false}>
          <Statistics />
        </Tab.Pane>
      ),
    },
    /*{
      menuItem: 'Edit',
      render: () => (
        <Tab.Pane attached={false}>
          <Edit />
        </Tab.Pane>
      ),
    },*/
    {
      menuItem: 'Settings',
      render: () => (
        <Tab.Pane attached={false}>
          <Settings />
        </Tab.Pane>
      ),
    },
  ];

  return (
    <>
      <Tab panes={panes} menu={{ pointing: true }} />
    </>
  );
};

export default Profile;
