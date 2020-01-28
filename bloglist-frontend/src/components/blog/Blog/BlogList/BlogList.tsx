import React, { useEffect } from 'react';
import BlogCard from '../BlogCard';
import { Link } from 'react-router-dom';
import { Container, Loader, Grid } from 'semantic-ui-react';
import './styles.scss';

const BlogList = (props: any) => {
  const blogsComponents = () => {
    const blogs = props.blogs.map((blog: any) => (
      <Grid.Column>
        <BlogCard key={blog.id} blog={blog} />
      </Grid.Column>
    ));
    return <>{blogs}</>;
  };

  const delaySpinner = () => {
    const id = setTimeout(
      () => (
        <Container className="spinnerWrapper">
          <Loader />
        </Container>
      ),
      200,
    );
  };

  return <>{props.pending ? delaySpinner() : blogsComponents()}</>;
};

export default BlogList;
