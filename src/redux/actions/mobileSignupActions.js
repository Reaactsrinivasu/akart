import * as types from "./actionTypes";
//post signup with mobile number
export const createSignupWithMobileStart = (users) => ({
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
export default {
  createSignupWithMobileStart,
};
