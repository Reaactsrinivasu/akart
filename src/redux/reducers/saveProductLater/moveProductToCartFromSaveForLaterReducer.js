import * as types from "../../actions/actionTypes";

const initialState = {
  createMoveProductToCartFromSaveForLaterData: {
    users: [],
    token: null,
    loading: false,
  },
};
const moveProductToCartFromForLaterDataReducer = (
  state = initialState.createMoveProductToCartFromSaveForLaterData,
  action
) => {
  switch (action.type) {
      //moving product to cart existing in save for later details
      
    case types.CREATE_PRODUCT_MOVETOCART_FROM_SAVE_FOR_LATER_START:
      return {
        ...state,
        loading: true,
      };
    case types.CREATE_PRODUCT_MOVETOCART_FROM_SAVE_FOR_LATER_SUCCESS:
      return {
        ...state,
        loading: false,
      };
    case types.CREATE_PRODUCT_MOVETOCART_FROM_SAVE_FOR_LATER_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};
export default moveProductToCartFromForLaterDataReducer;
