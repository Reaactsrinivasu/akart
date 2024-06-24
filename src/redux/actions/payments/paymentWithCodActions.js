import * as types from "../actionTypes";
import { createPaymentWithCodApi } from "../../apis/payments/paymentWithCodApi";
//adding orderin checkout page details
export const createPaymentWithCodStart = (users) => {
  return {
    type: types.CREATE_PAYMENT_COD_START,
    payload: users,
  };
};
export const createPaymentWithCodSuccess = () => ({
  type: types.CREATE_PAYMENT_COD_SUCCESS,
});
export const createPaymentWithCodError = (error) => ({
  type: types.CREATE_PAYMENT_COD_ERROR,
  payload: error,
});
//loading orderin checkout page details
export const loadPaymentWithCodStart = () => ({
  type: types.LOAD_PAYMENT_COD_START,
});
export const loadPaymentWithCodSuccess = (data) => ({
  type: types.LOAD_PAYMENT_COD_SUCCESS,
  payload: data,
});
export const loadPaymentWithCodError = (error) => ({
  type: types.LOAD_PAYMENT_COD_ERROR,
  payload: error,
});

export const createPaymentWithCodInitiate = (user, navigate) => {
  return function (dispatch) {
    dispatch(createPaymentWithCodStart(user));
    createPaymentWithCodApi(user)
      .then((res) => {
        console.log("res", res);
        dispatch(createPaymentWithCodSuccess(res));
        if (res.status === 200) {
        // navigate("/paymentstatus");
        }
      })
      .catch((error) => dispatch(createPaymentWithCodError(error.message)));
  };
};


export default {
  createPaymentWithCodInitiate,
};
