import React from 'react';
import FeedEvent from './FeedEvent';
import { Feed } from 'semantic-ui-react';

const FeedHome = () => {
  return (
    <Feed>
      <FeedEvent />
      <FeedEvent />
      <FeedEvent />
    </Feed>
  );
};

export default FeedHome;
