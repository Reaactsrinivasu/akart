import React from "react";
import { Typography, Box, Divider, Avatar } from "@mui/material";
import OrderUserDisplay from "./OrderUserDisplay";
import OrderMyOrders from "./OrderMyOrders";
import OrderAccountSettings from "./OrderAccountSettings";
import OrderPayments from "./OrderPayments";
import OrderStuff from "./OrderStuff";
import OrderLogout from "./OrderLogout";
const OrderFilter = () => {
    return (
      <>
        <Box
          sx={{
            p: 0,
            width: "100%",
            height: "100%",
            // backgroundColor: "background.paper",
          }}
        >
          <Box sx={{ mb: 3 }}>
            <OrderUserDisplay />
          </Box>
          <OrderMyOrders />
          {/* <Divider variant="fullWidth" /> */}
          <OrderAccountSettings />
          <Divider variant="fullWidth" />
          <OrderPayments />
          <Divider variant="fullWidth" />
          <OrderStuff />
          <Divider variant="fullWidth" />
          <OrderLogout />
        </Box>
      </>
    ); 
};

export default OrderFilter;
