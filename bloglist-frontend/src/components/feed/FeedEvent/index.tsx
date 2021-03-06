import React from 'react';
import { Feed, Icon } from 'semantic-ui-react';

const FeedEvent = () => {
  return (
    <Feed.Event>
      <Feed.Label>
        <img src="" />
      </Feed.Label>
      <Feed.Content>
        <Feed.Summary>
          <Feed.User>Elliot Fu</Feed.User> added you as a friend
          <Feed.Date>1 Hour Ago</Feed.Date>
        </Feed.Summary>
        <Feed.Meta>
          <Feed.Like>
            <Icon name="like" />4 Likes
          </Feed.Like>
        </Feed.Meta>
      </Feed.Content>
    </Feed.Event>
  );
};

export default FeedEvent;
