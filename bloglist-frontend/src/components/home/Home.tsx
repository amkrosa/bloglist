import React from 'react';
import Box from '../common/Box';
import BlogCard from '../blog/Blog/BlogCard';
import {
  Loader,
  Container,
  Grid,
  Header,
  Divider,
  Segment,
  Rail,
} from 'semantic-ui-react';
import FeedHome from '../feed';

const Home: React.FC = (props: any) => {
  console.log(props.blogsMostPopular);
  const Row = ({ blogs }: any) => {
    return (
      <>
        {blogs.map((blog: any) => (
          <Grid.Column key={blog.id} item>
            <BlogCard key={blog.id} blog={blog} />
          </Grid.Column>
        ))}
      </>
    );
  };

  return (
    <Container>
      {props.pending ? (
        <Loader />
      ) : (
        <>
          <Grid
            container
            divided
            padded
            columns="equal"
            direction="column"
            justify="center"
          >
            <Header as="h4">Most popular</Header>
            <Grid.Row>
              <Row blogs={props.blogsMostPopular} />
            </Grid.Row>
            <Header as="h4">Recently added</Header>
            <Grid.Row>
              <Row blogs={props.blogsRecentlyAdded} />
            </Grid.Row>
            <Grid.Column>
              <FeedHome />
            </Grid.Column>
          </Grid>
        </>
      )}
    </Container>
  );
};

export default Home;
