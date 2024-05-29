import * as types from "../actionTypes";
import {
  loadSaveProductForLaterApi,
  createSaveProductForLaterApi,
  deleteSaveProductForLaterApi,
} from "../../apis/saveProductLater/saveProductLaterDataApi";

//adding product for later details
export const createSaveProductForLaterStart = (users) => {
  return {
    type: types.CREATE_SAVE_PRODUCT_FOR_LATER_START,
    payload: users,
  };
};
export const createSaveProductForLaterSuccess = () => ({
  type: types.CREATE_SAVE_PRODUCT_FOR_LATER_SUCCESS,
});
export const createSaveProductForLaterError = (error) => ({
  type: types.CREATE_SAVE_PRODUCT_FOR_LATER_ERROR,
  payload: error,
});
//loading product for later details
export const loadSaveProductForLaterStart = () => ({
  type: types.LOAD_SAVE_PRODUCT_FOR_LATER_START,
});
export const loadSaveProductForLaterSuccess = (data) => ({
  type: types.LOAD_SAVE_PRODUCT_FOR_LATER_SUCCESS,
  payload: data,
});
export const loadSaveProductForLaterError = (error) => ({
  type: types.LOAD_SAVE_PRODUCT_FOR_LATER_ERROR,
  payload: error,
});
//deleting product for laterdetails
export const deleteSaveProductForLaterStart = (userId) => ({
  type: types.DELETE_SAVE_PRODUCT_FOR_LATER_START,
  payload: userId,
});
export const deleteSaveProductForLaterSuccess = (userId) => ({
  type: types.DELETE_SAVE_PRODUCT_FOR_LATER_SUCCESS,
  payload: userId,
});
export const deleteSaveProductForLaterError = (error) => ({
  type: types.DELETE_SAVE_PRODUCT_FOR_LATER_ERROR,
  payload: error,
});

export const createSaveProductForLaterInitiate = (user, navigate) => {
  return function (dispatch) {
    dispatch(createSaveProductForLaterStart(user));
    createSaveProductForLaterApi(user)
      .then((res) => {
        console.log("res", res);
        dispatch(createSaveProductForLaterSuccess(res));
      })
      .catch((error) => dispatch(createSaveProductForLaterError(error.message)));
  };
};
export const loadSaveProductForLaterInitiate = (user, navigate) => {
  return function (dispatch) {
    dispatch(loadSaveProductForLaterStart(user));
    loadSaveProductForLaterApi(user)
      .then((res) => {
        console.log("res", res);
        dispatch(loadSaveProductForLaterSuccess(res));
      })
      .catch((error) => dispatch(loadSaveProductForLaterError(error.message)));
  };
};
export const deleteSaveProductForLaterInitiate = (id, navigate) => {
  return function (dispatch) {
    dispatch(deleteSaveProductForLaterStart(id));
    deleteSaveProductForLaterApi(id)
      .then((res) => {
        console.log("res", res);
        dispatch(deleteSaveProductForLaterSuccess(res));
      })
      .catch((error) => dispatch(deleteSaveProductForLaterError(error.message)));
  };
};

export default {
  createSaveProductForLaterInitiate,
  loadSaveProductForLaterInitiate,
  deleteSaveProductForLaterInitiate,
  
};
