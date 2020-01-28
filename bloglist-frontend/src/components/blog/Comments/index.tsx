import React from 'react';
import SingleComment from './SingleComment';
import { generateId } from '../../../lib/helpers';
import CommentsNew from './CommentsNew';

const Comments = ({ comments }: any) => {
  const user: any = window.localStorage.getItem('loggedUser') ?? '';
  let parsedUser: any;
  if (user) parsedUser = JSON.parse(user);
  const renderComments = () =>
    comments.map((comment: any) => (
      <Comments.Single key={generateId()} comment={comment}></Comments.Single>
    ));
  return (
    <>
      {renderComments()}
      {parsedUser ? <Comments.New /> : null}
    </>
  );
};

Comments.Single = SingleComment;
Comments.New = CommentsNew;

export default Comments;
