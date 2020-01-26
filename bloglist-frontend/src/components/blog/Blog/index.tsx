import React from 'react';
import BlogCard from './BlogCard';
import BlogList from './BlogList';
import NewBlogForm from './BlogNew';
import BlogSingle from './BlogSingle';
import { Grid } from 'semantic-ui-react';

interface BlogComposition {
  Card: React.FC<any> & any;
  List: React.FC<any>;
  New: React.FC<any> & any;
  Single: React.FC<any> & any;
}

const Blog: React.FC & BlogComposition = (props: any) => {
  return (
    <Grid container columns="equal" direction="row" justify="center">
      <Grid.Row columns={3}>
        <Blog.List />
      </Grid.Row>
    </Grid>
  );
};

Blog.Card = BlogCard;
Blog.List = BlogList;
Blog.New = NewBlogForm;
Blog.Single = BlogSingle;

export default Blog;
