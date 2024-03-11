import * as types from "./actionTypes";
import { createEmailSignupApi } from "../apis/emailSignupApi";
import { useLocation, useNavigate } from "react-router-dom";
//post signup with email id
export const createSignupWithEmailIdStart = (users) => (
  // console.log('users', users),
  {
    type: types.SIGNUP_USING_EMAILID_START,
    payload: users,
  }
);
export const createSignupWithEmailIdSuccess = () => ({
  type: types.SIGNUP_USING_EMAILID_SUCCESS,
});
export const createSignupWithEmailIdError = (error) => ({
  type: types.SIGNUP_USING_EMAILID_ERROR,
  payload: error,
}
);
export const signupWithEmailInitiate = (user,navigate) => {
  return function (dispatch) {
    dispatch(createSignupWithEmailIdStart(user));
    createEmailSignupApi(user)
      .then((res) => {
        let email = res.data?.account.email;
        let id = res.data?.account.id;
        let userData = {email:email,id:id}
        console.log(res);
        dispatch(createSignupWithEmailIdSuccess(res));
        if (res.status === 201) {
          navigate("/otp/otpverify", { state: userData });
        }
      })
      .catch((error) => dispatch(createSignupWithEmailIdError(error.message)));
  };
};
export default {
  signupWithEmailInitiate,
};
