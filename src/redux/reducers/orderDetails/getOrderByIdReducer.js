import * as types from "../../actions/actionTypes";

const initialState = {
  getOrderedProductData: {
    users: [],
    token: null,
    loading: false,
  },
};
const getOrderedProductByIdReducer = (
  state = initialState.getOrderedProductData,
  action
) => {
  switch (action.type) {
    case types.GET_ORDER_BY_ID_START:
      return {
        ...state,
        loading: true,
      };
    case types.GET_ORDER_BY_ID_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
        // users: state.users.filter((item) => item.id !== action.payload),
      };
    case types.GET_ORDER_BY_ID_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
export default getOrderedProductByIdReducer;
