import * as types from "../actions/actionTypes";

const initialState = {
  updateUserDetails: {
    users: [],
    token: null,
    loading: false,
  },
};
const updateUserAccountReducer = (state = initialState.updateUserDetails, action) => {
  switch (action.type) {
    case types.UPDATE_USER_START:
      // console.log('respin reducer', state);
      return {
        ...state,
        loading: true,
      };
    case types.UPDATE_USER_SUCCESS:
      return {
        ...state,
        loading: false,
      };
    case types.UPDATE_USER_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
export default updateUserAccountReducer;
