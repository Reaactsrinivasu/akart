import * as types from "../../actions/actionTypes";
const initialState = {
  loadHomeCarouselData: {
    users: [],
    token: null,
    loading: false,
  },
};
const homeCarouselDataReducer = (
  state = initialState.loadHomeCarouselData,
  action
) => {
  switch (action.type) {
    case types.LOAD_HOME_CAROUSELDATA_START:
      return {
        ...state,
        loading: true,
      };
    case types.LOAD_HOME_CAROUSELDATA_SUCCESS:
      console.log("action", action);
      return {
        ...state,
        loading: false,
        data: action.payload,
      };
    case types.LOAD_HOME_CAROUSELDATA_ERROR:
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
