import React, { useEffect, useState, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  Typography,
  Grid,
  Box,
  Divider,
  IconButton,
  Paper,
} from "@mui/material";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import ThumbDownOffAltIcon from "@mui/icons-material/ThumbDownOffAlt";
import Imports from "../../../common/Imports";
import { Star, StarBorder, ThumbUp, ThumbDown } from "@mui/icons-material";
import { createLikesInitiate } from "../../../redux/actions/ratingsAndReviews/createLikeActions";
import { createDisLikesInitiate } from "../../../redux/actions/ratingsAndReviews/createDisLikeActions";
const Reviews = (props) => {
     const navigate = useNavigate();
     const dispatch = useDispatch();
  console.log("reviews data props ", props?.reviewsData);
  const ReviewCard = ({ review }) => {
    console.log("reviews 222222222222 ", review);

    const {
      account_holder_first_name,
      account_holder_last_name,
      rating,
      review: reviewText,
      review_likes,
      review_dislikes,
      review_id,
    } = review;

    const [Reviews, setReviews] = useState(props?.reviewsData);
    console.log("Reviews", Reviews);
    
    const reviewsHandler = (reviewId) => {
      const updatedReview = Reviews?.map((item, index) => {
        if (item.review_id === reviewId) {
          return {
            ...item,
            review_likes: item?.review_likes + 1,
            review_dislikes: item?.review_dislikes - 1,
          }
        }
        return item;
        
      });
      setReviews(updatedReview); 
      
    };
    const [likes, setLikes] = useState(review_likes);
     const [dislikes, setDislikes] = useState(review_dislikes);
    
    const likesHandler = useCallback(
      (review_id) => {
        reviewsHandler(review_id)
        // Optimistically update the likes
        setLikes((prevLikes) => prevLikes + 1);
        dispatch(
          createLikesInitiate(review_id, navigate, (newCounts) => {
            if (newCounts) {
               console.log("Likes API response:", newCounts);
              setLikes(newCounts?.likes_count);
              setDislikes(newCounts?.dislikes_count);
            }
            // else {
            //   // Revert the likes if API call fails
            //   setLikes((prevLikes) => prevLikes - 1);
            // }
          })
        );
      },
      [dispatch, navigate]
    );

    const dislikesHandler = useCallback(
      (review_id) => {
        // Optimistically update the dislikes
        setDislikes((prevDislikes) => prevDislikes + 1);
        dispatch(
          createDisLikesInitiate(review_id, navigate, (newCounts) => {
            if (newCounts) {
                console.log("Dislikes API response:", newCounts);
              setLikes(newCounts?.likes_count);
              setDislikes(newCounts?.dislikes_count);
            }
            // else {
            //   // Revert the dislikes if API call fails
            //   setDislikes((prevDislikes) => prevDislikes - 1);
            // }
          })
        );
      },
      [dispatch, navigate]
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
            <IconButton>
              <ThumbUpOffAltIcon
                onClick={() => likesHandler(review_id)}
                color="disabled"
                sx={{ fontSize: "20px" }}
              />
            </IconButton>
            <Typography color="#c2c2c2" sx={{ fontSize: "14px" }}>
              {likes}
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
            <IconButton>
              <ThumbDownOffAltIcon
                onClick={() => dislikesHandler(review_id)}
                color="disabled"
                sx={{ fontSize: "20px" }}
              />
            </IconButton>
            <Typography color="#c2c2c2" sx={{ fontSize: "14px" }}>
              
              {dislikes}
            </Typography>
          </Box>
        </Box>
      </Paper>
    );
  };

  return (
    <>
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
            {props?.reviewsData.map((review, index) => (
              <ReviewCard key={index} review={review} />
            ))}
          </Grid>
        </Grid>
        <Typography textAlign="center" variant="h4" sx={{ fontWeight: "bold" }}>
          Have doubts regarding this product?
        </Typography>
      </Box>
    </>
  );
};
export default Reviews;
