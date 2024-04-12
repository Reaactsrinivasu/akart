import React from 'react';
import Brands from "./Brands";
import Offers from "./Offers";
import Discount from "./Discount";
import Categories from "./Categories";
import PriceRange from "./PriceRange";
import GstInvoice from "./GstInvoice";
import CustomerRatings from "./CustomerRatings";
import { Typography, Box, Divider} from "@mui/material";
import ProductAvailability from "./ProductAvailability";
const Filters = () => {
  return (
    <>
      <Box
        sx={{
          p: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "background.paper",
        }}
      >
        <Typography
          variant="h3"
          fontWeight="bold"
          p={2}
          sx={{
            color: "text.secondary",
          }}
        >
          Filters
        </Typography>
        <Divider variant="fullWidth" />
        <Categories />
        <Divider variant="fullWidth" />
        <PriceRange />
        <Divider variant="fullWidth" />
        <ProductAvailability />
        <Divider variant="fullWidth" />
        <Brands />
        <Divider variant="fullWidth" />
        <Offers />
        <Divider variant="fullWidth" />
        <CustomerRatings />
        <Divider variant="fullWidth" />
        <GstInvoice />
        <Divider variant="fullWidth" />
        <Discount />
        <Divider variant="fullWidth" />
      </Box>
    </>
  );
}

export default Filters