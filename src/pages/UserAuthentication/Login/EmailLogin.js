import React, { useState } from "react";
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
import InputAdornment from "@mui/material/InputAdornment";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import { useLocation, useNavigate} from "react-router-dom";
const EmailLogin = () => {
  // Use the credential value as needed in your component
  //  console.log("data:", data);
  //  console.log("Email:", credential);
  
  const location = useLocation();
  const navigate = useNavigate();
  const receivedData = location?.state;
  // console.log('receivedData',receivedData);
  const [emailLoginData, setEmailLoginData] = useState({
    email: receivedData,
    email: "",
    type: "email_account",
  });

  const gotoPreviousPageHandler = (emailtoedit) => {
    // console.log("emailtoedit", emailtoedit);
    navigate("/login", { state: emailtoedit });
  };
  const onInputChange = (e) => {
    // console.log("emailLoginData", emailLoginData);
    let { name, value } = e.target;
    setEmailLoginData({ ...emailLoginData, [name]: value });
  };
  const handleSubmit = (e) => {
    // event.preventDefault();
    // console.log("emailLoginData in submit", emailLoginData);
    setEmailLoginData({})
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
            // padding: "20px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            bgcolor: "#fff",
          }}
        >
          <Typography component="h1" variant="h5" mt={2}>
            Log In
          </Typography>
          <Box
            // component="form"
            // onSubmit={handleSubmit}
            // noValidate
            sx={{ mt: 1, padding: "25px" }}
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
                Enter Your Email Id
              </FormLabel>
              <OutlinedInput
                type="text"
                id="email"
                name="email"
                value={emailLoginData.email || receivedData}
                onChange={onInputChange}
                size="small"
                // value={receivedData}
                disabled
                readOnly
                endAdornment={
                  <InputAdornment position="end">
                    <EditOutlinedIcon
                      sx={{ cursor: "pointer" }}
                      onClick={() => gotoPreviousPageHandler(receivedData)}
                    />
                  </InputAdornment>
                }
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
                Enter Your Password
              </FormLabel>
              <OutlinedInput
                placeholder="password"
                id="password"
                name="password"
                size="small"
                type="password"
                // value={password}
                value={emailLoginData.password || ""}
                onChange={onInputChange}
                // onChange={(e) => setPassword(e.target.value)}
              />
            </FormControl>
            <Button
              // type="submit"
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
              onClick={() => handleSubmit()}
            >
              Continue
            </Button>
            <Grid container sx={{ marginBottom: "8px" }}>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Paper>
      </Box>
    </Container>
  );
};

export default EmailLogin;
