import * as types from "../actions/actionTypes";

const initialState = {
  getUserData: {
    users: [],
    getUserItems: [],
    token: null,
    loading: false,
  },
};
const getUserDataReducer = (state = initialState.getUserData, action) => {
  switch (action.type) {
    case types.LOAD_USER_START:
      return {
        ...state,
        loading: true,
      };

    case types.LOAD_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
      };
    case types.LOAD_USER_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    //updating existing user details
    // case types.UPDATE_WISHLIST_PRODUCT_START:
    //   return {
    //     ...state,
    //     loading: true,
    //   };
    // case types.UPDATE_WISHLIST_PRODUCT_SUCCESS:
    //   return {
    //     ...state,
    //     loading: false,
    //   };
    // case types.UPDATE_WISHLIST_PRODUCT_ERROR:
    //   return {
    //     ...state,
    //     loading: false,
    //     error: action.payload,
    //   };
    default:
      return state;
  }
};
export default getUserDataReducer;
