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
const rootReducer = combineReducers({
  resendotpdata: resendOtpReducer,
  emaillogindata: emailLoginReducer,
  updateuserdata: updateUserAccountReducer,
  mobilelogindata: mobileLoginReducer,
  emailsignupdata: emailSignupReducer,
  mobilesignupdata: mobileSignupReducer,
  emailotpverifydata: emailOtpVerfyReducer,
  mobileotpverifydata: mobileOtpVerfyReducer,
  passwordrecoverydata:creatPasswordRecoveryReducer,
  createnewpassworddata: createNewPasswordReducer,
});
export default rootReducer;
