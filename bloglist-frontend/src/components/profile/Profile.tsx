import React, { useState } from 'react';
//import Edit from './Edit';
import Settings from './Settings';
import Statistics from './Statistics';
import { Tab, Grid, Segment, Image, Header, Loader } from 'semantic-ui-react';

const Profile = ({ user }: any) => {
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
      <Segment className="info" vertical>
        <Grid verticalAlign="middle" stackable container>
          <Grid.Row>
            <Grid.Column width={6}>
              <Image src="" bordered rounded size="medium" floated="left" />
            </Grid.Column>
            <Grid.Column width={8}>
              <Header as="h3">{user ? user.name : <Loader active />}</Header>
              <p>User description</p>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column width={14}>
              <Tab panes={panes} menu={{ pointing: true }} />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
    </>
  );
};

export default Profile;
