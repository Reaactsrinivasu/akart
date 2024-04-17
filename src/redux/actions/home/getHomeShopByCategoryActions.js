import * as types from "../actionTypes";
import { loadHomeShopByCategoryDataApi } from "../../apis/home/getHomeShopByCategoryApi";
//loading  all users details
export const loadHomeShopByCategoryDataStart = () => ({
  type: types.LOAD_HOME_SHOP_CATEGORY_DATA_START,
});
export const loadHomeShopByCategoryDataSuccess = (data) => {
  const action = {
    type: types.LOAD_HOME_SHOP_CATEGORY_DATA_SUCCESS,
    payload: data,
  };
  console.log("data:", data); // Log the action
  return action;
};
export const loadHomeShopByCategoryDataError = (error) => ({
  type: types.LOAD_HOME_SHOP_CATEGORY_DATA_ERROR,
  payload: error,
});

export const getHomeShopByCategoryDataInitiate = (user, navigate) => {
  return function (dispatch) {
    dispatch(loadHomeShopByCategoryDataStart());
    loadHomeShopByCategoryDataApi()
      .then((res) => {
        console.log(res);
        dispatch(loadHomeShopByCategoryDataSuccess(res));
      })
      .catch((error) => dispatch(loadHomeShopByCategoryDataError(error.message)));
  };
};

export default {
  getHomeShopByCategoryDataInitiate,
};
