import React, { useState } from 'react';
import { Form } from 'semantic-ui-react';

const NewBlogForm = ({
  title,
  setTitle,
  content,
  setContent,
  url,
  setUrl,
  submit,
  ...props
}: any) => {
  return (
    <Form onSubmit={submit}>
      <Form.Group widths="equal">
        <Form.Input
          fluid
          label="Title"
          value={title}
          onSubmit={({ target }: any) => setTitle(target.value)}
        />
        <Form.TextArea
          label="Content"
          value={content}
          onSubmit={({ target }: any) => setContent(target.value)}
          placeholder="Blog content..."
        />
        <Form.Input
          fluid
          label="URL"
          value={url}
          onSubmit={({ target }: any) => setUrl(target.value)}
        />
        <Form.Button>Submit</Form.Button>
      </Form.Group>
    </Form>
  );
};

export default NewBlogForm;
