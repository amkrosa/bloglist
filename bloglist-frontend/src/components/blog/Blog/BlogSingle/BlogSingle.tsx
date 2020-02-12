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

  const formattedDate = new Date(Date.parse(blog.date)).toUTCString();

  return (
    <Grid verticalAlign="middle" centered textAlign="center">
      <Grid.Column className="blog single">
        {full ? (
          <>
            <Header as="h2">
              {blog.title}
              <Header.Subheader>{blog.author}</Header.Subheader>
              <Header.Subheader>{formattedDate}</Header.Subheader>
              <Header as="h4">
                <em>{blog.description}</em>
              </Header>
            </Header>
            <Container text className="blog text" textAlign="justified">
              {blog.content}
            </Container>
            {currentUser?.token ? (
              <Icon
                onClick={() => props.addVote(blog)}
                name="like"
                className="like"
              />
            ) : (
              <Icon name="like" className="like" />
            )}
            {blog.likes} likes
            {currentUser?.username === blog.user.username ? (
              <Icon
                onClick={() => {
                  props.deleteBlog(blog.id);
                  history.push(`/blogs`);
                }}
                name="delete"
                className="delete"
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
