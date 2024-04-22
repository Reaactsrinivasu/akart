import * as React from "react";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { Routes, Route } from "react-router-dom";
import { Suspense, useLayoutEffect } from "react";
// import Loader from "./common/Loader";
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
const OrderInvoice = React.lazy(() => import('./pages/OrderManagementPages/OrderInvoice') )
const OrderManagement = React.lazy(() => import('./pages/OrderManagementPages/OrderManagement'))

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
            <Route path="/products" exact element={<Products />} />
            <Route path="/innerproducts" exact element={<InnerProductpage />} />
            <Route path='/orderinvoice' exact element={<OrderInvoice />} />
            <Route path='/ordermanagement' exact element = { <OrderManagement /> } />
           </Routes>
        </Suspense>
      </GoogleOAuthProvider>
    </>
  );
};
export default Approutes;
