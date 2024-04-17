import { loadHomeDiscountCardsDataApi } from "../../apis/home/getHomeDiscountCardsApi";
import * as types from "../actionTypes";

//loading  all users details
export const loadDiscountCardsDataStart = () => ({
  type: types.LOAD_HOME_DISCOUNT_CARDS_DATA_START,
});
export const loadDiscountCardsDataSuccess = (data) => {
  const action = {
    type: types.LOAD_HOME_DISCOUNT_CARDS_DATA_SUCCESS,
    payload: data,
  };
  console.log("data:", data); // Log the action
  return action;
};
export const loadDiscountCardsDataError = (error) => ({
  type: types.LOAD_HOME_DISCOUNT_CARDS_DATA_ERROR,
  payload: error,
});
export const getHomeDiscountCardsDataInitiate = (user, navigate) => {
  return function (dispatch) {
    dispatch(loadDiscountCardsDataStart());
    loadHomeDiscountCardsDataApi()
      .then((res) => {
        console.log("res", res);
        dispatch(loadDiscountCardsDataSuccess(res));
      })
      .catch((error) => dispatch(loadDiscountCardsDataError(error.message)));
  };
};
export default {
  getHomeDiscountCardsDataInitiate,
};
