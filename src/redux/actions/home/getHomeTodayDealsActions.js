import { loadHomeTodayDealsDataApi } from "../../apis/home/getHomeTodayDealsApi";
import * as types from "../actionTypes";

//loading  all users details
export const loadTodayDealsDataStart = () => ({
  type: types.LOAD_HOME_TODAY_DEALS_DATA_START,
});
export const loadTodayDealsDataSuccess = (data) => {
  const action = {
    type: types.LOAD_HOME_TODAY_DEALS_DATA_SUCCESS,
    payload: data,
  };
  console.log("data:", data); // Log the action
  return action;
};
export const loadTodayDealsDataError = (error) => ({
  type: types.LOAD_HOME_TODAY_DEALS_DATA_ERROR,
  payload: error,
});
export const loadHomeTodayDealsDataInitiate = (user, navigate) => {
  return function (dispatch) {
    dispatch(loadTodayDealsDataStart());
    loadHomeTodayDealsDataApi()
      .then((res) => {
        console.log("res", res);
        dispatch(loadTodayDealsDataSuccess(res));
      })
      .catch((error) => dispatch(loadTodayDealsDataError(error.message)));
  };
};
export default {
  loadHomeTodayDealsDataInitiate,
};
