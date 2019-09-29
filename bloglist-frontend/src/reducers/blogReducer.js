const initialState = [];

export default (state = initialState, action) => {
  switch (action.type) {
    case "ADD_BLOG":
      return [...state, action.data];
    case "DELETE_BLOG":
      return state.filter(element=>element.id!==action.data.id);
    case "UPDATE_BLOG":
      return null;
    case "ADD_VOTE":
      const index = state.findIndex(item => item.id === action.data.id);
      return [
            ...state.slice(0, index),
            action.data,
            ...state.slice(index + 1)
          ];
    case "INIT_BLOGS":
      return action.data
    default:
      return state;
  }
};
