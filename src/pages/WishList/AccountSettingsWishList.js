import React from 'react';
import { Typography, Box, Divider, Avatar, IconButton } from "@mui/material";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import ReusableOpenList from '../../components/OpenLIst';
const AccountSettingsWishList = () => {
   const list = [
     { item: "Profile Information" },
     { item: "Managing Address" },
     { item: "PAN Card Information" },
   ];
    return (
      <>
        <ReusableOpenList
          icon="assets/imgs/accsetting.png"
          list={list}
          title="ACCOUNT SETTINGS"
          status={true}
        />
      </>
    );
};

export default AccountSettingsWishList;