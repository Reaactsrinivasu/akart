import * as types from "../actions/actionTypes";

const initialState = {
  createResendOtpDetails: {
    users: [],
    token: null,
    loading: false,
  },
};
const resendOtpReducer = (
  state = initialState.createResendOtpDetails,
  action
) => {
  switch (action.type) {
    case types.CREATE_RESEND_OTP_START:
      // console.log('respin reducer', state);
      return {
        ...state,
        loading: true,
      };
    case types.CREATE_RESEND_OTP_SUCCESS:
      return {
        ...state,
        loading: false,
      };
    case types.CREATE_RESEND_OTP_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
export default resendOtpReducer;
