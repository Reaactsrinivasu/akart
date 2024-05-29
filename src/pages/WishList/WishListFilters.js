import React from 'react';
import { Typography, Box, Divider,Avatar } from "@mui/material";
import UserDisplay from './UserDisplay';
import MyordersInWishlist from './MyordersInWishlist';
import AccountSettingsWishList from './AccountSettingsWishList';
import PaymentsInWishList from './PaymentsInWishList';
import MyStuffInWishList from './MyStuffInWishList';
import LogoutInWishList from './LogoutInWishList';
const WishListFilters = () => {
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
          <Box sx={{mb:3}}>
            <UserDisplay />
          </Box>
          <MyordersInWishlist />
          <Divider variant="fullWidth" />
          <AccountSettingsWishList />
          <Divider variant="fullWidth" />
          <PaymentsInWishList />
          <Divider variant="fullWidth" />
          <MyStuffInWishList />
          <Divider variant="fullWidth" />
          <LogoutInWishList />
        </Box>
      </>
    );
};

export default WishListFilters;