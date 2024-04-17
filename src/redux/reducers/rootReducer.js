import { combineReducers } from "redux";
import resendOtpReducer from "./resendOtpReducer";
import emailLoginReducer from "./emailLoginReducer";
import mobileLoginReducer from "./mobileLoginReducer";
import emailSignupReducer from "./emailSignupReducer";
import mobileSignupReducer from "./mobileSignupReducer";
import updateUserAccountReducer from "./updateUserReducer";
import mobileOtpVerfyReducer from "./otpVerifyWithMobileReducer";
import creatPasswordRecoveryReducer from "./passwordRecoveryReducer";
import emailOtpVerfyReducer from "./otpVerifyWithEmailIdReducer";
import createNewPasswordReducer from "./createNewPasswordReducer";
//Home page reducers
import getHomeCarouselDataReducer from "./home/getHomeCarouselDataReducer"
import homeGrandGlobalDataReducer from "./home/getHomeGrandGlobalDataReducer";
import homeShopByCategoryDataReducer from "./home/getHomeShopByCategoryReducer";
import homeYouMayLikeDataReducer from "./home/getHomeYouMayLikeReducer";
import homeTodayDealsDataReducer from "./home/getHomeTodayDealsReducer";
import homeDiscountCardsDataReducer from "./home/getHomeDiscountCardsReducer";
const rootReducer = combineReducers({
  resendotpdata: resendOtpReducer,
  emaillogindata: emailLoginReducer,
  updateuserdata: updateUserAccountReducer,
  mobilelogindata: mobileLoginReducer,
  emailsignupdata: emailSignupReducer,
  mobilesignupdata: mobileSignupReducer,
  emailotpverifydata: emailOtpVerfyReducer,
  mobileotpverifydata: mobileOtpVerfyReducer,
  passwordrecoverydata: creatPasswordRecoveryReducer,
  createnewpassworddata: createNewPasswordReducer,
  // Home page data
  homecarouseldata: getHomeCarouselDataReducer,
  homeyoumaylikedata: homeYouMayLikeDataReducer,
  hometodaydealsdata: homeTodayDealsDataReducer,
  homegrandglobaldata: homeGrandGlobalDataReducer,
  homediscountcardsdata: homeDiscountCardsDataReducer,
  homeshopbycategorydata: homeShopByCategoryDataReducer,
});
export default rootReducer;
