import * as types from "../actionTypes";
import { createTransactionApi } from "../../apis/payments/transactionApi";

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

export const createTransactionInitiate = (user, navigate) => {
  return function (dispatch) {
    dispatch(createTransactionStart(user));
    createTransactionApi(user)
      .then((res) => {
        console.log("res", res);
        // const orderId = res.data?.order?.id;
        // console.log("orderId", orderId);
        dispatch(createTransactionSuccess(res));
        if (res.status === 201) {
          navigate("/");
        }
      })
      .catch((error) => dispatch(createTransactionError(error.message)));
  };
};
export default {
  createTransactionInitiate,
  
};
