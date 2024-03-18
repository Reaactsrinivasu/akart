import * as types from "./actionTypes";
import { createNewPasswordApi } from "../apis/createNewPasswordApi";
// resend otp actions details
export const createNewPasswordStart = (users) =>
  // console.log('users', users),
  ({
    type: types.CREATE_NEW_PASSWORD_START,
    payload: users,
  });
export const createNewPasswordSuccess = () => ({
  type: types.CREATE_NEW_PASSWORD_SUCCESS,
});
export const createNewPasswordError = (error) => ({
  type: types.CREATE_NEW_PASSWORD_ERROR,
  payload: error,
});
export const createNewPasswordInitiate = (user, navigate) => {
  return function (dispatch) {
    dispatch(createNewPasswordStart(user));
    createNewPasswordApi(user)
      .then((res) => {
        console.log(res);
        dispatch(createNewPasswordSuccess(res));
        if (res.status === 200) {
          navigate("/login");
        }
      })
      .catch((error) => dispatch(createNewPasswordError(error.message)));
  };
};
export default {
  createNewPasswordInitiate,
};
