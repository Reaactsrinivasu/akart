import * as types from "../actionTypes";
import { loadProductDataApi } from "../../apis/Product/getProductWithSubCategoryApi";
//loading  all users details
export const loadProductStart = () => ({
  type: types.LOAD_PRODUCT_START,
});

export const loadProductSuccess = (data) => {
  const action = {
    type: types.LOAD_PRODUCT_SUCCESS,
    payload: data,
  };
  console.log("data:", data); // Log the action
  return action;
};
export const loadProductError = (error) => ({
  type: types.LOAD_PRODUCT_ERROR,
  payload: error,
});
export const loadProductDataInitiate = (user, navigate) => {
  return function (dispatch) {
    console.log("userin the actions", user);
    dispatch(loadProductStart(user));
    loadProductDataApi(user)
      .then((res) => {
        console.log("res", res);
        dispatch(loadProductSuccess(res));
      })
      .catch((error) => dispatch(loadProductError(error.message)));
  };
};
export default loadProductDataInitiate;