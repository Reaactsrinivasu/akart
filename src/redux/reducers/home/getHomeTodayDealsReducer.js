import * as types from "../../actions/actionTypes";
const initialState = {
  loadHomeTodayDealsData: {
    users: [],
    token: null,
    loading: false,
  },
};
const homeTodayDealsDataReducer = (
  state = initialState.loadHomeTodayDealsData,
  action
) => {
  switch (action.type) {
    case types.LOAD_HOME_TODAY_DEALS_DATA_START:
      return {
        ...state,
        loading: true,
      };
    case types.LOAD_HOME_TODAY_DEALS_DATA_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
      };
    case types.LOAD_HOME_TODAY_DEALS_DATA_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
export default homeTodayDealsDataReducer;
