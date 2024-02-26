import * as React from "react";
// import { useState,useEffect } from "react";
import Sheet from "@mui/joy/Sheet";
import Button from "@mui/joy/Button";
import Typography from "@mui/joy/Typography";
import FormControl from "@mui/joy/FormControl";
import FormLabel from "@mui/joy/FormLabel";
import Input from "@mui/joy/Input";
import Divider from "@mui/joy/Divider";
import Chip from "@mui/joy/Chip";
import Container from "@mui/joy/Container";
import { CssVarsProvider } from "@mui/joy/styles";
import CssBaseline from "@mui/joy/CssBaseline";
import Box from "@mui/joy/Box";
import Link from "@mui/joy/Link";
const GoogleIcon = "assets/imgs/google.png";
const FacebookIcon = "assets/imgs/facebook.png";
const TwitterIcon = "assets/imgs/twitter.png";
const Login = () => {
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
    <CssVarsProvider>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <main>
          <Sheet
            sx={{
              maxWidth: 360,
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
                  fontWeight: 400,
                  fontSize: "28px",
                  lineHeight: 1.2,
                  color: "#111",
                  letterSpacing: "1px",
                }}
              >
                Log in
              </Typography>
            </div>
            <FormControl>
              <FormLabel>Email or mobile phone number</FormLabel>
              <Input placeholder="email or mobile" />
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
                marginTop: "10px",
                marginBottom: "10px",
              }}
            >
              <Chip variant="soft" color="neutral" size="sm">
                or
              </Chip>
            </Divider>
            <Button
              variant="soft"
              color="neutral"
              fullWidth
              startDecorator={
                <img
                  alt="google"
                  src={GoogleIcon}
                  style={{ width: "21px", height: "21px" }}
                />
              }
              sx={{
                borderRadius: "sm",
                "--Button-gap": "15%",
              }}
            >
              Continue with Google
            </Button>
            <Button
              variant="soft"
              color="neutral"
              fullWidth
              startDecorator={
                <img
                  alt="facebook"
                  src={FacebookIcon}
                  style={{ width: "30px", height: "25px" }}
                />
              }
              sx={{
                borderRadius: "sm",
                "--Button-gap": "10%",
              }}
            >
              Continue with Facebook
            </Button>
            <Button
              variant="soft"
              color="neutral"
              fullWidth
              startDecorator={
                <img
                  alt="twitter"
                  src={TwitterIcon}
                  style={{ width: "22px", height: "23px" }}
                />
              }
              sx={{
                marginBottom: "10px",
                borderRadius: "sm",
                "--Button-gap": "15%",
              }}
            >
              Continue with Twitter
            </Button>
            <Box
              sx={{
                display: "flex",
                gap: 1,
                justifyContent: "center",
                flexWrap: "wrap",
              }}
            >
              <Typography>Not a member?</Typography>
              <Link
                href="#underline"
                underline="none"
                level="body-sm"
                fontWeight="bold"
              >
                Sign up
              </Link>
            </Box>
          </Sheet>
        </main>
      </Container>
    </CssVarsProvider>
  );
};
export default Login;
