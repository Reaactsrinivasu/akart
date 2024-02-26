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
const UpdatePassword = () => {
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
                  fontWeight: 500,
                  fontSize: "20px",
                  lineHeight: 1.7,
                  color: "#111",
                }}
              >
                Update password
              </Typography>
            </div>
            <FormControl>
              <FormLabel>Enter old password</FormLabel>
              <Input placeholder="old password" sx={{ marginBottom: "18px" }} />
              <FormLabel>Enter new password</FormLabel>
              <Input placeholder="new password" sx={{ marginBottom: "18px" }} />
              <FormLabel>Enter confirm password</FormLabel>
              <Input placeholder="confirm password" />
            </FormControl>
            <Button
              sx={{
                mt: 1,
                mb:1,            
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
              Save changes and sign in 
            </Button>
          </Sheet>
        </main>
      </Container>
    </CssVarsProvider>
  );
};
export default UpdatePassword;
