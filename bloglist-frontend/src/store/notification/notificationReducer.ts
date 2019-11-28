import {
  NotificationActions,
  NotificationState,
  SET_NOTIFICATION,
  CLEAR_NOTIFICATION
} from "./types";

const initialState: NotificationState = {
  status: false,
  content: "",
  category: ""
};

export default (state = initialState, action: NotificationActions) => {
  switch (action.type) {
    case SET_NOTIFICATION:
      return action.data;
    case CLEAR_NOTIFICATION:
      return action.data;
    default:
      return state;
  }
};
