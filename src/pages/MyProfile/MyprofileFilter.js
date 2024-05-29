import React from "react";
import { Typography, Box, Divider, Avatar } from "@mui/material";
import MyProfileUserDisplay from "./MyProfileUserDisplay";
import MyProfileMyOrders from "./MyProfileMyOrders";
import AccountSettingsWishList from "./MyProflieAccountSettings";
import MyprofiePayments from "./MyprofiePayments";
import MyProfieStuff from "./MyProfieStuff";
import MyprofileLogout from "./MyprofileLogout";
const MyprofileFilter = () => {
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
            <MyProfileUserDisplay />
          </Box>
          <MyProfileMyOrders />
          {/* <Divider variant="fullWidth" /> */}
          <AccountSettingsWishList />
          <Divider variant="fullWidth" />
          <MyprofiePayments />
          <Divider variant="fullWidth" />
          <MyProfieStuff />
          <Divider variant="fullWidth" />
          <MyprofileLogout />
        </Box>
      </>
    );
};

export default MyprofileFilter;
