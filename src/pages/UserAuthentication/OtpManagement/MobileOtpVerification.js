import React, { useState, useRef } from "react";
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
const OTPInputVerificationBlock = () => {
  const [otpValues, setOtpValues] = useState(["", "", "", ""]);
  const otpFieldsRef = useRef([]);

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
    // console.log("Entered OTP:", enteredOtp);
    setOtpValues(["", "", "", ""]);

    // Add your verification logic here
  };
  return (
    // <Container
    //   component="main"
    //   maxWidth="xs"
    //   sx={{
    //     margin: "auto",
    //   }}
    // >
    //   <Box>
    //     <Paper
    //       elevation={1}
    //       variant="elevation"
    //       square={false}
    //       sx={{
    //         marginTop: 8,
    //         padding: "10px",
    //         display: "flex",
    //         flexDirection: "column",
    //         alignItems: "center",
    //         bgcolor: "#fff",
    //         // borderRadius: "10px",
    //         // boxShadow: "10px",
    //       }}
    //     >
    //       <Grid
    //         container
    //         justifyContent="center"
    //         alignItems="center"
    //       >
    //         <Grid item xs={12}>
    //           <Typography
    //             id="modal-title"
    //             variant="h6"
    //             component="h2"
    //             style={{
    //               textAlign: "center",
    //               color: "#222",
    //               fontSize: "20px",
    //               marginBottom: "10px",
    //               paddingTop: "20px",
    //             }}
    //           >
    //             OTP Verification
    //           </Typography>
    //         </Grid>
    //         <Grid item xs={12}>
    //           <Typography
    //             id="modal-description"
    //             style={{
    //               textAlign: "center",
    //               color: "#222",
    //               fontWeight: "bold",
    //               fontSize: "15px",
    //               marginBottom: "20px",
    //             }}
    //           >
    //             Enter Verification code
    //           </Typography>
    //         </Grid>
    //         <Grid item xs={12}>
    //           <Typography
    //             style={{
    //               textAlign: "center",
    //               color: "#222",
    //               fontSize: "14px",
    //             }}
    //           >
    //             Your Verification code is sent by appnerve@gmail.com
    //           </Typography>
    //         </Grid>
    //         <Grid item xs={12} justifyContent="center">
    //           <Box
    //             style={{
    //               color: "#222",
    //               width: "90%",
    //               display: "flex",
    //               flexDirection: "row",
    //               justifyContent: "center",
    //               marginBottom: "5px",
    //             }}
    //           >
    //             {otp.map((digit, index) => (
    //               <TextField
    //                 key={index}
    //                 style={{
    //                   padding: "10px",
    //                   border: "none",
    //                   background: "transparent",
    //                   borderBottom: "2px solid #aeb5c2",
    //                   color: "#222",
    //                   marginLeft: "10%",
    //                 }}
    //                 disableUnderline
    //                 type="text"
    //                 fullWidth
    //                 value={digit}
    //                 onChange={(event) => handleOtpChange(event, index)}
    //                 onKeyPress={(event) => handleOtpKeyPress(event, index)}
    //                 autoFocus={index === 0}
    //                 ref={otpFields[index]}
    //               />
    //             ))}
    //           </Box>
    //           <Typography
    //             style={{
    //               color: "#222",
    //               display: "flex",
    //               justifyContent: "flex-start",
    //               marginLeft: "41px",
    //               fontSize: "14px",
    //               marginBottom: "30px",
    //             }}
    //           >
    //             (01:20)
    //           </Typography>
    //         </Grid>
    //         <Grid item xs={12} style={{ textAlign: "center" }}>
    //           <Button
    //             variant="contained"
    //             color="primary"
    //             style={{
    //               padding: "10px 15px",
    //               width: "260px",
    //               borderRadius: "10px",
    //               border: "2px solid #aeb5c2",
    //               background: "transparent",
    //               color: "#222",
    //               fontSize: "15px",
    //               cursor: "pointer",
    //               textTransform: "none",
    //               marginTop: "18px",
    //               marginBottom: "18px",
    //             }}
    //           >
    //             Next
    //           </Button>
    //           <Typography
    //             style={{
    //               color: "#222",
    //               display: "flex",
    //               justifyContent: "flex-start",
    //               marginLeft: "41px",
    //               fontSize: "14px",
    //               marginBottom: "30px",
    //             }}
    //           >
    //             (01:20)
    //           </Typography>
    //           <Typography
    //             style={{
    //               color: "#222",
    //               display: "flex",
    //               justifyContent: "flex-start",
    //               marginLeft: "41px",
    //               fontSize: "14px",
    //               marginBottom: "30px",
    //             }}
    //           >
    //             (01:20)
    //           </Typography>
    //           <Button
    //             variant="contained"
    //             style={{
    //               padding: "10px 15px",
    //               width: "260px",
    //               borderRadius: "10px",
    //               background: "#4CAF50",
    //               color: "#222",
    //               fontSize: "15px",
    //               cursor: "pointer",
    //               textTransform: "none",
    //             }}
    //             onClick={handleResendClick}
    //           >
    //             Resend
    //           </Button>
    //           <Typography
    //             style={{
    //               color: "#222",
    //               display: "flex",
    //               justifyContent: "flex-start",
    //               marginLeft: "41px",
    //               fontSize: "14px",
    //               paddingBottom: "15px",
    //               marginTop: "10px",
    //             }}
    //           >
    //             Didn't receive?{" "}
    //             <a
    //               style={{
    //                 color: "#222",
    //                 fontWeight: 500,
    //                 textDecoration: "none",
    //                 fontStyle: "normal",
    //               }}
    //               href=""
    //             >
    //               Resend
    //             </a>
    //           </Typography>
    //         </Grid>
    //       </Grid>
    //     </Paper>
    //   </Box>
    // </Container>
    <Container maxWidth="xs" style={{ marginTop: "50px" }}>
      <Grid
        container
        spacing={1}
        sx={{ display: "flex", flexDirection: "row", flexWrap: "nowrap" }}
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
                // maxLength: 1,
                style: { textAlign: "center" },
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
        variant="contained"
        color="primary"
        onClick={handleVerification}
        style={{ marginTop: "20px" }}
      >
        Verify
      </Button>
    </Container>
  );
};

export default OTPInputVerificationBlock;
