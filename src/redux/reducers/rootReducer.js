import { combineReducers } from "redux";
import emailSignupReducer from "./emailSignupReducer";
import emailOtpVerfyReducer from "./otpVerifyWithEmailIdReducer";
import creatUserAccountReducer from "./createUserReducer";
const rootReducer = combineReducers({
  emailsignupdata: emailSignupReducer,
  emailotpverifydata: emailOtpVerfyReducer,
  useraccountdata: creatUserAccountReducer,
});
export default rootReducer;
