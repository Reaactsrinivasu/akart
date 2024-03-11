    // <ThemeProvider theme={defaultTheme}>
    //   <Container component="main" maxWidth="xs" >
    //     <CssBaseline />
    //     <Box
    //       sx={{
    //         marginTop: 8,
    //         display: "flex",
    //         flexDirection: "column",
    //         alignItems: "center",
    //       }}
    //     >
    //       {/* <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
    //         <LockOutlinedIcon />
    //       </Avatar> */}
    //       <Typography component="h1" variant="h5">
    //         Sign in
    //       </Typography>
    //       <Box
    //         component="form"
    //         onSubmit={handleSubmit}
    //         noValidate
    //         sx={{ mt: 1 }}
    //       >
    //         <TextField
    //           margin="normal"
    //           required
    //           fullWidth
    //           id="email"
    //           label="Email Address"
    //           name="email"
    //           autoComplete="email"
    //           autoFocus
    //         />
    //         <TextField
    //           margin="normal"
    //           required
    //           fullWidth
    //           name="password"
    //           label="Password"
    //           type="password"
    //           id="password"
    //           autoComplete="current-password"
    //         />
    //         {/* <FormControlLabel
    //           control={<Checkbox value="remember" color="primary" />}
    //           label="Remember me"
    //         /> */}
    //         <Button
    //           type="submit"
    //           fullWidth
    //           variant="contained"
    //           sx={{ mt: 3, mb: 2,textTransform:'none'}}
    //         >
    //           Sign In
    //         </Button>
    //         <Grid container>
    //           <Grid item xs>
    //             <Link href="#" variant="body2">
    //               Forgot password?
    //             </Link>
    //           </Grid>
    //           <Grid item>
    //             <Link href="#" variant="body2">
    //               {"Don't have an account? Sign Up"}
    //             </Link>
    //           </Grid>
    //         </Grid>
    //       </Box>
    //     </Box>
    //     {/* <Copyright sx={{ mt: 8, mb: 4 }} /> */}
    //   </Container>
// </ThemeProvider>
    

sign up 
<ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs" >
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          {/* <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar> */}
          <Typography component="h1" variant="h5">
            Sign Up
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
              variant="contained"
              sx={{ mt: 3, mb: 2,textTransform:'none'}}
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
                  {"Alredy a member ? Sign In"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider >
      
      <Container>
          <Grid
            container
            justifyContent="center"
            alignItems="center"
            style={{
              position: "absolute",
              border: "2px solid #222",
              borderRadius: "12px",
              backgroundColor: "#fff",
            }}
          >
            <Grid item xs={12}>
              <Typography
                id="modal-title"
                variant="h6"
                component="h2"
                style={{
                  textAlign: "center",
                  color: "white",
                  fontSize: "20px",
                  marginBottom: "10px",
                  paddingTop: "20px",
                }}
              >
                OTP Verification
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography
                id="modal-description"
                style={{
                  textAlign: "center",
                  color: "white",
                  fontWeight: "bold",
                  fontSize: "15px",
                  marginBottom: "20px",
                }}
              >
                Enter Verification code
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography
                style={{
                  textAlign: "center",
                  color: "white",
                  fontSize: "14px",
                }}
              >
                Your Verification code is sent by appnerve@gmail.com
              </Typography>
            </Grid>
            <Grid item xs={12} justifyContent="center">
              <Box
                style={{
                  color: "white",
                  width: "90%",
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "center",
                  marginBottom: "5px",
                }}
              >
                {otp.map((digit, index) => (
                  <Input
                    key={index}
                    style={{
                      padding: "10px",
                      border: "none",
                      background: "transparent",
                      borderBottom: "2px solid #aeb5c2",
                      color: "white",
                      marginLeft: "10%",
                    }}
                    disableUnderline
                    type="text"
                    fullWidth
                    value={digit}
                    onChange={(event) => handleOtpChange(event, index)}
                    onKeyPress={(event) => handleOtpKeyPress(event, index)}
                    autoFocus={index === 0}
                    ref={otpFields[index]}
                  />
                ))}
              </Box>
              <Typography
                style={{
                  color: "white",
                  display: "flex",
                  justifyContent: "flex-start",
                  marginLeft: "41px",
                  fontSize: "14px",
                  marginBottom: "30px",
                }}
              >
                (01:20)
              </Typography>
            </Grid>
            <Grid item xs={12} style={{ textAlign: "center" }}>
              <Button
                variant="contained"
                color="primary"
                style={{
                  padding: "10px 15px",
                  width: "260px",
                  borderRadius: "10px",
                  border: "2px solid #aeb5c2",
                  background: "transparent",
                  color: "white",
                  fontSize: "15px",
                  cursor: "pointer",
                  textTransform: "none",
                  marginTop: "18px",
                  marginBottom: "18px",
                }}
              >
                Next
              </Button>
              <Typography
                style={{
                  color: "white",
                  display: "flex",
                  justifyContent: "flex-start",
                  marginLeft: "41px",
                  fontSize: "14px",
                  marginBottom: "30px",
                }}
              >
                (01:20)
              </Typography>
              <Typography
                style={{
                  color: "white",
                  display: "flex",
                  justifyContent: "flex-start",
                  marginLeft: "41px",
                  fontSize: "14px",
                  marginBottom: "30px",
                }}
              >
                (01:20)
              </Typography>
              <Button
                variant="contained"
                style={{
                  padding: "10px 15px",
                  width: "260px",
                  borderRadius: "10px",
                  background: "#4CAF50",
                  color: "white",
                  fontSize: "15px",
                  cursor: "pointer",
                  textTransform: "none",
                }}
                onClick={handleResendClick}
              >
                Resend
              </Button>
              <Typography
                style={{
                  color: "white",
                  display: "flex",
                  justifyContent: "flex-start",
                  marginLeft: "41px",
                  fontSize: "14px",
                  paddingBottom: "15px",
                  marginTop: "10px",
                }}
              >
                Didn't receive?{" "}
                <a
                  style={{
                    color: "white",
                    fontWeight: 500,
                    textDecoration: "none",
                    fontStyle: "normal",
                  }}
                  href=""
                >
                  Resend
                </a>
              </Typography>
            </Grid>
          </Grid>
      </Container>


      import React, { useState, useRef } from 'react';
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
const OTPInputVerificationBlock = (props) => {
    
  const [open, setOpen] = useState(false);
  const [otp, setOtp] = useState(Array(6).fill(""));
const otpFields = Array(6)
  .fill(null)
  .map((_, index) => useRef(null));
  const handleOtpChange = (event, index) => {
    const { value } = event.target;
    if (value.match(/^\d+$/)) {
      const updatedOtp = [...otp];
      updatedOtp[index] = value;
      setOtp(updatedOtp);
      if (index < 5 && value !== "") {
        // Move focus to the next OTP field
        otpFields[index + 1].current.focus();
      }
    }
  };

  const handleOtpKeyPress = (event, index) => {
    if (event.key === "Backspace" && index > 0 && !otp[index]) {
      // Move focus to the previous OTP field when backspace is pressed
      otpFields[index - 1].current.focus();
    }
  };

  const handleResendClick = () => {
    // Handle resend logic here
    // console.log("Resend clicked");
    // Disable the resend button for a fixed timer (5 minutes)
    // Simulating asynchronous behavior with setTimeout
    // Enable the resend button after 5 minutes
  };

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
            marginTop: 10,
            padding: "30px 20px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            bgcolor: "cyan",
            // borderRadius: "10px",
            // boxShadow: "10px",
          }}
        >
          <Grid container justifyContent="center" alignItems="center">
            <Grid item xs={12}>
              <Typography
                style={{
                  textAlign: "center",
                  color: "#222",
                  fontSize: "14px",
                }}
              >
                Please Enter OTP Sent To absv1111@gmail.com
              </Typography>
            </Grid>
            <Grid item xs={12} justifyContent="center">
              <Box
                style={{
                  color: "#222",

                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "center",
                  marginBottom: "5px",
                }}
              >
                {otp.map((digit, index) => (
                  <input
                    maxWidth="xs"
                    key={index}
                    style={{
                      padding: "10px",
                      border: "none",
                      background: "transparent",
                      borderBottom: "2px solid #aeb5c2",
                      color: "#222",
                      marginLeft: "10%",
                    }}
                    disableUnderline
                    type="text"
                    // fullWidth
                    value={digit}
                    onChange={(event) => handleOtpChange(event, index)}
                    // onKeyPress={(event) => handleOtpKeyPress(event, index)}
                    autoFocus={index === 0}
                    ref={otpFields[index]}
                  />
                ))}
              </Box>
              <Typography
                style={{
                  color: "#222",
                  display: "flex",
                  justifyContent: "flex-start",
                  marginLeft: "41px",
                  fontSize: "14px",
                  marginBottom: "30px",
                }}
              >
                (01:20)
              </Typography>
            </Grid>
            <Grid item xs={12} style={{ textAlign: "center" }}>
              <Button
                variant="contained"
                color="primary"
                style={{
                  padding: "10px 15px",
                  width: "260px",
                  borderRadius: "10px",
                  border: "2px solid #aeb5c2",
                  background: "transparent",
                  color: "#222",
                  fontSize: "15px",
                  cursor: "pointer",
                  textTransform: "none",
                  marginTop: "18px",
                  marginBottom: "18px",
                }}
              >
                Next
              </Button>
              <Typography
                style={{
                  color: "#222",
                  display: "flex",
                  justifyContent: "flex-start",
                  marginLeft: "41px",
                  fontSize: "14px",
                  marginBottom: "30px",
                }}
              >
                (01:20)
              </Typography>
              <Typography
                style={{
                  color: "#222",
                  display: "flex",
                  justifyContent: "flex-start",
                  marginLeft: "41px",
                  fontSize: "14px",
                  marginBottom: "30px",
                }}
              >
                (01:20)
              </Typography>
              <Button
                variant="contained"
                style={{
                  padding: "10px 15px",
                  width: "260px",
                  borderRadius: "10px",
                  background: "#4CAF50",
                  color: "#222",
                  fontSize: "15px",
                  cursor: "pointer",
                  textTransform: "none",
                }}
                onClick={handleResendClick}
              >
                Resend
              </Button>
              <Typography
                style={{
                  color: "#222",
                  display: "flex",
                  justifyContent: "flex-start",
                  marginLeft: "41px",
                  fontSize: "14px",
                  paddingBottom: "15px",
                  marginTop: "10px",
                }}
              >
                Didn't receive?{" "}
                <a
                  style={{
                    color: "#222",
                    fontWeight: 500,
                    textDecoration: "none",
                    fontStyle: "normal",
                  }}
                  href=""
                >
                  Resend
                </a>
              </Typography>
            </Grid>
          </Grid>
        </Paper>
      </Box>
    </Container>
  );
};

export default OTPInputVerificationBlock;
