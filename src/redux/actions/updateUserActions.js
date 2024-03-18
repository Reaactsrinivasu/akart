import * as types from "./actionTypes";
import { updateUserAccountApi } from "../apis/updateUserApi";
//post signup with email id
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
export default {
  updateUserInitiate,
};

