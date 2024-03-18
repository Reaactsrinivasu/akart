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
          <Typography textAlign="center" component="h2" variant="h5" mt={2}>
            Sign Up
          </Typography>
          <Box sx={{ padding: "18px" }}>
            <Button
              // type="submit"
              onClick={() => navigate("/signup/mobilesignup")}
              fullWidth
              // variant="contained"
              // sx={{ mt: 3, mb: 2, textTransform: "none" }}
              sx={{
                mt: 1,
                mb: 1, // margin top
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

            <Divider
              // variant="middle"
              sx={{
                marginRight: "1px",
                // marginLeft:'-10px',
                marginTop: "10px",
                // marginBottom: "5px",
                "& .MuiDivider-wrapper": {
                  marginLeft: "-8px",
                  marginRight: "-8px",
                },
              }}
            >
              <Chip label="or" size="small" />
            </Divider>
            <Button
              // type="submit"
              onClick={() => navigate("/signup/emailsignup")}
              fullWidth
              // variant="contained"
              // sx={{ mt: 3, mb: 2, textTransform: "none" }}
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
              Sign up with email id
            </Button>
          </Box>
        </Paper>
      </Box>
    </Container>
  );
};
export default SignUp;
