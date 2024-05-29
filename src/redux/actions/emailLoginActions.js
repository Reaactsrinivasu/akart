import * as types from "./actionTypes";
import { createEmailLoginApi } from "../apis/emailLoginApi";
import { useLocation, useNavigate } from "react-router-dom";
//post Login with email id
export const createLoginWithEmailIdStart = (users) =>
  // console.log('users', users),
  ({
    type: types.LOGIN_WITH_EMAILID_START,
    payload: users,
  });
export const createLoginWithEmailIdSuccess = () => ({
  type: types.LOGIN_WITH_EMAILID_SUCCESS,
});
export const createLoginWithEmailIdError = (error) => ({
  type: types.LOGIN_WITH_EMAILID_ERROR,
  payload: error,
});
export const loginWithEmailInitiate = (user, navigate) => {
  return function (dispatch) {
    dispatch(createLoginWithEmailIdStart(user));
    createEmailLoginApi(user)
      .then((res) => {
        // let email = res.data?.account.email;
        // let id = res.data?.account.id;
        // let userData = { email: email, id: id };
        console.log(res);
        console.log("res in api", res.status);
        const token = res?.data.token;
        console.log("res token", token);
        localStorage.setItem("token", token);
        dispatch(createLoginWithEmailIdSuccess(res));
        if (res.status === 200) {
          // navigate("/welcomepage");
          navigate("/");
        }
      })
      .catch((error) => dispatch(createLoginWithEmailIdError(error.message)));
  };
};
export default {
  loginWithEmailInitiate,
};
