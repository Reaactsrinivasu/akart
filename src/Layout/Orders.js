import React from "react";
import { Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
const Orders = () => {
  const navigate = useNavigate();
  return (
    <Typography
      onClick={() => navigate("/orders")}
      variant="body1"
      sx={{
        color: "blue",
        fontWeight: "bold",
        color: "#ff7e00",
        marginLeft: "20px",
        fontSize: "20px",
      }}
    >
      Orders
    </Typography>
  );
};
export default Orders;
