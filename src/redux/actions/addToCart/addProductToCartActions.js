import * as types from "../actionTypes";
import {
  loadAddProductToCartApi,
  createAddProductToCartApi,
  deleteAddProductToCartApi,
} from "../../apis/addToCart/addToCartDataApi";

//adding wishlist details
export const createAddProductToCartStart = (users) => {
  return {
    type: types.CREATE_ADD_PRODUCT_TO_CART_START,
    payload: users,
  };
};
export const createAddProductToCartSuccess = () => ({
  type: types.CREATE_ADD_PRODUCT_TO_CART_SUCCESS,
});
export const createAddProductToCartError = (error) => ({
  type: types.CREATE_ADD_PRODUCT_TO_CART_ERROR,
  payload: error,
});

//loading wishlist details
export const loadAddProductToCartStart = () => ({
  type: types.LOAD_ADD_PRODUCT_TO_CART_START,
});
export const loadAddProductToCartSuccess = (data) => ({
  type: types.LOAD_ADD_PRODUCT_TO_CART_SUCCESS,
  payload: data,
});
export const loadAddProductToCartError = (error) => ({
  type: types.LOAD_ADD_PRODUCT_TO_CART_ERROR,
  payload: error,
});

//deleting wishlistdetails
export const deleteAddProductToCartStart = (userId) => ({
  type: types.DELETE_ADD_PRODUCT_TO_CART_START,
  payload: userId,
});
export const deleteAddProductToCartSuccess = (userId) => ({
  type: types.DELETE_ADD_PRODUCT_TO_CART_SUCCESS,
  payload: userId,
});
export const deleteAddProductToCartError = (error) => ({
  type: types.DELETE_ADD_PRODUCT_TO_CART_ERROR,
  payload: error,
});

export const createAddProductToCartInitiate = (user, navigate) => {
  return function (dispatch) {
    dispatch(createAddProductToCartStart(user));
    createAddProductToCartApi(user)
      .then((res) => {
        console.log("res", res);
        dispatch(createAddProductToCartSuccess(res));
      })
      .catch((error) => dispatch(createAddProductToCartError(error.message)));
  };
};
export const loadAddProductToCartInitiate = (user, navigate) => {
  return function (dispatch) {
    dispatch(loadAddProductToCartStart(user));
    loadAddProductToCartApi(user)
      .then((res) => {
        console.log("res", res);
        dispatch(loadAddProductToCartSuccess(res));
      })
      .catch((error) => dispatch(loadAddProductToCartError(error.message)));
  };
};
export const deleteAddProductToCartInitiate = (id, navigate) => {
  return function (dispatch) {
    dispatch(deleteAddProductToCartStart(id));
    deleteAddProductToCartApi(id)
      .then((res) => {
        console.log("res", res);
        dispatch(deleteAddProductToCartSuccess(res));
      })
      .catch((error) => dispatch(deleteAddProductToCartError(error.message)));
  };
};

export default {
    createAddProductToCartInitiate,
    loadAddProductToCartInitiate,
    deleteAddProductToCartInitiate,
};
