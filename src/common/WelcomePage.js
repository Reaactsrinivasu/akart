import React from 'react'
import { Typography,Button ,Box,Grid} from '@mui/material';
import { useLocation, useNavigate } from "react-router-dom";

const WelcomePage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const receivedData = location?.state?.data;
  console.log('receivedData', receivedData);
  const logoutHandler = () => {
    localStorage.removeItem('token');
    navigate("/");
  }
  const updatePasswordHandler = () => {
     navigate("/updatepassword");
  }
  return (
    <>
      {receivedData ? (
        <Typography component="h4" variant="h4">
          Welcome {receivedData.first_name} {receivedData.last_name} To Akart
        </Typography>
      ) : (
        <Typography component="h4" variant="h4">
          Welcome To Akart Appliction.
        </Typography>
      )}
      <Grid container>
        <Grid>
          <Button
            sx={{ textTransform: "none" }}
            onClick={() => logoutHandler()}
          >
            Logout
          </Button>
        </Grid>
        <Grid>
          <Button
            sx={{ textTransform: "none" }}
            onClick={() => updatePasswordHandler()}
          >
            UpdatePassword
          </Button>
        </Grid>
      </Grid>
    </>
  );
}

export default WelcomePage;