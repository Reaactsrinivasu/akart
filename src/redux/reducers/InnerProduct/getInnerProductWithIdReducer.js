import * as types from "../../actions/actionTypes";
const initialState = {
  loadInnerProductData: {
    users: [],
    token: null,
    loading: false,
  },
};
const innerProductDataReducer = (
  state = initialState.loadInnerProductData,
  action
) => {
  switch (action.type) {
    case types.LOAD_INNER_PRODUCT_START:
      return {
        ...state,
        loading: true,
      };
    case types.LOAD_INNER_PRODUCT_SUCCESS:
      console.log("action", action);
      return {
        ...state,
        loading: false,
        data: action.payload,
      };
    case types.LOAD_INNER_PRODUCT_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
export default innerProductDataReducer;
