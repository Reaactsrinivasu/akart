import * as types from "../../actions/actionTypes";

const initialState = {
  createInvoiceData: {
    users: [],
    token: null,
    loading: false,
  },
};
const createInvoiceReducer = (
  state = initialState.createInvoiceData,
  action
) => {
    switch (action.type) {
      case types.LOAD_INVOICE_START:
        return {
          ...state,
          loading: true,
        };
      case types.LOAD_INVOICE_SUCCESS:
        return {
          ...state,
          loading: false,
          data: action.payload,
        };
      case types.LOAD_INVOICE_ERROR:
        return {
          ...state,
          loading: false,
          error: action.payload,
        };
      case types.CREATE_INVOICE_START:
        return {
          ...state,
          loading: true,
        };
      case types.CREATE_INVOICE_SUCCESS:
        return {
          ...state,
          loading: false,
        };
      case types.CREATE_INVOICE_ERROR:
        return {
          ...state,
          loading: false,
          error: action.payload,
        };
      default:
        return state;
    }
};
export default createInvoiceReducer;
