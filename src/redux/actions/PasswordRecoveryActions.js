import * as types from "./actionTypes";
import { passwordRecoveryApi } from "../apis/PasswordRecoveryApi";
// resend otp actions details
export const createPasswordRecoveryStart = (users) =>
  // console.log('users', users),
  ({
    type: types.CREATE_PASSWORD_RECOVERY_START,
    payload: users,
  });
export const createPasswordRecoverySuccess = () => ({
  type: types.CREATE_PASSWORD_RECOVERY_SUCCESS,
});
export const createPasswordRecoveryError = (error) => ({
  type: types.CREATE_PASSWORD_RECOVERY_ERROR,
  payload: error,
});
export const passwordRecoveryForEmailInitiate = (user, navigate) => {
  return function (dispatch) {
    dispatch(createPasswordRecoveryStart(user));
    passwordRecoveryApi(user)
      .then((res) => {
        console.log('res',res);
        let id = res.data?.account.id;
        let email = res.data?.account.email;
        let userData = { email: email, id: id };
        dispatch(createPasswordRecoverySuccess(res));
        if (res.status === 200) {
          navigate("/otp/otpverifyfornewpassword", { state: userData });
        }
      })
      .catch((error) => dispatch(createPasswordRecoveryError(error.message)));
  };
};
export const passwordRecoveryForMobileInitiate = (user, navigate) => {
  return function (dispatch) {
    dispatch(createPasswordRecoveryStart(user));
    passwordRecoveryApi(user)
      .then((res) => {
        console.log('res',res);
        let id = res.data?.account.id;
        let phone_number = res.data?.account.phone_number;
        let userData = { phone_number: phone_number, id: id };
        dispatch(createPasswordRecoverySuccess(res));
        if (res.status === 200) {
          navigate("/otp/otpverifyfornewpassword", { state: userData });
        }
      })
      .catch((error) => dispatch(createPasswordRecoveryError(error.message)));
  };
};
export default {
  passwordRecoveryForEmailInitiate,
  passwordRecoveryForMobileInitiate,
};
