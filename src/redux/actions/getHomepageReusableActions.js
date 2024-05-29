import * as types from "../actions/actionTypes";
import createActionCreators from "./reusableGetActionCreator";
import createInitiator from "./reusableGetInitiator";
import { getApi } from "../apis/reusableApi";
// Action titles
const carouselTitle = "loadCaroouselData";
const apiTerms = {
  endPoints: "contents",
  subEndPoints: "home_carousel_data",
};
// Generate action creators
export const carouselActionCreators = createActionCreators({
  actionTypes: types.LOAD_HOME_CAROUSEL_DATA,
  title: carouselTitle, // Providing title as a string
});
// Generate reusable action initiator for carousel data
export const initiateLoadCarouselData = createInitiator(
  carouselActionCreators,
  () => getApi(apiTerms),
  carouselTitle,
);    
// initiateLoadCarouselData({
//   endPoints: "contents",
//   subEndPoints: "home_carousel_data",
// });
initiateLoadCarouselData(apiTerms);
