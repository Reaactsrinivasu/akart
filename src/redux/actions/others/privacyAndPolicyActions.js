import * as types from "../actionTypes";
import { loadPrivacyAndPolicyApi } from "../../apis/others/privacyAndPolicyApi";

export const loadPrivacyAndPolicyStart = () => ({
  type: types.LOAD_PRIVACY_POLICY_START,
});
export const loadPrivacyAndPolicySuccess = (data) => ({
  type: types.LOAD_PRIVACY_POLICY_SUCCESS,
  payload: data,
});
export const loadPrivacyAndPolicyError = (error) => ({
  type: types.LOAD_PRIVACY_POLICY_ERROR,
  payload: error,
});

export const loadPrivacyAndPolicyInitiate = (user, navigate) => {
  return function (dispatch) {
    dispatch(loadPrivacyAndPolicyStart());
    loadPrivacyAndPolicyApi()
      .then((res) => {
        console.log("res", res);
        dispatch(loadPrivacyAndPolicySuccess(res));
      })
      .catch((error) => dispatch(loadPrivacyAndPolicyError(error.message)));
  };
};
export default {
  loadPrivacyAndPolicyInitiate,
};
