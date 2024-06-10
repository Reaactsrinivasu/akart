import * as types from "./actionTypes";
import {
  updateUserAccountApi,
  updateMyProfileUserAccountApi,
} from "../apis/updateUserApi";
import { getUserAccountApi } from "../apis/getUserApi";

//loading wishlist details
export const loadUserStart = () => ({
  type: types.LOAD_USER_START,
});
export const loadUserSuccess = (data) => ({
  type: types.LOAD_USER_SUCCESS,
  payload: data,
});
export const loadUserError = (error) => ({
  type: types.LOAD_USER_ERROR,
  payload: error,
});
//update user account through signup with email id
export const updateUserStart = (userId, user) =>
  // console.log('users', users),
  ({
    type: types.UPDATE_USER_START,
    payload: [userId, user],
  });
export const updateUserSuccess = () => ({
  type: types.UPDATE_USER_SUCCESS,
});
export const updateUserError = (error) => ({
  type: types.UPDATE_USER_ERROR,
  payload: error,
});
export const updateUserInitiate = (userId,user, navigate) => {
  return function (dispatch) {
    dispatch(updateUserStart(userId,user));
    updateUserAccountApi(userId,user)
      .then((res) => {
        // let userData = res?.data;
        console.log(res);
        dispatch(updateUserSuccess(res));
        if (res.status === 200) {
            navigate("/login",);
        }
      })
      .catch((error) => dispatch(updateUserError(error.message)));
  };
};
export const getUserDetailsInitiate = (navigate) => {
  return function (dispatch) {
    dispatch(loadUserStart());
    getUserAccountApi()
      .then((res) => {
        // let userData = res?.data;
        console.log(res);
        dispatch(loadUserSuccess(res));
        if (res.status === 200) {
          navigate("/login");
        }
      })
      .catch((error) => dispatch(loadUserError(error.message)));
  };
};
export const updateMyProfileUserDetailsInitiate = (userId, user, navigate) => {
 return function (dispatch) {
   dispatch(updateUserStart(userId, user));
   updateMyProfileUserAccountApi(userId, user)
     .then((res) => {
       // let userData = res?.data;
       console.log(res);
       dispatch(updateUserSuccess(res));
     })
     .catch((error) => dispatch(updateUserError(error.message)));
 };
};
export default {
  updateUserInitiate,
  getUserDetailsInitiate,
  updateMyProfileUserDetailsInitiate,
};


