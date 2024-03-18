import * as types from "../actions/actionTypes";
const initialState = {
  createMobileSignupDetails: {
    users: [],
    token: null,
    loading: false,
  },
};
const mobileSignupReducer = (
  state = initialState.createMobileSignupDetails,
  action
) => {
  switch (action.type) {
    case types.SIGNUP_USING_MOBILE_NUMBER_START:
      return {
        ...state,
        loading: true,
      };
    case types.SIGNUP_USING_MOBILE_NUMBER_SUCCESS:
      return {
        ...state,
        loading: false,
      };
    case types.SIGNUP_USING_MOBILE_NUMBER_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
export default mobileSignupReducer;
