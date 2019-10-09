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
      return state.blogs.filter(element => element.id !== action.data.id);
    case "UPDATE_BLOG":
      return null;
    case "ADD_VOTE":
      const index = state.blogs.findIndex(item => item.id === action.data.id);
      return {
        ...state,
        blogs: [
          ...state.blogs.slice(0, index),
          action.data,
          ...state.blogs.slice(index + 1)
        ]
      };
    case "ADD_COMMENT":
      const indexOf = state.blogs.findIndex(item => item.id === action.data.id);
      return {
        ...state,
        blogs: [
          ...state.blogs.slice(0, indexOf),
          action.data,
          ...state.blogs.slice(indexOf + 1)
        ]
      };
    case "INIT_BLOGS_PENDING":
      return { ...state, pending: true };
    case "INIT_BLOGS_SUCCESS":
      return { pending: false, blogs: action.data, error: null };
    case "INIT_BLOGS_FAILURE":
      return { ...state, pending: false, error: action.error };
    default:
      return state;
  }
};
