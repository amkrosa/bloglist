import React, { useState } from 'react';
import { Form, Grid, Header, Label } from 'semantic-ui-react';
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

const NewBlogForm = ({
  title,
  setTitle,
  content,
  setContent,
  description,
  setDescription,
  submit,
  ...props
}: any) => {
  return (
    <Grid style={{ height: '80vh' }} verticalAlign="middle" textAlign="center">
      <Grid.Column style={{ maxWidth: 450 }}>
        <Header as="h2" color="blue" textAlign="center">
          Add new blog
        </Header>
        <Form onSubmit={submit}>
          <Form.Input
            fluid
            label="Title"
            value={title}
            onChange={({ target }: any) => setTitle(target.value)}
          />
          <Form.Input
            fluid
            label="Description"
            value={description}
            onChange={({ target }: any) => setDescription(target.value)}
          />
          <Form.TextArea
            label="Content"
            value={content}
            onChange={({ target }: any) => setContent(target.value)}
            placeholder="Blog content..."
          />
          <Form.Button>Submit</Form.Button>
        </Form>
      </Grid.Column>
    </Grid>
  );
};

export default NewBlogForm;
