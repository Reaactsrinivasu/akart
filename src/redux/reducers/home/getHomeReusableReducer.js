import * as types from "../../actions/actionTypes";
const initialState = {
  loadHomeCarouselData: {
    users: [],
    token: null,
    loading: false,
  },
};
let start = "START";
let success = "SUCCESS";
let error = "ERROR";
let actionTerm = types.LOAD_HOME_CAROUSEL_DATA;
const homeCarouselDataReducer = (
  state = initialState.loadHomeCarouselData,
  action
) => {
  switch (action.type) {
    // case types.LOAD_HOME_CAROUSEL_DATA_START:
    case `${actionTerm}_${start}`:
      return {
        ...state,
        loading: true,
      };
    // case types.LOAD_HOME_CAROUSEL_DATA_SUCCESS:
    case `${actionTerm}_${success}`:
      console.log("action", action);
      return {
        ...state,
        loading: false,
        data: action.payload,
      };
    // case types.LOAD_HOME_CAROUSEL_DATA_ERROR:
    case `${actionTerm}_${error}`:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
export default homeCarouselDataReducer;
