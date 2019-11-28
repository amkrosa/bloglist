import { ClearNotificationAction, SetNotificationAction } from "./types";
import { ThunkAction } from "redux-thunk";
import { AnyAction } from "redux";

export const setNotification = (
  content: string,
  category: string
): SetNotificationAction => {
  return {
    type: "SET_NOTIFICATION",
    data: {
      status: true,
      content,
      category
    }
  };
};
export const clearNotification = (): ClearNotificationAction => {
  return {
    type: "CLEAR_NOTIFICATION",
    data: {
      status: false,
      content: "",
      category: ""
    }
  };
};

export const setTimedNotification = (
  content: string,
  category: string,
  time: number
): ThunkAction<Promise<void>, {}, {}, AnyAction> => {
  return async dispatch => {
    setNotification(content, category);
    setTimeout(() => clearNotification, time * 1000);
  };
};
