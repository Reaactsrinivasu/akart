import * as types from "../../actions/actionTypes";
const initialState = {
  creatRatingsAndReviewsData: {
    users: [],
    token: null,
    loading: false,
  },
};
const ratingsAndReviewsReducer = (
  state = initialState.creatRatingsAndReviewsData,
  action
) => {
  switch (action.type) {
    case types.CREATE_RATINGS_AND_REVIEWS_START:
      return {
        ...state,
        loading: true,
      };
    case types.CREATE_RATINGS_AND_REVIEWS_SUCCESS:
      return {
        ...state,
        loading: false,
      };
    case types.CREATE_RATINGS_AND_REVIEWS_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case types.LOAD_RATINGS_AND_REVIEWS_START:
      return {
        ...state,
        loading: true,
      };

    case types.LOAD_RATINGS_AND_REVIEWS_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
      };
    case types.LOAD_RATINGS_AND_REVIEWS_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
export default ratingsAndReviewsReducer;
