import * as types from "../../actions/actionTypes";

const initialState = {
  createAddToCartData: {
    users: [],
    token: null,
    loading: false,
  },
};
const addProductToCartDataReducer = (
  state = initialState.createAddToCartData,
  action
) => {
  switch (action.type) {
    case types.CREATE_ADD_PRODUCT_TO_CART_START:
      return {
        ...state,
        loading: true,
      };
    case types.CREATE_ADD_PRODUCT_TO_CART_SUCCESS:
      return {
        ...state,
        loading: false,
      };
    case types.CREATE_ADD_PRODUCT_TO_CART_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case types.LOAD_ADD_PRODUCT_TO_CART_START:
      return {
        ...state,
        loading: true,
      };

    case types.LOAD_ADD_PRODUCT_TO_CART_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
      };
    case types.LOAD_ADD_PRODUCT_TO_CART_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    //deleting family details  details
    case types.DELETE_ADD_PRODUCT_TO_CART_START:
      return {
        ...state,
        loading: true,
      };
    case types.DELETE_ADD_PRODUCT_TO_CART_SUCCESS:
      return {
        ...state,
        loading: false,
        users: state.users.filter((item) => item.id !== action.payload),
      };
    case types.DELETE_ADD_PRODUCT_TO_CART_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
export default addProductToCartDataReducer;
