import blogService from '../../services/blogs';
import { ThunkAction, ThunkDispatch } from 'redux-thunk';
import { AnyAction } from 'redux';
import { History } from 'history';
import {
  BlogState,
  INIT_BLOGS_PENDING,
  INIT_BLOGS_SUCCESS,
  INIT_BLOGS_FAILURE,
  ADD_COMMENT,
} from './types';
import { Blog } from '../../common/types';

export const addBlog = (
  content: any,
  history: History,
): ThunkAction<Promise<void>, {}, {}, AnyAction> => {
  return async (dispatch: ThunkDispatch<{}, {}, AnyAction>): Promise<void> => {
    const blog = await blogService.create(content);
    dispatch({
      type: 'ADD_BLOG',
      data: blog,
    });
    history.push(`/blogs/${blog.id}`, blog.id);
  };
};

export const deleteBlog = (
  id: string,
): ThunkAction<Promise<void>, {}, {}, AnyAction> => {
  return async (dispatch: ThunkDispatch<{}, {}, AnyAction>): Promise<void> => {
    await blogService.remove(id);
    dispatch({
      type: 'DELETE_BLOG',
      data: { id },
    });
  };
};

export const updateBlog = (id: String) => {};

export const addVote = (
  blog: Blog,
): ThunkAction<Promise<void>, {}, {}, AnyAction> => {
  return async (dispatch: ThunkDispatch<{}, {}, AnyAction>): Promise<void> => {
    const newObject = {
      ...blog,
      likes: blog.likes + 1,
    };
    await blogService.update(newObject, blog.id ? blog.id : '');
    dispatch({
      type: 'ADD_VOTE',
      data: newObject,
    });
  };
};

export const addComment = (
  blog: Blog,
  comment: string,
): ThunkAction<Promise<void>, {}, {}, AnyAction> => {
  return async (dispatch: ThunkDispatch<{}, {}, AnyAction>): Promise<void> => {
    const newComment = await blogService.comment(
      comment,
      blog.id ? blog.id : '',
    );
    const newBlog = { ...blog, comments: blog?.comments?.concat(newComment) };
    dispatch({
      type: ADD_COMMENT,
      data: newBlog,
    });
  };
};

/*ThunkAction<
  Promise<void>,
  {},
  {},
  AnyAction
>*/

export const initializeBlogs = (): any => {
  return async (dispatch: any): Promise<any> => {
    dispatch({
      type: INIT_BLOGS_PENDING,
    });
    try {
      const blogs = await blogService.getAll();
      dispatch({
        type: INIT_BLOGS_SUCCESS,
        data: blogs,
      });
    } catch (e) {
      dispatch({
        type: INIT_BLOGS_FAILURE,
        error: e,
      });
    }
  };
};

//selectors

export const getBlogById = (state: any, id: string) =>
  state.blogs.filter((blog: Blog) => blog.id === id)[0];

export const getBlogsMostPopular = (state: any, n: number) => {
  const returnArray = [...state.blogs.blogs];
  return returnArray
    .sort((a: Blog, b: Blog) => a.likes - b.likes)
    .reverse()
    .slice(0, n);
};

export const getBlogsRecentlyAdded = (state: any, n: number) => {
  const returnArray = [...state.blogs.blogs];
  return returnArray.reverse().slice(0, n);
};
