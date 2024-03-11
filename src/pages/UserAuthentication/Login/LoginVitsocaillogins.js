import React, { useState,useEffect } from "react";
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
import Paper from "@mui/material/Paper";
import { googleLogout, useGoogleLogin } from "@react-oauth/google";
import FacebookLogin from "react-facebook-login/dist/facebook-login-render-props";
import InstagramLogin from "react-instagram-oauth";
const GoogleIcon = "assets/imgs/google.png";
const FacebookIcon = "assets/imgs/facebook.png";
const Instagram = "assets/imgs/instagram.png";

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}
// const instAppId = "944678196649634";
// const instSecretId = "84275e192b421ea9627df42be4e17848";
// const redirect_url = "https://github.com/";
const Login = () => {
  const [user, setUser] = useState([]);
  const [profile, setProfile] = useState();
  const [fbprofile, setFbProfile] = useState();
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    // console.log({
    //   email: data.get("email"),
    //   password: data.get("password"),
    // });
  };
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
            // console.log('res', res)
          })
          .catch((err) => console.log(err));
        // console.log('res',res)
      } catch (err) {
        // console.log(err);
      }
    }
  });
  const responseFacebook = (response) => {
    // console.log(response.picture?.data.url);
  setProfile(response);
  };
  // const profiePic = profile?.picture?.data.url;
  // console.log("profile", profile);
const logOut = () => {
  googleLogout();
  setProfile(null);
};
  // console.log("response user", user);
  const responseMessage = (response) => {
  };
  const errorMessage = (error) => {
    // console.log(error);
  };
 const authHandler = (err, data) => {
  //  console.log("insta data",err, data);
 };
  return (
    <Container
      component="main"
      maxWidth="xs"
      sx={{
        margin: "auto",
      }}
    >
      {profile ? (
        <div>
          {/* <img
            // src={profile?.picture ? profile?.picture : picture?.data.url}
            src={profile?.picture}
            alt="User Profile"
            onError={(e) => console.error("Image load error:", e)}
          /> */}
          {/* <img src={profile.picture} alt="user image" /> */}
          <h3>User Logged in</h3>
          {/* <img src={profile.picture} alt="user pic" /> */}
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
        <Box
        // sx={{
        //   marginTop: 8,
        //   display: "flex",
        //   flexDirection: "column",
        //   alignItems: "center",
        //   bgcolor: "#fff",
        //   borderRadius: "10px",
        //   boxShadow: "10px",
        // }}
        >
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
            <Typography component="h1" variant="h5" mt={2}>
              Sign in
            </Typography>
            <Box
              component="form"
              onSubmit={handleSubmit}
              noValidate
              sx={{ mt: 1 }}
            >
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email or Mobile number"
                name="email"
                autoComplete="email"
                autoFocus
              />
              {/* <TextField
                  margin="normal"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                /> */}
              {/* <FormControlLabel
                  control={<Checkbox value="remember" color="primary" />}
                  label="Remember me"
                /> */}
              <Button
                type="submit"
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
                  <Link href="#" variant="body2">
                    {"Don't have an account? Sign Up"}
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
                  appId="422351110260814"
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
  );
};
export default Login;
