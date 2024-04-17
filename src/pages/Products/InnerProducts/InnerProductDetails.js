import React,{useState} from "react";
import { useNavigate } from "react-router-dom";
import {
  Typography,
  Box,
  Grid,
  Divider,
} from "@mui/material";
import Imports from "../../../common/Imports";
import InnerProductMagnifier from "./InnerProductMagnifier";
import InnerComparingProducts from "./InnerComparingProducts";
import InnerProductRatingAndReviews from "./InnerProductRatingAndReviews";
const InnerProductDetails = () => {
  const navigate = useNavigate();

  return (
    <>
      <Box sx={{ p: 0.5 }}>
        <Box
          sx={{
            width: "100%",
            height: "100%",
            backgroundColor: "#FFFFFF",
            p: 2,
          }}
        >
          {/* Magnifier component  */}
            <InnerProductMagnifier />
          {/* Comparing Products  */}
          <InnerComparingProducts/>
          {/* Rating Reviews */}
          <InnerProductRatingAndReviews/>
        </Box>
      </Box>
    </>
  );
};
export default InnerProductDetails;
