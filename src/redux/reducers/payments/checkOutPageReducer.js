import * as types from "../../actions/actionTypes";

const initialState = {
  createOrderInCheckOutData: {
    users: [],
    token: null,
    loading: false,
  },
};
const orderInCheckOutReducer = (
  state = initialState.createOrderInCheckOutData,
  action
) => {
  switch (action.type) {
    case types.CREATE_ORDERS_IN_CHECKOUT_START:
      return {
        ...state,
        loading: true,
      };
    case types.CREATE_ORDERS_IN_CHECKOUT_SUCCESS:
      return {
        ...state,
        loading: false,
      };
    case types.CREATE_ORDERS_IN_CHECKOUT_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case types.LOAD_ORDERS_IN_CHECKOUT_START:
      return {
        ...state,
        loading: true,
      };

    case types.LOAD_ORDERS_IN_CHECKOUT_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
      };
    case types.LOAD_ORDERS_IN_CHECKOUT_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};
export default orderInCheckOutReducer;
