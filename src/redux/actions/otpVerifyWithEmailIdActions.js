import * as types from "./actionTypes";
import { verityOtpWithEmailIdApi } from "../apis/otpVerityWithEmailIdApi";
import { useLocation, useNavigate } from "react-router-dom";
//post signup with email id
export const verifyOtpWithEmailIdStart = (users) =>
  // console.log('users', users),
  ({
    type: types.VERIFY_OTP_USING_EMAILID_START,
    payload: users,
  });
export const verifyOtpWithEmailIdSuccess = () => ({
  type: types.VERIFY_OTP_USING_EMAILID_SUCCESS,
});
export const verifyOtpWithEmailIdError = (error) => ({
  type: types.VERIFY_OTP_USING_EMAILID_ERROR,
  payload: error,
});
export const verifyOtpWithEmailInitiate = (user, navigate) => {
  console.log('userin otpverify', user);
  return function (dispatch) {
    dispatch(verifyOtpWithEmailIdStart(user));
    verityOtpWithEmailIdApi(user)
      .then((res) => {
        
        let email = res.data?.account.email;
        let id = res.data?.account.id;
        let userData = { email: email, id: id };
        console.log(res);
        dispatch(verifyOtpWithEmailIdSuccess(res));
        if (res.status === 200) {
          navigate("/register", { state: userData });
        }
      })
      .catch((error) => dispatch(verifyOtpWithEmailIdError(error.message)));
  };
};
export default {
  verifyOtpWithEmailInitiate,
};
