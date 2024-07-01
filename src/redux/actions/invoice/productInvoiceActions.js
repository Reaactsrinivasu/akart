import * as types from "../actionTypes";
import {
  createInvoiceApi,
  loadInvoiceApi,
} from "../../apis/invoice/productInvoiceApi";
//adding fcm token
export const createInvoiceStart = (users) => {
  return {
    type: types.CREATE_INVOICE_START,
    payload: users,
  };
};
export const createInvoiceSuccess = () => ({
  type: types.CREATE_INVOICE_SUCCESS,
});
export const createInvoiceError = (error) => ({
  type: types.CREATE_INVOICE_ERROR,
  payload: error,
});
export const loadInvoiceStart = () => ({
  type: types.LOAD_INVOICE_START,
});
export const loadInvoiceSuccess = (data) => ({
  type: types.LOAD_INVOICE_SUCCESS,
  payload: data,
});
export const loadInvoiceError = (error) => ({
  type: types.LOAD_INVOICE_ERROR,
  payload: error,
});

export const createInvoiceInitiate = (user, navigate) => {
  return function (dispatch) {
    dispatch(createInvoiceStart(user));
    createInvoiceApi(user)
      .then((res) => {
        console.log("res", res);
        const data = res?.data;
        dispatch(createInvoiceSuccess(res));
        if (res.status === 201) {
          navigate("/checkout", { state: data });
        }
      })
      .catch((error) => dispatch(createInvoiceError(error.message)));
  };
};
export const LoadInvoiceInitiate = (user, navigate) => {
  return function (dispatch) {
    dispatch(loadInvoiceStart(user));
    loadInvoiceApi(user)
      .then((res) => {
        console.log("res", res);
        dispatch(loadInvoiceSuccess(res));
      })
      .catch((error) => dispatch(loadInvoiceError(error.message)));
  };
};
export default {
  createInvoiceInitiate,
  LoadInvoiceInitiate,
};
