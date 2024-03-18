import React, { useState, useRef, useEffect } from "react";
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
import Input from "@mui/material/Input";
import { useSelector, useDispatch } from "react-redux";
import { verifyOtpForNewPasswordInitiate } from "../../../redux/actions/otpVerifyForNewPasswordActions";
import { resendOtpInitiate } from "../../../redux/actions/resendOtpActions";
const OTPInputVerificationBlock = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [otp, setOtp] = useState("");
  const [timer, setTimer] = useState(60);
  const [isResendDisabled, setResendDisabled] = useState(true);
  const [otpValues, setOtpValues] = useState(["", "", "", ""]);
  const otpFieldsRef = useRef([]);
  const receivedData = location?.state;
  // console.log("receivedData in otpverify form  email sign up", receivedData);
  // useEffect(() => {
  //   // Your OTP timer logic here (e.g., countdown from 5 minutes)
  //   const countdownMinutes = 1;
  //   let seconds = countdownMinutes * 60;
  //   const intervalId = setInterval(() => {
  //     seconds--;
  //     const minutes = Math.floor(seconds / 60);
  //     const remainingSeconds = seconds % 60;
  //     const formattedTime = `${String(minutes).padStart(2, "0")}:${String(
  //       remainingSeconds
  //     ).padStart(2, "0")}`;
  //     setTimer(formattedTime);
  //     if (seconds === 0) {
  //       setResendDisabled(false);
  //       clearInterval(intervalId);
  //     }
  //   }, 1000);
  //   return () => clearInterval(intervalId); // Cleanup the interval on unmount
  // }, []);

  useEffect(() => {
    let intervalId;

    if (timer > 0) {
      intervalId = setInterval(() => {
        setTimer((prevTimer) => prevTimer - 1);
      }, 1000);
    } else {
      setResendDisabled(false); // Enable the resend button when timer reaches 0
      clearInterval(intervalId);
    }

    return () => clearInterval(intervalId); // Cleanup the interval on unmount
  }, [timer]);
  const formattedTimer = `${String(Math.floor(timer / 60)).padStart(
    2,
    "0"
  )}:${String(timer % 60).padStart(2, "0")}`;

  const handleInput = (index, value) => {
    if (value.length > 1) {
      return;
    }
    const newOtpValues = [...otpValues];
    newOtpValues[index] = value;
    setOtpValues(newOtpValues);
    if (value.length === 1 && index < otpValues.length - 1) {
      otpFieldsRef.current[index + 1].focus();
    }
  };
  const handleBackspace = (index) => {
    if (otpValues[index] !== "") {
      const newOtpValues = [...otpValues];
      newOtpValues[index] = "";
      setOtpValues(newOtpValues);
    } else if (index > 0) {
      otpFieldsRef.current[index - 1].focus();
    }
  };
  const handleVerification = () => {
    const enteredOtp = otpValues.join("");
    if (receivedData?.email) {
      dispatch(
        verifyOtpForNewPasswordInitiate(
          {
            otp: enteredOtp,
            email: receivedData.email,
            account_id: receivedData.id,
          },
          navigate
        )
      );
    } else if (receivedData?.phone_number) {
      dispatch(
        verifyOtpForNewPasswordInitiate(
          {
            otp: enteredOtp,
            phone_number: receivedData.phone_number.toString(),
            account_id: receivedData.id,
          },
          navigate
        )
      );
    } else {
      // Handle other errors if needed
      alert("An error occurred");
    }
    setOtpValues(["", "", "", ""]);
    // Add your verification logic here
  };
  const handleResendClick = () => {
    if (receivedData?.email) {
      dispatch(
        resendOtpInitiate(
          {
            email: receivedData.email,
            account_id: receivedData.id,
          },
          navigate
        )
      );
    } else if (receivedData?.phone_number) {
      dispatch(
        resendOtpInitiate(
          {
            phone_number: receivedData.phone_number.toString(),
            account_id: receivedData.id,
          },
          navigate
        )
      );
    } else {
      // Handle other errors if needed
      alert("An error occurred");
    }
    setTimer(60);
    setResendDisabled(true);
    // Handle resend OTP logic here
    // setResendDisabled(false);
    // setTimer("01:00"); // Reset timer to 5 minutes on resend
    // Additional logic to send a new OTP
    // console.log("Resending OTP...");
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
          <Typography mt={2}>
            Please Enter OTP Sent To{" "}
            <Link sx={{ textDecoration: "none", cursor: "pointer" }}>
              {receivedData?.email
                ? receivedData?.email
                : receivedData?.phone_number}
            </Link>{" "}
          </Typography>
          <Link
            sx={{
              //   textAlign: "center",
              //   marginLeft: "30px",
              textDecoration: "none",
              fontSize: "15px",
              cursor: "pointer",
            }}
          >
            Change ?
          </Link>
          <Box
            // component="form"
            // onSubmit={handleSubmit}
            // noValidate
            sx={{ padding: "15px" }}
          >
            <Grid
              container
              spacing={1}
              sx={{
                display: "flex",
                flexDirection: "row",
                flexWrap: "nowrap",
                justifyContent: "center",
              }}
            >
              {otpValues.map((digit, index) => (
                <Grid item key={index}>
                  <TextField
                    variant="standard"
                    autoComplete="off"
                    size="small"
                    value={digit}
                    onChange={(e) => handleInput(index, e.target.value)}
                    inputProps={{
                      maxLength: 1,
                      style: { textAlign: "center", maxWidth: "4rem" },
                    }}
                    onKeyDown={(e) => {
                      if (e.key === "Backspace") {
                        handleBackspace(index);
                      }
                    }}
                    inputRef={(ref) => {
                      otpFieldsRef.current[index] = ref;
                    }}
                  />
                </Grid>
              ))}
            </Grid>
            <Button
              onClick={() => handleVerification()}
              fullWidth
              variant="contained"
              sx={{
                mt: 3,
                mb: 2, // margin top
                color: "#111",
                bgcolor: "#FFD814",
                borderColor: "#FCD200",
                borderRadius: "md",
                textDecoration: "none",
                textTransform: "none",
                borderRadius: "8px",
                "&:hover": {
                  bgcolor: "#FCD200",
                },
              }}
            >
              Verify
            </Button>

            <Grid container sx={{ marginBottom: "8px" }}>
              <Grid item xs>
                <Typography sx={{ fontSize: "14px" }}>
                  not recieved your code ? {formattedTimer}
                </Typography>
              </Grid>
              <Grid item>
                {/* <Link href="#" variant="body2" component='button' underline="none" sx={{backgroundColor:'green',color:'#eee',borderRadius:'5px'}}>
                  Resend
                </Link> */}

                <Button
                  color="success"
                  disabled={isResendDisabled}
                  onClick={handleResendClick}
                  variant="contained"
                  sx={{
                    width: "15px",
                    height: "25px",
                    color: "#FFFCFC",
                    bgcolor: "#2C7E34",
                    borderColor: "#2C7E34",
                    borderRadius: "md",
                    textDecoration: "none",
                    textTransform: "none",
                    borderRadius: "8px",
                    fontSize: "12px",
                    marginTop: "-10px",
                    "&:hover": {
                      bgcolor: "#2C7E34",
                    },
                  }}
                >
                  Resend
                </Button>
              </Grid>
            </Grid>
          </Box>
        </Paper>
      </Box>
    </Container>
  );
};

export default OTPInputVerificationBlock;
