import * as types from "../actionTypes";
import {
  createRatingAndReviewApi,
  loadRatingAndReviewApi,
} from "../../apis/ratingsAndReviews/ratingsAndReviewsApi";
export const createRatingAndReviewStart = (users) => {
  return {
    type: types.CREATE_RATINGS_AND_REVIEWS_START,
    payload: users,
  };
};
export const createRatingAndReviewSuccess = () => ({
  type: types.CREATE_RATINGS_AND_REVIEWS_SUCCESS,
});
export const createRatingAndReviewError = (error) => ({
  type: types.CREATE_RATINGS_AND_REVIEWS_ERROR,
  payload: error,
});
//loading  all users details
export const loadRatingAndReviewStart = () => ({
  type: types.LOAD_RATINGS_AND_REVIEWS_START,
});

export const loadRatingAndReviewSuccess = (data) => {
  const action = {
    type: types.LOAD_RATINGS_AND_REVIEWS_SUCCESS,
    payload: data,
  };
  console.log("data:", data); // Log the action
  return action;
};
export const loadRatingAndReviewError = (error) => ({
  type: types.LOAD_RATINGS_AND_REVIEWS_ERROR,
  payload: error,
});

export const createRatingAndReviewInitiate = (user, navigate) => {
  return function (dispatch) {
    dispatch(createRatingAndReviewStart(user));
    createRatingAndReviewApi(user)
      .then((res) => {
        console.log("res", res);
        // const orderId = res.data?.order?.id;
        // console.log("orderId", orderId);
        dispatch(createRatingAndReviewSuccess(res));
        if (res.status === 201) {
          // navigate("/checkout", { state: orderId });
        }
      })
      .catch((error) => dispatch(createRatingAndReviewError(error.message)));
  };
};
export const loadRatingAndReviewDataInitiate = (user, navigate) => {
  return function (dispatch) {
    console.log("userin the actions", user);
    dispatch(loadRatingAndReviewStart(user));
    loadRatingAndReviewApi(user)
      .then((res) => {
        console.log("res", res);
        dispatch(loadRatingAndReviewSuccess(res));
      })
      .catch((error) => dispatch(loadRatingAndReviewError(error.message)));
  };
};
export default {
  loadRatingAndReviewDataInitiate,
  createRatingAndReviewInitiate,
};
