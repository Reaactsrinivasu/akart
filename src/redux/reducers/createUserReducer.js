import * as types from "../actions/actionTypes";

const initialState = {
  creatUserDetails: {
    users: [],
    token: null,
    loading: false,
  },
};
const creatUserAccountReducer = (state = initialState.creatUserDetails, action) => {
  switch (action.type) {
    case types.CREATE_USER_START:
      // console.log('respin reducer', state);
      return {
        ...state,
        loading: true,
      };
    case types.CREATE_USER_SUCCESS:
      return {
        ...state,
        loading: false,
      };
    case types.CREATE_USER_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
export default creatUserAccountReducer;
