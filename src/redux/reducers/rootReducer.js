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
// order data 
import orderDataReducer from "./orderDetails/orderDeatilsReducer";
// my profile user data
import getUserDataReducer from "./getUserReducer";
// user address data
import userAddressReducer from "./address/userAddressDetailsReducer";
// privacy and policy data
import privacyAndPolicyDataReducer from "./others/privacyAndPolicyReducer";
// terms and conditins
import termsAndConditionsDataReducer from "./others/termsAndConditonsReducer";
// notification preferences
import notificationPreferenceReducer from "./notificationPreferences/notificationPreferenceReducer";
// about us
import aboutUsDataReducer from "./others/aboutUsReducer";
// checkoutorderdata
import orderInCheckOutReducer from "./payments/checkOutPageReducer";
// payment with cod 
import paymentWithCodReducer from "./payments/paymentWithCodReducer";
// adding  fcm token to backend
import createFCMTokenReducer from "./notifications/createFCMTokenReducer";
// notifications data 
import loadNotificationReducer from "./notifications/loadNotificationsReducer";
// create transaction 
import transactionReducer from "./payments/transactionReducer";
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
   // order details
   orderdata: orderDataReducer,
   // getting user account data into My profile dashboard
   myprofileuserdata: getUserDataReducer,
   // user address details
   useraddressdata: userAddressReducer,
   // privacy and Policy data
   privacyandpolicydata: privacyAndPolicyDataReducer,
   // terms and conditions data
   termsandconditionsdata: termsAndConditionsDataReducer,

   // notification Preferences
   notificationpreferencedata: notificationPreferenceReducer,
   // abour us
   aboutusdata: aboutUsDataReducer,
   // checkoutorderdata
   checkoutorderdata: orderInCheckOutReducer,
   // payment with cod
   codpaymentdata: paymentWithCodReducer,
   // creating fcm token
   addfcmtokendata: createFCMTokenReducer,
   // get notifications data
   getnotificationdata: loadNotificationReducer,
   //  create transaction data
   createtransaction: transactionReducer,
 });
export default rootReducer;
