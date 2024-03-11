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
const MobileLogin = () => {
  const [password, setPassword] = useState("");
  const location = useLocation();
  const navigate = useNavigate();
  const receivedData = location?.state;
  // console.log("receivedData", receivedData);

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
  const handleSubmit = async (e) => {};
  return (
    // <CssVarsProvider>
    //   <Container component="main" maxWidth="xs">
    //     <CssBaseline />
    //     <main>
    //       <Sheet
    //         sx={{
    //           maxWidth: 360,
    //           mx: "auto",
    //           my: 15,
    //           py: 3,
    //           px: 2,
    //           display: "flex",
    //           flexDirection: "column",
    //           gap: 2,
    //           borderRadius: "sm",
    //           boxShadow: "sm",
    //           bgcolor: "#fff",
    //           color: "orange",
    //           // boxShadow:'10px'
    //           // boxShadow: "0px 10px 50px rgba(0, 0, 0, 0.1)",
    //         }}
    //         variant="outlined"
    //       >
    //         <div>
    //           <Typography
    //             level="h1"
    //             variant="h1"
    //             component="h1"
    //             sx={{
    //               fontWeight: 400,
    //               fontSize: "28px",
    //               lineHeight: 1.2,
    //               color: "#111",
    //               letterSpacing: "1px",
    //             }}
    //           >
    //             Log in
    //           </Typography>
    //         </div>
    //         <FormControl>
    //           <FormLabel>Enter your mobile number</FormLabel>
    //           <Input
    //             placeholder="mobile number"
    //             type="text"
    //             sx={{ marginBottom: "18px" }}
    //           />
    //           <FormLabel>Enter your password</FormLabel>
    //           <Input placeholder="password" />
    //         </FormControl>
    //         <Button
    //           sx={{
    //             mt: 1, // margin top
    //             color: "#111",
    //             bgcolor: "#FFD814",
    //             borderColor: "#FCD200",
    //             borderRadius: "sm",
    //             "&:hover": {
    //               textDecoration: "none",
    //               textTransform: "none",
    //               bgcolor: "#FCD200",
    //             },
    //           }}
    //           onClick={handleSubmit}
    //         >
    //           Continue
    //         </Button>
    //         <Link href="#underline" underline="none" level="body-xs">
    //           Forget password ?
    //         </Link>
    //       </Sheet>
    //     </main>
    //   </Container>
    // </CssVarsProvider>
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
            Log In
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
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
                size="small"
                value={receivedData}
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
              <FormLabel
                sx={{
                  marginTop: "13px",
                  marginBottom: "10px",
                  color: "#000",
                  forntWeight: 400,
                  fontSize: "15px",
                }}
              >
                Enter Your Password
              </FormLabel>
              <OutlinedInput placeholder="password" size="small" />
            </FormControl>
            <Button
              type="submit"
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
  );
};
export default MobileLogin;
