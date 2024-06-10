import * as types from "../../actions/actionTypes";

const initialState = {
  createPrivacyAndPolicyData: {
    users: [],
    token: null,
    loading: false,
  },
};
const privacyAndPolicyDataReducer = (
  state = initialState.createPrivacyAndPolicyData,
  action
) => {
  switch (action.type) {
    
    case types.LOAD_PRIVACY_POLICY_START:
      return {
        ...state,
        loading: true,
      };

    case types.LOAD_PRIVACY_POLICY_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
      };
    case types.LOAD_PRIVACY_POLICY_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
export default privacyAndPolicyDataReducer;
