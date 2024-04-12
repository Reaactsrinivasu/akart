import React, { useState } from "react";
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Container from "@mui/material/Container";
import FormControl from "@mui/material/FormControl";
import OutlinedInput from "@mui/material/OutlinedInput";
import { FormLabel } from "@mui/material";
import Paper from "@mui/material/Paper";
import InputAdornment from "@mui/material/InputAdornment";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import { useLocation, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { useSelector, useDispatch } from "react-redux";
import { createNewPasswordInitiate } from "../../../../redux/actions/createNewPasswordActions";
import {
  initialValues,
  generateValidationSchema,
} from "../../../../common/Validations";
const CreateNewPassword = () => {
  // Use the credential value as needed in your component
  //  console.log("data:", data);
  //  console.log("Email:", credential);

  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const receivedData = location?.state;
  console.log('receivedData',receivedData);
  // const [emailLoginData, setEmailLoginData] = useState({
  //   email: receivedData,
  //   email: "",
  //   type: "email_account",
  // });

  
  // const onInputChange = (e) => {
  //   // console.log("emailLoginData", emailLoginData);
  //   let { name, value } = e.target;
  //   setEmailLoginData({ ...emailLoginData, [name]: value });
  // };
  const handleSubmit = async (values) => {
    console.log("create new password ", values);
    try {
      dispatch(createNewPasswordInitiate(values, navigate));
    } catch (error) {}
  };
  const formFields = ["password", "new_password"];
  const validationSchema = generateValidationSchema(formFields);
  const formik = useFormik({
    initialValues: {
      password: "",
      new_password: "",
      account_id: receivedData?.id,
    },
    validationSchema: validationSchema,
    onSubmit: (values) => handleSubmit(values),
  });
  return (
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
            marginTop: 8,
            // padding: "20px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            bgcolor: "#fff",
          }}
        >
          <Typography component="h1" variant="h5" mt={2}>
            Create New Password
          </Typography>
          <form
            onSubmit={formik.handleSubmit}
            component="form"
            style={{ padding: "25px", marginTop: "20px" }}
          >
            <FormControl fullWidth sx={{ marginBottom: "15px" }}>
              <FormLabel
                sx={{
                  marginBottom: "10px",
                  color: "#000",
                  fontWeight: 400,
                  fontSize: "15px",
                }}
              >
                Password
              </FormLabel>
              <TextField
                placeholder="password"
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
            <FormControl fullWidth>
              <FormLabel
                sx={{
                  marginTop: "13px",
                  marginBottom: "10px",
                  color: "#000",
                  fontWeight: 400,
                  fontSize: "15px",
                }}
              >
                Password Again
              </FormLabel>
              <TextField
                placeholder="new password"
                id="new_password"
                name="new_password"
                size="small"
                type="password"
                value={formik.values.new_password}
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                error={
                  formik.touched.new_password && Boolean(formik.errors.new_password)
                }
                helperText={formik.touched.new_password && formik.errors.new_password}
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
            >
              Save & Sign
            </Button>
            {/* <Grid container sx={{ marginBottom: "8px" }}>
              <Grid item xs>
                <Link
                  underline="none"
                  variant="body1"
                  sx={{ cursor: "pointer" }}
                  onClick={() =>
                    navigate("/mobilepwdrecovery", { state: receivedData })
                  }
                >
                  Forgot password ?
                </Link>
              </Grid>
            </Grid> */}
          </form>
        </Paper>
      </Box>
    </Container>
  );
};

export default CreateNewPassword;
