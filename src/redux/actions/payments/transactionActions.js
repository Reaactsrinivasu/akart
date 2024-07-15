import * as types from "../actionTypes";
import { createTransactionApi, updateTransactionApi } from "../../apis/payments/transactionApi";

export const createTransactionStart = (users) => {
  return {
    type: types.CREATE_TRANSACTION_START,
    payload: users,
  };
};
export const createTransactionSuccess = () => ({
  type: types.CREATE_TRANSACTION_SUCCESS,
});
export const createTransactionError = (error) => ({
  type: types.CREATE_TRANSACTION_ERROR,
  payload: error,
});
export const updateTransactionStart = (userId, user) =>
  // console.log('users', users),
  ({
    type: types.UPDATE_TRANSACTION_START,
    payload: [userId, user],
  });
export const updateTransactionSuccess = () => ({
  type: types.UPDATE_TRANSACTION_SUCCESS,
});
export const updateTransactionError = (error) => ({
  type: types.UPDATE_TRANSACTION_ERROR,
  payload: error,
});
export const createTransactionInitiate = (user, navigate) => {
  return function (dispatch) {
    dispatch(createTransactionStart(user));
    createTransactionApi(user)
      .then((res) => {
        console.log("res", res);
        // const orderId = res.data?.order?.id;
        // console.log("orderId", orderId);
        dispatch(createTransactionSuccess(res));
        if (res.status === 200) {
          navigate("/");
        }
      })
      .catch((error) => dispatch(createTransactionError(error.message)));
  };
};
export const updateTransactionInitiate = (track_id,payment_details, navigate) => {
  return function (dispatch) {
    dispatch(updateTransactionStart(payment_details));
    updateTransactionApi(track_id, payment_details)
      .then((res) => {
        console.log("res", res);
        // const orderId = res.data?.order?.id;
        // console.log("orderId", orderId);
        dispatch(updateTransactionSuccess(payment_details));
        if (res.status === 200) {
          localStorage.removeItem("allDetails");
          navigate("/");
        }
      })
      .catch((error) => dispatch(updateTransactionError(error.message)));
  };
};
export default {
  createTransactionInitiate,
  updateTransactionInitiate,
};
