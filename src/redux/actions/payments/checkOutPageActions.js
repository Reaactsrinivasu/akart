import * as types from "../actionTypes";
import {
  createOrderInCheckOutApi,
  loadOrderInCheckOutApi,
} from "../../apis/payments/checkOutPageApi";
//adding orderin checkout page details
export const createOrderInCheckOutStart = (users) => {
  return {
    type: types.CREATE_ORDERS_IN_CHECKOUT_START,
    payload: users,
  };
};
export const createOrderInCheckOutSuccess = () => ({
  type: types.CREATE_ORDERS_IN_CHECKOUT_SUCCESS,
});
export const createOrderInCheckOutError = (error) => ({
  type: types.CREATE_ORDERS_IN_CHECKOUT_ERROR,
  payload: error,
});
//loading orderin checkout page details
export const loadOrderInCheckOutStart = () => ({
  type: types.LOAD_ORDERS_IN_CHECKOUT_START,
});
export const loadOrderInCheckOutSuccess = (data) => ({
  type: types.LOAD_ORDERS_IN_CHECKOUT_SUCCESS,
  payload: data,
});
export const loadOrderInCheckOutError = (error) => ({
  type: types.LOAD_ORDERS_IN_CHECKOUT_ERROR,
  payload: error,
});

export const createOrderInCheckOutInitiate = (user, navigate) => {
  return function (dispatch) {
    dispatch(createOrderInCheckOutStart(user));
    createOrderInCheckOutApi(user)
      .then((res) => {
          console.log("res", res);
          const orderId = res.data?.order?.id;
          console.log("orderId", orderId);
          dispatch(createOrderInCheckOutSuccess(res));
          if (res.status === 201) {
            navigate("/checkout", { state: orderId });
          }
      })
      .catch((error) => dispatch(createOrderInCheckOutError(error.message)));
  };
};
export const loadOrderInCheckOutInitiate = (user, navigate) => {
  return function (dispatch) {
    dispatch(loadOrderInCheckOutStart(user));
    loadOrderInCheckOutApi(user)
      .then((res) => {
        console.log("res", res);
        dispatch(loadOrderInCheckOutSuccess(res));
      })
      .catch((error) => dispatch(loadOrderInCheckOutError(error.message)));
  };
};


export default {
  createOrderInCheckOutInitiate,
  loadOrderInCheckOutInitiate,
};
