import React from 'react';
import SingleComment from './SingleComment';
import { generateId } from '../../../lib/helpers';
import CommentsNew from './CommentsNew';

const Comments = ({ comments }: any) => {
  const user: any = window.localStorage.getItem('loggedUser') ?? '';
  const parsedUser: any = JSON.parse(user);
  const renderComments = () =>
    comments.map((comment: any) => (
      <Comments.Single
        key={generateId()}
        comment={comment}
        user={parsedUser.name}
      ></Comments.Single>
    ));
  return (
    <>
      {renderComments()}
      <Comments.New />
    </>
  );
};

Comments.Single = SingleComment;
Comments.New = CommentsNew;

export default Comments;
