import * as types from "../../actions/actionTypes";
const initialState = {
  creatUserAddressData: {
    users: [],
    wishlistItems: [],
    token: null,
    loading: false,
  },
};
const userAddressReducer = (
  state = initialState.creatUserAddressData,
  action
) => {
  switch (action.type) {
    case types.CREATE_USER_ADDRESS_START:
      return {
        ...state,
        loading: true,
      };
    case types.CREATE_USER_ADDRESS_SUCCESS:
      return {
        ...state,
        loading: false,
      };
    case types.CREATE_USER_ADDRESS_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case types.LOAD_USER_ADDRESS_START:
      return {
        ...state,
        loading: true,
      };

    case types.LOAD_USER_ADDRESS_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
      };
    case types.LOAD_USER_ADDRESS_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case types.DELETE_USER_ADDRESS_START:
      return {
        ...state,
        loading: true,
      };
    case types.DELETE_USER_ADDRESS_SUCCESS:
      return {
        ...state,
        loading: false,
        users: state.users.filter((item) => item.id !== action.payload),
      };
    case types.DELETE_USER_ADDRESS_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    
    case types.UPDATE_USER_ADDRESS_START:
      return {
        ...state,
        loading: true,
      };
    case types.UPDATE_USER_ADDRESS_SUCCESS:
      return {
        ...state,
        loading: false,
      };
    case types.UPDATE_USER_ADDRESS_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
export default userAddressReducer;
