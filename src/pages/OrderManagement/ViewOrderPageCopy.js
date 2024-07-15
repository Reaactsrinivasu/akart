import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useLocation } from "react-router-dom";
import {
  Box,
  Typography,
  Grid,
  List,
  ListItemAvatar,
  ListItemButton,
  Collapse,
  ListItemText,
  Avatar,
  ListItem,
  ListItemIcon,
  Button
} from "@mui/material";
import PaymentModal from "./PaymentModal";
import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";
// import { useNavigate } from "react-router-dom";
import ReusableOpenOrdersList from "../../components/OpenOrdersList";
import CloseIcon from "@mui/icons-material/Close";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import ReusableLink from "../../components/Link";
import DeliveryDiningIcon from "@mui/icons-material/DeliveryDining";
import { Navigate } from "react-router-dom";
import ProductReview from "./ProductReview";
import { createInvoiceForModalInitiate} from "../../redux/actions/invoice/productInvoiceActions";
const ViewOrderDetails = () => {
  const [show, setShow] = useState(false);
  const [reviewShow, setReviewShow] = useState(false);
  const showReviewModal = () => setReviewShow(true);
  const closeReviewModal = () => setReviewShow(false);
  const showModal = () => setShow(true);
  const closeModal = () => setShow(false);
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const viewOrderData = location?.state;
  console.log("view order details", viewOrderData);
  // orderdata;
  const {
    track_id,
    product_id,
    products,
    type,
    status,
    updated_at,
  } = viewOrderData;
  let shippingCost = 100.0;
  let productData = {
    products: products,
    price: products[0]?.discount_price + shippingCost,
    product_id: products[0]?.id,
    image: products[0]?.product_images_urls[0],
    product_name: products[0]?.product_name,
    discount_price: products[0]?.discount_price,
    track_id: track_id,
  };
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const options = {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    };
    return date.toLocaleDateString("en-US", options);
  };

const editPayHandler = (product_details) => {
  alert("Payment handler");
  console.log("product_details", product_details);
  dispatch(createInvoiceForModalInitiate(product_details, navigate));
};
  return (
    <>
      <Box
        sx={{
          mt: 3,
          p: 4,
          width: "100%",
          height: "auto",
          //   height: "100%",
          border: "1px solid #CEC1C1",
          backgroundColor: "#e0e0e0",
          borderRadius: "12px",
        }}
      >
        <Grid container spacing={2}>
          <Grid item xs={12} sm={12} md={12}>
            <Box
              sx={{
                width: "100%",
                height: "100%",
                border: "1px solid #CEC1C1",
                backgroundColor: "#FFFFFF",
                borderRadius: "12px",
              }}
            >
              <Grid container spacing={1} p={4}>
                <Grid item xs={12} sm={12} md={12} p={1}>
                  <Typography variant="h3" fontWeight="bold">
                    Shipping Address
                  </Typography>
                </Grid>
                <Grid item xs={12} sm={12} md={12} p={1}>
                  <Typography variant="h4" color="text.secondary">
                    Shipping to USER NAME : User Address :D.no, Street Name,
                    Mandal Name, City Name, District , Pincode .
                  </Typography>
                </Grid>
                <Grid item xs={12} sm={12} md={12} p={1}>
                  <Grid container>
                    <Grid item xs={12} sm={12} md={6}>
                      <Box
                        sx={{
                          display: "flex",
                          flexDirection: "row",
                          alignItems: "center",
                          justifyContent: "space-between",
                          gap: 1,
                        }}
                      >
                        <Typography variant="h4" fontWeight="bold">
                          Payment Method:{" "}
                        </Typography>
                        <Typography fontWeight="bold" sx={{ fontSize: "20px" }}>
                          {type === "CashOnDelivery"
                            ? "Pay On Delivery"
                            : "On Line Payment"}
                        </Typography>
                        {type === "CashOnDelivery" ? (
                          <>
                            <Button
                              onClick={() => {
                                showModal();
                                editPayHandler({
                                  amount: 100,
                                  products: [
                                    {
                                      product_id: product_id,
                                      product_quantity: 1,
                                    },
                                  ],
                                });
                              }}
                              variant="contained"
                              sx={{ textTransform: "none" }}
                            >
                              Pay Online
                            </Button>
                          </>
                        ) : null}
                      </Box>
                    </Grid>
                    <PaymentModal
                      show={show}
                      handleClose={closeModal}
                      productData={productData}
                    />
                    <Grid item xs={12} sm={12} md={6} textAlign="center">
                      <ReusableLink
                        variant="h4"
                        underline="none"
                        sx={{
                          mt: 0.5,
                          marginRight: 5,
                          cursor: "pointer",
                          color: "blue",
                          transition: "0.3s",
                          fontWeight: 600,
                        }}
                      >
                        Order Invoice
                      </ReusableLink>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item xs={12} sm={12} md={12} p={1}>
                  <Grid container>
                    <Grid item xs={12} sm={12} md={6}>
                      <Typography variant="h3" fontWeight="bold" mb={1}>
                        Order Summary:
                      </Typography>
                      <Box
                        sx={{
                          display: "flex",
                          flexDirection: "column",
                          gap: 1,
                        }}
                      >
                        <Typography variant="h4" color="text.secondary">
                          {/* Items Subtotal : 12,000.00 */}
                          Items Subtotal : {products[0]?.discount_price}
                        </Typography>
                        <Typography variant="h4" color="text.secondary">
                          {/* Shipping Cost :100.00 */}
                          Shipping Cost :{shippingCost}
                        </Typography>
                        <Typography variant="h4" color="text.secondary">
                          Total :{products[0]?.discount_price}
                        </Typography>
                        <Typography variant="h4" color="text.secondary">
                          Grand Total :
                          {products[0]?.discount_price + shippingCost}
                        </Typography>
                      </Box>
                    </Grid>
                    <Grid item xs={12} sm={12} md={6} textAlign="center">
                      <Rating
                        name="size-large"
                        defaultValue={2}
                        sx={{ fontSize: 42 }}
                      />
                      <ReusableLink
                        onClick={showReviewModal}
                        variant="h4"
                        underline="none"
                        sx={{
                          display: "block",
                          mt: 0.5,
                          marginRight: 5,
                          cursor: "pointer",
                          color: "orange",
                          transition: "0.3s",
                          //   fontWeight: 600,
                        }}
                      >
                        Write Review
                      </ReusableLink>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>

              <ListItem sx={{ gap: 2, ml: 1 }}>
                <ListItemAvatar>
                  <Avatar sx={{ width: 56, height: 56 }}>
                    <DeliveryDiningIcon
                      sx={{ width: 50, height: 50, color: "#ffeb3b" }}
                    />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText
                  sx={{
                    "& .MuiTypography-root": {
                      fontWeight: 600, // Add fontWeight here
                    },
                    color: "#878787",
                    "&:hover": {
                      color: "#2874f0",
                    },
                  }}
                  primaryTypographyProps={{
                    fontSize: "24px",
                    fontWeight: "bold",
                    mb: 0.25,
                    color: "green",
                  }}
                  secondaryTypographyProps={{
                    fontSize: "18px",
                    fontWeight: "bold",
                  }}
                  primary={status}
                  // secondary={updated_at}
                  secondary={formatDate(updated_at)}
                  p={2}
                />
                {/* <KeyboardArrowRightIcon /> */}
              </ListItem>
              <Grid container spacing={1} p={3}>
                <Grid item xs={12} sm={12} md={3} p={1}>
                  <img
                    // src="assets/imgs/phone-2.png"
                    src={products[0]?.product_images_urls[0]}
                    alt="2"
                    style={{
                      width: "70%",
                      height: "auto",
                      objectFit: "cover",
                    }}
                  />
                </Grid>
                <Grid item xs={12} sm={12} md={9}>
                  <Grid container p={2} spacing={0} mt={0}>
                    <Grid item xs={12} sm={12} md={12} p={1}>
                      <Typography variant="h4" sx={{ fontWeight: 600 }}>
                        {products[0]?.product_name}
                      </Typography>
                    </Grid>
                    <Grid item xs={12} sm={12} md={12} p={1}>
                      <Typography
                        variant="h4"
                        sx={{ color: "#6B6767", fontWeight: 600 }}
                      >
                        Seller :Treasure Haul Union
                      </Typography>
                    </Grid>
                    <Grid item xs={12} sm={12} md={12} p={1}>
                      <Typography
                        variant="h4"
                        sx={{ color: "#6B6767", fontWeight: 600 }}
                      >
                        Sale PRICE : {products[0]?.discount_price}/-
                      </Typography>
                    </Grid>
                    <Grid item xs={12} sm={12} md={12} p={1}>
                      <Typography
                        variant="h6"
                        // sx={{ color: "#6B6767", fontWeight: 600 }}
                        sx={{ color: "orange", fontWeight: 600 }}
                      >
                        {/* Exchange/Return Window closed on {updated_at} */}
                        Exchange/Return Window closed on{" "}
                        {formatDate(updated_at)}
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Box>
          </Grid>
        </Grid>
      </Box>
      <ProductReview
        reviewShow={reviewShow}
        handleClose={closeReviewModal}
        productData={productData}
      />
    </>
  );
};
export default ViewOrderDetails;
