import React from 'react';
import { withRouter } from 'react-router-dom';
import { Card, Icon } from 'semantic-ui-react';
import '../styles.scss';

const BlogCard = ({ blog, history }: any) => {
  return (
    <Card
      className="blog card"
      onClick={() => history.push(`/blogs/${blog.id}`, blog.id)}
    >
      <Card.Content>
        <Card.Header content={blog.title} />
        <Card.Meta content={blog.author} />
        <Card.Description content={blog.description} />
      </Card.Content>
      <Card.Content extra>
        <p>
          <Icon name="like" />
          {blog.likes} likes
        </p>
        <Icon name="comments" />
        {blog.comments.length} comments
      </Card.Content>
    </Card>
  );
};

export default withRouter(BlogCard);
