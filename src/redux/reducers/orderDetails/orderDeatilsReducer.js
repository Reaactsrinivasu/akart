import * as types from "../../actions/actionTypes";

const initialState = {
  createOrderData: {
    users: [],
    token: null,
    loading: false,
  },
};
const orderDataReducer = (
  state = initialState.createOrderData,
  action
) => {
  switch (action.type) {
    case types.CREATE_ORDER_DETAILS_START:
      return {
        ...state,
        loading: true,
      };
    case types.CREATE_ORDER_DETAILS_SUCCESS:
      return {
        ...state,
        loading: false,
      };
    case types.CREATE_ORDER_DETAILS_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case types.LOAD_ORDER_DETAILS_START:
      return {
        ...state,
        loading: true,
      };

    case types.LOAD_ORDER_DETAILS_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
      };
    case types.LOAD_ORDER_DETAILS_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    //deleting family details  details
    case types.REMOVE_ORDER_DETAILS_START:
      return {
        ...state,
        loading: true,
      };
    case types.REMOVE_ORDER_DETAILS_SUCCESS:
      return {
        ...state,
        loading: false,
        users: state.users.filter((item) => item.id !== action.payload),
      };
    case types.REMOVE_ORDER_DETAILS_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
export default orderDataReducer;
