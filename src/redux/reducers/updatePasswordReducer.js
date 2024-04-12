import * as types from "../actions/actionTypes";

const initialState = {
  createUpdatePasswordDetails: {
    users: [],
    token: null,
    loading: false,
  },
};
const createUpdatePasswordReducer = (
  state = initialState.createUpdatePasswordDetails,
  action
) => {
  switch (action.type) {
    case types.UPDATE_PASSWORD_START:
      // console.log('respin reducer', state);
      return {
        ...state,
        loading: true,
      };
    case types.UPDATE_PASSWORD_SUCCESS:
      return {
        ...state,
        loading: false,
      };
    case types.UPDATE_PASSWORD_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
export default createUpdatePasswordReducer;
