import * as types from "../actions/actionTypes";

const initialState = {
  createNewPasswordDetails: {
    users: [],
    token: null,
    loading: false,
  },
};
const createNewPasswordReducer = (
  state = initialState.createNewPasswordDetails,
  action
) => {
  switch (action.type) {
    case types.CREATE_NEW_PASSWORD_START:
      // console.log('respin reducer', state);
      return {
        ...state,
        loading: true,
      };
    case types.CREATE_NEW_PASSWORD_SUCCESS:
      return {
        ...state,
        loading: false,
      };
    case types.CREATE_NEW_PASSWORD_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
export default createNewPasswordReducer;
