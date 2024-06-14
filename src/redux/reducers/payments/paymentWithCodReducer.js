import * as types from "../../actions/actionTypes";

const initialState = {
  createPaymentWithCodData: {
    users: [],
    token: null,
    loading: false,
  },
};
const paymentWithCodReducer = (
  state = initialState.createPaymentWithCodData,
  action
) => {
  switch (action.type) {
    case types.CREATE_PAYMENT_COD_START:
      return {
        ...state,
        loading: true,
      };
    case types.CREATE_PAYMENT_COD_SUCCESS:
      return {
        ...state,
        loading: false,
      };
    case types.CREATE_PAYMENT_COD_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case types.LOAD_PAYMENT_COD_START:
      return {
        ...state,
        loading: true,
      };

    case types.LOAD_PAYMENT_COD_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
      };
    case types.LOAD_PAYMENT_COD_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};
export default paymentWithCodReducer;
