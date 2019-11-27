import { replaceItemById } from '../../lib/helpers';
import {
  BlogState,
  ADD_BLOG,
  DELETE_BLOG,
  UPDATE_BLOG,
  ADD_VOTE,
  ADD_COMMENT,
  INIT_BLOGS_SUCCESS,
  INIT_BLOGS_PENDING,
  INIT_BLOGS_FAILURE,
  BlogActionsType,
} from './types';

const initialState: BlogState = {
  pending: false,
  error: null,
  blogs: [],
};

export default (state = initialState, action: BlogActionsType) => {
  switch (action.type) {
    case ADD_BLOG:
      return { ...state, blogs: [...state.blogs, action.data] };
    case DELETE_BLOG:
      return {
        ...state,
        blogs: state.blogs.filter(element => element.id !== action.data.id),
      };
    case UPDATE_BLOG:
      return null;
    case ADD_VOTE:
      return {
        ...state,
        blogs: replaceItemById(action.data, action.data.id, state.blogs),
      };

    case ADD_COMMENT:
      return {
        ...state,
        blogs: replaceItemById(action.data, action.data.id, state.blogs),
      };
    case INIT_BLOGS_PENDING:
      return { ...state, pending: true };
    case INIT_BLOGS_SUCCESS:
      return { pending: false, blogs: action.data, error: null };
    case INIT_BLOGS_FAILURE:
      return { ...state, pending: false, error: action.error };
    default:
      return state;
  }
};
