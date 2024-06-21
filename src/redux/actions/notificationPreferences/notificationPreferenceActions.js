import * as types from "../actionTypes";
import {
  loadNotificationPreferencesApi,
  updateNotificationPreferencesApi,
} from "../../apis/notificationPreferences/notificationPreferenceApi";

export const loadNotificationPreferenceStart = () => ({
  type: types.LOAD_NOTIFICATION_PREFERENCES_START,
});
export const loadNotificationPreferenceSuccess = (data) => ({
  type: types.LOAD_NOTIFICATION_PREFERENCES_SUCCESS,
  payload: data,
});
export const loadNotificationPreferenceError = (error) => ({
  type: types.LOAD_NOTIFICATION_PREFERENCES_ERROR,
  payload: error,
});

export const updateNotificationPreferenceStart = (id, userInfo) => ({
  type: types.UPDATE_NOTIFICATION_PREFERENCES_START,
  payload: [id, userInfo],
});
export const updateNotificationPreferenceSuccess = () => ({
  type: types.UPDATE_NOTIFICATION_PREFERENCES_SUCCESS,
});
export const updateNotificationPreferenceError = (error) => ({
  type: types.UPDATE_NOTIFICATION_PREFERENCES_ERROR,
  payload: error,
});

export const loadNotificationPreferenceInitiate = (user, navigate) => {
  return function (dispatch) {
    dispatch(loadNotificationPreferenceStart(user));
    loadNotificationPreferencesApi()
      .then((res) => {
        console.log("res", res);
        dispatch(loadNotificationPreferenceSuccess(res));
      })
      .catch((error) =>
        dispatch(loadNotificationPreferenceError(error.message))
      );
  };
};

export const updateNotificationPreferenceInitiate = (userId, user) => {
  return function (dispatch) {
    dispatch(updateNotificationPreferenceStart(userId, user));
    updateNotificationPreferencesApi(userId, user)
      .then((res) => {
        // let userData = res?.data;
        console.log(res);
        dispatch(updateNotificationPreferenceSuccess(res));
      })
      .catch((error) =>
        dispatch(updateNotificationPreferenceSuccess(error.message))
      );
  };
};
export default {
  loadNotificationPreferenceInitiate,
  updateNotificationPreferenceInitiate,
};
