import { Blog } from '../../common/types';

export const ADD_BLOG = 'ADD_BLOG';
export const DELETE_BLOG = 'DELETE_BLOG';
export const UPDATE_BLOG = 'UPDATE_BLOG';
export const ADD_VOTE = 'ADD_VOTE';
export const ADD_COMMENT = 'ADD_COMMENT';

export const INIT_BLOGS_PENDING = 'INIT_BLOGS_PENDING';
export const INIT_BLOGS_SUCCESS = 'INIT_BLOGS_SUCCESS';
export const INIT_BLOGS_FAILURE = 'INIT_BLOGS_FAILURE';

interface AddBlogAction {
  type: typeof ADD_BLOG;
  data: Blog;
}

interface DeleteBlogAction {
  type: typeof DELETE_BLOG;
  data: Blog;
}

interface AddVoteAction {
  type: typeof ADD_VOTE;
  data: Blog;
}

interface UpdateBlogAction {
  type: typeof UPDATE_BLOG;
  data: Blog;
}

interface AddCommentAction {
  type: typeof ADD_COMMENT;
  data: Blog;
}

interface InitializeBlogsAction {
  type:
    | typeof INIT_BLOGS_PENDING
    | typeof INIT_BLOGS_FAILURE
    | typeof INIT_BLOGS_SUCCESS;
  data: Blog[];
  error: Error;
}

export interface BlogState {
  pending: boolean;
  blogs: Blog[];
  error: Error | null;
}

export type BlogActionsType =
  | AddBlogAction
  | UpdateBlogAction
  | DeleteBlogAction
  | AddVoteAction
  | AddCommentAction
  | InitializeBlogsAction;
