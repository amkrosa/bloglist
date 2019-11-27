const initialState = [];

export default (state = initialState, action) => {
  switch (action.type) {
    case 'INIT_USERS':
      return action.data;
    case 'DELETE_USER':
      return [state.filter(element => element.id === action.data.id)];
    case 'REGISTER_USER':
      return [...state, action.data];
    default:
      return state;
  }
};
