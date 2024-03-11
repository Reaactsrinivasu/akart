import React, { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import Divider from "@mui/material/Divider";
import Chip from "@mui/material/Chip";
import { useLocation, useNavigate } from "react-router-dom";
const SignUp = () => {
  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   const data = new FormData(event.currentTarget);
  //   console.log({
  //     email: data.get("email"),
  //     password: data.get("password"),
  //   });
  // };
   const location = useLocation();
   const navigate = useNavigate();
   const receivedData = location?.state;
  //  console.log("receivedData", receivedData);

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
          <Typography component="h2" variant="h5" mt={2}>
            Sign Up
          </Typography>
          <Box
            // component="form"
            // onSubmit={handleSubmit}
            // noValidate
            sx={{ padding: "15px" }}
          >
            <Button
              // type="submit"
              onClick={() => navigate("/signup/mobilesignup")}
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
              Sign up with mobile number
            </Button>
            <Button
              // type="submit"
              onClick={() => navigate("/signup/emailsignup")}
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
              Sign up with email id
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
  );
};
export default SignUp;
