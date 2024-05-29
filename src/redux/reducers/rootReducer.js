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
// product page reducers
import productDataReducer from "./Product/getProductWtihSubCategoryReducer";
// inner product page reducers
import innerProductDataReducer from "./InnerProduct/getInnerProductWithIdReducer";
// wishlist page reducer
import wishListDataReducer from "./wishList/wishListDataReducer";
// add to cart data
import addProductToCartDataReducer from "./addToCart/addToCartDataReducer";
// save for later data
import saveProductForLaterDataReducer from "./saveProductLater/saveProductLaterDataReducer";

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
  // product page data
  productdata: productDataReducer,
  // innerproduct page data
  innerproductdata: innerProductDataReducer,
  // wishlist page data
  wishlistdata: wishListDataReducer,
  // add to cart page data
  addtocartdata: addProductToCartDataReducer,
  // save for later data
  saveforlaterdata: saveProductForLaterDataReducer,
});
export default rootReducer;
