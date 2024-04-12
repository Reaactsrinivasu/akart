import * as types from "./actionTypes";
import { createUpdatePasswordApi } from "../apis/updatePasswordApi";
// resend otp actions details
export const createUpdatePasswordStart = (users) =>
  // console.log('users', users),
  ({
    type: types.UPDATE_PASSWORD_START,
    payload: users,
  });
export const createUpdatePasswordSuccess = () => ({
  type: types.UPDATE_PASSWORD_SUCCESS,
});
export const createUpdatePasswordError = (error) => ({
  type: types.UPDATE_PASSWORD_ERROR,
  payload: error,
});
export const createUpdatePasswordInitiate = (user, navigate) => {
  return function (dispatch) {
    dispatch(createUpdatePasswordStart(user));
    createUpdatePasswordApi(user)
      .then((res) => {
        console.log('res',res);
        dispatch(createUpdatePasswordSuccess(res));
        if (res.status === 200) {
          navigate("/welcomepage");
        }
      })
      .catch((error) => dispatch(createUpdatePasswordError(error.message)));
  };
};
export default {
  createUpdatePasswordInitiate,
};
