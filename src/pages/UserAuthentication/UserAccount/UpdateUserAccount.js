import React, { useState } from "react";
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import FormControl from "@mui/material/FormControl";
import OutlinedInput from "@mui/material/OutlinedInput";
import { FormLabel,TextField } from "@mui/material";
import Paper from "@mui/material/Paper";
import InputAdornment from "@mui/material/InputAdornment";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import { useLocation, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import { useFormik } from "formik";
import {
  initialValues,
  generateValidationSchema,
} from "../../../common/Validations";
import { updateUserInitiate } from "../../../redux/actions/updateUserActions";
import "./CustomPhoneInput.css"; 
const UpdateUserAccount = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const receivedData = location?.state;
  let userId = receivedData?.id;
  // console.log("receivedData", receivedData);
  // const [value, setValue] = useState({});
  const handleSubmit = async (values,resetForm) => {
    console.log("values", values);
    try {
      // Make the API call directly in the component
      dispatch(updateUserInitiate(userId, values, navigate));
       resetForm();
      // navigate("/otp/otpverify", { state: formik.values.email });
      // Dispatch the success action
      // dispatch(createSignupWithEmailIdSuccess(result));
    } catch (error) {
      // Dispatch the error action
      // dispatch(createSignupWithEmailIdError(error));
    }
  };
  const formFields = [
    "first_name",
    "last_name",
    "phone_number",
    "alternate_phone_number",
    "email",
    "password",
    "password_confirmation",
    "location",
    "nick_name",
  ];
  const validationSchema = generateValidationSchema(formFields);

  const formik = useFormik({
    initialValues: {
      first_name: "",
      last_name: "",
      phone_number: "",
      alternate_phone_number: "",
      email: "",
      password: "",
      password_confirmation: "",
      location: "",
      nick_name: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => handleSubmit(values),
  });
  return (
    <>
      <Container
        component="main"
        maxWidth="sm"
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
              marginTop: 8,
              padding: "20px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              bgcolor: "#fff",
            }}
          >
            <Typography variant="h5">Create Your Account</Typography>
            <Box
              component="form"
              onSubmit={formik.handleSubmit}
              // onSubmit={handleSubmit}
              // noValidate
              sx={{ mt: 1, padding: "25px" }}
            >
              <FormControl fullWidth sx={{ marginBottom: "10px" }}>
                <FormLabel
                  sx={{
                    marginBottom: "5px",
                    color: "#000",
                    fontWeight: 400,
                    fontSize: "15px",
                  }}
                >
                  Your First Name
                </FormLabel>
                <TextField
                  type="text"
                  id="first_name"
                  name="first_name"
                  size="small"
                  value={formik.values.first_name}
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  error={
                    formik.touched.first_name &&
                    Boolean(formik.errors.first_name)
                  }
                  helperText={
                    formik.touched.first_name && formik.errors.first_name
                  }
                />
              </FormControl>
              <FormControl fullWidth sx={{ marginBottom: "10px" }}>
                <FormLabel
                  sx={{
                    marginBottom: "5px",
                    color: "#000",
                    fontWeight: 400,
                    fontSize: "15px",
                  }}
                >
                  Your Last Name
                </FormLabel>
                <TextField
                  type="text"
                  id="last_name"
                  name="last_name"
                  size="small"
                  value={formik.values.last_name}
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  error={
                    formik.touched.last_name && Boolean(formik.errors.last_name)
                  }
                  helperText={
                    formik.touched.last_name && formik.errors.last_name
                  }
                />
              </FormControl>
              <FormControl fullWidth sx={{ marginBottom: "10px" }}>
                <FormLabel
                  sx={{
                    marginBottom: "5px",
                    color: "#000",
                    fontWeight: 400,
                    fontSize: "15px",
                  }}
                >
                  Mobile Number
                </FormLabel>
                {/* <PhoneInput
                  // placeholder="Enter phone number"
                  defaultCountry="IN"
                  // value={value}
                  // onChange={setValue}
                  style={{
                    border: "1px solid #ccc",
                    borderRadius: "4px",
                    // padding: "2px",
                  }}
                  value={formik.values.phone_number}
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  error={
                    formik.touched.phone_number &&
                    Boolean(formik.errors.phone_number)
                  }
                  helperText={
                    formik.touched.phone_number && formik.errors.phone_number
                  }
                /> */}
                <TextField
                  type="text"
                  id="phone_number"
                  name="phone_number"
                  size="small"
                  disabled={receivedData?.phone_number ? true : false}
                  value={
                    receivedData?.phone_number
                      ? (formik.values.phone_number =
                          receivedData?.phone_number)
                      : formik.values.phone_number
                  }
                  // value={formik.values.phone_number}
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  error={
                    formik.touched.phone_number &&
                    Boolean(formik.errors.phone_number)
                  }
                  helperText={
                    formik.touched.phone_number && formik.errors.phone_number
                  }
                />
              </FormControl>
              <FormControl fullWidth sx={{ marginBottom: "10px" }}>
                <FormLabel
                  sx={{
                    marginBottom: "5px",
                    color: "#000",
                    fontWeight: 400,
                    fontSize: "15px",
                  }}
                >
                  Alternate Mobile Number
                </FormLabel>
                <TextField
                  type="text"
                  id="alternate_phone_number"
                  name="alternate_phone_number"
                  size="small"
                  // disabled={receivedData?.phone_number ? true : false}
                  // value={
                  //   receivedData?.phone_number
                  //     ? (formik.values.phone_number =
                  //         receivedData?.phone_number)
                  //     : formik.values.phone_number
                  // }
                  // value={formik.values.phone_number}
                  value={formik.values.alternate_phone_number}
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  error={
                    formik.touched.alternate_phone_number &&
                    Boolean(formik.errors.alternate_phone_number)
                  }
                  helperText={
                    formik.touched.alternate_phone_number &&
                    formik.errors.alternate_phone_number
                  }
                />
              </FormControl>
              <FormControl fullWidth sx={{ marginBottom: "10px" }}>
                <FormLabel
                  sx={{
                    marginBottom: "5px",
                    color: "#000",
                    fontWeight: 400,
                    fontSize: "15px",
                  }}
                >
                  Your Email Id
                </FormLabel>
                <TextField
                  type="email"
                  id="email"
                  name="email"
                  size="small"
                  // value={receivedData.email}
                  disabled={receivedData?.email ? true : false}
                  // readOnly
                  value={
                    receivedData?.email
                      ? (formik.values.email = receivedData?.email)
                      : formik.values.email
                  }
                  // value={formik.values.email}
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  error={formik.touched.email && Boolean(formik.errors.email)}
                  helperText={formik.touched.email && formik.errors.email}
                />
              </FormControl>
              <FormControl fullWidth sx={{ marginBottom: "10px" }}>
                <FormLabel
                  sx={{
                    marginBottom: "5px",
                    color: "#000",
                    fontWeight: 400,
                    fontSize: "15px",
                  }}
                >
                  Password
                </FormLabel>
                <TextField
                  type="password"
                  id="password"
                  name="password"
                  size="small"
                  value={formik.values.password}
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  error={
                    formik.touched.password && Boolean(formik.errors.password)
                  }
                  helperText={formik.touched.password && formik.errors.password}
                />
              </FormControl>
              <FormControl fullWidth sx={{ marginBottom: "10px" }}>
                <FormLabel
                  sx={{
                    marginBottom: "5px",
                    color: "#000",
                    fontWeight: 400,
                    fontSize: "15px",
                  }}
                >
                  Confirm Password
                </FormLabel>
                <TextField
                  type="password"
                  id="password_confirmation"
                  name="password_confirmation"
                  size="small"
                  value={formik.values.password_confirmation}
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  error={
                    formik.touched.password_confirmation &&
                    Boolean(formik.errors.password_confirmation)
                  }
                  helperText={
                    formik.touched.password_confirmation &&
                    formik.errors.password_confirmation
                  }
                />
              </FormControl>
              <FormControl fullWidth sx={{ marginBottom: "10px" }}>
                <FormLabel
                  sx={{
                    marginBottom: "5px",
                    color: "#000",
                    fontWeight: 400,
                    fontSize: "15px",
                  }}
                >
                  Location 
                </FormLabel>
                <TextField
                  type="text"
                  id="location"
                  name="location"
                  size="small"
                  value={formik.values.location}
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  error={
                    formik.touched.location &&
                    Boolean(formik.errors.location)
                  }
                  helperText={
                    formik.touched.location &&
                    formik.errors.location
                  }
                />
              </FormControl>
              <FormControl fullWidth sx={{ marginBottom: "10px" }}>
                <FormLabel
                  sx={{
                    marginBottom: "5px",
                    color: "#000",
                    fontWeight: 400,
                    fontSize: "15px",
                  }}
                >
                  Nick Name
                </FormLabel>
                <TextField
                  type="text"
                  id="nick_name"
                  name="nick_name"
                  size="small"
                  value={formik.values.nick_name}
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  error={
                    formik.touched.nick_name &&
                    Boolean(formik.errors.nick_name)
                  }
                  helperText={
                    formik.touched.nick_name &&
                    formik.errors.nick_name
                  }
                />
              </FormControl>

              <Button
                type="submit"
                sx={{
                  mt: 3,
                  mb: 2,
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
                fullWidth
                // onClick={() => handleSubmit()}
              >
                Continue
              </Button>
              {/* <Grid container sx={{ marginBottom: "8px" }}>
                <Grid item xs>
                  <Link href="#" variant="body2">
                    Forgot password?
                  </Link>
                </Grid>
              </Grid> */}
            </Box>
          </Paper>
        </Box>
      </Container>
    </>
  );
};

export default UpdateUserAccount;