import * as types from "../actionTypes";
import {
  loadUserAddressApi,
  createUserAddressApi,
  updateUserAddressApi,
  deleteUserAddressApi,
} from "../../apis/address/userAddressDetailsApi";

//adding user address details
export const createUserAddressStart = (users) => {
  return {
    type: types.CREATE_USER_ADDRESS_START,
    payload: users,
  };
};
export const createUserAddressSuccess = () => ({
  type: types.CREATE_USER_ADDRESS_SUCCESS,
});
export const createUserAddressError = (error) => ({
  type: types.CREATE_USER_ADDRESS_ERROR,
  payload: error,
});
//loading user address details
export const loadUserAddressStart = () => ({
  type: types.LOAD_USER_ADDRESS_START,
});
export const loadUserAddressSuccess = (data) => ({
  type: types.LOAD_USER_ADDRESS_SUCCESS,
  payload: data,
});
export const loadUserAddressError = (error) => ({
  type: types.LOAD_USER_ADDRESS_ERROR,
  payload: error,
});
//deleting user addressdetails
export const deleteUserAddressStart = (userId) => ({
  type: types.DELETE_USER_ADDRESS_START,
  payload: userId,
});
export const deleteUserAddressSuccess = (userId) => ({
  type: types.DELETE_USER_ADDRESS_SUCCESS,
  payload: userId,
});
export const deleteUserAddressError = (error) => ({
  type: types.DELETE_USER_ADDRESS_ERROR,
  payload: error,
});
// updating existing user details
export const updateUserAddressStart = (id, userInfo) => ({
  type: types.UPDATE_USER_ADDRESS_START,
  payload: [id, userInfo],
});
export const updateUserAddressSuccess = () => ({
  type: types.UPDATE_USER_ADDRESS_SUCCESS,
});
export const updateUserAddressError = (error) => ({
  type: types.UPDATE_USER_ADDRESS_ERROR,
  payload: error,
});

export const createUserAddressInitiate = (user, navigate) => {
  return function (dispatch) {
    dispatch(createUserAddressStart(user));
    createUserAddressApi(user)
      .then((res) => {
        console.log("res", res);
        dispatch(createUserAddressSuccess(res));
      })
      .catch((error) => dispatch(createUserAddressError(error.message)));
  };
};
export const loadUserAddressInitiate = (user, navigate) => {
  return function (dispatch) {
    dispatch(loadUserAddressStart(user));
    loadUserAddressApi(user)
      .then((res) => {
        console.log("res", res);
        dispatch(loadUserAddressSuccess(res));
      })
      .catch((error) => dispatch(loadUserAddressError(error.message)));
  };
};
export const deleteUserAddressInitiate = (id, navigate) => {
  return function (dispatch) {
    dispatch(deleteUserAddressStart(id));
    deleteUserAddressApi(id)
      .then((res) => {
        console.log("res", res);
        dispatch(deleteUserAddressSuccess(res));
      })
      .catch((error) => dispatch(deleteUserAddressError(error.message)));
  };
};

export const updateUserAddressInitiate = (userId, user, navigate) => {
  return function (dispatch) {
    dispatch(updateUserAddressStart(userId, user));
    updateUserAddressApi(userId, user)
      .then((res) => {
        // let userData = res?.data;
        console.log(res);
        dispatch(updateUserAddressSuccess(res));
      })
      .catch((error) => dispatch(updateUserAddressSuccess(error.message)));
  };
};
export default {
  createUserAddressInitiate,
  loadUserAddressInitiate,
  deleteUserAddressInitiate,
  updateUserAddressInitiate,
};
