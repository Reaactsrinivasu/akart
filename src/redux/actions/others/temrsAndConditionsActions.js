import * as types from "../actionTypes";
import { loadTermsAndConditionsApi } from "../../apis/others/termsAndCondtionsApi";

export const loadTermsAndConditionsStart = () => ({
  type: types.LOAD_TERMS_CONDITIONS_START,
});
export const loadTermsAndConditionsSuccess = (data) => ({
  type: types.LOAD_TERMS_CONDITIONS_SUCCESS,
  payload: data,
});
export const loadTermsAndConditionsError = (error) => ({
  type: types.LOAD_TERMS_CONDITIONS_ERROR,
  payload: error,
});



export const loadTermsAndConditionsInitiate = (user, navigate) => {
  return function (dispatch) {
    dispatch(loadTermsAndConditionsStart());
    loadTermsAndConditionsApi()
      .then((res) => {
        console.log("res", res);
        dispatch(loadTermsAndConditionsSuccess(res));
      })
      .catch((error) => dispatch(loadTermsAndConditionsError(error.message)));
  };
};
export default {
  loadTermsAndConditionsInitiate,
};