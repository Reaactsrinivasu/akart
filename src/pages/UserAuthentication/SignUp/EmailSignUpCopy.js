import React, { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { toast } from "react-toastify";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import FormControl from "@mui/material/FormControl";
import OutlinedInput from "@mui/material/OutlinedInput";
import { FormLabel, TextField } from "@mui/material";
import Paper from "@mui/material/Paper";
import { useLocation, useNavigate } from "react-router-dom";
import InputAdornment from "@mui/material/InputAdornment";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import { useSelector, useDispatch } from "react-redux";
import { useFormik } from "formik";
import {
  initialValues,
  generateValidationSchema,
} from "../../../common/Validations";
import { createSignupWithEmailIdStart } from "../../../redux/actions/emailSignupActions";
const EmailSignUp = () => {
  const location = useLocation();
  const navigate = useNavigate();
  // const [emailSignUpData, setEmailSignUpData] = useState({
  //   email: "",
  //   // type: "email_account",
  // });
    const dispatch = useDispatch();
  // const onInputChange = (e) => {
  //   // console.log("emailSignUpData", emailSignUpData);
  //   let { name, value } = e.target;
  //   setEmailSignUpData({ ...emailSignUpData, [name]: value });
  // };
  const handleSubmit = (values) => {
    alert("calling submit");
    // console.log("emailSignUpData in submit", emailSignUpData);
    // setStatus();
    dispatch(createSignupWithEmailIdStart(values));
    // resetForm();
    // toast.success("data sent successfully");
    // navigate("/otp/otpverify", { state: formik.values.email });
  };
  const gotoPreviousPageHandler = (mobiletoedit) => {
    // console.log("mobiletoedit", mobiletoedit);
    navigate("/login", { state: mobiletoedit });
  };
  // const [loginData, setLoginData] = useState({
  //   email: "",
  //   password: "",
  // });
  // const onInputChange = (e) => {
  //   let { name, value } = e.target;
  //   setLoginData({ ...loginData, [name]: value });
  // };
  // const dispatch = useDispatch();
  // const navigate = useNavigate();
  // const token = localStorage.getItem("token");
  // const [storedResult, setStoredResult] = useState(null);
   const formFields = ["email"];
   const validationSchema = generateValidationSchema(formFields);
  // const formik = useFormik({
  //   initialValues: initialValues,
  //   onSubmit: handleSubmit,
  //   validationSchema: validationSchema,
  // });
  const formik = useFormik({
    initialValues: {name: "",},
    validationSchema: validationSchema,
    onSubmit: (values) => handleSubmit(values),
  });
  return (
    <>
      <Container
        component="main"
        maxWidth="xs"
        sx={{
          margin: "auto",
        }}
      >
        <Box>
          <Paper
            elevation={1}
            variant="elevation"
            square={false}
            sx={{
              marginTop: 10,
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
              Sign Up
            </Typography>
            <form
              // onSubmit={(e) => {
              //   e.preventDefault();
              //   formik.handleSubmit(e);
              // }}
              onSubmit={formik.handleSubmit}
              // autoComplete="off"
              style={{ marginTop: "20px" }}
            >
              <FormControl fullWidth>
                <FormLabel
                  sx={{
                    marginBottom: "10px",
                    color: "#000",
                    forntWeight: 400,
                    fontSize: "15px",
                  }}
                >
                  Enter Your Email Id
                </FormLabel>
                <TextField
                  placeholder="enter your email id"
                  id="email"
                  name="email"
                  size="small"
                  // type="number"
                  // value={emailSignUpData.email || ""}
                  // onChange={onInputChange}
                  value={formik.values.email}
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  error={formik.touched.email && Boolean(formik.errors.email)}
                  helperText={formik.touched.email && formik.errors.email}
                />
              </FormControl>
              <Button
                // onClick={(e) => {
                //   // handleSubmit(e);
                //   navigate("/otp/otpverify", { state: emailSignUpData.email });
                // }}
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
                Send OTP
              </Button>
              <Grid container sx={{ marginBottom: "8px" }}>
                <Grid item xs>
                  <Link href="#" variant="body2">
                    Forgot password ?
                  </Link>
                </Grid>
                {/* <Grid item>
                <Link href="#" variant="body2" underline="none">
                  {"Not a memeber ? Sign Up"}
                </Link>
              </Grid> */}
              </Grid>
            </form>
          </Paper>
        </Box>
      </Container>
    </>
  );
};

export default EmailSignUp;
