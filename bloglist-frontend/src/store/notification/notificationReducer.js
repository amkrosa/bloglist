const initialState = {
  status: false,
  content: "",
  category: ""
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "SET_NOTIFICATION":
      return action.data;
    case "CLEAR_NOTIFICATION":
      return action.data;
    default:
      return state;
  }
};
