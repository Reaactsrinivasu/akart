import * as types from "./actionTypes";
import { verityOtpForNewPasswordApi } from "../apis/otpVerityForNewPasswordApi";
import { useLocation, useNavigate } from "react-router-dom";
//post signup with email id
export const verifyOtpForNewPasswordStart = (users) =>
  // console.log('users', users),
  ({
    type: types.VERIFY_OTP_NEW_PASSWORD_START,
    payload: users,
  });
export const verifyOtpForNewPasswordSuccess = () => ({
  type: types.VERIFY_OTP_NEW_PASSWORD_SUCCESS,
});
export const verifyOtpForNewPasswordError = (error) => ({
  type: types.VERIFY_OTP_NEW_PASSWORD_ERROR,
  payload: error,
});
export const verifyOtpForNewPasswordInitiate = (user, navigate) => {
  console.log("userin otpverify", user);
  return function (dispatch) {
    dispatch(verifyOtpForNewPasswordStart(user));
    verityOtpForNewPasswordApi(user)
      .then((res) => {
        // let mobile = res.data?.account.phone_number;
        let id = res.data?.account.id;
        let userData = {id: id };
        console.log('res',res);
        dispatch(verifyOtpForNewPasswordSuccess(res));
        if (res.status === 200) {
          navigate("/createnewpwd", { state: userData });
        }
      })
      .catch((error) => dispatch(verifyOtpForNewPasswordError(error.message)));
  };
};
export default {
  verifyOtpForNewPasswordInitiate,
};
