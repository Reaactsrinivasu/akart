import React from 'react'
import { Typography,Button } from '@mui/material';
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
      <Button onClick={() => logoutHandler()}>Logout</Button>
    </>
  );
}

export default WelcomePage;