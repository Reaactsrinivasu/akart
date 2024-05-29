import * as types from "../../actions/actionTypes";

const initialState = {
  createSaveProductForLaterData: {
    users: [],
    token: null,
    loading: false,
  },
};
const saveProductForLaterDataReducer = (
  state = initialState.createSaveProductForLaterData,
  action
) => {
  switch (action.type) {
    case types.CREATE_SAVE_PRODUCT_FOR_LATER_START:
      return {
        ...state,
        loading: true,
      };
    case types.CREATE_SAVE_PRODUCT_FOR_LATER_SUCCESS:
      return {
        ...state,
        loading: false,
      };
    case types.CREATE_SAVE_PRODUCT_FOR_LATER_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case types.LOAD_SAVE_PRODUCT_FOR_LATER_START:
      return {
        ...state,
        loading: true,
      };

    case types.LOAD_SAVE_PRODUCT_FOR_LATER_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
      };
    case types.LOAD_SAVE_PRODUCT_FOR_LATER_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    //deleting family details  details
    case types.DELETE_SAVE_PRODUCT_FOR_LATER_START:
      return {
        ...state,
        loading: true,
      };
    case types.DELETE_SAVE_PRODUCT_FOR_LATER_SUCCESS:
      return {
        ...state,
        loading: false,
        users: state.users.filter((item) => item.id !== action.payload),
      };
    case types.DELETE_SAVE_PRODUCT_FOR_LATER_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
export default saveProductForLaterDataReducer;
