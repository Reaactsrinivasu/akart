import * as types from "../../actions/actionTypes";
const initialState = {
  loadHomeDiscountCardsData: {
    users: [],
    token: null,
    loading: false,
  },
};
const homeDiscountCardsDataReducer = (
  state = initialState.loadHomeDiscountCardsData,
  action
) => {
  switch (action.type) {
    case types.LOAD_HOME_DISCOUNT_CARDS_DATA_START:
      return {
        ...state,
        loading: true,
      };
    case types.LOAD_HOME_DISCOUNT_CARDS_DATA_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
      };
    case types.LOAD_HOME_DISCOUNT_CARDS_DATA_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
export default homeDiscountCardsDataReducer;
