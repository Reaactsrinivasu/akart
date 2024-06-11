import React from 'react';
import { useRef, useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Typography, Grid, Box, Divider, Paper, Card } from "@mui/material";
import { loadUserAddressInitiate } from '../../redux/actions/address/userAddressActions';
const MyProfileAddress = () => {
   const dispatch = useDispatch();
  const getUserAddress = useSelector((state) => state.useraddressdata?.data?.data?.data[0] || []);
  useEffect(() => {
    dispatch(loadUserAddressInitiate());
  }, [dispatch]);
  // console.log("getUserAddress", getUserAddress);
  return (
    <>
      <Box
        sx={{
          p: 2,
          width: "100%",
          height: "auto",
          border: "1px solid",
          borderColor: "divider",
        }}
      >
        <Typography
          sx={{ fontWeight: 700, fontFamily: "Lato", fontSize: "19px" }}
        >
          User Address
        </Typography>
        <Grid container spacing={2} mt={1} p={1}>
          <Grid item xs={12} sm={8} md={6}>
            <Typography>Full Name</Typography>
          </Grid>
          <Grid
            item
            xs={12}
            sm={8}
            md={6}
          >
            : {`${getUserAddress?.first_name} ${getUserAddress?.last_name}`}
          </Grid>
          <Grid item xs={12} sm={8} md={6}>
            <Typography>House Number</Typography>
          </Grid>
          <Grid item xs={12} sm={8} md={6}>
            : {getUserAddress?.house_number}
          </Grid>
          <Grid item xs={12} sm={8} md={6}>
            <Typography>Street Name</Typography>
          </Grid>
          <Grid item xs={12} sm={8} md={6}>
            : {getUserAddress?.street}
          </Grid>
          <Grid item xs={12} sm={8} md={6}>
            <Typography>LandMark</Typography>
          </Grid>
          <Grid item xs={12} sm={8} md={6}>
            : {getUserAddress?.landmark}
          </Grid>
          <Grid item xs={12} sm={8} md={6}>
            <Typography>Locality</Typography>
          </Grid>
          <Grid item xs={12} sm={8} md={6}>
            : {getUserAddress?.locality}
          </Grid>
          <Grid item xs={12} sm={8} md={6}>
            <Typography>City</Typography>
          </Grid>
          <Grid item xs={12} sm={8} md={6}>
            : {getUserAddress?.city}
          </Grid>
          <Grid item xs={12} sm={8} md={6}>
            <Typography>Pincode</Typography>
          </Grid>
          <Grid item xs={12} sm={8} md={6}>
            : {getUserAddress?.pincode}
          </Grid>
          <Grid item xs={12} sm={8} md={6}>
            <Typography>Phone Number</Typography>
          </Grid>
          <Grid item xs={12} sm={8} md={6}>
            : {getUserAddress?.phone_number}
          </Grid>
          <Grid item xs={12} sm={8} md={6}>
            <Typography>State</Typography>
          </Grid>
          <Grid item xs={12} sm={8} md={6}>
            : {getUserAddress?.state}
          </Grid>
          <Grid item xs={12} sm={8} md={6}>
            <Typography>Country</Typography>
          </Grid>
          <Grid item xs={12} sm={8} md={6}>
            : {getUserAddress?.country}
          </Grid>
        </Grid>
      </Box>
    </>
  );
};
export default MyProfileAddress;