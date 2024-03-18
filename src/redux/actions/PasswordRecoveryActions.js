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
export const PasswordRecoveryInitiate = (user, navigate) => {
  return function (dispatch) {
    dispatch(createPasswordRecoveryStart(user));
    passwordRecoveryApi(user)
      .then((res) => {
        console.log('res',res);
        let email = res.data?.account.email;
        let phone_number = res.data?.account.phone_number;
        let id = res.data?.account.id;
        let userData = {};
        dispatch(createPasswordRecoverySuccess(res));
        if (res.status === 200) {
          if (email && id) {
            userData = { email: email, id: id };
            navigate("/otp/otpverifyfornewpassword", { state: userData });
          } if (phone_number && id) {
            userData = { phone_number: phone_number, id: id };
            navigate("/otp/otpverifyfornewpassword", { state: userData });
          }
        }
      })
      .catch((error) => dispatch(createPasswordRecoveryError(error.message)));
  };
};
export default {
  PasswordRecoveryInitiate,
};
