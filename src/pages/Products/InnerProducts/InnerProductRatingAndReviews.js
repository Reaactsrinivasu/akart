import React, { useEffect, useState, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Typography, Grid, Box } from "@mui/material";
import Imports from "../../../common/Imports";
import Reviews from "./Reviews";
import Ratings from "./Ratings";
import {loadRatingAndReviewDataInitiate} from "../../../redux/actions/ratingsAndReviews/ratingsAndReviewsActions";
import { loadReviewsByInitiate } from "../../../redux/actions/ratingsAndReviews/loadReviewsByIdActions";
const InnerProductRatingAndReviews = (props) => {
  const { product_id, total_ratings, total_reviews } = props?.ratingData;
  console.log("props", props);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    if (product_id) {
      dispatch(loadRatingAndReviewDataInitiate(product_id));
    }
  }, [dispatch, product_id]);
  const ratingsReviewsData = useSelector(
    (state) => state.ratingsreviewsdata?.data?.data || []
  );
  console.log("ratingsReviewsData", ratingsReviewsData);
  useEffect(() => {
    if (product_id) {
      dispatch(loadReviewsByInitiate(product_id));
    }
  }, [dispatch, product_id]);
  const reviewsData = useSelector(
    (state) => state.reviewsdatabyid?.data?.data || []
  );
  console.log("reviewsData", reviewsData);
  // Initialize a count object
  const ratingCounts = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 };

  // Round the ratings and count occurrences
  ratingsReviewsData && ratingsReviewsData.length > 0 && 
    ratingsReviewsData?.forEach((ratingsReviewsData) => {
      const roundedRating = Math.round(parseFloat(ratingsReviewsData.rating));
      if (ratingCounts[roundedRating] !== undefined) {
        ratingCounts[roundedRating]++;
      } else {
        ratingCounts[roundedRating] = 1;
      }
    });

  // Create a new array of objects with the counts
  const resultRatingCount = Object.keys(ratingCounts).map((key, index) => ({
    id: index + 1,
    rating: parseInt(key),
    count: ratingCounts[key],
  }));

  console.log("resultRatingCount", resultRatingCount);
  resultRatingCount.sort((a, b) => b.rating - a.rating);

  console.log("resultRatingCount after sorting", resultRatingCount);

  // Calculate the total sum of ratings
  const totalRating = ratingsReviewsData.length > 0 && ratingsReviewsData?.reduce(
    (sum, ratingsReviewsData) => {
      return sum + parseFloat(ratingsReviewsData.rating);
    },
    0
  );

  // Calculate the average rating
  const averageRating = totalRating / ratingsReviewsData.length;

  console.log(`Average Rating: ${averageRating.toFixed(1)} out of 5`);
  console.log("totalRating", totalRating);
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
            <Typography variant="h4">Rating & Reviews </Typography>
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
                {averageRating ? Math.ceil(averageRating) : "0"}★
              </Box>
              <Typography color="#6B6767">
                {totalRating ? totalRating : "0"} Ratings{" "}
              </Typography>
              <Typography color="#6B6767">
                {total_reviews
                  ?.split(" ")
                  .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                  .join(" ")}{" "}
              </Typography>
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
                  <Ratings resultRatingCount={resultRatingCount} />
                </Grid>
                {/* Reviews component */}
                <Grid item xs={12} sm={12} md={8}>
                  <Reviews reviewsData={reviewsData} />
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
