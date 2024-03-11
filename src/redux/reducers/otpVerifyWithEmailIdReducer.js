import * as types from "../actions/actionTypes";

const initialState = {

  otpVerifyWithEmailIdDetials: {
    users: [],
    token: null,
    loading: false,
  },
};

const emailOtpVerfyReducer = (
  state = initialState.otpVerifyWithEmailIdDetials,
  action
) => {
  switch (action.type) {
    case types.VERIFY_OTP_USING_EMAILID_START:
      // console.log('respin reducer', state);
      return {
        ...state,
        loading: true,
      };
    case types.VERIFY_OTP_USING_EMAILID_SUCCESS:
      return {
        ...state,
        loading: false,
      };
    case types.VERIFY_OTP_USING_EMAILID_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
export default emailOtpVerfyReducer;
