import React from "react";
import { Typography, Box, Divider, Avatar } from "@mui/material";
const OrderUserDisplay = () => {
  return (
    <>
      <Box
        sx={{
          backgroundColor: "background.paper",
          p: 2,
          display: "flex",
          flexDirection: "row",
          justifyContent: "flex-start",
          alignItems: "center",
          gap: 2,
        }}
      >
        <Avatar
          alt="Remy Sharp"
          src="assets/imgs/avatar.png"
          sx={{ width: 56, height: 56 }}
        />
        <Box
          sx={{
            // p:1,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            // alignItems: "flex-start",
          }}
        >
          <Typography variant="subtitle1">Hello,</Typography>
          <Typography
            variant="h5"
            fontWeight="bold"
            // p={2}
            sx={{
              // color: "text.secondary",
              color: "121212",
            }}
          >
            USER NAME
          </Typography>
        </Box>
      </Box>
    </>
  );
};

export default OrderUserDisplay;
