import { replaceItemById } from "../lib/helpers";

const initialState = {
  pending: false,
  blogs: [],
  error: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "ADD_BLOG":
      return { ...state, blogs: [...state.blogs, action.data] };
    case "DELETE_BLOG":
      return { ...state, blogs: state.blogs.filter(element => element.id !== action.data.id)};
    case "UPDATE_BLOG":
      return null;
    case "ADD_VOTE":
      return {
        ...state,
        blogs: replaceItemById(action.data, action.data.id, state.blogs)
      };

    case "ADD_COMMENT":
      return {
        ...state,
        blogs: replaceItemById(action.data, action.data.id, state.blogs)
      };
    case "INIT_BLOGS_PENDING":
      return { ...state, pending: true };
    case "INIT_BLOGS_SUCCESS":
      return { pending: false, blogs: action.data, error: null };
    case "INIT_BLOGS_FAILURE":
      return { ...state, pending: false, error: action.error };
    /*case "INIT_COMMENTS":
      return {...state, blogs: replaceItemById(action.data, action.data.id, state.blogs) }*/
    default:
      return state;
  }
};
