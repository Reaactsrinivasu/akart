import * as types from "../../actions/actionTypes";
const initialState = {
  creatDisLikesData: {
    users: [],
    token: null,
    loading: false,
  },
};
const createDisLikesReducer = (state = initialState.creatDisLikesData, action) => {
  switch (action.type) {
    case types.CREATE_DISLIKES_START:
      return {
        ...state,
        loading: true,
      };
    case types.CREATE_DISLIKES_SUCCESS:
      return {
        ...state,
        loading: false,
      };
    case types.CREATE_DISLIKES_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case types.LOAD_LIKES_START:
      return {
        ...state,
        loading: true,
      };

    case types.LOAD_LIKES_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
      };
    case types.LOAD_LIKES_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
export default createDisLikesReducer;
