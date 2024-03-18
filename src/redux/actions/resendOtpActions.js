import * as types from "./actionTypes";
import { createResendOtpApi } from "../apis/resendOtpApi";
// resend otp actions details 
export const createResendOtpStart = (users) =>
  // console.log('users', users),
  ({
    type: types.CREATE_RESEND_OTP_START,
    payload: users,
  });
export const createResendOtpSuccess = () => ({
  type: types.CREATE_RESEND_OTP_SUCCESS,
});
export const createResendOtpError = (error) => ({
  type: types.CREATE_RESEND_OTP_ERROR,
  payload: error,
});
export const resendOtpInitiate = (user, navigate) => {
  return function (dispatch) {
    dispatch(createResendOtpStart(user));
    createResendOtpApi(user)
      .then((res) => {
        // let email = res.data?.account.email;
        // let id = res.data?.account.id;
        // let userData = { email: email, id: id };
        console.log(res);
        dispatch(createResendOtpSuccess(res));
        // if (res.status === 201) {
        //   navigate("/otp/otpverify", { state: userData });
        // }
      })
      .catch((error) => dispatch(createResendOtpError(error.message)));
  };
};
export default {
  resendOtpInitiate,
};
