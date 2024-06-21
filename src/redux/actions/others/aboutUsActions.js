import * as types from "../actionTypes";
import { loadAboutUsApi } from "../../apis/others/aboutUsApi";

export const loadAboutUsStart = () => ({
  type: types.LOAD_ABOUT_US_START,
});
export const loadAboutUsSuccess = (data) => ({
  type: types.LOAD_ABOUT_US_SUCCESS,
  payload: data,
});
export const loadAboutUsError = (error) => ({
  type: types.LOAD_ABOUT_US_ERROR,
  payload: error,
});

export const loadAboutUsInitiate = (user, navigate) => {
  return function (dispatch) {
    dispatch(loadAboutUsStart());
    loadAboutUsApi()
      .then((res) => {
        console.log("res", res);
        dispatch(loadAboutUsSuccess(res));
      })
      .catch((error) => dispatch(loadAboutUsError(error.message)));
  };
};
export default {
  loadAboutUsInitiate,
};
