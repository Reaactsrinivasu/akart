import * as types from "../actionTypes";
import {
  createFCMTokenApi,
} from "../../apis/notifications/createFCMTokenApi";
//adding fcm token 
export const createFCMTokenStart = (users) => {
  return {
    type: types.CREATE_FCM_TOKEN_START,
    payload: users,
  };
};
export const createFCMTokenSuccess = () => ({
  type: types.CREATE_FCM_TOKEN_SUCCESS,
});
export const createFCMTokenError = (error) => ({
  type: types.CREATE_FCM_TOKEN_ERROR,
  payload: error,
});
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

export const createFCMTokenInitiate = (user, navigate) => {
  return function (dispatch) {
    dispatch(createFCMTokenStart(user));
    createFCMTokenApi(user)
      .then((res) => {
        console.log("res", res);
        dispatch(createFCMTokenSuccess(res));
      })
      .catch((error) => dispatch(createFCMTokenError(error.message)));
  };
};

export default {
  createFCMTokenInitiate,
};
