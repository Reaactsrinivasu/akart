import * as types from "../../actions/actionTypes";
const initialState = {
  loadHomeGrandGlobalData: {
    users: [],
    token: null,
    loading: false,
  },
};
const homeGrandGlobalDataReducer = (
  state = initialState.loadHomeGrandGlobalData,
  action
) => {
  switch (action.type) {
    case types.LOAD_HOME_GRAND_GLOBAL_DATA_START:
      return {
        ...state,
        loading: true,
      };
    case types.LOAD_HOME_GRAND_GLOBAL_DATA_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
      };

    case types.LOAD_HOME_GRAND_GLOBAL_DATA_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};
export default homeGrandGlobalDataReducer;
