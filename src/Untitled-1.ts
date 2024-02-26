import * as React from "react";
import { Typography } from "@mui/joy";
import CssBaseline from "@mui/joy/CssBaseline";
import { CssVarsProvider, extendTheme } from "@mui/joy/styles";
// import "./App.css";
// import Home from "./pages/UserAuthentication/Home/Home";
import Login from "./pages/UserAuthentication/Login/Login";
import MobileLogin from "./pages/UserAuthentication/Login/MobileLogin";
import EmailLogin from "./pages/UserAuthentication/Login/EmailLogin";
import SignUp from "./pages/UserAuthentication/SignUp/SignUp";
import MobileSignUp from "./pages/UserAuthentication/SignUp/MobileSignUp";
import EmailSignUp from "./pages/UserAuthentication/SignUp/EmailSignUp";
import PasswordRecovery from "./pages/UserAuthentication/PasswordManagement/ForgetPassword/PasswordRecovery"
import PasswordAuthentication from "./pages/UserAuthentication/PasswordManagement/ForgetPassword/PasswordAuthentication";
import UpdatePassword from "./pages/UserAuthentication/PasswordManagement/UpdatePassword/UpdatePassword";
import CreateUserAccount from "./pages/UserAuthentication/UserAccount/CreateUserAccount";
import CreateNewPassword from "./pages/UserAuthentication/PasswordManagement/ForgetPassword/CreateNewPassword";

const theme = extendTheme({
  palette: {
    background: {
      default: "pink",
    },
  },
});
function App() {
  return (
    <>
      <CssVarsProvider theme={theme}>
      <Typography>Welcome to E-commerce app</Typography>
       </CssVarsProvider>
      {/* <Login /> */}
      {/* <Home /> */}
      {/* <Login /> */}
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

