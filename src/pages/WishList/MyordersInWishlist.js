import React from 'react';
import { Typography, Box, Divider, Avatar,IconButton } from "@mui/material";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import ReusableOpenList from '../../components/OpenLIst';
const MyordersInWishlist = () => {
    return (
      <>
        <ReusableOpenList icon="assets/imgs/myorders.png" title="MY ORDERS" status={true} />
      </>
    );
};
export default MyordersInWishlist;