import { loadReviewsApi } from "../../apis/ratingsAndReviews/loadReviewsByIdApi";
import * as types from "../actionTypes";

export const loadReviewsByIdStart = () => ({
  type: types.LOAD_REVIEWSBYID_START,
});

export const loadReviewsByIdSuccess = (data) => {
  const action = {
    type: types.LOAD_REVIEWSBYID_SUCCESS,
    payload: data,
  };
  console.log("data:", data); // Log the action
  return action;
};
export const loadReviewsByIdError = (error) => ({
  type: types.LOAD_REVIEWSBYID_ERROR,
  payload: error,
});

export const loadReviewsByInitiate = (user, navigate) => {
  return function (dispatch) {
    console.log("ReviewsById the actions", user);
    dispatch(loadReviewsByIdStart(user));
    loadReviewsApi(user)
      .then((res) => {
        console.log("res", res);
        dispatch(loadReviewsByIdSuccess(res));
      })
      .catch((error) => dispatch(loadReviewsByIdError(error.message)));
  };
};
export default {
  loadReviewsByInitiate,
};