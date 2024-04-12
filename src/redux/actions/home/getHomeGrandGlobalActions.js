import * as types from "../actionTypes";
import { loadHomeGrandGlobalDataApi } from "../../apis/home/getHomeGrandGlobalApi";
//loading  all users details
export const loadGrandGlobalDataStart = () => ({
  type: types.LOAD_HOME_GRAND_GLOBAL_DATA_START,
});
export const loadGrandGlobalDataSuccess = (data) => {
  const action = {
    type: types.LOAD_HOME_GRAND_GLOBAL_DATA_SUCCESS,
    payload: data,
  };
  console.log("data:", data); // Log the action
  return action;
};
export const loadGrandGlobalDataError = (error) => ({
  type: types.LOAD_HOME_GRAND_GLOBAL_DATA_ERROR,
  payload: error,
});
export const getHomeGrandGlobalDataInitiate = (user, navigate) => {
  return function (dispatch) {
    dispatch(loadGrandGlobalDataStart());
    // dispatch(loadGrandGlobalDataStart(user));
    // loadHomeGrandGlobalDataApi(user)
    loadHomeGrandGlobalDataApi()
      .then((res) => {
        console.log(res);
        dispatch(loadGrandGlobalDataSuccess(res));
      })
      .catch((error) => dispatch(loadGrandGlobalDataError(error.message)));
  };
};
export default {
  getHomeGrandGlobalDataInitiate,
};
