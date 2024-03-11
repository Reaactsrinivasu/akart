import * as types from "./actionTypes";
import { createUserApi } from "../apis/emailSignupApi";
//post signup with email id
export const createUserStart = (users) =>
  // console.log('users', users),
  ({
    type: types.CREATE_USER_START,
    payload: users,
  });
export const createUserSuccess = () => ({
  type: types.CREATE_USER_SUCCESS,
});
export const createUserError = (error) => ({
  type: types.CREATE_USER_ERROR,
  payload: error,
});
export const createUserInitiate = (user, navigate) => {
  return function (dispatch) {
    dispatch(createUserStart(user));
    createUserApi(user)
      .then((res) => {
        // let email = res.data?.account.email;
        // let id = res.data?.account.id;
        // let userData = { email: email, id: id };
        console.log(res);
        dispatch(createUserSuccess(res));
        if (res.status === 201) {
        //   navigate("/otp/otpverify", { state: userData });
        }
      })
      .catch((error) => dispatch(createUserError(error.message)));
  };
};
export default {
  signupWithEmailInitiate,
};
