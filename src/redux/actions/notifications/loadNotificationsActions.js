import * as types from "../actionTypes";
import { loadNotificationApi } from "../../apis/notifications/loadNotificationsApi";

export const loadNotificationsDataStart = () => ({
  type: types.LOAD_NOTIFICATIONS_START,
});
export const loadNotificationsDataSuccess = (data) => ({
  type: types.LOAD_NOTIFICATIONS_SUCCESS,
  payload: data,
});
export const loadNotificationsDataError = (error) => ({
  type: types.LOAD_NOTIFICATIONS_ERROR,
  payload: error,
});

export const LoadNotificationsInitiate = (user, navigate) => {
  return function (dispatch) {
    dispatch(loadNotificationsDataStart(user));
    loadNotificationApi()
      .then((res) => {
        console.log("res", res);
        dispatch(loadNotificationsDataSuccess(res));
      })
      .catch((error) => dispatch(loadNotificationsDataError(error.message)));
  };
};
export default {
  LoadNotificationsInitiate,
};
