import * as types from "../actionTypes";
import {
  loadWishListDataApi,
  createWishListDataApi,
  deleteWishListDataApi,
} from "../../apis/wishList/wishListDataApi";
//adding wishlist details
export const createWishListDataStart = (users) => {
  return {
    type: types.CREATE_WISHLIST_PRODUCT_START,
    payload: users,
  };
};
export const createWishListDataSuccess = () => ({
  type: types.CREATE_WISHLIST_PRODUCT_SUCCESS,
});
export const createWishListDataError = (error) => ({
  type: types.CREATE_WISHLIST_PRODUCT_ERROR,
  payload: error,
});
//loading wishlist details
export const loadWishListDataStart = () => ({
  type: types.LOAD_WISHLIST_PRODUCT_START,
});
export const loadWishListDataSuccess = (data) => ({
  type: types.LOAD_WISHLIST_PRODUCT_SUCCESS,
  payload: data,
});
export const loadWishListDataError = (error) => ({
  type: types.LOAD_WISHLIST_PRODUCT_ERROR,
  payload: error,
});
//deleting wishlistdetails
export const deleteWishListDataStart = (userId) => ({
  type: types.DELETE_WISHLIST_PRODUCT_START,
  payload: userId,
});
export const deleteWishListDataSuccess = (userId) => ({
  type: types.DELETE_WISHLIST_PRODUCT_SUCCESS,
  payload: userId,
});
export const deleteWishListDataError = (error) => ({
  type: types.DELETE_WISHLIST_PRODUCT_ERROR,
  payload: error,
});
//updating existing user details
// export const updateWishListDataStart = (id, userInfo) => ({
//   type: types.UPDATE_WISHLIST_PRODUCT_START,
//   payload: [id, userInfo],
// });
// export const updateWishListDataSuccess = () => ({
//   type: types.UPDATE_WISHLIST_PRODUCT_SUCCESS,
// });
// export const updateWishListDataError = (error) => ({
//   type: types.UPDATE_WISHLIST_PRODUCT_ERROR,
//   payload: error,
// });

export const createWishListDataInitiate = (user, navigate) => {
  return function (dispatch) {
    dispatch(createWishListDataStart(user));
    createWishListDataApi(user)
      .then((res) => {
        console.log("res", res);
        dispatch(createWishListDataSuccess(res));
      })
      .catch((error) => dispatch(createWishListDataError(error.message)));
  };
};
export const loadWishListDataInitiate = (user, navigate) => {
  return function (dispatch) {
    dispatch(loadWishListDataStart(user));
    loadWishListDataApi(user)
      .then((res) => {
        console.log("res", res);
        dispatch(loadWishListDataSuccess(res));
      })
      .catch((error) => dispatch(loadWishListDataError(error.message)));
  };
};
export const deleteWishListDataInitiate = (id, navigate) => {
  return function (dispatch) {
    dispatch(deleteWishListDataStart(id));
    deleteWishListDataApi(id)
      .then((res) => {
        console.log("res", res);
        dispatch(deleteWishListDataSuccess(res));
      })
      .catch((error) => dispatch(deleteWishListDataError(error.message)));
  };
};

export default {
    createWishListDataInitiate,
    loadWishListDataInitiate,
    deleteWishListDataInitiate,
};
