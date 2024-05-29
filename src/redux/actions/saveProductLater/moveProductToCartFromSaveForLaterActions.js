import * as types from "../actionTypes";
import {
  createProductMovetoCartFromSavedForLaterApi,
} from "../../apis/saveProductLater/saveProductLaterDataApi";

// move to cart product existing in save for later details
export const createProductMovetoCartFromSaveForLaterStart = (id, userInfo) => ({
  type: types.CREATE_PRODUCT_MOVETOCART_FROM_SAVE_FOR_LATER_START,
  payload: [id, userInfo],
});
export const createProductMovetoCartFromSaveForLaterSuccess = () => ({
  type: types.CREATE_PRODUCT_MOVETOCART_FROM_SAVE_FOR_LATER_SUCCESS,
});
export const createProductMovetoCartFromSaveForLaterError = (error) => ({
  type: types.CREATE_PRODUCT_MOVETOCART_FROM_SAVE_FOR_LATER_ERROR,
  payload: error,
});

export const createProductMovetoCartFromSaveForLaterInitiate = (
  id,
  navigate
) => {
  return function (dispatch) {
    dispatch(createProductMovetoCartFromSaveForLaterStart(id));
    createProductMovetoCartFromSavedForLaterApi(id)
      .then((res) => {
        console.log("res", res);
        dispatch(createProductMovetoCartFromSaveForLaterSuccess(res));
      })
      .catch((error) =>
        dispatch(createProductMovetoCartFromSaveForLaterError(error.message))
      );
  };
};
export default {
  createProductMovetoCartFromSaveForLaterInitiate,
};
