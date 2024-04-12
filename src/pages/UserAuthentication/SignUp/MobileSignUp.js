import React, { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import FormControl from "@mui/material/FormControl";
import OutlinedInput from "@mui/material/OutlinedInput";
import { FormLabel, TextField } from "@mui/material";
import Paper from "@mui/material/Paper";
import { useLocation, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import InputAdornment from "@mui/material/InputAdornment";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import { signupWithMobileInitiate } from "../../../redux/actions/mobileSignupActions";
import { useFormik } from "formik";
import Imports from "../../../common/Imports";
import DataTerms from "../../../common/DataTerms";
import {
  initialValues,
  generateValidationSchema,
} from "../../../common/Validations";
import { ImportContacts } from "@mui/icons-material";
const MobileSignUp = () => {
 const navigate = Imports.useNavigate();
 const dispatch = Imports.useDispatch();
  const handleSubmit = async (values) => {
    try {
      console.log("values", values);
       dispatch(signupWithMobileInitiate(values,navigate));
    } catch (error) {
   }
 };
  const formFields = ["phone_number"];
  const validationSchema = generateValidationSchema(formFields);
  const formik = Imports.useFormik({
    initialValues: {
      phone_number: "",
      type: "mobile_account",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => handleSubmit(values),
  });
  return (
    <>
      <Imports.ReusableBgBox
        sx={{
          backgroundImage: `url(/assets/imgs/background.jpg)`,
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
                  margin: "1.5rem 0px",
                }}
              >
                {DataTerms?.SignupButtonText}
              </Imports.ReusableTypography>
              <Imports.ReusableBox sx={{ mt: 1 }}>
                <form
                  onSubmit={formik.handleSubmit}
                  style={{ marginTop: "20px" }}
                >
                  <Imports.FormControl fullWidth>
                    <Imports.FormLabel
                      sx={{
                        marginBottom: "10px",
                        color: "#000",
                        forntWeight: 400,
                        fontSize: "15px",
                      }}
                    >
                      {DataTerms?.PhoneNumberLabel}
                    </Imports.FormLabel>
                    <Imports.ReusableFormTextField
                      placeholder={DataTerms?.PhoneNumberPlaceHolder}
                      id="phone_number"
                      name="phone_number"
                      size="small"
                      value={formik.values.phone_number}
                      onBlur={formik.handleBlur}
                      onChange={formik.handleChange}
                      error={
                        formik.touched.phone_number &&
                        Boolean(formik.errors.phone_number)
                      }
                      helperText={
                        formik.touched.phone_number &&
                        formik.errors.phone_number
                      }
                    />
                  </Imports.FormControl>
                  <Imports.ReusableButton
                    type="submit"
                    fullWidth
                    sx={{
                      mt: 2,
                      mb: 2, // margin top
                    }}
                  >
                    {DataTerms?.SendOtpButtonText}
                  </Imports.ReusableButton>
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
                        {DataTerms?.AlreadyMemeberLinkText}
                      </Imports.ReusableTypography>
                    </Imports.Grid>
                    <Imports.Grid item>
                      <Imports.Link
                        underline="none"
                        variant="body1"
                        onClick={() => navigate("/login")}
                      >
                        {DataTerms?.SigninFormHeading}
                      </Imports.Link>
                    </Imports.Grid>
                  </Imports.ReusableGrid>
                </form>
              </Imports.ReusableBox>
            </Imports.ReusablePaper>
          </Imports.ReusableBox>
        </Imports.ReusableContainer>
      </Imports.ReusableBgBox>
    </>
  );
};

export default MobileSignUp;