import * as types from "../../actions/actionTypes";
const initialState = {
  creatNotificationPreferenceData: {
    users: [],
    token: null,
    loading: false,
  },
};
const notificationPreferenceReducer = (
  state = initialState.creatNotificationPreferenceData,
  action
) => {
  switch (action.type) {
    case types.LOAD_NOTIFICATION_PREFERENCES_START:
      return {
        ...state,
        loading: true,
      };
    case types.LOAD_NOTIFICATION_PREFERENCES_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
      };
    case types.LOAD_NOTIFICATION_PREFERENCES_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case types.UPDATE_NOTIFICATION_PREFERENCES_START:
      return {
        ...state,
        loading: true,
      };
    case types.UPDATE_NOTIFICATION_PREFERENCES_SUCCESS:
      return {
        ...state,
        loading: false,
      };
    case types.UPDATE_NOTIFICATION_PREFERENCES_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
export default notificationPreferenceReducer;
