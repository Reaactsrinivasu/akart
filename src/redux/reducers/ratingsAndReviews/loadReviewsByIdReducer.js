import * as types from "../../actions/actionTypes";
const initialState = {
  loadReviewByIdData: {
    users: [],
    token: null,
    loading: false,
  },
};
const loadReviesByIdReducer = (
  state = initialState.loadReviewByIdData,
  action
) => {
  switch (action.type) {
    case types.LOAD_REVIEWSBYID_START:
      return {
        ...state,
        loading: true,
      };

    case types.LOAD_REVIEWSBYID_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
      };
    case types.LOAD_REVIEWSBYID_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
export default loadReviesByIdReducer;
