import * as React from "react";
// import { useState, useEffect } from "react";
import Sheet from "@mui/joy/Sheet";
import Button from "@mui/joy/Button";
import Typography from "@mui/joy/Typography";
import Divider from "@mui/joy/Divider";
import Chip from "@mui/joy/Chip";
import Container from "@mui/joy/Container";
import { CssVarsProvider} from "@mui/joy/styles";
import CssBaseline from "@mui/joy/CssBaseline";
import Box from "@mui/joy/Box";
import Link from "@mui/joy/Link";
const Signup = () => {
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
                Sign up
              </Typography>
            </div>
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
              Signup with mobile number
            </Button>
            <Divider
              sx={{
                "--Divider-gap": "1px",
                // marginTop: "5px",
                // marginBottom: "2px",
              }}
            >
              <Chip variant="soft" color="neutral" size="sm">
                or
              </Chip>
            </Divider>
            <Button
              sx={{
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
              Signup with email id
            </Button>
            <Box
              sx={{
                display: "flex",
                gap: 1,
                alignItems: "center",
                flexWrap: "wrap",
              }}
            >
              <Typography>Already a member?</Typography>
              <Link href="#underline" underline="none" level="body-sm" fontWeight="bold">
                Sign in
              </Link>
            </Box>
          </Sheet>
        </main>
      </Container>
    </CssVarsProvider>
  );
};
export default Signup;
