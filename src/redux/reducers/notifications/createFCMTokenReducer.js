
import * as types from "../../actions/actionTypes";

const initialState = {
  createNotificationData: {
    users: [], 
    token: null,
    loading: false,
  },
};
const createFCMTokenReducer = (
  state = initialState.createNotificationData,
  action
) => {
  switch (action.type) {
    case types.CREATE_FCM_TOKEN_START:
      return {
        ...state,
        loading: true,
      };
    case types.CREATE_FCM_TOKEN_SUCCESS:
      return {
        ...state,
        loading: false,
      };
    case types.CREATE_FCM_TOKEN_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
export default createFCMTokenReducer;
