import React, { useEffect } from 'react';
import BlogCard from '../BlogCard';
import { Link } from 'react-router-dom';
import { Container, Loader, Grid } from 'semantic-ui-react';
import './styles.scss';
import { generateId } from '../../../../lib/helpers';

const BlogList = (props: any) => {
  const blogsComponents = () => {
    const blogs = props.blogs
      .map((blog: any) => (
        <Grid.Row key={generateId()}>
          <BlogCard key={blog.id} blog={blog} />
        </Grid.Row>
      ))
      .reverse();
    return <>{blogs}</>;
  };

  return (
    <Grid centered verticalAlign="middle" columns={1}>
      <Grid.Column width={10}>
        {props.pending ? (
          <Loader className="spinner" active />
        ) : (
          blogsComponents()
        )}
      </Grid.Column>
    </Grid>
  );
};

export default BlogList;
