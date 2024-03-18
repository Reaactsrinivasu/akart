import * as types from "./actionTypes";
import { verityOtpWithMobileApi } from "../apis/otpVerityWithMobiledApi";
import { useLocation, useNavigate } from "react-router-dom";
//post signup with email id
export const verifyOtpWithMobileStart = (users) =>
  // console.log('users', users),
  ({
    type: types.VERIFY_OTP_USING_MOBILE_NUMBER_START,
    payload: users,
  });
export const verifyOtpWithMobileSuccess = () => ({
  type: types.VERIFY_OTP_USING_MOBILE_NUMBER_SUCCESS,
});
export const verifyOtpWithMobileError = (error) => ({
  type: types.VERIFY_OTP_USING_MOBILE_NUMBER_ERROR,
  payload: error,
});
export const verifyOtpWithMobileInitiate = (user, navigate) => {
  console.log("userin otpverify", user);
  return function (dispatch) {
    dispatch(verifyOtpWithMobileStart(user));
    verityOtpWithMobileApi(user)
      .then((res) => {
        let mobile = res.data?.account.phone_number;
        let id = res.data?.account.id;
        let userData = { phone_number: mobile, id: id };
        console.log(res);
        dispatch(verifyOtpWithMobileSuccess(res));
        if (res.status === 200) {
          navigate("/register", { state: userData });
        }
      })
      .catch((error) => dispatch(verifyOtpWithMobileError(error.message)));
  };
};
export default {
  verifyOtpWithMobileInitiate,
};
