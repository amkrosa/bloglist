import React from 'react';
import { withRouter } from 'react-router-dom';
import { Card } from 'semantic-ui-react';
import '../styles.scss';

const BlogCard = ({ blog, history }: any) => {
  return (
    <Card className="blog-card">
      <Card.Content>
        <Card.Header
          onClick={() => history.push(`/blogs/${blog.id}`, blog.id)}
          content={blog.title}
        />
        <Card.Meta content={blog.author} />
        <Card.Description content={blog.content} />
      </Card.Content>
    </Card>
  );
};

export default withRouter(BlogCard);
