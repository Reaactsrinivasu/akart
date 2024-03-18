import * as types from "./actionTypes";
import { createMobileSignupApi } from "../apis/mobileSignupApi";
import { useLocation, useNavigate } from "react-router-dom";
//post signup with email id
export const createSignupWithMobileStart = (users) =>
  // console.log('users', users),
  ({
    type: types.SIGNUP_USING_MOBILE_NUMBER_START,
    payload: users,
  });
export const createSignupWithMobileSuccess = () => ({
  type: types.SIGNUP_USING_MOBILE_NUMBER_SUCCESS,
});
export const createSignupWithMobileError = (error) => ({
  type: types.SIGNUP_USING_MOBILE_NUMBER_ERROR,
  payload: error,
});
export const signupWithMobileInitiate = (user, navigate) => {

  console.log("user in mobile actionss", user);
  return function (dispatch) {
    dispatch(createSignupWithMobileStart(user));
    createMobileSignupApi(user)
    .then((res) => {
      console.log(res);
      let phone_number = res.data?.account.phone_number;
      let id = res.data?.account.id;
      let userData = { phone_number: phone_number, id: id };
      dispatch(createSignupWithMobileSuccess(res));
      if (res.status === 200) {
        navigate("/otp/otpverify",{state:userData});
      }
    })
    .catch((error) => dispatch(createSignupWithMobileError(error.message)));
  };
};
export default {
  signupWithMobileInitiate,
};
