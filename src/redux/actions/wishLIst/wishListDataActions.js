import * as types from "../actionTypes";
import Slide from "@mui/material/Slide";
import {
  loadWishListDataApi,
  createWishListDataApi,
  deleteWishListDataApi,
} from "../../apis/wishList/wishListDataApi";

function SlideTransition(props) {
  return <Slide {...props} direction="up" />;
}
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

// export const createWishListDataInitiate = (user, navigate, showSnackbar) => {
//   return function (dispatch) {
//     dispatch(createWishListDataStart(user));
//     createWishListDataApi(user)
//       .then((res) => {
//         console.log("res", res);
//         dispatch(createWishListDataSuccess(res));
//         showSnackbar("Item added to wishlist successfully!", SlideTransition);
//       })
//       .catch((error) => {
//         dispatch(createWishListDataError(error.message));
//         showSnackbar("Failed to add item to wishlist.", SlideTransition);
//       });
//   };
// };
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
// export const deleteWishListDataInitiate = (id, navigate) => {
//   return function (dispatch) {
//     dispatch(deleteWishListDataStart(id));
//     deleteWishListDataApi(id)
//       .then((res) => {
//         console.log("res", res);
//         dispatch(deleteWishListDataSuccess(res));
//       })
//       .catch((error) => dispatch(deleteWishListDataError(error.message)));
//   };
// };

export const deleteWishListDataInitiate = (id, navigate, showSnackbar) => {
  return function (dispatch) {
    dispatch(deleteWishListDataStart(id));
    deleteWishListDataApi(id)
      .then((res) => {
        console.log("res", res);
        dispatch(deleteWishListDataSuccess(res));
        showSnackbar(
          "Removed from your Wishlist",
          SlideTransition
        );
      })
      .catch((error) => {
        dispatch(deleteWishListDataError(error.message));
        showSnackbar("Item Remains in Wishlist", SlideTransition);
      });
  };
};

export default {
    createWishListDataInitiate,
    loadWishListDataInitiate,
    deleteWishListDataInitiate,
};
