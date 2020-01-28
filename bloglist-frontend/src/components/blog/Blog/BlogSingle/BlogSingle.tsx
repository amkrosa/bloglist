import React, { useEffect } from 'react';
import { Redirect, useHistory } from 'react-router-dom';

import {
  Grid,
  Icon,
  Container,
  Header,
  Statistic,
  Comment,
  Segment,
} from 'semantic-ui-react';
import Comments from '../../Comments';

const BlogSingle = ({ blog, full = false, currentUser, ...props }: any) => {
  let history = useHistory();

  if (!blog) {
    return <Redirect to="/" />;
  }

  return (
    <Grid verticalAlign="middle" centered>
      <Grid.Column className="blog single">
        {full ? (
          <>
            <Header as="h2">
              {blog.title}
              <Header.Subheader>{blog.author}</Header.Subheader>
            </Header>
            <Container text>{blog.content}</Container>
            <Statistic>
              <Statistic.Label>
                {currentUser.token ? (
                  <Icon
                    onClick={() => props.addVote(blog)}
                    name="thumbs up outline"
                  />
                ) : null}
              </Statistic.Label>
              <Statistic.Value as="h4">{blog.likes}</Statistic.Value>
            </Statistic>
            {currentUser.username === blog.user.username ? (
              <Icon
                onClick={() => {
                  props.deleteBlog(blog.id);
                  history.push(`/blogs`);
                }}
                name="delete"
              ></Icon>
            ) : (
              ''
            )}
            <Comment.Group>
              <Header as="h4" dividing>
                Comments
              </Header>
              <Comments comments={blog.comments} />
            </Comment.Group>
          </>
        ) : (
          <Header
            as="h5"
            onClick={() => history.push(`/blogs/${blog.id}`, blog.id)}
          >
            {blog.title}
          </Header>
        )}
      </Grid.Column>
    </Grid>
  );
};

export default BlogSingle;
