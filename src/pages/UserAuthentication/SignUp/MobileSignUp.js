import React, { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import FormControl from "@mui/material/FormControl";
import OutlinedInput from "@mui/material/OutlinedInput";
import { FormLabel } from "@mui/material";
import Paper from "@mui/material/Paper";
import { useLocation,useNavigate } from "react-router-dom";
import InputAdornment from "@mui/material/InputAdornment";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
const MobileSignUp = () => {
  
    const location = useLocation();
    const navigate = useNavigate();
    const receivedData = location?.state;
    // console.log("receivedData", receivedData);
    const [mobileSignUpData, setMobileSignUpData] = useState({
      mobile_number: "",
      type: "mobile_account",
    });
   const onInputChange = (e) => {
    //  console.log("mobileSignUpData", mobileSignUpData);
     let { name, value } = e.target;
     setMobileSignUpData({ ...mobileSignUpData, [name]: value });
   };
 const handleSubmit = (e) => {
   // event.preventDefault();
  //  console.log("mobileSignUpData in submit", mobileSignUpData);
    setMobileSignUpData({});
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
              Sign Up
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
                    fontSize: "15px",
                  }}
                >
                  Enter Your Mobile Number
                </FormLabel>
                <OutlinedInput
                  placeholder="enter your mobile number"
                  id="mobile_number"
                  name="mobile_number"
                  size="small"
                  // type="number"
                  value={mobileSignUpData.mobile_number || ""}
                  onChange={onInputChange}
                  required
                />
              </FormControl>
              <Button
                onClick={(e) => {
                  handleSubmit(e);
                  navigate("/otp/otpverify", {
                    state: mobileSignUpData.mobile_number,
                  });
                }}
                // type="submit"
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
            </Box>
          </Paper>
        </Box>
      </Container>
    </>
  );
}

export default MobileSignUp