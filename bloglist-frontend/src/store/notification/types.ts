export const SET_NOTIFICATION = "SET_NOTIFICATION";
export const CLEAR_NOTIFICATION = "CLEAR_NOTIFICATION";

export interface NotificationState {
  status: boolean;
  content: string;
  category: string;
}

export interface SetNotificationAction {
  type: typeof SET_NOTIFICATION;
  data: {
    status: boolean;
    content: string;
    category: string;
  };
}

export interface ClearNotificationAction {
  type: typeof CLEAR_NOTIFICATION;
  data: {
    status: false;
    content: "";
    category: "";
  };
}

export type NotificationActions =
  | SetNotificationAction
  | ClearNotificationAction;
