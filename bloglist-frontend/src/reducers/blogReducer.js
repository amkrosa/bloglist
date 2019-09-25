const initialState = [];

export default (state = initialState, action) => {
  switch (action.type) {
    case "ADD_BLOG":
      return null;
    case "DELETE_BLOG":
      return null;
    case "UPDATE_BLOG":
      return null;
    case "ADD_VOTE":
      return null;
    default:
      return state;
  }
};
