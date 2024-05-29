import * as types from "../../actions/actionTypes";
const initialState = {
  loadProductData: {
    users: [],
    token: null,
    loading: false,
  },
};
const productDataReducer = (state = initialState.loadProductData, action) => {
  switch (action.type) {
    case types.LOAD_PRODUCT_START:
      return {
        ...state,
        loading: true,
      };
    case types.LOAD_PRODUCT_SUCCESS:
      console.log("action", action);
      console.log("data in reducer", action.payload);
      return {
        ...state,
        loading: false,
        data: action.payload,
      };
    case types.LOAD_PRODUCT_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
export default productDataReducer;
