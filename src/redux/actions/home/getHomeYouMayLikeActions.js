
import { loadHomeYouMayLikeDataApi } from "../../apis/home/getHomeYouMayLikeApi";
import * as types from "../actionTypes";

//loading  all users details
export const loadYouMayLikeDataStart = () => ({
  type: types.LOAD_HOME_YOUMAYLIKE_DATA_START,
});
export const loadYouMayLikeDataSuccess = (data) => {
  const action = {
    type: types.LOAD_HOME_YOUMAYLIKE_DATA_SUCCESS,
    payload: data,
  };
  console.log("data:", data); // Log the action
  return action;
};
export const loadYouMayLikeDataError = (error) => ({
  type: types.LOAD_HOME_YOUMAYLIKE_DATA_ERROR,
  payload: error,
});
export const loadHomeYouMayLikeDataInitiate = (user, navigate) => {
  return function (dispatch) {
    dispatch(loadYouMayLikeDataStart());
      loadHomeYouMayLikeDataApi()
      .then((res) => {
        console.log("res", res);
        dispatch(loadYouMayLikeDataSuccess(res));
      })
      .catch((error) => dispatch(loadYouMayLikeDataError(error.message)));
  };
};
export default {
  loadHomeYouMayLikeDataInitiate,
};
