import * as types from "../actionTypes";
import {
  createOrderDetailsApi,
  loadOrderDetailsApi,
  deleteOrderDetailsApi,
} from "../../apis/orderDetails/orderDetailsApi";
//adding product for later details
export const createOrderDetailsStart = (users) => {
  return {
    type: types.CREATE_ORDER_DETAILS_START,
    payload: users,
  };
};
export const createOrderDetailsSuccess = () => ({
  type: types.CREATE_ORDER_DETAILS_SUCCESS,
});
export const createOrderDetailsError = (error) => ({
  type: types.CREATE_ORDER_DETAILS_ERROR,
  payload: error,
});
//loading product for later details
export const loadOrderDetailsStart = () => ({
  type: types.LOAD_ORDER_DETAILS_START,
});
export const loadOrderDetailsSuccess = (data) => ({
  type: types.LOAD_ORDER_DETAILS_SUCCESS,
  payload: data,
});
export const loadOrderDetailsError = (error) => ({
  type: types.LOAD_ORDER_DETAILS_ERROR,
  payload: error,
});
//deleting product for laterdetails
export const deleteOrderDetailsStart = (userId) => ({
  type: types.REMOVE_ORDER_DETAILS_START,
  payload: userId,
});
export const deleteOrderDetailsSuccess = (userId) => ({
  type: types.REMOVE_ORDER_DETAILS_SUCCESS,
  payload: userId,
});
export const deleteOrderDetailsError = (error) => ({
  type: types.REMOVE_ORDER_DETAILS_ERROR,
  payload: error,
});

export const createOrderDetailsInitiate = (user, navigate) => {
  return function (dispatch) {
    dispatch(createOrderDetailsStart(user));
    createOrderDetailsApi(user)
      .then((res) => {
        console.log("res", res);
        dispatch(createOrderDetailsSuccess(res));
      })
      .catch((error) =>
        dispatch(createOrderDetailsError(error.message))
      );
  };
};
export const loadOrderDetailsInitiate = (user, navigate) => {
  return function (dispatch) {
    dispatch(loadOrderDetailsStart(user));
    loadOrderDetailsApi(user)
      .then((res) => {
        console.log("res", res);
        dispatch(loadOrderDetailsSuccess(res));
      })
      .catch((error) => dispatch(loadOrderDetailsError(error.message)));
  };
};
export const removeOrderDetailsInitiate = (id, navigate) => {
  return function (dispatch) {
    dispatch(deleteOrderDetailsStart(id));
    deleteOrderDetailsApi(id)
      .then((res) => {
        console.log("res", res);
        dispatch(deleteOrderDetailsSuccess(res));
      })
      .catch((error) =>
        dispatch(deleteOrderDetailsError(error.message))
      );
  };
};
export default {
  createOrderDetailsInitiate,
  loadOrderDetailsInitiate,
  removeOrderDetailsInitiate,
};
