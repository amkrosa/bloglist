import React from 'react';
import { Comment } from 'semantic-ui-react';

const SingleComment = ({ comment, user }: any) => {
  return (
    <Comment>
      <Comment.Avatar src="/" />
      <Comment.Content>
        <Comment.Author>{user}</Comment.Author>
        <Comment.Metadata>
          <div>{comment.date}</div>
          <div>{comment.likes} likes</div>
        </Comment.Metadata>
        <Comment.Text>{comment.content}</Comment.Text>
      </Comment.Content>
    </Comment>
  );
};

export default SingleComment;
