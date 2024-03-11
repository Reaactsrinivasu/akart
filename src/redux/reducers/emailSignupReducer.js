import * as types from "../actions/actionTypes";

const initialState = {
  createEmailSignupDetails: {
    users: [],
    token: null,
    loading: false,
  },
};
const emailSignupReducer = (
  state = initialState.createEmailSignupDetails,
  action
) => {
  switch (action.type) {
    case types.SIGNUP_USING_EMAILID_START:
      // console.log('respin reducer', state);
      return {
        ...state,
        loading: true,
      };
    case types.SIGNUP_USING_EMAILID_SUCCESS:
      return {
        ...state,
        loading: false,
      };
    case types.SIGNUP_USING_EMAILID_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
export default emailSignupReducer;
