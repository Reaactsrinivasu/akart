import React from "react";
import { Typography, Box, Divider, Avatar, Grid } from "@mui/material";
import UserDisplayInAddtoCart from "./UserDisplayInAddtoCart";
const AddtoCartPriceDetails = ({paymentData}) => {
  console.log("paymentData", paymentData);
  const {
    itemNumber,
    totalActualPrice,
    totalDiscountPrice,
    deliveryCharges,
    securedPackageCharges,
  } = paymentData;
  return (
    <>
      {/* <Box sx={{ mb: 1 }}>
        <UserDisplayInAddtoCart />
      </Box> */}
      <Box sx={{ width: "100%", height: "100%", backgroundColor: "#FFFFFF" }}>
        <Grid container gap={3} p={2} mt={0.1}>
          <Typography textAlign="left">PRICE DETAILS</Typography>
          <Divider
            sx={{ width: "100%", borderBottomWidth: 1, borderColor: "#111" }}
          />
          <Grid item xs={12} sm={12} md={12}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <Typography textAlign="left">
                Price ({itemNumber} items)
              </Typography>
              <Typography textAlign="left">₹{totalActualPrice}</Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={12} md={12}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <Typography textAlign="left">Discount</Typography>
              <Typography textAlign="left">− ₹{totalDiscountPrice}</Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={12} md={12}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <Typography textAlign="left">Delivery Charges</Typography>
              <Typography textAlign="left">+ ₹{deliveryCharges}</Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={12} md={12}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <Typography textAlign="left">Secured Package Fee</Typography>
              <Typography textAlign="left">
                + ₹{securedPackageCharges}
              </Typography>
            </Box>
          </Grid>
          <Divider
            sx={{ width: "100%", borderBottomWidth: 1, borderColor: "#111" }}
          />
          <Grid item xs={12} sm={12} md={12}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <Typography variant="h5" textAlign="left" fontWeight="bold">
                Total Amount
              </Typography>
              <Typography variant="h5" textAlign="left" fontWeight="bold">
                ₹
                {deliveryCharges +
                  securedPackageCharges +
                  totalActualPrice -
                  totalDiscountPrice}
              </Typography>
            </Box>
          </Grid>
          <Divider
            sx={{ width: "100%", borderBottomWidth: 1, borderColor: "#111" }}
          />
          <Divider variant="fullWidth" />
        </Grid>
      </Box>
    </>
  );
};
export default AddtoCartPriceDetails;
