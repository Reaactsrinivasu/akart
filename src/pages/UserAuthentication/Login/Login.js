import React,{useState,useEffect} from "react";
import { googleLogout, useGoogleLogin } from "@react-oauth/google";
import FacebookLogin from "react-facebook-login/dist/facebook-login-render-props";
import { useNavigate, useLocation } from "react-router-dom";
import Imports from "../../../common/Imports";
import DataTerms from "../../../common/DataTerms";
import { useDispatch, useSelector } from "react-redux";

import {
  initialValues,
  generateValidationSchema,
} from "../../../common/Validations";
const GoogleIcon = "assets/imgs/google.png";
const FacebookIcon = "assets/imgs/facebook.png";

const Login = () => {

  const [profile, setProfile] = Imports?.useState();
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const preData = location?.state;
  const [credential, setCredential] = Imports?.useState(preData);
  
  const login = useGoogleLogin({
    // onSuccess: (tokenResponse) => console.log(tokenResponse),
    onSuccess: async (response) => {
      try {
        const res = await Imports.axios
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
  const handleSubmit = async (values) => {
    console.log("email login ", values);
    // Determine whether the entered value is an email or mobile number
    const isEmail = /^\S+@\S+\.\S+$/.test(values?.input);
    const isMobileNumber = /^\d{10}$/.test(values?.input);
    console.log("isEmail ", isEmail);

    if (isEmail) {
      navigate("/login/email", { state: values?.input });
    } else if (isMobileNumber) {
      // Redirect to login with mobile number page
      navigate("/login/mobile", { state: values?.input });
    } else {
      // Handle invalid input
      Imports.toast.error("Invalid email or mobile number");
    }

    // const data = new FormData(event.currentTarget);
    // console.log("credential", credential);
  };
  const formFields = ["input"];
  const validationSchema = generateValidationSchema(formFields);
  const formik = Imports.useFormik({
    initialValues: {
      input: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => handleSubmit(values),
  });
  return (
    <>
      <Imports.ReusableBgBox
        sx={{
          backgroundImage: `linear-gradient(to right bottom, #f0f4f8d9, rgba(0 0 0 / 17%)), url(/assets/imgs/mainSigninBg.jpg)`,
        }}
      >
        <Imports.ReusableContainer component="main" maxWidth="xs">
          <Imports.ReusableBox>
            <Imports.ReusablePaper
              elevation={5}
              variant="elevation"
              square={false}
            >
              <Imports.ReusableTypography
                component="h1"
                variant="h2"
                mt={2}
                sx={{
                  color: "#4f4f4f",
                  // fontSize: "2.0rem",
                  // lineHeight: "2rem",
                  margin: "1.5rem 0px",
                }}
              >
                {DataTerms?.LoginButtonText}
              </Imports.ReusableTypography>
              <Imports.ReusableBox sx={{ mt: 1 }}>
                <form onSubmit={formik.handleSubmit} component="form">
                  <Imports.ReusableFormTextField
                    placeholder={DataTerms?.EmailOrPhoneNumberPlaceHolder}
                    size="small"
                    type="text"
                    id="input"
                    name="input"
                    value={
                      credential
                        ? (formik.values.input = credential)
                        : formik.values.input
                    }
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                    error={formik.touched.input && Boolean(formik.errors.input)}
                    helperText={formik.touched.input && formik.errors.input}
                  />
                  <Imports.ReusableButton
                    variant="contained"
                    type="submit"
                    fullWidth
                    sx={{
                      mt: 3,
                      mb: 2, // margin top
                    }}
                  >
                    {DataTerms?.ContinueButtonText}
                  </Imports.ReusableButton>
                </form>
                <Imports.ReusableGrid
                  container
                  display="flex"
                  flexDirection="row"
                  justifyContent="flex-end"
                  sx={{
                    marginBottom: "8px",
                    gap: 1,
                    color: "#9e9e9e",
                    cursor: "pointer",
                  }}
                >
                  <Imports.Grid item>
                    <Imports.ReusableTypography variant="body1">
                      {DataTerms?.NotMemeberLinkText}
                    </Imports.ReusableTypography>
                  </Imports.Grid>
                  <Imports.Grid item>
                    <Imports.ReusableLink
                      variant="body2"
                      underline="none"
                      sx={{ cursor: "pointer", color: "blue" }}
                      onClick={() => navigate("/signup")}
                    >
                      {DataTerms?.SignupLinkText}
                    </Imports.ReusableLink>
                  </Imports.Grid>
                </Imports.ReusableGrid>
                <Imports.ReusableDivider
                  // variant="middle"
                  sx={{
                    marginRight: "auto",
                    // marginLeft:'-10px',
                    marginTop: "auto",
                    // marginBottom: "5px",
                    "& .MuiDivider-wrapper": {
                      marginLeft: "-8px",
                      marginRight: "-8px",
                    },
                  }}
                >
                  <Imports.ReusableChip label="or" size="small" />
                </Imports.ReusableDivider>
                <Imports.ButtonGroup
                  fullWidth
                  orientation="vertical"
                  sx={{ marginBottom: "15px" }}
                >
                  <Imports.ReusableButton
                    onClick={() => login()}
                    // variant="contained"
                    startIcon={
                      <img
                        alt="google"
                        src={GoogleIcon}
                        style={{
                          width: "22px",
                          height: "22px",
                          marginRight: "8px",
                        }}
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
                      borderRadius: "8px",
                      border: "none",
                      whiteSpace: "nowrap",
                      "&:hover": {
                        backgroundColor: " #F0F4F8",
                        border: "none",
                      },
                    }}
                  >
                    {DataTerms?.GoogleButtonText}
                  </Imports.ReusableButton>
                  <FacebookLogin
                    appId="519056126982535"
                    autoLoad={false}
                    fields="name,email,picture"
                    callback={responseFacebook}
                    render={(renderProps) => (
                      <Imports.ReusableButton
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
                          borderRadius: "8px",
                          border: "none",
                          whiteSpace: "nowrap",
                          "&:hover": {
                            backgroundColor: " #F0F4F8",
                            border: "none",
                          },
                        }}
                      >
                        {DataTerms?.FacebookButtonText}
                      </Imports.ReusableButton>
                    )}
                  />
                </Imports.ButtonGroup>
              </Imports.ReusableBox>
            </Imports.ReusablePaper>
          </Imports.ReusableBox>
        </Imports.ReusableContainer>
      </Imports.ReusableBgBox>
    </>
  );
};
export default Login;
