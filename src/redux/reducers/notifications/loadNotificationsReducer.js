import * as types from "../../actions/actionTypes";

const initialState = {
  loadeNotificationData: {
    users: [],
    token: null,
    loading: false,
  },
};
const loadNotificationReducer = (
  state = initialState.loadeNotificationData,
  action
) => {
  switch (action.type) {
    case types.LOAD_NOTIFICATIONS_START:
      return {
        ...state,
        loading: true,
      };

    case types.LOAD_NOTIFICATIONS_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
      };
    case types.LOAD_NOTIFICATIONS_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
export default loadNotificationReducer;
