import { createDisLikesApi, loadDisLikesApi } from "../../apis/ratingsAndReviews/createDisLikeAPi";
import * as types from "../actionTypes";

export const createDisLikesStart = (users) => {
  return {
    type: types.CREATE_DISLIKES_START,
    payload: users,
  };
};
export const createDisLikesSuccess = () => ({
  type: types.CREATE_DISLIKES_SUCCESS,
});
export const createDisLikesError = (error) => ({
  type: types.CREATE_DISLIKES_ERROR,
  payload: error,
});
//loading  all users details
export const loadDisLikesStart = () => ({
  type: types.LOAD_DISLIKES_START,
});

export const loadDisLikesSuccess = (data) => {
  const action = {
    type: types.LOAD_DISLIKES_SUCCESS,
    payload: data,
  };
  console.log("data:", data); // Log the action
  return action;
};
export const loadDisLikesError = (error) => ({
  type: types.LOAD_DISLIKES_ERROR,
  payload: error,
});

export const createDisLikesInitiate = (user, navigate, callback) => {
  return function (dispatch) {
    dispatch(createDisLikesStart(user));
    createDisLikesApi(user)
      .then((res) => {
        console.log("res", res);
        dispatch(createDisLikesSuccess(res));
        if (res.status === 200) {
          callback(res?.data?.disLikes_count);
        }
      })
      .catch((error) => dispatch(createDisLikesError(error.message)));
  };
};
export const loadDisLikesDataInitiate = (user, navigate) => {
  return function (dispatch) {
    console.log("DisLikes the actions", user);
    dispatch(loadDisLikesStart(user));
    loadDisLikesApi(user)
      .then((res) => {
        console.log("res", res);
        dispatch(loadDisLikesSuccess(res));
      })
      .catch((error) => dispatch(loadDisLikesError(error.message)));
  };
};
export default {
  loadDisLikesDataInitiate,
  createDisLikesInitiate,
};
