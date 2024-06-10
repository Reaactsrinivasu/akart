import * as types from "../../actions/actionTypes";

const initialState = {
  createTermsAndConditionsData: {
    users: [],
    token: null,
    loading: false,
  },
};
const termsAndConditionsDataReducer = (
  state = initialState.createTermsAndConditionsData,
  action
) => {
  switch (action.type) {
    case types.LOAD_TERMS_CONDITIONS_START:
      return {
        ...state,
        loading: true,
      };

    case types.LOAD_TERMS_CONDITIONS_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
      };
    case types.LOAD_TERMS_CONDITIONS_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
export default termsAndConditionsDataReducer;
