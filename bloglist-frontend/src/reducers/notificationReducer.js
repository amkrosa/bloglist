const initialState = {
  status: "",
  content: "",
  type: ""
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "SET_NOTIFICATION":
      return null;
    case "CLEAR_NOTIFICATION":
      return null;
    default:
      return state;
  }
};
