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
import Select from "@mui/joy/Select";
import Option from "@mui/joy/Option";
const CreateUserAccount = () => {
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
              maxWidth: 420,
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
                Create Account
              </Typography>
            </div>
            <FormControl>
              <FormLabel>Your firstname</FormLabel>
              <Input placeholder="firstname" sx={{ marginBottom: "18px" }} />
              <FormLabel>Your lastname</FormLabel>
              <Input placeholder="firstname" sx={{ marginBottom: "18px" }} />
              <FormLabel>Mobile number</FormLabel>
              {/* <Input placeholder="mobile number" sx={{ marginBottom: "18px" }} /> */}
              <Input
                sx={{ marginBottom: "18px" }}
                placeholder="mobile number"
                startDecorator={
                  <React.Fragment>
                    {/* <Divider orientation="vertical" /> */}
                    <Select
                      variant="plain"
                      //   value={currency}
                      //   onChange={(_, value) => setCurrency(value)}s
                      slotProps={{
                        listbox: {
                          variant: "outlined",
                        },
                      }}
                      //   sx={{ mr: -1.5, "&:hover": { bgcolor: "transparent" } }}
                    >
                      <Option value="ind">IN 91 +</Option>
                      <Option value="usa">US 82 +</Option>
                      <Option value="uk">UK 12 +</Option>
                    </Select>
                  </React.Fragment>
                }
                // sx={{ width: 300 }}
              />
              <FormLabel>Email id</FormLabel>
              <Input placeholder="email" sx={{ marginBottom: "18px" }} />
              <FormLabel>Password</FormLabel>
              <Input placeholder="password" sx={{ marginBottom: "18px" }} />
              <FormLabel>Confirm password</FormLabel>
              <Input placeholder="confirm password" />
            </FormControl>
            <Button
              sx={{
                mt: 1,
                mb: 1,
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
              Create Account
            </Button>
            
          </Sheet>
        </main>
      </Container>
    </CssVarsProvider>
  );
};
export default CreateUserAccount;
