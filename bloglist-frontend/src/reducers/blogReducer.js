const initialState = [];

export default (state = initialState, action) => {
  switch (action.type) {
    case "ADD_BLOG":
      return [...state, action.data];
    case "DELETE_BLOG":
      return null;
    case "UPDATE_BLOG":
      return null;
    case "ADD_VOTE":
      return null;
    case "INIT_BLOGS":
      return action.data
    default:
      return state;
  }
};
