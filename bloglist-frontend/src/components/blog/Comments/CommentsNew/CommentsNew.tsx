import React, { useState } from 'react';
import { Form, Input, Icon } from 'semantic-ui-react';

export default function({ comment, setComment, handleSubmit, ...props }: any) {
  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Form.TextArea
          label="Content"
          value={comment}
          onChange={({ target }: any) => setComment(target.value)}
          placeholder="Comment..."
        />
        <Form.Button type="submit">
          <Icon name="plus" onClick={handleSubmit} />
        </Form.Button>
      </Form>
    </>
  );
}
