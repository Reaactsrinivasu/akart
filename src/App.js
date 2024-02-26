import * as React from "react";
import { GoogleOAuthProvider } from "@react-oauth/google";
import "./App.css";
// import Home from "./pages/UserAuthentication/Home/Home";
import Login from "./pages/UserAuthentication/Login/Login";
// import MobileLogin from "./pages/UserAuthentication/Login/MobileLogin";
// import EmailLogin from "./pages/UserAuthentication/Login/EmailLogin";
// import SignUp from "./pages/UserAuthentication/SignUp/SignUp";
// import MobileSignUp from "./pages/UserAuthentication/SignUp/MobileSignUp";
// import EmailSignUp from "./pages/UserAuthentication/SignUp/EmailSignUp";
// import PasswordRecovery from "./pages/UserAuthentication/PasswordManagement/ForgetPassword/PasswordRecovery"
// import PasswordAuthentication from "./pages/UserAuthentication/PasswordManagement/ForgetPassword/PasswordAuthentication";
// import UpdatePassword from "./pages/UserAuthentication/PasswordManagement/UpdatePassword/UpdatePassword";
// import CreateUserAccount from "./pages/UserAuthentication/UserAccount/CreateUserAccount";
// import CreateNewPassword from "./pages/UserAuthentication/PasswordManagement/ForgetPassword/CreateNewPassword";
function App() {
  const clientId = "343815088263-8loj9gthmnittp53chc5l0g8j6dedls0.apps.googleusercontent.com";
  return (
    <>
      <GoogleOAuthProvider clientId={clientId}>
      <Login />
      </GoogleOAuthProvider>
      {/* <SignUp /> */}
      {/* <EmailLogin /> */}
      {/* <Login /> */}
      {/* <Home /> */}
      {/* <MobileLogin />
      <EmailLogin />
      <SignUp />
      <MobileSignUp />
      <EmailSignUp />
      <PasswordRecovery />
      <PasswordAuthentication />
      <UpdatePassword />
    <CreateUserAccount />  */}
      {/* <CreateNewPassword /> */}
    </>
  );
}
export default App;
