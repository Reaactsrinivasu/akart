import * as types from "../../actions/actionTypes";
const initialState = {
  loadHomeShopByCategoryData: {
    users: [],
    token: null,
    loading: false,
  },
};
const homeShopByCategoryDataReducer = (
  state = initialState.loadHomeShopByCategoryData,
  action
) => {
  switch (action.type) {
    case types.LOAD_HOME_SHOP_CATEGORY_DATA_START:
      return {
        ...state,
        loading: true,
      };
    case types.LOAD_HOME_SHOP_CATEGORY_DATA_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
      };

    case types.LOAD_HOME_SHOP_CATEGORY_DATA_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};
export default homeShopByCategoryDataReducer;
