import * as types from "../actions/actionTypes";

const initialState = {
  otpVerifyWithMobileDetials: {
    users: [],
    token: null,
    loading: false,
  },
};

const mobileOtpVerfyReducer = (
  state = initialState.otpVerifyWithMobileDetials,
  action
) => {
  switch (action.type) {
    case types.VERIFY_OTP_USING_MOBILE_NUMBER_START:
      // console.log('respin reducer', state);
      return {
        ...state,
        loading: true,
      };
    case types.VERIFY_OTP_USING_MOBILE_NUMBER_SUCCESS:
      return {
        ...state,
        loading: false,
      };
    case types.VERIFY_OTP_USING_MOBILE_NUMBER_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
export default mobileOtpVerfyReducer;
