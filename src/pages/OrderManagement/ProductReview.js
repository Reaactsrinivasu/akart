import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useLocation } from "react-router-dom";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Rating from "@mui/material/Rating";
import TextField from "@mui/material/TextField";
import { useFormik } from "formik";
import {
  generateValidationSchema,
  initialValues,
} from "../../common/Validations";
import { createRatingAndReviewInitiate } from "../../redux/actions/ratingsAndReviews/ratingsAndReviewsActions";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 600,
  bgcolor: "background.paper",
  border: "2px solid #fff",
  boxShadow: 24,
  borderRadius: "5px",
  p: 4,
};

const ProductReview = ({ reviewShow, handleClose, productData }) => {
  const [rating, setRating] = useState(0);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const formFields = ["rating", "review"];
  const validationSchema = generateValidationSchema(formFields);

   const formik = useFormik({
     initialValues: {
       rating: "",
       review: "",
       product_id: productData?.product_id,
     },
     validationSchema: validationSchema,
     onSubmit: (values, { resetForm }) => {
       handleSubmit(values, resetForm);
     },
   });

   const handleSubmit = (values, resetForm) => {
     console.log("reviews and ratings", values);
     try {
       dispatch(createRatingAndReviewInitiate(values, navigate));
       resetForm(); // Reset the form fields
       setTimeout(() => { 
         handleClose(); // Close the modal
       }, 500);
     } catch (error) {
       console.error("Error in submitting review:", error);
     }
   };
 const getRatingText = (rating) => {
    if (rating >= 0.5 && rating < 1.5) return { text: "Poor", color: "red" };
    if (rating >= 1.5 && rating < 2.5)
      return { text: "Average", color: "orange" };
    if (rating >= 2.5 && rating < 3.5) return { text: "Good", color: "yellow" };
    if (rating >= 3.5 && rating < 4.5)
      return { text: "Very Good", color: "lightgreen" };
    if (rating >= 4.5 && rating <= 5) return { text: "Best", color: "green" };
    return { text: "", color: "black" };
 };

 const ratingInfo = getRatingText(formik.values.rating);
  return (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      open={reviewShow}
      onClose={handleClose}
      closeAfterTransition
      slots={{ backdrop: Backdrop }}
      slotProps={{
        backdrop: {
          timeout: 500,
        },
      }}
    >
      <Fade in={reviewShow}>
        <Box sx={style}>
          <Typography
            variant="h5"
            component="h2"
            fontWeight="bold"
            textAlign="center"
            color="#ff9f00"
          >
            Write a Review
          </Typography>
          <form onSubmit={formik.handleSubmit}>
            <Grid container spacing={2} mt={2}>
              <Grid item xs={12} md={6}>
                <Box
                  component="img"
                  src={productData?.image}
                  sx={{
                    width: "100%",
                    height: "auto",
                    objectFit: "cover",
                  }}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <Typography sx={{ fontSize: "13px", mb: 1 }}>
                      Give your Rating
                    </Typography>
                    <Rating
                      name="rating"
                      precision={0.5}
                      value={Number(formik.values.rating)}
                      onChange={(event, newValue) => {
                        formik.setFieldValue("rating", newValue);
                        formik.setTouched({ ...formik.touched, rating: true });
                      }}
                      onBlur={formik.handleBlur}
                    />
                    {formik.values.rating && (
                      <Typography
                        variant="body2"
                        sx={{ color: ratingInfo.color, mt: 1 }}
                      >
                        {ratingInfo.text}
                      </Typography>
                    )}
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      multiline
                      rows={3}
                      variant="outlined"
                      name="review"
                      onBlur={formik.handleBlur}
                      onChange={formik.handleChange}
                      placeholder="Write a Review"
                      value={formik.values.review}
                      error={
                        formik.touched.review && Boolean(formik.errors.review)
                      }
                      helperText={formik.touched.review && formik.errors.review}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Button
                      type="submit"
                      sx={{
                        mt: 2,
                        color: "#fff",
                        backgroundColor: "#ff9f00",
                        border: "1px solid #ff9f00",
                        fontWeight: "bold",
                        borderRadius: "md",
                        textTransform: "none",
                        "&:hover": {
                          bgcolor: "#ff9f00",
                        },
                      }}
                      fullWidth
                    >
                      Post your review
                    </Button>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </form>
        </Box>
      </Fade>
    </Modal>
  );
};

export default ProductReview;
