import * as types from "../actionTypes";
import { loadInnerProductDataApi } from "../../apis/InnerProduct/getInnerProductWithIdApi";

//loading  all users details
export const loadInnerProductStart = () => ({
  type: types.LOAD_INNER_PRODUCT_START,
});
export const loadInnerProductSuccess = (data) => {
  const action = {
    type: types.LOAD_INNER_PRODUCT_SUCCESS,
    payload: data,
  };
  console.log("data:", data); // Log the action
  return action;
};
export const loadInnerProductError = (error) => ({
  type: types.LOAD_INNER_PRODUCT_ERROR,
  payload: error,
});
export const loadInnerProductDataInitiate = (user, navigate) => {
  return function (dispatch) {
    dispatch(loadInnerProductStart(user));
    loadInnerProductDataApi(user)
      .then((res) => {
        console.log("res", res);
        dispatch(loadInnerProductSuccess(res));
      })
      .catch((error) => dispatch(loadInnerProductError(error.message)));
  };
};
export default loadInnerProductDataInitiate;

//  if (res.status === 200) {
//    navigate("/innerproducts", { state: innerProdductData });
//  }
