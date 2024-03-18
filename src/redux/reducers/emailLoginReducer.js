import * as types from "../actions/actionTypes";

const initialState = {
  createEmailLoginDetails: {
    users: [],
    token: null,
    loading: false,
  },
};
const emailLoginReducer = (
  state = initialState.createEmailLoginDetails,
  action
) => {
  switch (action.type) {
    case types.LOGIN_WITH_EMAILID_START:
      // console.log('respin reducer', state);
      return {
        ...state,
        loading: true,
      };
    case types.LOGIN_WITH_EMAILID_SUCCESS:
      return {
        ...state,
        loading: false,
      };
    case types.LOGIN_WITH_EMAILID_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
export default emailLoginReducer;
