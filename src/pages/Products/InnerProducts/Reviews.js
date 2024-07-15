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
  console.log("reviews data ", props?.reviewsData);
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

       const [likes, setLikes] = useState(review_likes);
    const [disLikes, setDisLikes] = useState(review_dislikes);
    const likesHandler = (review_id) => {
      setLikes(likes + 1);
      dispatch(
        createLikesInitiate(review_id, navigate, (newLikesCount) => {
          setLikes(newLikesCount);
        })
      );
    };

    const disLikesHandler = (review_id) => {
      setDisLikes(disLikes + 1);
      dispatch(
        createDisLikesInitiate(review_id, navigate, (newDisLikesCount) => {
          setDisLikes(newDisLikesCount);
        })
      );
    };
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
              {/* {review_likes} */}
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
                onClick={() => disLikesHandler(review_id)}
                color="disabled"
                sx={{ fontSize: "20px" }}
              />
            </IconButton>
            <Typography color="#c2c2c2" sx={{ fontSize: "14px" }}>
              {/* {review_dislikes} */}
              {disLikes}
            </Typography>
          </Box>
        </Box>
      </Paper>
    );
  };

  // const [likes, setLikes] = useState(0);
  // const [disLikes, setDisLikes] = useState(0);

  // const likesHandler = (review_id) => {
  //   console.log("likes", review_id);
  //   dispatch(
  //     createLikesInitiate(review_id, navigate, (success) => {
  //       if (success) {
  //         console.log("success", success);
  //         setLikes();
  //         console.log("likes", likes);
  //       }
  //     })
  //   );
  // };
  //   const disLikesHandler = (review_id) => {
  //  console.log("disLikes", review_id);
  //  dispatch(
  //          createDisLikesInitiate(review_id, navigate, (success) => {
  //      if (success) {
  //        console.log("success", success);
  //        setDisLikes();
  //        console.log("disLikes", disLikes);
  //      }
  //    })
  //  );
  // };

  //  const handleDecrement = (id, quantity) => {
  //    dispatch(
  //      updateAddProductToCartInitiate(id, quantity - 1, (success) => {
  //        if (success) {
  //          dispatch(loadAddProductToCartInitiate());
  //        }
  //      })
  //    );
  //  };
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
