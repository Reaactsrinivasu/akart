import React from 'react'
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
const LoginButton = () => {
       const navigate = useNavigate();
  return (
    <>
      <Button
        onClick={() => navigate("/login")}
        sx={{
          color: "#ff7e00",
          textTransform: "none",
          fontWeight: "bold",
          fontSize: "20px",
        }}
      >
        Login
      </Button>
    </>
  );
}

export default LoginButton