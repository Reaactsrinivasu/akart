import * as types from "../../actions/actionTypes";
const initialState = {
  loadHomeYouMayLikeData: {
    users: [],
    token: null,
    loading: false,
  },
};
const homeYouMayLikeDataReducer = (
  state = initialState.loadHomeYouMayLikeData,
  action
) => {
  switch (action.type) {
    case types.LOAD_HOME_YOUMAYLIKE_DATA_START:
      return {
        ...state,
        loading: true,
      };
    case types.LOAD_HOME_YOUMAYLIKE_DATA_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
      };
    case types.LOAD_HOME_YOUMAYLIKE_DATA_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
export default homeYouMayLikeDataReducer;

