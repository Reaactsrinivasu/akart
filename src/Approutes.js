import * as React from "react";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { Routes, Route } from "react-router-dom";
import { Suspense, useLayoutEffect } from "react";
import { useParams } from "react-router-dom";
// import Loader from "./common/Loader";

const MyProfile = React.lazy(() => import("./pages/MyProfile/MyProfile"));
const PaymementStatus = React.lazy(() =>
  import("./pages/Payments/PaymementStatus")
);
const MyProfileMyAccounts = React.lazy(() =>
  import("./pages/MyProfile/MyProfileMyAccounts")
);
const MyProfileAddress = React.lazy(() =>
  import("./pages/MyProfile/MyProfileAddress")
);
const MyProfileAllNotifications = React.lazy(() =>
  import("./pages/MyProfile/MyProfileAllNotifications")
);

const MyProfileNotificationPreferences = React.lazy(() =>
  import("./pages/MyProfile/MyProfileNotificationPreferences")
);

const MyProfileAboutUs = React.lazy(() =>
  import("./pages/MyProfile/MyProfileAboutUs")
);
const MyProfileTermsofUse = React.lazy(() =>
  import("./pages/MyProfile/MyProfileTermsofUse")
);
const MyProfilePrivacyPolicy = React.lazy(() =>
  import("./pages/MyProfile/MyProfilePrivacyPolicy")
);

const CheckoutPage = React.lazy(() => import("./pages/Payments/CheckoutPage"));
const Payments = React.lazy(() =>
  import("./pages/Payments/Payments")
);
const ViewOrder = React.lazy(() =>
  import("./pages/OrderManagement/ViewOrder")
);
const Orders = React.lazy(() => import("./pages/OrderManagement/Order"));

const AddtoCart = React.lazy(() =>
  import("./pages/AddToCart/AddtoCart")
);
const WishList = React.lazy(() => import("./pages/WishList/WishList"));
const InnerProductpage = React.lazy(() =>
  import("./pages/Products/InnerProducts/InnerProductpage")
);
const Products = React.lazy(() => import("./pages/Products/Products/Products"));
const UpdatePassword = React.lazy(() =>
  import(
    "./pages/UserAuthentication/PasswordManagement/UpdatePassword/UpdatePassword"
  )
);
const CreateNewPassword = React.lazy(() =>
  import(
    "./pages/UserAuthentication/PasswordManagement/ForgetPassword/CreateNewPassword"
  )
);
const WelcomePage = React.lazy(() => import("./common/WelcomePage"));
const PasswordRecoveryWithMobile = React.lazy(() =>
  import(
    "./pages/UserAuthentication/PasswordManagement/ForgetPassword/PasswordRecoveryWithMobile"
  )
);
const PasswordRecoveryWithEmail = React.lazy(() =>
  import(
    "./pages/UserAuthentication/PasswordManagement/ForgetPassword/PasswordRecoveryWithEmail"
  )
);
const Login = React.lazy(() =>
  import("./pages/UserAuthentication/Login/Login")
);
const EmailLogin = React.lazy(() =>
  import("./pages/UserAuthentication/Login/EmailLogin")
);
const MobileLogin = React.lazy(() =>
  import("./pages/UserAuthentication/Login/MobileLogin")
);
const Home = React.lazy(() => import("./pages/UserAuthentication/Home/Home"));
const SignUp = React.lazy(() => import("./pages/UserAuthentication/SignUp/SignUp"));
const EmailSignUp = React.lazy(() =>
  import("./pages/UserAuthentication/SignUp/EmailSignUp")
);
const MobileSignUp = React.lazy(() =>
  import("./pages/UserAuthentication/SignUp/MobileSignUp")
);
const OtpVerification = React.lazy(() =>
  import("./pages/UserAuthentication/OtpManagement/OtpVerification")
);
const OtpVerifyForNewPassword = React.lazy(() =>
  import("./pages/UserAuthentication/OtpManagement/OtpVerifyForNewPassword")
);
const UpdateUserAccount = React.lazy(() =>
  import("./pages/UserAuthentication/UserAccount/UpdateUserAccount")
);
const TermsOfUse = React.lazy(() => import("./pages/Others/TermsOfUse"));
const PrivacyPolicy = React.lazy(() => import("./pages/Others/PrivacyPolicy"));
const Approutes = () => {
    //   <Suspense
    //       fallback={
    //         <p style={{ textAlign: "center" }}>
    //           <Loader />
    //         </p>
    //       }
    //     ></Suspense>
     const clientId =
       "343815088263-8loj9gthmnittp53chc5l0g8j6dedls0.apps.googleusercontent.com";
  return (
    <>
      <GoogleOAuthProvider clientId={clientId}>
        <Suspense fallback={<div>{}</div>}>
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/login" exact element={<Login />} />
            <Route path="/login/email" exact element={<EmailLogin />} />
            <Route path="/login/mobile" element={<MobileLogin />} />
            <Route path="/signup" exact element={<SignUp />} />
            <Route path="/signup/emailsignup" exact element={<EmailSignUp />} />
            <Route path="/createnewpwd" exact element={<CreateNewPassword />} />
            <Route
              path="/signup/mobilesignup"
              exact
              element={<MobileSignUp />}
            />
            <Route path="/otp/otpverify" exact element={<OtpVerification />} />
            <Route
              path="/otp/otpverifyfornewpassword"
              exact
              element={<OtpVerifyForNewPassword />}
            />
            <Route path="/register" exact element={<UpdateUserAccount />} />
            {/* <Route path="/otp/mobileotp" exact element={<WelcomePage />} /> */}
            <Route path="/welcomepage" exact element={<WelcomePage />} />
            <Route
              path="/emailpwdrecovery"
              exact
              element={<PasswordRecoveryWithEmail />}
            />
            <Route
              path="/mobilepwdrecovery"
              exact
              element={<PasswordRecoveryWithMobile />}
            />
            <Route path="/updatepassword" exact element={<UpdatePassword />} />
            <Route path="products/:category" exact element={<Products />} />
            {/* <Route path="innerproducts/:category/:id" exact element={<InnerProductpage />} /> */}
            {/* <Route path='innerproducts/:product_name' exact element={<InnerProductpage />} /> */}
            <Route
              path="innerproducts/:link_name"
              exact
              element={<InnerProductpage />}
            />
            {/* <Route path='innerproducts/:category/:product_id' exact element={<InnerProductpage />} /> */}
            <Route path="/wishlist" exact element={<WishList />} />
            <Route path="/addtocart" exact element={<AddtoCart />} />
            <Route path="/orders" exact element={<Orders />} />
            <Route path="/vieworders" exact element={<ViewOrder />} />
            <Route path="/checkout" exact element={<CheckoutPage />} />
            <Route path="/payments" exact element={<Payments />} />
            <Route path="/paymentstatus" exact element={<PaymementStatus />} />
            <Route path="/termsofuse" exact element={<TermsOfUse />} />
            <Route path="/privacypolicy" exact element={<PrivacyPolicy />} />

            <Route path="/myprofile" exact element={<MyProfile />}>
              <Route path="/myprofile/aboutus" element={<MyProfileAboutUs />} />
              <Route
                path="/myprofile/notificationprefereances"
                element={<MyProfileNotificationPreferences />}
              />
              <Route
                path="/myprofile/allnotifications"
                element={<MyProfileAllNotifications />}
              />
              <Route path="/myprofile/address" element={<MyProfileAddress />} />
              <Route
                path="/myprofile/accounts"
                element={<MyProfileMyAccounts />}
              />
            </Route>
          </Routes>
        </Suspense>
      </GoogleOAuthProvider>
    </>
  );
};
export default Approutes;
