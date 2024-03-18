import * as types from "../actions/actionTypes";

const initialState = {
  createPasswordRecoveryDetails: {
    users: [],
    token: null,
    loading: false,
  },
};
const creatPasswordRecoveryReducer = (
  state = initialState.createPasswordRecoveryDetails,
  action
) => {
  switch (action.type) {
    case types.CREATE_PASSWORD_RECOVERY_START:
      // console.log('respin reducer', state);
      return {
        ...state,
        loading: true,
      };
    case types.CREATE_PASSWORD_RECOVERY_SUCCESS:
      return {
        ...state,
        loading: false,
      };
    case types.CREATE_PASSWORD_RECOVERY_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
export default creatPasswordRecoveryReducer;
