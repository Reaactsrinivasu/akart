import React, { useState,useEffect } from "react"
import { googleLogout, useGoogleLogin } from "@react-oauth/google";
import FacebookLogin from "react-facebook-login/dist/facebook-login-render-props";
import { useNavigate, useLocation } from "react-router-dom";
import Imports from "../../../common/Imports";
import DataTerms from "../../../common/DataTerms";
import axios from "axios";
import {
  Box,
  TextField,
  InputLabel,
  Typography,
  Button,
  Divider,
  CircularProgress,
} from "@mui/material";
import Link from "@mui/material/Link";
const GoogleIcon = "assets/imgs/google.png";
const FacebookIcon = "assets/imgs/facebook.png";

console.log('Imports', Imports);
console.log('DataTerms', DataTerms);
const Login = () => {
 
  return (
    <>
      <Imports.ReusableContainer maxWidth="xs">
        <Imports.ReusableBox>
          <Imports.ReusablePaper>
            <form>
              <Imports.Grid
                container
                direction="column"
                justifyContent="flex-start"
              >
                <Imports.ReusableTypography
                  variant="h4"
                  component="h1"
                  sx={{ color: "#111" }}
                >
                  Sign In
                </Imports.ReusableTypography>

                <Imports.ReusableInputLabel
                  sx={{ fontWeight: 500, marginTop: 1, color: "#222" }}
                  htmlFor="name"
                >
                  Enter email or mobile number
                </Imports.ReusableInputLabel>
                <Imports.ReusableFormTextField
                  placeholder="email or mobile number"
                  type="text"
                  name="name"
                  id="name"
                  variant="outlined"
                  size="small"
                />
                <Imports.ReusableButton
                  id="register-btn"
                  // type="submit"
                  onClick={(e) => handleSubmit(e)}
                  fullWidth
                  variant="contained"
                  sx={{ mt: 2 }}
                >
                  Continue
                </Imports.ReusableButton>
              </Imports.Grid>
            </form>
            <Imports.Grid container display="flex" flexDirection="column">
              <Imports.Grid item xs>
                {/* <Link href="#" variant="body2">
                      Forgot password?
                    </Link> */}
              </Imports.Grid>
              <Imports.Grid item>
                <Imports.Link
                  // href="#"
                  variant="body2"
                  underline="none"
                  sx={{ cursor: "pointer" }}
                  onClick={() => navigate("/signup")}
                >
                  {"Not a memeber ? Sign Up"}
                </Imports.Link>
              </Imports.Grid>
              <Imports.ReusableDivider
                // variant="middle"
                sx={{
                  marginRight: "1px",
                  marginLeft:'1px',
                  // marginTop: "-2px",
                  // marginBottom: "5px",
                  "& .MuiDivider-wrapper": {
                    marginLeft: "-8px",
                    marginRight: "-8px",
                  },
                }}
              >
                <Imports.ReusableChip label="or" size="small" />
              </Imports.ReusableDivider>
            </Imports.Grid>
            
          </Imports.ReusablePaper>
          {/* <form onSubmit={onSubmitHandler}> */}
        </Imports.ReusableBox>
      </Imports.ReusableContainer>
    </>
  );
};
export default Login;
  <Imports.Box sx={{ backgroundColor: "cyan" }}>
    <Imports.ReusableContainer maxWidth="xs">
      <Imports.ReusableBox>
        <Imports.ReusablePaper>
          <form>
            <Imports.Grid
              container
              direction="column"
              justifyContent="flex-start"
            >
              <Imports.ReusableTypography
                variant="h4"
                component="h1"
                sx={{ color: "#111" }}
              >
                Sign In
              </Imports.ReusableTypography>

              <Imports.ReusableInputLabel
                sx={{ fontWeight: 500, marginTop: 1, color: "#222" }}
                htmlFor="name"
              >
                Enter email or mobile number
              </Imports.ReusableInputLabel>
              <Imports.ReusableFormTextField
                placeholder="email or mobile number"
                type="text"
                name="name"
                id="name"
                variant="outlined"
                size="small"
              />
              <Imports.ReusableButton
                id="register-btn"
                // type="submit"
                onClick={(e) => handleSubmit(e)}
                fullWidth
                variant="contained"
                sx={{ mt: 2 }}
              >
                Continue
              </Imports.ReusableButton>
            </Imports.Grid>
          </form>
          <Imports.Grid container display="flex" flexDirection="column">
            <Imports.Grid item xs>
              {/* <Link href="#" variant="body2">
                      Forgot password?
                    </Link> */}
            </Imports.Grid>
            <Imports.Grid item>
              <Imports.Link
                // href="#"
                variant="body2"
                underline="none"
                sx={{ cursor: "pointer" }}
                onClick={() => navigate("/signup")}
              >
                {"Not a memeber ? Sign Up"}
              </Imports.Link>
            </Imports.Grid>
            <Imports.ReusableDivider
              // variant="middle"
              sx={{
                marginRight: "1px",
                marginLeft: "1px",
                // marginTop: "-2px",
                // marginBottom: "5px",
                "& .MuiDivider-wrapper": {
                  marginLeft: "-8px",
                  marginRight: "-8px",
                },
              }}
            >
              <Imports.ReusableChip label="or" size="small" />
            </Imports.ReusableDivider>
          </Imports.Grid>
        </Imports.ReusablePaper>
        {/* <form onSubmit={onSubmitHandler}> */}
      </Imports.ReusableBox>
    </Imports.ReusableContainer>
</Imports.Box>;
  
   <Container
     component="main"
     maxWidth="xs"
     sx={{
       margin: "auto",
       // backgroundColor:'yellow',
     }}
   >
     {profile ? (
       <div>
         <h3>User Logged in</h3>
         <img src={profile?.picture} alt="user pic" />
         <Typography variant="h5">Welcome {profile.name}</Typography>
         <Typography variant="h6">email:{profile.email}</Typography>
         <br />
         <br />
         <Button
           onClick={logOut}
           variant="contained"
           sx={{ mt: 3, mb: 2, textTransform: "none" }}
         >
           Log out
         </Button>
       </div>
     ) : (
       <Box>
         <Paper
           elevation={1}
           variant="elevation"
           square={false}
           sx={{
             marginTop: 8,
             padding: "10px",
             display: "flex",
             flexDirection: "column",
             alignItems: "center",
             bgcolor: "#fff",
             // borderRadius: "10px",
             // boxShadow: "10px",
           }}
         >
           <Typography component="h1" variant="h3" mt={2}>
             Sign In
           </Typography>
           <Box
             // component="form"
             // onSubmit={handleSubmit}
             // noValidate
             sx={{ mt: 1 }}
           >
             <FormControl fullWidth>
               <FormLabel
                 sx={{
                   marginBottom: "10px",
                   color: "#000",
                   forntWeight: 400,
                   // fontSize: "15px",
                 }}
               >
                 Enter email or mobile number
               </FormLabel>
               <OutlinedInput
                 placeholder="email or mobile number"
                 size="small"
                 type="text"
                 value={credential}
                 onChange={(e) => setCredential(e.target.value)}
               />
             </FormControl>
             <Button
               // type="submit"
               onClick={(e) => handleSubmit(e)}
               fullWidth
               // variant="contained"
               // sx={{ mt: 3, mb: 2, textTransform: "none" }}
               sx={{
                 mt: 3,
                 mb: 2, // margin top
                 color: "#111",
                 bgcolor: "#FFD814",
                 borderColor: "#FCD200",
                 borderRadius: "md",
                 textDecoration: "none",
                 textTransform: "none",
                 "&:hover": {
                   bgcolor: "#FCD200",
                 },
               }}
             >
               Continue
             </Button>
             <Grid container>
               <Grid item xs>
                 {/* <Link href="#" variant="body2">
                        Forgot password?
                      </Link> */}
               </Grid>
               <Grid item>
                 <Link
                   // href="#"
                   variant="body2"
                   underline="none"
                   sx={{ cursor: "pointer" }}
                   onClick={() => navigate("/signup")}
                 >
                   {"Not a memeber ? Sign Up"}
                 </Link>
               </Grid>
             </Grid>
             <Divider
               // variant="middle"
               sx={{
                 marginRight: "-10px",
                 // marginLeft:'-10px',
                 marginTop: "10px",
                 // marginBottom: "5px",
                 "& .MuiDivider-wrapper": {
                   marginLeft: "-8px",
                   marginRight: "-8px",
                 },
               }}
             >
               <Chip label="or" size="small" />
             </Divider>
             <ButtonGroup
               fullWidth
               orientation="vertical"
               sx={{ marginBottom: "15px" }}
             >
               <Button
                 onClick={() => login()}
                 // variant="contained"
                 startIcon={
                   <img
                     alt="google"
                     src={GoogleIcon}
                     style={{ width: "22px", height: "22px" }}
                   />
                 }
                 sx={{
                   mt: 3,
                   mb: 2,
                   color: "#111",
                   fontWeight: 500,
                   fontSize: "15px",
                   textTransform: "none",
                   backgroundColor: " #F0F4F8",
                   border: "none",
                   "&:hover": {
                     backgroundColor: " #F0F4F8",
                     border: "none",
                   },
                 }}
               >
                 Continue with Google
               </Button>
               {/* <Button
                    // variant="contained"
                    startIcon={
                      <img
                        alt="google"
                        src={FacebookIcon}
                        style={{ width: "21px", height: "21px" }}
                      />
                    }
                    sx={{
                      mt: 3,
                      mb: 2,
                      color: "#111",
                      fontWeight: 500,
                      fontSize: "15px",
                      textTransform: "none",
                      backgroundColor: " #F0F4F8",
                      border: "none",
                      "&:hover": {
                        backgroundColor: " #F0F4F8",
                        border: "none",
                      },
                    }}
                  >
                    Continue with Facebook
                  </Button> */}
               {/* <FacebookLogin
                    appId="1537947807067024"
                    autoLoad={true}
                    fields="name,email,picture"
                    // onClick={componentClicked}
                    callback={responseFacebook}
                  /> */}
               <FacebookLogin
                 appId="519056126982535"
                 autoLoad={false}
                 fields="name,email,picture"
                 callback={responseFacebook}
                 render={(renderProps) => (
                   // <button onClick={renderProps.onClick}>
                   //   This is my custom FB button
                   // </button>
                   <Button
                     // variant="contained"
                     onClick={renderProps.onClick}
                     startIcon={
                       <img
                         alt="facebook"
                         src={FacebookIcon}
                         style={{ width: "24px", height: "24px" }}
                       />
                     }
                     sx={{
                       mt: 3,
                       mb: 2,
                       color: "#111",
                       fontWeight: 500,
                       fontSize: "15px",
                       textTransform: "none",
                       backgroundColor: " #F0F4F8",
                       border: "none",
                       "&:hover": {
                         backgroundColor: " #F0F4F8",
                         border: "none",
                       },
                     }}
                   >
                     Continue with Facebook
                   </Button>
                 )}
               />
               {/* <Button
                    // variant="contained"
                    startIcon={
                      <img
                        alt="instagram"
                        src={Instagram}
                        style={{ width: "24px", height: "24px" }}
                      />
                    }
                    sx={{
                      mt: 3,
                      mb: 2,
                      color: "#111",
                      fontWeight: 500,
                      fontSize: "15px",
                      textTransform: "none",
                      backgroundColor: " #F0F4F8",
                      border: "none",
                      "&:hover": {
                        backgroundColor: " #F0F4F8",
                        border: "none",
                      },
                    }}
                  >
                    Continue with Twitter
                  </Button>
                  <InstagramLogin
                    authCallback={authHandler}
                    appId={instAppId}
                    appSecret={instSecretId}
                    redirectUri={redirect_url}
                  /> */}
             </ButtonGroup>
           </Box>
         </Paper>
         {/* <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
              <LockOutlinedIcon />
            </Avatar> */}
       </Box>
     )}
</Container>;
   



   // Image: artistic-blurry-colorful-wallpaper-background_58702-8505;
background: url("artistic-blurry-colorful-wallpaper-background_58702-8505.png");
background-size: cover;

import React from "react";
import Button from "@mui/material/Button";

const GoogleButton = () => {
  return (
    <Button
      onClick={() => login()}
      startIcon={<img alt="google" src={GoogleIcon} style={{ width: "22px", height: "22px", marginRight: "8px" }} />}
      sx={{
        mt: 3,
        mb: 2,
        color: "#111",
        fontWeight: 500,
        fontSize: "15px",
        textTransform: "none",
        backgroundColor: "#F0F4F8",
        border: "none",
        "&:hover": {
          backgroundColor: "#F0F4F8",
          border: "none",
        },
      }}
    >
      Continue with Google
    </Button>
  );
};

const FacebookButton = () => {
  return (
    <Button
      onClick={() => login()}
      startIcon={<img alt="facebook" src={FacebookIcon} style={{ width: "22px", height: "22px", marginRight: "8px" }} />}
      sx={{
        mt: 3,
        mb: 2,
        color: "#111",
        fontWeight: 500,
        fontSize: "15px",
        textTransform: "none",
        backgroundColor: "#F0F4F8",
        border: "none",
        "&:hover": {
          backgroundColor: "#F0F4F8",
          border: "none",
        },
      }}
    >
      Continue with Facebook
    </Button>
  );
};

export { GoogleButton, FacebookButton };
  
  
  import React, { useState,useEffect } from "react"
import { googleLogout, useGoogleLogin } from "@react-oauth/google";
import FacebookLogin from "react-facebook-login/dist/facebook-login-render-props";
import { useNavigate, useLocation } from "react-router-dom";
import Imports from "../../../common/Imports";
import DataTerms from "../../../common/DataTerms";
import axios from "axios";
import {
  Box,
  Grid,
  TextField,
  InputLabel,
  Typography,
  Button,
  Divider,
  CircularProgress,
} from "@mui/material";
import { Link} from "react-router-dom";

const GoogleIcon = "assets/imgs/google.png";
const FacebookIcon = "assets/imgs/facebook.png";

console.log('Imports', Imports);
console.log('DataTerms', DataTerms);
const Login = () => {
  
  return (
    // <Imports.ReusableContainer
    //   component="main"
    //   maxWidth="xs"
    // >
    //   <Imports.ReusableBox>
    //     <Imports.ReusablePaper>

    //     </Imports.ReusablePaper>
    //   </Imports.ReusableBox>
    // </Imports.ReusableContainer>
    <>
      {/* <Grid
        sx={{ p: 2 }}
        container
        direction="column"
        justifyContent="flex-start"
        alignItems="center"
      > */}
        {/* <img src="amazon-logo.png" alt="amazon-logo" height="40px" /> */}
      {/* <main>{children}</main> */}
      <Imports.ReusableContainer>
        <Imports.ReusableBox
          // sx={{
          //   border: 1,
          //   padding: 2,
          //   borderColor: "#cccccc",
          //   width: "350px",
          //   marginTop: 2,
          // }}
        >
          <Imports.ReusablePaper>

          <form>
            <Grid container direction="column" justifyContent="flex-start">
              <Typography variant="h4" component="h1">
                Create account
              </Typography>

              <InputLabel
                sx={{ fontWeight: 500, marginTop: 1, color: "#000000" }}
                htmlFor="name"
              >
                Your name
              </InputLabel>
              <TextField
                // value={name}
                // onChange={nameChangeHandler}
                // onBlur={nameBlurHandler}
                // error={nameHasError}
                // helperText={nameHasError ? "Enter your name" : ""}
                type="text"
                name="name"
                id="name"
                variant="outlined"
                size="small"
              />

              <InputLabel
                sx={{ fontWeight: 500, marginTop: 1, color: "#000000" }}
                htmlFor="email"
              >
                Email
              </InputLabel>
              <TextField
                // value={email}
                // onChange={emailChangeHandler}
                // onBlur={emailBlurHandler}
                // error={emailHasError}
                // helperText={emailHasError ? "Enter your email" : ""}
                type="email"
                name="email"
                id="email"
                variant="outlined"
                size="small"
              />
              <InputLabel
                sx={{ fontWeight: 500, marginTop: 1, color: "#000000" }}
                htmlFor="password"
              >
                Password
              </InputLabel>
              <TextField
                // value={password}
                // onChange={passwordChangeHandler}
                // onBlur={passwordBlurHandler}
                // error={passwordHasError}
                // helperText={
                //   passwordHasError ? "Minimum 6 characters required" : ""
                // }
                type="password"
                name="password"
                id="password"
                variant="outlined"
                size="small"
                placeholder="Minimum 6 characters required"
              />

              <InputLabel
                sx={{ fontWeight: 500, marginTop: 1, color: "#000000" }}
                htmlFor="confirmPassword"
              >
                Re-enter password
              </InputLabel>
              <TextField
                // value={confirmPassword}
                // onChange={confirmPasswordChangeHandler}
                // onBlur={confirmPasswordBlurHandler}
                // error={
                //   confirmPassword.length > 0 && password !== confirmPassword
                // }
                // helperText={
                //   confirmPassword.length > 0 && password !== confirmPassword
                //     ? "Passwords must match"
                //     : ""
                // }
                type="password"
                name="confirmPassword"
                id="confirmPassword"
                variant="outlined"
                size="small"
              />
              {/* <Button
                id="register-btn"
                variant="contained"
                style={{
                  marginTop: "16px",
                  height: "31px",
                  backgroundColor: "#f0c14b",
                  color: "black",
                  borderColor: "#a88734 #9c7e31 #846a29",
                  textTransform: "none",
                }}
                type="submit"
              >
                Register
              </Button> */}
              <Button
                // type="submit"
                onClick={(e) => handleSubmit(e)}
                fullWidth
                // variant="contained"
                // sx={{ mt: 3, mb: 2, textTransform: "none" }}
                sx={{
                  mt: 3,
                  mb: 2, // margin top
                  color: "#111",
                  bgcolor: "#FFD814",
                  borderColor: "#FCD200",
                  borderRadius: "md",
                  textDecoration: "none",
                  textTransform: "none",
                  "&:hover": {
                    bgcolor: "#FCD200",
                  },
                }}
              >
                Continue
              </Button>
            </Grid>
          </form>
          </Imports.ReusablePaper>
          {/* <form onSubmit={onSubmitHandler}> */}
        </Imports.ReusableBox>
      </Imports.ReusableContainer>
      {/* </Grid> */}
    </>
  );
};
export default Login;



import React, { useState, useEffect } from "react";
import axios from "axios";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Divider from "@mui/material/Divider";
import Chip from "@mui/material/Chip";
import ButtonGroup from "@mui/material/ButtonGroup";
import FormControl from "@mui/material/FormControl";
import OutlinedInput from "@mui/material/OutlinedInput";
import { FormLabel } from "@mui/material";
import Paper from "@mui/material/Paper";
import { googleLogout, useGoogleLogin } from "@react-oauth/google";
import FacebookLogin from "react-facebook-login/dist/facebook-login-render-props";
import { useNavigate, useLocation } from "react-router-dom";
import Imports from "../../../common/Imports";
import DataTerms from "../../../common/DataTerms";
const GoogleIcon = "assets/imgs/google.png";
const FacebookIcon = "assets/imgs/facebook.png";

const Login = () => {
  const [profile, setProfile] = useState();
  const location = useLocation();
  const navigate = useNavigate();
  const preData = location?.state;
  //  console.log("preData", preData);
  const [credential, setCredential] = useState(preData);

  const handleSubmit = (event) => {
    // event.preventDefault();
    // Determine whether the entered value is an email or mobile number
    const isEmail = /^\S+@\S+\.\S+$/.test(credential);
    const isMobileNumber = /^\d{10}$/.test(credential);

    if (isEmail) {
      navigate("/login/email", { state: credential });
    } else if (isMobileNumber) {
      // Redirect to login with mobile number page
      navigate("/login/mobile", { state: credential });
    } else {
      // Handle invalid input
      alert("Invalid email or mobile number");
    }

    // const data = new FormData(event.currentTarget);
    // console.log("credential", credential);
  };
  // {
  //   // email: data.get("email"),
  //   // password: data.get("password"),
  //   ("credential");
  // }
  // const login = useGoogleLogin({
  //   onSuccess: (codeResponse) => setUser(codeResponse),
  //   onError: (error) => console.log("Login Failed:", error),
  // });
  const login = useGoogleLogin({
    // onSuccess: (tokenResponse) => console.log(tokenResponse),
    onSuccess: async (response) => {
      try {
        const res = await axios
          .get(
            `https://www.googleapis.com/oauth2/v1/userinfo?access_token=${response.access_token}`,
            {
              headers: {
                Authorization: `Bearer ${response.access_token}`,
                Accept: "application/json",
              },
            }
          )
          .then((res) => {
            setProfile(res.data);
            // console.log('res', res);
          })
          .catch((err) => console.log(err));
        // console.log('res',res)
      } catch (err) {
        // console.log(err);
      }
    },
  });
  const responseFacebook = (response) => {
    // console.log(response.picture?.data.url);
    setProfile(response);
  };
  // const profiePic = profile?.picture?.data.url;
  // console.log("profile", profile?.picture);
  const logOut = () => {
    googleLogout();
    setProfile(null);
  };

  const authHandler = (err, data) => {
    //  console.log("insta data",err, data);
  };
  return (
    <>
    <Container
      component="main"
      maxWidth="xs"
      sx={{
        margin: "auto",
      }}
    >
      {profile ? (
        <div>
          <h3>User Logged in</h3>
          <img src={profile?.picture} alt="user pic" />
          <Typography variant="h5">Welcome {profile.name}</Typography>
          <Typography variant="h6">email:{profile.email}</Typography>
          <br />
          <br />
          <Button
            onClick={logOut}
            variant="contained"
            sx={{ mt: 3, mb: 2, textTransform: "none" }}
          >
            Log out
          </Button>
        </div>
      ) : (
        <Box>
          <Paper
            elevation={1}
            variant="elevation"
            square={false}
            sx={{
              marginTop: 8,
              padding: "10px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              bgcolor: "#fff",
              // borderRadius: "10px",
              // boxShadow: "10px",
            }}
          >
            <Typography component="h1" variant="h3" mt={2}>
              Sign In
            </Typography>
            <Box
              // component="form"
              // onSubmit={handleSubmit}
              // noValidate
              sx={{ mt: 1 }}
            >
              <FormControl fullWidth>
                    <FormLabel
                      
                  sx={{
                    marginBottom: "10px",
                    color: "#000",
                    forntWeight: 400,
                    // fontSize: "15px",
                  }}
                >
                  Enter email or mobile number
                </FormLabel>
                <OutlinedInput
                  placeholder="email or mobile number"
                  size="small"
                  type="text"
                  value={credential}
                  onChange={(e) => setCredential(e.target.value)}
                />
              </FormControl>
              <Button
                // type="submit"
                onClick={(e) => handleSubmit(e)}
                fullWidth
                // variant="contained"
                // sx={{ mt: 3, mb: 2, textTransform: "none" }}
                sx={{
                  mt: 3,
                  mb: 2, // margin top
                  color: "#111",
                  bgcolor: "#FFD814",
                  borderColor: "#FCD200",
                  borderRadius: "md",
                  textDecoration: "none",
                  textTransform: "none",
                  "&:hover": {
                    bgcolor: "#FCD200",
                  },
                }}
              >
                Continue
              </Button>
              <Grid container>
                <Grid item xs>
                  {/* <Link href="#" variant="body2">
                      Forgot password?
                    </Link> */}
                </Grid>
                <Grid item>
                  <Link
                    // href="#"
                    variant="body2"
                    underline="none"
                    sx={{ cursor: "pointer" }}
                    onClick={() => navigate("/signup")}
                  >
                    {"Not a memeber ? Sign Up"}
                  </Link>
                </Grid>
              </Grid>
              <Divider
                // variant="middle"
                sx={{
                  marginRight: "-10px",
                  // marginLeft:'-10px',
                  marginTop: "10px",
                  // marginBottom: "5px",
                  "& .MuiDivider-wrapper": {
                    marginLeft: "-8px",
                    marginRight: "-8px",
                  },
                }}
              >
                <Chip label="or" size="small" />
              </Divider>
              <ButtonGroup
                fullWidth
                orientation="vertical"
                sx={{ marginBottom: "15px" }}
              >
                <Button
                  onClick={() => login()}
                  // variant="contained"
                  startIcon={
                    <img
                      alt="google"
                      src={GoogleIcon}
                      style={{ width: "22px", height: "22px" }}
                    />
                  }
                  sx={{
                    mt: 3,
                    mb: 2,
                    color: "#111",
                    fontWeight: 500,
                    fontSize: "15px",
                    textTransform: "none",
                    backgroundColor: " #F0F4F8",
                    border: "none",
                    "&:hover": {
                      backgroundColor: " #F0F4F8",
                      border: "none",
                    },
                  }}
                >
                  Continue with Google
                </Button>
                {/* <Button
                  // variant="contained"
                  startIcon={
                    <img
                      alt="google"
                      src={FacebookIcon}
                      style={{ width: "21px", height: "21px" }}
                    />
                  }
                  sx={{
                    mt: 3,
                    mb: 2,
                    color: "#111",
                    fontWeight: 500,
                    fontSize: "15px",
                    textTransform: "none",
                    backgroundColor: " #F0F4F8",
                    border: "none",
                    "&:hover": {
                      backgroundColor: " #F0F4F8",
                      border: "none",
                    },
                  }}
                >
                  Continue with Facebook
                </Button> */}
                {/* <FacebookLogin
                  appId="1537947807067024"
                  autoLoad={true}
                  fields="name,email,picture"
                  // onClick={componentClicked}
                  callback={responseFacebook}
                /> */}
                <FacebookLogin
                  appId="519056126982535"
                  autoLoad={false}
                  fields="name,email,picture"
                  callback={responseFacebook}
                  render={(renderProps) => (
                    // <button onClick={renderProps.onClick}>
                    //   This is my custom FB button
                    // </button>
                    <Button
                      // variant="contained"
                      onClick={renderProps.onClick}
                      startIcon={
                        <img
                          alt="facebook"
                          src={FacebookIcon}
                          style={{ width: "24px", height: "24px" }}
                        />
                      }
                      sx={{
                        mt: 3,
                        mb: 2,
                        color: "#111",
                        fontWeight: 500,
                        fontSize: "15px",
                        textTransform: "none",
                        backgroundColor: " #F0F4F8",
                        border: "none",
                        "&:hover": {
                          backgroundColor: " #F0F4F8",
                          border: "none",
                        },
                      }}
                    >
                      Continue with Facebook
                    </Button>
                  )}
                />
                {/* <Button
                  // variant="contained"
                  startIcon={
                    <img
                      alt="instagram"
                      src={Instagram}
                      style={{ width: "24px", height: "24px" }}
                    />
                  }
                  sx={{
                    mt: 3,
                    mb: 2,
                    color: "#111",
                    fontWeight: 500,
                    fontSize: "15px",
                    textTransform: "none",
                    backgroundColor: " #F0F4F8",
                    border: "none",
                    "&:hover": {
                      backgroundColor: " #F0F4F8",
                      border: "none",
                    },
                  }}
                >
                  Continue with Twitter
                </Button>
                <InstagramLogin
                  authCallback={authHandler}
                  appId={instAppId}
                  appSecret={instSecretId}
                  redirectUri={redirect_url}
                /> */}
              </ButtonGroup>
            </Box>
          </Paper>
          {/* <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar> */}
        </Box>
      )}
    </Container>
    </>
  );
};
export default Login;


---------------------------------
 const dynamicCreateDataActions = ({start,success,errors,startaction,successaction,erroraction,data,error}) => {
    const { props.start}Start = () => ({
      type:{props.startaction}_START,
});
const {props.success} = (props.data) => {
  const action = {
    type:{props.successaction}_SUCCESS,
    payload: props.data,
};
  const {props.errors} = (props.error) => ({
  type: {props.erroraction}_ERROR,
  payload: props.error,
});
}
export default dynamicCreateDataActions;

 const dynamicGetDataActions = ({start,success,errors,startaction,successaction,erroraction,data,error}) => {
    const { props.start}Start = () => ({
      type:{props.startaction}_START,
});
const {props.success} = (props.data) => {
  const action = {
    type:{props.successaction}_SUCCESS,
    payload: props.data,
};
  const {props.errors} = (props.error) => ({
  type:{props.erroraction}_ERROR,
  payload: props.error,
});
}
export default dynamicGetDataActions;


 const dynamicUpdateDataActions = ({start,success,errors,startaction,successaction,erroraction,data,error}) => {
    const { props.start}Start = () => ({
      type:{props.startaction}_START,
});
const {props.success} = (props.data) => {
  const action = {
    type:{props.successaction}_SUCCESS,
    payload: props.data,
};
  const {props.errors} = (props.error) => ({
  type:{props.erroraction}_ERROR,
  payload: props.error,
});
}
export default dynamicUpdateDataActions;


 const dynamicDeleteDataActions = ({start,success,errors,startaction,successaction,erroraction,data,error}) => {
    const { props.start}Start = () => ({
      type:{props.startaction}_START,
});
const {props.success} = (props.data) => {
  const action = {
    type:{props.successaction}_SUCCESS,
    payload: props.data,
};
  const {props.errors} = (props.error) => ({
  type:{props.erroraction}_ERROR,
  payload: props.error,
});
}
export default dynamicDeleteDataActions;
--------------------------------------------

const dynamicActions = ({ start, success, error, startAction, successAction, errorAction }) => {

  const startActionCreator = (data) => ({

    type: startAction,

    payload: data,

  });
 
  const successActionCreator = (data) => ({

    type: successAction,

    payload: data,

  });
 
  const errorActionCreator = (errorMessage) => ({

    type: errorAction,

    payload: errorMessage,

  });
 
  return {

    [start]: startActionCreator,

    [success]: successActionCreator,

    [error]: errorActionCreator,

  };

};
 
export default dynamicActions;



import dynamicActions from './dynamicActions';
 
// Define action types
const CREATE_DATA_START = 'CREATE_DATA_START';
const CREATE_DATA_SUCCESS = 'CREATE_DATA_SUCCESS';
const CREATE_DATA_ERROR = 'CREATE_DATA_ERROR';
 
// Create dynamic action creators
const createDataActions = dynamicActions({
  start: 'createDataStart',
  success: 'createDataSuccess',
  error: 'createDataError',
  startAction: CREATE_DATA_START,
  successAction: CREATE_DATA_SUCCESS,
  errorAction: CREATE_DATA_ERROR,
});
 
// Usage example
const startAction = createDataActions.createDataStart({ /* data here */ });
const successAction = createDataActions.createDataSuccess({ /* data here */ });
const errorAction = createDataActions.createDataError("Error message");



import React from "react";
import { useNavigate } from "react-router-dom";
import {
  Typography,
  Grid,
  Box,
  Divider,
  Button,
  List,
  ListItemIcon,
  ListItemButton,
  InboxIcon,
  ListItem,
  ListItemText,
} from "@mui/material";
import FiberManualRecordTwoToneIcon from "@mui/icons-material/FiberManualRecordTwoTone";
import ProductAvailability from "../Products/ProductAvailability";
import ReusableListWithDotIcon from "../../../components/ListWithDotIcon";
const InnerProductDetails = () => {
  const navigate = useNavigate();
  const productImages = [
    {
      image:
        "https://rukminim2.flixcart.com/image/128/128/xif0q/mobile/z/y/i/-original-imagy5wg4pqpymyh.jpeg?q=70&crop=false",
    },
    {
      image:
        "https://rukminim2.flixcart.com/image/128/128/xif0q/mobile/y/r/4/-original-imagy5wgw3sthjzg.jpeg?q=70&crop=false",
    },
    {
      image:
        "https://rukminim2.flixcart.com/image/128/128/xif0q/mobile/4/h/w/-original-imagy5wgyrdw8hsz.jpeg?q=70&crop=false",
    },
    {
      image:
        "https://rukminim2.flixcart.com/image/128/128/xif0q/mobile/r/h/m/-original-imagy5wgt58ycehf.jpeg?q=70&crop=false",
    },
  ];
  const productDetails = [
    {
      id: "1",
      // image: "assets/imgs/phone.jpg",
      image: "assets/imgs/phone1.png",
      title1:
        "SAMSUNG 80 cm (32 Inch) HD Ready LED Smart Tizen TV 2022 Edition with Bezel-free Design  (UA32T4380AKXXL)",
      title2: "",
      title3: "",
      actualPrice: "",
      discount: "",
      discountPrice: "",
      rating: "4.2★",
      ratedes: "1,92,450 Ratings & 10,456 Reviews",
      descList: [
        "Supported Apps: Netflix|Prime Video|",
        "Disney+Hotstar|Youtube",
        "Operating System: Tizen",
        "Resolution: HD Ready 1366 x 768 Pixels",
        "Sound Output: 20 W",
        "Refresh Rate: 50 Hz",
      ],
      list: [
        { item: "Available offers" },
        {
          item: "Bank Offer 10% off on BOBCARD EMI Transactions, up to ₹1,500 on orders of ₹10,000 and above",
        },
        // "T&C",
        {
          item: "Bank Offer 10% off on Citi-branded Credit Card EMI Transactions, up to ₹1,500 on orders of ₹7,500 and above",
        },
        // "T&C",
        {
          item: "Bank Offer Flat ₹750 off on OneCard Credit Card EMI Transactions on orders of ₹12,500 and above",
        },
        // "T&C",
        {
          item: "Partner OfferFlat 1% Instant discount up to ₹ 1,000 on purchase of Flipkart Digital Gift Cards",
        },
        {
          item: "Partner OfferSign-up for Flipkart Pay Later & get free Times Prime Benefits worth ₹20,000",
        },
        {
          item: "Partner OfferMake a purchase and enjoy a surprise cashback/ coupon that you can redeem later!",
        },
        {
          item: "No cost EMI ₹7,333/month. Standard EMI also available",
        },
        {
          item: "Extra 10% Off On Combo Mobile & Casecover- Oct'24",
        },
        {
          item: "Extra 10% off on Combo with Vivo - Oct'24",
        },
        {
          item: "Extra ₹200 off on Noise Pure Pods",
        },
      ],
    },
    // {
    //   id: "2",
    //   image: "assets/imgs/laptop1.jpg",
    //   title1:
    //     "HP 80 cm (32 Inch) HD Ready LED Smart Tizen TV 2022 Edition with Bezel-free Design  (UA32T4380AKXXL)",
    //   title2: "",
    //   title3: "",
    //   actualPrice: "",
    //   discount: "",
    //   discountPrice: "",
    //   rating: "4.6★",
    //   ratedes: "1,92,450 Ratings & 10,456 Reviews",
    //   descList: [
    //     "Supported Apps: Netflix|Prime Video|",
    //     "Disney+Hotstar|Youtube",
    //     "Operating System: Tizen",
    //     "Resolution: HD Ready 1366 x 768 Pixels",
    //     "Sound Output: 20 W",
    //     "Refresh Rate: 50 Hz",
    //   ],
    // },
    // {
    //   id: "3",
    //   image: "assets/imgs/phone1.png",
    //   title1:
    //     "SAMSUNG 80 cm (32 Inch) HD Ready LED Smart Tizen TV 2022 Edition with Bezel-free Design  (UA32T4380AKXXL)",
    //   title2: "",
    //   title3: "",
    //   actualPrice: "",
    //   discount: "",
    //   discountPrice: "",
    //   rating: "3.5★",
    //   ratedes: "1,92,450 Ratings & 10,456 Reviews",
    //   descList: [
    //     "Supported Apps: Netflix|Prime Video|",
    //     "Disney+Hotstar|Youtube",
    //     "Operating System: Tizen",
    //     "Resolution: HD Ready 1366 x 768 Pixels",
    //     "Sound Output: 20 W",
    //     "Refresh Rate: 50 Hz",
    //   ],
    // },
    // {
    //   id: "4",
    //   image: "assets/imgs/laptop1.jpg",
    //   title1:
    //     "HP 80 cm (32 Inch) HD Ready LED Smart Tizen TV 2022 Edition with Bezel-free Design  (UA32T4380AKXXL)",
    //   title2: "",
    //   title3: "",
    //   actualPrice: "",
    //   discount: "",
    //   discountPrice: "",
    //   rating: "3.8★",
    //   ratedes: "1,92,450 Ratings & 10,456 Reviews",
    //   descList: [
    //     "Supported Apps: Netflix|Prime Video|",
    //     "Disney+Hotstar|Youtube",
    //     "Operating System: Tizen",
    //     "Resolution: HD Ready 1366 x 768 Pixels",
    //     "Sound Output: 20 W",
    //     "Refresh Rate: 50 Hz",
    //   ],
    // },
    // {
    //   id: "5",
    //   image: "assets/imgs/phone1.png",
    //   title1:
    //     "SAMSUNG 80 cm (32 Inch) HD Ready LED Smart Tizen TV 2022 Edition with Bezel-free Design  (UA32T4380AKXXL)",
    //   title2: "",
    //   title3: "",
    //   actualPrice: "",
    //   discount: "",
    //   discountPrice: "",
    //   rating: "4.5★",
    //   ratedes: "1,92,450 Ratings & 10,456 Reviews",
    //   descList: [
    //     "Supported Apps: Netflix|Prime Video|",
    //     "Disney+Hotstar|Youtube",
    //     "Operating System: Tizen",
    //     "Resolution: HD Ready 1366 x 768 Pixels",
    //     "Sound Output: 20 W",
    //     "Refresh Rate: 50 Hz",
    //   ],
    // },
    // {
    //   id: "6",
    //   image: "assets/imgs/laptop1.jpg",
    //   title1:
    //     "HP 80 cm (32 Inch) HD Ready LED Smart Tizen TV 2022 Edition with Bezel-free Design  (UA32T4380AKXXL)",
    //   title2: "",
    //   title3: "",
    //   actualPrice: "",
    //   discount: "",
    //   discountPrice: "",
    //   rating: "4.2★",
    //   ratedes: "1,92,450 Ratings & 10,456 Reviews",
    //   descList: [
    //     "Supported Apps: Netflix|Prime Video|",
    //     "Disney+Hotstar|Youtube",
    //     "Operating System: Tizen",
    //     "Resolution: HD Ready 1366 x 768 Pixels",
    //     "Sound Output: 20 W",
    //     "Refresh Rate: 50 Hz",
    //   ],
    // },
  ];
  return (
    <>
      <Box sx={{ p: 0.5 }}>
        <Box
          sx={{
            width: "100%",
            height: "100%",
            backgroundColor: "#FFFFFF",
            p: 2,
          }}
        >
          <Grid container p={0} spacing={0}>
            {/* leftside magnifier component */}
            <Grid item xs={12} sm={6} md={5}>
              <Grid container p={0} spacing={0}>
                <Grid
                  item
                  xs={12}
                  sm={12}
                  md={2}
                >
                  <Box
                    sx={{
                      backgroundColor: "#FFFFFF",
                      border: "1px solid",
                      borderColor: "divider",
                    }}
                  >
                    <Grid container spacing={0}>
                      {productImages?.map((item, index) => (
                        <Grid
                          item
                          xs={12}
                          sm={12}
                          md={12}
                          key={index}
                          sx={{
                            border: "1px solid",
                            borderColor: "divider",
                            justifyContent: "center",
                            display: "flex",
                          }}
                        >
                          <img
                            src={item.image}
                            alt="1"
                            sx={{ width: "80px", height: "80px" }}
                          />
                        </Grid>
                      ))}
                    </Grid>
                  </Box>
                </Grid>
                <Grid item xs={12} sm={12} md={10}>
                  <Box
                    sx={{
                      width: "100%",
                      height: "100%",
                      backgroundColor: "#FFFFFF",
                      border: "1px solid",
                      borderLeft: 0,
                      borderColor: "divider",
                      // borderRadius: "8px",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      // justifyContent:'center'
                      padding: 1,
                    }}
                  >
                    <Box
                      sx={{
                        width: "100%",
                        height: "100%",
                        backgroundColor: "#FFFFFF",
                        // border: "1px solid",
                        // borderColor: "divider",
                        // borderRadius: "8px",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        // justifyContent:'center'
                      }}
                    >
                      <img
                        src="assets/imgs/phone.jpg"
                        alt="1"
                        style={{ width: "100%", height: "100%" }}
                      />
                    </Box>
                  </Box>
                </Grid>
              </Grid>
            </Grid>
            {/* right side component */}
            <Grid item xs={12} sm={6} md={7}>
              <Box
                sx={{
                  width: "100%",
                  height: "100%",
                  bgcolor: "#FFFFFF",
                  // border: "1px solid",
                  // borderColor: "divider",
                  borderRadius: "8px",
                }}
              >
                <Typography
                  p={1}
                  sx={{
                    color: "text.secondary",
                  }}
                >
                  Home {">"} Mobiles & Accessories {">"} Mobiles {">"} OnePlus
                </Typography>
                <Typography
                  variant="h4"
                  fontWeight="bold"
                  p={1}
                  mt={1}
                  mb={1}
                  sx={{
                    color: "text.secondary",
                  }}
                >
                  Showing 1 – 24 of 749 results for "new launch mobiles"
                </Typography>
                <Divider variant="fullWidth" />
                {productDetails?.map((item, index) => (
                  <Grid
                    p={1}
                    container
                    spacing={0}
                    display="flex"
                    flexDirection="column"
                    justifyContent="center"
                    // alignItems="center"
                  >
                    <Grid item xs={12} sm={12} md={12}>
                      <Grid container spacing={3}>
                        <Grid item xs={12} sm={8} md={8}>
                          <Typography variant="h5" fontWeight="bold">
                            {item.title1}
                          </Typography>
                        </Grid>
                        <Grid item xs={12} sm={8} md={4}>
                          <Box
                            sx={{
                              display: "flex",
                              flexDirection: "column",
                            }}
                          >
                            <Typography variant="h4" sx={{ color: "#212121" }}>
                              ₹2500
                            </Typography>
                            <Box
                              sx={{
                                display: "flex",
                                justifyContent: "flex-start",
                              }}
                            >
                              <Typography
                                variant="h4"
                                fontWeight="bold"
                                sx={{
                                  color: "#878787",
                                  textDecorationLine: "line-through",
                                }}
                              >
                                ₹2500
                              </Typography>
                              <Typography
                                variant="h4"
                                sx={{ ml: 3, color: "#308150" }}
                              >
                                20% OFF
                              </Typography>
                            </Box>
                          </Box>
                        </Grid>
                      </Grid>
                    </Grid>
                    <Grid item xs={12} sm={12} md={12}>
                      <Box
                        sx={{
                          display: "flex",
                          flexDirection: "row",
                          justifyContent: "flex-start",
                          alignItems: "center",
                          gap: 2,
                        }}
                      >
                        <Button
                          variant="contained"
                          sx={{
                            backgroundColor: "#3B7E42",
                            borderRadius: "12px",
                            fontSize: "15px",
                            color: "#FFFFFF",
                            "&:hover": { backgroundColor: "#3B7E42" },
                          }}
                        >
                          {item.rating}
                        </Button>
                        <Typography sx={{ color: "#878787" }}>
                          {item.ratedes}
                        </Typography>
                      </Box>
                    </Grid>
                    <Grid item xs={12} sm={12} md={12} mt={1}>
                      <Typography variant="h5" mt={1} fontWeight="bold">
                        Available offers :
                      </Typography>
                    </Grid>
                    <Grid item xs={12} sm={12} md={12} mt={1}>
                      <ReusableListWithDotIcon
                        list={productDetails[0]?.list}
                        title="T&C"
                        maxItemsToShow="6"
                        sx={{
                          color: "#212121",
                          "& .MuiTypography-root": {
                            fontSize: "0.873rem",
                          },
                        }}
                      />
                    </Grid>
                    <Grid item xs={12} sm={12} md={12} mt={1}>
                      <Typography variant="h3" mt={1}>
                        About This Product :
                      </Typography>
                      <ProductAvailability />
                      <ProductAvailability />
                      <ProductAvailability />
                      <ProductAvailability />
                      <ProductAvailability />
                      <ProductAvailability />
                      <ProductAvailability />
                      <ProductAvailability />
                      <ProductAvailability />
                      <ProductAvailability />
                      <ProductAvailability />
                      <ProductAvailability />
                      <ProductAvailability />
                      <ProductAvailability />
                      <ProductAvailability />
                      <ProductAvailability />
                      <ProductAvailability />
                      <ProductAvailability />
                    </Grid>
                    <Grid item xs={12} sm={12} md={12} mt={1}>
                      <Typography variant="h4" mt={1}>
                        Product Description :
                      </Typography>
                    </Grid>
                  </Grid>
                ))}
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </>
  );
};
export default InnerProductDetails;


import React from "react";
import { useNavigate } from "react-router-dom";
import {
  Typography,
  Grid,
  Box,
  Divider,
  Button,
  List,
  ListItemIcon,
  ListItemButton,
  InboxIcon,
  ListItem,
  ListItemText,
} from "@mui/material";
import FiberManualRecordTwoToneIcon from "@mui/icons-material/FiberManualRecordTwoTone";
import ProductAvailability from "../Products/ProductAvailability";
import ReusableListWithDotIcon from "../../../components/ListWithDotIcon";
const InnerProductDetails = () => {
  const navigate = useNavigate();
  const productImages = [
    {
      image:
        "https://rukminim2.flixcart.com/image/128/128/xif0q/mobile/z/y/i/-original-imagy5wg4pqpymyh.jpeg?q=70&crop=false",
    },
    {
      image:
        "https://rukminim2.flixcart.com/image/128/128/xif0q/mobile/y/r/4/-original-imagy5wgw3sthjzg.jpeg?q=70&crop=false",
    },
    {
      image:
        "https://rukminim2.flixcart.com/image/128/128/xif0q/mobile/4/h/w/-original-imagy5wgyrdw8hsz.jpeg?q=70&crop=false",
    },
    {
      image:
        "https://rukminim2.flixcart.com/image/128/128/xif0q/mobile/r/h/m/-original-imagy5wgt58ycehf.jpeg?q=70&crop=false",
    },
  ];
  const productDetails = [
    {
      id: "1",
      // image: "assets/imgs/phone.jpg",
      image: "assets/imgs/phone1.png",
      title1:
        "SAMSUNG 80 cm (32 Inch) HD Ready LED Smart Tizen TV 2022 Edition with Bezel-free Design  (UA32T4380AKXXL)",
      title2: "",
      title3: "",
      actualPrice: "",
      discount: "",
      discountPrice: "",
      rating: "4.2★",
      ratedes: "1,92,450 Ratings & 10,456 Reviews",
      descList: [
        "Supported Apps: Netflix|Prime Video|",
        "Disney+Hotstar|Youtube",
        "Operating System: Tizen",
        "Resolution: HD Ready 1366 x 768 Pixels",
        "Sound Output: 20 W",
        "Refresh Rate: 50 Hz",
      ],
      list: [
        { item: "Available offers" },
        {
          item: "Bank Offer 10% off on BOBCARD EMI Transactions, up to ₹1,500 on orders of ₹10,000 and above",
        },
        // "T&C",
        {
          item: "Bank Offer 10% off on Citi-branded Credit Card EMI Transactions, up to ₹1,500 on orders of ₹7,500 and above",
        },
        // "T&C",
        {
          item: "Bank Offer Flat ₹750 off on OneCard Credit Card EMI Transactions on orders of ₹12,500 and above",
        },
        // "T&C",
        {
          item: "Partner OfferFlat 1% Instant discount up to ₹ 1,000 on purchase of Flipkart Digital Gift Cards",
        },
        {
          item: "Partner OfferSign-up for Flipkart Pay Later & get free Times Prime Benefits worth ₹20,000",
        },
        {
          item: "Partner OfferMake a purchase and enjoy a surprise cashback/ coupon that you can redeem later!",
        },
        {
          item: "No cost EMI ₹7,333/month. Standard EMI also available",
        },
        {
          item: "Extra 10% Off On Combo Mobile & Casecover- Oct'24",
        },
        {
          item: "Extra 10% off on Combo with Vivo - Oct'24",
        },
        {
          item: "Extra ₹200 off on Noise Pure Pods",
        },
      ],
    },
    // {
    //   id: "2",
    //   image: "assets/imgs/laptop1.jpg",
    //   title1:
    //     "HP 80 cm (32 Inch) HD Ready LED Smart Tizen TV 2022 Edition with Bezel-free Design  (UA32T4380AKXXL)",
    //   title2: "",
    //   title3: "",
    //   actualPrice: "",
    //   discount: "",
    //   discountPrice: "",
    //   rating: "4.6★",
    //   ratedes: "1,92,450 Ratings & 10,456 Reviews",
    //   descList: [
    //     "Supported Apps: Netflix|Prime Video|",
    //     "Disney+Hotstar|Youtube",
    //     "Operating System: Tizen",
    //     "Resolution: HD Ready 1366 x 768 Pixels",
    //     "Sound Output: 20 W",
    //     "Refresh Rate: 50 Hz",
    //   ],
    // },
    // {
    //   id: "3",
    //   image: "assets/imgs/phone1.png",
    //   title1:
    //     "SAMSUNG 80 cm (32 Inch) HD Ready LED Smart Tizen TV 2022 Edition with Bezel-free Design  (UA32T4380AKXXL)",
    //   title2: "",
    //   title3: "",
    //   actualPrice: "",
    //   discount: "",
    //   discountPrice: "",
    //   rating: "3.5★",
    //   ratedes: "1,92,450 Ratings & 10,456 Reviews",
    //   descList: [
    //     "Supported Apps: Netflix|Prime Video|",
    //     "Disney+Hotstar|Youtube",
    //     "Operating System: Tizen",
    //     "Resolution: HD Ready 1366 x 768 Pixels",
    //     "Sound Output: 20 W",
    //     "Refresh Rate: 50 Hz",
    //   ],
    // },
    // {
    //   id: "4",
    //   image: "assets/imgs/laptop1.jpg",
    //   title1:
    //     "HP 80 cm (32 Inch) HD Ready LED Smart Tizen TV 2022 Edition with Bezel-free Design  (UA32T4380AKXXL)",
    //   title2: "",
    //   title3: "",
    //   actualPrice: "",
    //   discount: "",
    //   discountPrice: "",
    //   rating: "3.8★",
    //   ratedes: "1,92,450 Ratings & 10,456 Reviews",
    //   descList: [
    //     "Supported Apps: Netflix|Prime Video|",
    //     "Disney+Hotstar|Youtube",
    //     "Operating System: Tizen",
    //     "Resolution: HD Ready 1366 x 768 Pixels",
    //     "Sound Output: 20 W",
    //     "Refresh Rate: 50 Hz",
    //   ],
    // },
    // {
    //   id: "5",
    //   image: "assets/imgs/phone1.png",
    //   title1:
    //     "SAMSUNG 80 cm (32 Inch) HD Ready LED Smart Tizen TV 2022 Edition with Bezel-free Design  (UA32T4380AKXXL)",
    //   title2: "",
    //   title3: "",
    //   actualPrice: "",
    //   discount: "",
    //   discountPrice: "",
    //   rating: "4.5★",
    //   ratedes: "1,92,450 Ratings & 10,456 Reviews",
    //   descList: [
    //     "Supported Apps: Netflix|Prime Video|",
    //     "Disney+Hotstar|Youtube",
    //     "Operating System: Tizen",
    //     "Resolution: HD Ready 1366 x 768 Pixels",
    //     "Sound Output: 20 W",
    //     "Refresh Rate: 50 Hz",
    //   ],
    // },
    // {
    //   id: "6",
    //   image: "assets/imgs/laptop1.jpg",
    //   title1:
    //     "HP 80 cm (32 Inch) HD Ready LED Smart Tizen TV 2022 Edition with Bezel-free Design  (UA32T4380AKXXL)",
    //   title2: "",
    //   title3: "",
    //   actualPrice: "",
    //   discount: "",
    //   discountPrice: "",
    //   rating: "4.2★",
    //   ratedes: "1,92,450 Ratings & 10,456 Reviews",
    //   descList: [
    //     "Supported Apps: Netflix|Prime Video|",
    //     "Disney+Hotstar|Youtube",
    //     "Operating System: Tizen",
    //     "Resolution: HD Ready 1366 x 768 Pixels",
    //     "Sound Output: 20 W",
    //     "Refresh Rate: 50 Hz",
    //   ],
    // },
  ];
  return (
    <>
      <Box sx={{ p: 0.5 }}>
        <Box
          sx={{
            width: "100%",
            height: "100%",
            backgroundColor: "#FFFFFF",
            p: 2,
          }}
        >
          <Grid container p={0} spacing={1}>
            {/* pink color component */}
            <Grid item xs={12} sm={6} md={5}>
              <Box
                sx={{
                  width: "100%",
                  height: "500px",
                  bgcolor: "pink",
                  // border: "1px solid",
                  // borderColor: "divider",
                  borderRadius: "8px",
                }}
              ></Box>
            </Grid>
            {/*cyan color component */}
            <Grid item xs={12} sm={6} md={7}>
              <Box
                sx={{
                  width: "100%",
                  height: "2000px",
                  bgcolor: "cyan",
                  // border: "1px solid",
                  // borderColor: "divider",
                  borderRadius: "8px",
                }}
              ></Box>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </>
  );
};
export default InnerProductDetails;

