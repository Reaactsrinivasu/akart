import { createLikesApi, loadLikesApi } from "../../apis/ratingsAndReviews/createLikeApi";
import * as types from "../actionTypes";


export const createLikesStart = (users) => {
  return {
    type: types.CREATE_LIKES_START,
    payload: users,
  };
};
export const createLikesSuccess = () => ({
  type: types.CREATE_LIKES_SUCCESS,
});
export const createLikesError = (error) => ({
  type: types.CREATE_LIKES_ERROR,
  payload: error,
});
//loading  all users details
export const loadLikesStart = () => ({
  type: types.LOAD_LIKES_START,
});

export const loadLikesSuccess = (data) => {
  const action = {
    type: types.LOAD_LIKES_SUCCESS,
    payload: data,
  };
  console.log("data:", data); // Log the action
  return action;
};
export const loadLikesError = (error) => ({
  type: types.LOAD_LIKES_ERROR,
  payload: error,
});

export const createLikesInitiate = (user, navigate, callback) => {
  return function (dispatch) {
    dispatch(createLikesStart(user));
    createLikesApi(user)
      .then((res) => {
        console.log("res", res);
        // const orderId = res.data?.order?.id;
        // console.log("orderId", orderId);
        dispatch(createLikesSuccess(res));
        if (res.status === 200) {
          callback(res?.data?.Likes_count);
        }
      })
      .catch((error) => dispatch(createLikesError(error.message)));
  };
};
export const loadLikesDataInitiate = (user, navigate) => {
  return function (dispatch) {
    console.log("Likes the actions", user);
    dispatch(loadLikesStart(user));
    loadLikesApi(user)
      .then((res) => {
        console.log("res", res);
        dispatch(loadLikesSuccess(res));
      })
      .catch((error) => dispatch(loadLikesError(error.message)));
  };
};
export default {
  createLikesInitiate,
  loadLikesDataInitiate,
};
