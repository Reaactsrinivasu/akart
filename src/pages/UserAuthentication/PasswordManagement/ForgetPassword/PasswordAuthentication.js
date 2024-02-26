import * as React from "react";
// import { useState, useEffect } from "react";
import Sheet from "@mui/joy/Sheet";
import Button from "@mui/joy/Button";
import Typography from "@mui/joy/Typography";
import FormControl from "@mui/joy/FormControl";
import FormLabel from "@mui/joy/FormLabel";
import Input from "@mui/joy/Input";
import Container from "@mui/joy/Container";
import { CssVarsProvider } from "@mui/joy/styles";
import CssBaseline from "@mui/joy/CssBaseline";
import Link from "@mui/joy/Link";
import Divider from "@mui/joy/Divider";
import Chip from "@mui/joy/Chip";
// import Box from "@mui/joy/Box";
const PasswordAuthentication = () => {
  //   const [loginData, setLoginData] = useState({
  //     email: "",
  //     password: "",
  //   });
  //   const onInputChange = (e) => {
  //     let { name, value } = e.target;
  //     setLoginData({ ...loginData, [name]: value });
  //   };
  // const dispatch = useDispatch();
  // const navigate = useNavigate();
  // const token = localStorage.getItem("token");
  // const [storedResult, setStoredResult] = useState(null);
  const handleSubmit = async (e) => {};
  return (
    <CssVarsProvider>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <main>
          <Sheet
            sx={{
              maxWidth: 320,
              mx: "auto",
              my: 15,
              py: 3,
              px: 2,
              display: "flex",
              flexDirection: "column",
              gap: 2,
              borderRadius: "sm",
              boxShadow: "sm",
              bgcolor: "#fff",
              color: "orange",
              // boxShadow:'10px'
              // boxShadow: "0px 10px 50px rgba(0, 0, 0, 0.1)",
            }}
            variant="outlined"
          >
            <div>
              <Typography
                level="h1"
                variant="h1"
                component="h1"
                sx={{
                  fontWeight: 500,
                  fontSize: "20px",
                  lineHeight: 1.7,
                  color: "#111",
                }}
              >
                Authentication required
              </Typography>
              <Typography
                level="body-sm"
                // variant="h1"
                // component="h1"
                sx={{
                  fontWeight: 500,
                  // lineHeight: 1.2,
                  color: "#111",
                  marginBottom: "10px",
                }}
              >
                IN xxxxxxxx64
              </Typography>
              <Typography
                level="body-xs"
                color="neutral"
                sx={{
                  fontWeight: 500,
                  fontSize: "12px",
                  lineHeight: 1.2,
                  color: "#111",
                }}
              >
                We've sent a One Time Password (OTP) to the mobile number above.
                Please enter it to complete verification
              </Typography>
            </div>
            <FormControl>
              <FormLabel>Enter OTP</FormLabel>
              <Input placeholder="one time password" />
            </FormControl>
            <Button
              sx={{
                mt: 1, // margin top
                color: "#111",
                bgcolor: "#FFD814",
                borderColor: "#FCD200",
                borderRadius: "sm",
                "&:hover": {
                  textDecoration: "none",
                  textTransform: "none",
                  bgcolor: "#FCD200",
                },
              }}
              onClick={handleSubmit}
            >
              Continue
            </Button>
            <Divider
              sx={{
                "--Divider-gap": "1px",
              }}
            >
              <Chip variant="soft" color="neutral" size="sm">
                or
              </Chip>
            </Divider>
            {/* <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                flexWrap: "wrap",
              }}
            > */}
              <Link
                href="#underline"
                underline="none"
                level="body-sm"
                fontWeight="600"
                display="flex"
                justifyContent="center"
              >
                Resend OTP
              </Link>
            {/* </Box> */}
          </Sheet>
        </main>
      </Container>
    </CssVarsProvider>
  );
};
export default PasswordAuthentication;
