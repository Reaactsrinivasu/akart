import * as types from "../../actions/actionTypes";

const initialState = {
  createTransactionData: {
    users: [],
    token: null,
    loading: false,
  },
};
const transactionReducer = (
  state = initialState.createTransactionData,
  action
) => {
  switch (action.type) {
    case types.CREATE_TRANSACTION_START:
      return {
        ...state,
        loading: true,
      };
    case types.CREATE_TRANSACTION_SUCCESS:
      return {
        ...state,
        loading: false,
      };
    case types.CREATE_TRANSACTION_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
export default transactionReducer;
