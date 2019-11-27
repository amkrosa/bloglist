import blogService from '../../services/blogs';
import { ThunkAction, ThunkDispatch } from 'redux-thunk';
import { AnyAction } from 'redux';
import { History } from 'history';
import { BlogState } from './types';
import { Blog } from '../../common/types';
//import { ThunkAction } from ('redux-thunk')

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
    history.push(`/blogs/${blog.id}`);
  };
};

export const deleteBlog = (
  id: String,
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
    await blogService.update(blog.id, newObject);
    dispatch({
      type: 'ADD_VOTE',
      data: newObject,
    });
  };
};

export const addComment = (
  blog: Blog,
  comment: Comment,
): ThunkAction<Promise<void>, {}, {}, AnyAction> => {
  return async (dispatch: ThunkDispatch<{}, {}, AnyAction>): Promise<void> => {
    const newComment = await blogService.comment(blog.id, comment);
    const newBlog = { ...blog, comments: blog.comments.concat(newComment) };
    dispatch({
      type: 'ADD_COMMENT',
      data: newBlog,
    });
  };
};

export const initializeBlogs = (): ThunkAction<
  Promise<void>,
  {},
  {},
  AnyAction
> => {
  return async (dispatch: ThunkDispatch<{}, {}, AnyAction>): Promise<void> => {
    dispatch({
      type: 'INIT_BLOGS_PENDING',
    });
    try {
      const blogs = await blogService.getAll();
      dispatch({
        type: 'INIT_BLOGS_SUCCESS',
        data: blogs,
      });
    } catch (e) {
      dispatch({
        type: 'INIT_BLOGS_FAILURE',
        error: e,
      });
    }
  };
};

//selectors

export const getBlogById = (state: any, id: string) =>
  state.blogs.filter((blog: Blog) => blog.id === id)[0];

export const getBlogsMostPopular = (state: any, n: number) => {
  return state.blogs.blogs
    .sort((a: Blog, b: Blog) => a.likes - b.likes)
    .reverse()
    .slice(0, n);
};

export const getBlogsRecentlyAdded = (state: any, n: number) => {
  return state.blogs.blogs.reverse().slice(0, n);
};
