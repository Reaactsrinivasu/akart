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
import { signupWithEmailInitiate } from "../../../redux/actions/emailSignupActions";
const EmailSignUp = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleSubmit = async (values) => {
    try {
      // Make the API call directly in the component  
      dispatch(signupWithEmailInitiate(values,navigate));
      // navigate("/otp/otpverify", { state: formik.values.email });
      // Dispatch the success action
      // dispatch(createSignupWithEmailIdSuccess(result));
    } catch (error) {
      // Dispatch the error action
      // dispatch(createSignupWithEmailIdError(error));
    }
  };

  const formFields = ["email"];
  const validationSchema = generateValidationSchema(formFields);

  const formik = useFormik({
    initialValues: {
      email: "",
      type:"email_account",
    },
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
            }}
          >
            <Typography component="h1" variant="h5" mt={2}>
              Sign Up
            </Typography>
            <form onSubmit={formik.handleSubmit} style={{ marginTop: "20px" }}>
              <FormControl fullWidth>
                <FormLabel
                  sx={{
                    marginBottom: "10px",
                    color: "#000",
                    fontWeight: 400,
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
                  value={formik.values.email}
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  error={formik.touched.email && Boolean(formik.errors.email)}
                  helperText={formik.touched.email && formik.errors.email}
                />
              </FormControl>
              <Button
                type="submit"
                fullWidth
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
              </Grid>
            </form>
          </Paper>
        </Box>
      </Container>
    </>
  );
};

export default EmailSignUp;
