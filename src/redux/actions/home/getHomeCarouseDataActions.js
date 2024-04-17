import * as types from "../actionTypes";
import { loadHomeCarouselDataApi } from "../../apis/home/getHomeCarouselDataApi";
//loading  all users details
export const loadCaroouselDataStart = () => ({
  type: types.LOAD_HOME_CAROUSELDATA_START,
});
export const loadCaroouselDataSuccess = (data) => {
  const action = {
    type: types.LOAD_HOME_CAROUSELDATA_SUCCESS,
    payload: data,
  };
  console.log("data:", data); // Log the action
  return action;
};
export const loadCaroouselDataError = (error) => ({
  type: types.LOAD_HOME_CAROUSELDATA_ERROR,
  payload: error,
});
export const loadHomeCarouselDataInitiate = (user, navigate) => {
  return function (dispatch) {
    dispatch(loadCaroouselDataStart());
    // dispatch(loadCaroouselDataStart(user));
    // loadHomeCarouselDataApi(user)
    loadHomeCarouselDataApi()
      .then((res) => {
        console.log('res',res);
        dispatch(loadCaroouselDataSuccess(res));
      })
      .catch((error) => dispatch(loadCaroouselDataError(error.message)));
  };
};
export default {
  loadHomeCarouselDataInitiate,
};



 