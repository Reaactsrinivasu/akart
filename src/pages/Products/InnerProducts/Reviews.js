import React, { useState,useEffect, useCallback } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Typography, Grid, Box, IconButton, Paper } from "@mui/material";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import ThumbDownOffAltIcon from "@mui/icons-material/ThumbDownOffAlt";
import { Star, StarBorder } from "@mui/icons-material";
import { createLikesInitiate } from "../../../redux/actions/ratingsAndReviews/createLikeActions";
import { createDisLikesInitiate } from "../../../redux/actions/ratingsAndReviews/createDisLikeActions";

const Reviews = ({ reviewsData }) => {
  console.log("reviewsData", reviewsData);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  
const [reviews, setReviews] = useState([]);
const [userActions, setUserActions] = useState({}); // to track user actions per review

useEffect(() => {
  setReviews(reviewsData);
  console.log("Updated reviews", reviewsData);
}, [reviewsData]);

  const updateReviewCounts = (review_id, newCounts) => {
    setReviews((prevReviews) =>
      prevReviews.map((review) =>
        review.review_id === review_id
          ? {
              ...review,
              review_likes: newCounts.likes_count,
              review_dislikes: newCounts.dislikes_count,
            }
          : review
      )
    );
  };

  const likesHandler = useCallback(
    (review_id) => {
      const previousAction = userActions[review_id];

      dispatch(
        createLikesInitiate(review_id, navigate, (newCounts) => {
          if (newCounts) {
            console.log("Likes API response:", newCounts);
            updateReviewCounts(review_id, newCounts);

            // Update user action tracking
            setUserActions((prevActions) => ({
              ...prevActions,
              [review_id]: previousAction === "dislike" ? null : "like",
            }));
          }
        })
      );

      // If the user previously disliked the review, decrease the dislike count
      if (previousAction === "dislike") {
        dispatch(
          createDisLikesInitiate(review_id, navigate, (newCounts) => {
            if (newCounts) {
              updateReviewCounts(review_id, newCounts);
            }
          })
        );
      }
    },
    [dispatch, navigate, userActions]
  );

  const dislikesHandler = useCallback(
    (review_id) => {
      const previousAction = userActions[review_id];

      dispatch(
        createDisLikesInitiate(review_id, navigate, (newCounts) => {
          if (newCounts) {
            console.log("Dislikes API response:", newCounts);
            updateReviewCounts(review_id, newCounts);

            // Update user action tracking
            setUserActions((prevActions) => ({
              ...prevActions,
              [review_id]: previousAction === "like" ? null : "dislike",
            }));
          }
        })
      );

      // If the user previously liked the review, decrease the like count
      if (previousAction === "like") {
        dispatch(
          createLikesInitiate(review_id, navigate, (newCounts) => {
            if (newCounts) {
              updateReviewCounts(review_id, newCounts);
            }
          })
        );
      }
    },
    [dispatch, navigate, userActions]
  );

  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        i <= rating ? (
          <Star key={i} color="primary" />
        ) : (
          <StarBorder key={i} color="primary" />
        )
      );
    }
    return stars;
  };

  const ReviewCard = ({ review }) => {
    const {
      account_holder_first_name,
      account_holder_last_name,
      rating,
      review: reviewText,
      review_likes,
      review_dislikes,
      review_id,
    } = review;

    const userAction = userActions[review_id];

    return (
      <Paper elevation={3} sx={{ padding: 2, margin: 2 }}>
        <Typography variant="h6" gutterBottom>
          {account_holder_first_name} {account_holder_last_name}
        </Typography>
        <Box sx={{ display: "flex", alignItems: "center", marginBottom: 1 }}>
          {renderStars(Number(rating))}
        </Box>
        <Typography variant="body1" gutterBottom>
          {reviewText}
        </Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-end",
            gap: 4,
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <IconButton onClick={() => likesHandler(review_id)}>
              <ThumbUpOffAltIcon
                color={userAction === "like" ? "primary" : "disabled"}
                sx={{ fontSize: "20px" }}
              />
            </IconButton>
            <Typography color="#c2c2c2" sx={{ fontSize: "14px" }}>
              {review_likes}
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <IconButton onClick={() => dislikesHandler(review_id)}>
              <ThumbDownOffAltIcon
                color={userAction === "dislike" ? "primary" : "disabled"}
                sx={{ fontSize: "20px" }}
              />
            </IconButton>
            <Typography color="#c2c2c2" sx={{ fontSize: "14px" }}>
              {review_dislikes}
            </Typography>
          </Box>
        </Box>
      </Paper>
    );
  };

  return (
    <Box
      p={2}
      sx={{
        width: "100%",
        height: "100%",
        border: "1px solid",
        borderColor: "divider",
        backgroundColor: "#FFFFFF",
      }}
    >
      <Grid container spacing={2} mt={0.5}>
        <Grid item xs={12} sm={12} md={12}>
          {reviews.map((review, index) => (
            <ReviewCard key={index} review={review} />
          ))}
        </Grid>
      </Grid>
      <Typography textAlign="center" variant="h4" sx={{ fontWeight: "bold" }}>
        Have doubts regarding this product?
      </Typography>
    </Box>
  );
};

export default Reviews;
