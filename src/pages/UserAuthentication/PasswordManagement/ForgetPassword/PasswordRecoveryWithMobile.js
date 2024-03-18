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
import { useSelector, useDispatch } from "react-redux";
import InputAdornment from "@mui/material/InputAdornment";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import { useFormik } from "formik";
import {
  initialValues,
  generateValidationSchema,
} from "../../../../common/Validations";
import { PasswordRecoveryInitiate } from "../../../../redux/actions/PasswordRecoveryActions";
const PasswordRecoveryWithMobile = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const receivedData = location?.state;
  const handleSubmit = async (values) => {
    try {
      dispatch(PasswordRecoveryInitiate(values, navigate));
    } catch (error) {}
  };
  const formFields = ["phone_number"];
  const validationSchema = generateValidationSchema(formFields);
  const formik = useFormik({
    initialValues: {
      phone_number: "",
      type: "mobile_account",
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
              // maxWidth: 400,
              mx: "auto", // margin left & right
              my: 15, // margin top & botom
              py: 3, // padding top & bottom
              px: 2, // padding left & right
              display: "flex",
              flexDirection: "column",
              gap: 2,
              borderRadius: "sm",
              // boxShadow: "md",
              // boxShadow: '0px 10px 80px rgba(0, 0, 0, 0.1)',
              bgcolor: "#fff",
              // color: "orange",
            }}
            // variant="outlined"
          >
            <Typography textAlign="left" variant="h6" mt={2}>
              Password Assistance With Mobile 
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
                  Enter Your Mobile Number
                </FormLabel>
                <TextField
                  placeholder="enter your mobile number"
                  id="phone_number"
                  name="phone_number"
                  size="small"
                  value={formik.values.phone_number}
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  error={formik.touched.phone_number && Boolean(formik.errors.phone_number)}
                  helperText={formik.touched.phone_number && formik.errors.phone_number}
                />
              </FormControl>
              <Button
                type="submit"
                fullWidth
                sx={{
                  mt: 2,
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
              <Grid
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
                <Grid item>
                  <Typography variant="body1">Already a member ?</Typography>
                </Grid>
                <Grid item>
                  {/* <Link href="#" variant="body2">
                    Forgot password ?
                  </Link> */}
                  <Link
                    underline="none"
                    variant="body1"
                    onClick={() => navigate("/login")}
                  >
                    Sign in
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

export default PasswordRecoveryWithMobile;
