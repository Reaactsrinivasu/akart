import * as types from "./actionTypes";
import { createMobileLoginApi } from "../apis/mobileLoginApi";
import { useLocation, useNavigate } from "react-router-dom";
//post Login with email id
export const createLoginWithMobileStart = (users) =>
  // console.log('users', users),
  ({
    type: types.LOGIN_WITH_MOBILE_NUMBER_START,
    payload: users,
  });
export const createLoginWithMobileSuccess = () => ({
  type: types.LOGIN_WITH_MOBILE_NUMBER_SUCCESS,
});
export const createLoginWithMobileError = (error) => ({
  type: types.LOGIN_WITH_MOBILE_NUMBER_ERROR,
  payload: error,
});
export const loginWithMobileInitiate = (user, navigate) => {
  console.log("user in mobile actionss", user);
  return function (dispatch) {
    dispatch(createLoginWithMobileStart(user));
    createMobileLoginApi(user)
      .then((res) => {
       console.log(res);
       console.log("res in api", res.status);
        const token = res?.data.token;
       console.log("res token", token);
        localStorage.setItem("token", token);
       dispatch(createLoginWithMobileSuccess(res));
       if (res.status === 200) {
        //  navigate("/welcomepage");
         navigate("/");
       }
      })
      .catch((error) => dispatch(createLoginWithMobileError(error.message)));
  };
};
export default {
  loginWithMobileInitiate,
};
