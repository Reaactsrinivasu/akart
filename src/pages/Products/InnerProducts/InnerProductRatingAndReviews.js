import React,{useState} from "react";
import { Typography, Grid, Box} from "@mui/material";
import Imports from "../../../common/Imports";
import Reviews from "./Reviews";
import Ratings from "./Ratings";
const InnerProductRatingAndReviews = () => {
return (
  <>
    <Box
      mt={5}
      p={3}
      sx={{
        width: "100%",
        height: "100%",
        border: "1px solid",
        borderColor: "divider",
        backgroundColor: "#FFFFFF",
      }}
    >
      <Grid container spacing={1}>
        <Grid item xs={12} sm={6} md={6}>
          <Typography variant="h4">Rating & Reviews</Typography>
        </Grid>
        <Grid item xs={12} sm={6} md={6} sx={{ textAlign: "right" }}>
          <Imports.ReusableLink
            variant="h5"
            // variant="body2"
            underline="none"
            sx={{
              backgroundColor: "#FFFFFF",
              cursor: "pointer",
              color: "blue",
              border: "1px solid",
              borderColor: "divider",
              p: 1.5,
              borderRadius: "5px",
            }}
            // onClick={}
          >
            Rating & Reviews
          </Imports.ReusableLink>
        </Grid>
      </Grid>
      <Grid container spacing={1} mt={3}>
        <Grid item xs={12} sm={12} md={2}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Box
              sx={{
                padding: "0px 10px",
                backgroundColor: "#FFFFFF",
                fontSize: "2.3rem",
                color: "#121212",
              }}
            >
              4.4★
            </Box>
            <Typography color="#6B6767">14 Ratings</Typography>
            <Typography color="#6B6767">14 Reviews</Typography>
          </Box>
        </Grid>
        <Grid item xs={12} sm={12} md={10}>
          <Box
            p={2}
            sx={{
              width: "100%",
              height: "100%",
              // border: "1px solid",
              // borderColor: "divider",
              backgroundColor: "#FFFFFF",
            }}
          >
            <Grid container spacing={2}>
              {/* Ratings component */}
              <Grid item xs={12} sm={12} md={8}>
                <Ratings />
              </Grid>
              {/* Reviews component */}
              <Grid item xs={12} sm={12} md={8}>
                <Reviews />
              </Grid>
            </Grid>
          </Box>
        </Grid>
        <Grid item xs={12} sm={12} md={12} sx={{ textAlign: "right" }}>
          <Imports.ReusableLink
            variant="h5"
            // variant="body2"
            underline="none"
            sx={{
              backgroundColor: "#FFFFFF",
              cursor: "pointer",
              color: "blue",
              border: "1px solid",
              borderColor: "divider",
              p: 1.5,
              borderRadius: "5px",
            }}
            // onClick={}
          >
            Post Your Questions
          </Imports.ReusableLink>
        </Grid>
      </Grid>
    </Box>
  </>
);
};
export default InnerProductRatingAndReviews;