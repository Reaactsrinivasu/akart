import * as types from "../../actions/actionTypes";

const initialState = {
  createAboutUsData: {
    users: [],
    token: null,
    loading: false,
  },
};
const aboutUsDataReducer = (
  state = initialState.createAboutUsData,
  action
) => {
  switch (action.type) {
    case types.LOAD_ABOUT_US_START:
      return {
        ...state,
        loading: true,
      };

    case types.LOAD_ABOUT_US_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
      };
    case types.LOAD_ABOUT_US_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
export default aboutUsDataReducer;
