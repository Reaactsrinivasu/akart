import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useLocation } from "react-router-dom";
import EditIcon from "@mui/icons-material/Edit";
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
  Button,
  Paper,
  Divider,
  Radio,
  FormControlLabel,
  RadioGroup,
  Chip,
  FormControl,
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
import { createInvoiceForModalInitiate } from "../../redux/actions/invoice/productInvoiceActions";
import {
  Stepper,
  Step,
  StepLabel,
  StepContent,
  styled,
  StepConnector,
} from "@mui/material";
import { Check } from "@mui/icons-material";
import CustomStepper from "../../components/Stepper";
import { getOrderByIdInitiate, removeOrderDetailsInitiate } from "../../redux/actions/orderDetails/orderDetailsActions";
const steps = [
  {
    label: "Order Received",
    description: `Order has been placed on May 22nd, Saturday 2023`,
  },
  {
    label: "Packed",
    description: "Order has been packed on May 23rd, Sunday 2023",
  },
  {
    label: "Dispatched",
    description: "Order has been dispatched on May 24th, Monday 2023",
  },
  {
    label: "Out for Delivery",
    description: "",
  },
  {
    label: "Delivered",
    description: "",
  },
];

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
    address,
    id,
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
  
  const orderId = id;
   const viewOrderedProductData = useSelector(
     (state) => state?.getorderbyid?.data?.data || {}
   );
   console.log("viewOrderedProductData", viewOrderedProductData);
  useEffect(() => {
    if (orderId) {  
      dispatch(getOrderByIdInitiate(orderId));
    }
  }, [dispatch, orderId]);
  
  // const {
  //   address,
  //   products,

  // } = viewOrderedProductData;
  // let shippingCost = 100.0;
  // let productData = {
  //   products: products,
  //   price: products[0]?.discount_price + shippingCost,
  //   product_id: products[0]?.id,
  //   image: products[0]?.product_images_urls[0],
  //   product_name: products[0]?.product_name,
  //   discount_price: products[0]?.discount_price,
  //   track_id: track_id,
  // };

  const actual_price = viewOrderedProductData?.products?.reduce(
    (sum, item) => sum + item.actual_price,
    0
  );
  const discount_price = viewOrderedProductData?.products?.reduce(
    (sum, item) => sum + item.discount_price,
    0
  );
  const quantity = viewOrderedProductData?.products?.reduce(
    (sum, item) => sum + item.product_quantity,
    0
  );
  const TotalPayableAmount = 100 + 100 + discount_price;

  console.table(
    "actual_price",
    actual_price,
    "discount_price",
    discount_price,
    "quantity",
    quantity,
    "TotalPayableAmount",
    TotalPayableAmount
  );
 
  const removeOrderHandler = (id) => {
    dispatch(removeOrderDetailsInitiate(id));
  };

  return (
    <>
      <Box
        sx={{
          mt: 1,
          // p: 4,
          width: "100%",
          height: "auto",
          //   height: "100%",
          // border: "1px solid #CEC1C1",
          // backgroundColor: "#e0e0e0",
          // borderRadius: "12px",
        }}
      >
        <Box
          sx={{
            p: 2,
            mb: 4,
            backgroundColor: "#FCC094",
          }}
        >
          <Typography
            sx={{ fontSize: "18px", fontFamily: "math", fontWeight: "bold" }}
          >
            {" "}
            My Orders {">"} View Details
          </Typography>
        </Box>
        {/* ordered product start */}
        <Grid container spacing={0} pl={3} pr={3} mb={1}>
          {products?.map((item, index) => (
            <Grid item xs={12} sm={12} md={12}>
              <Paper
                elevation={1}
                sx={{
                  width: "100%",
                  height: "auto",
                  backgroundColor: "#FFFFFF",
                  // mb: 2.5,
                }}
              >
                <Grid container spacing={1} p={3}>
                  <Grid item xs={12} sm={12} md={2} p={1}>
                    <Box
                      component="img"
                      // src="assets/imgs/phone-2.png"
                      // src={products[0]?.product_images_urls[0]}
                      src={item?.product_images_urls[0]}
                      alt=""
                      loading="lazy"
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                    />
                  </Grid>
                  <Grid item xs={12} sm={12} md={9}>
                    <Grid container p={2} spacing={0} mt={0}>
                      <Grid item xs={12} sm={12} md={12} p={2}>
                        <Grid container spacing={0} mt={0} alignItems="center">
                          <Grid item xs={12} sm={10} md={10}>
                            <Typography variant="h6" sx={{ fontWeight: 600 }}>
                              {item?.product_name}
                            </Typography>
                          </Grid>
                          <Grid item xs={12} sm={10} md={2}>
                            <Button
                              onClick={() => removeOrderHandler(item.id)}
                              variant="contained"
                              sx={{
                                borderRadius: "20px",
                                padding: "5px 13px",
                                textTransform: "none",
                                backgroundColor: "#ff9f00",
                                border: "1px solid #ff9f00",
                                cursor: "pointer",
                                "&:hover": {
                                  backgroundColor: "#ff9f00",
                                  border: "1px solid #ff9f00",
                                  boxShadow: "0 1px 2px 0 rgba(0, 0, 0, 0.2)",
                                },
                              }}
                            >
                              Cancel
                            </Button>
                          </Grid>
                        </Grid>
                      </Grid>
                      <Grid item xs={12} sm={12} md={6} p={2}>
                        <Typography
                          variant="h7"
                          sx={{ color: "orange", fontWeight: 600 }}
                        >
                          Rs {item?.discount_price}.00
                        </Typography>
                      </Grid>
                      <Grid item xs={12} sm={12} md={6} p={2}>
                        <Typography
                          variant="h7"
                          sx={{ color: "#6B6767", fontWeight: 500 }}
                        >
                          {item?.discount}
                        </Typography>
                      </Grid>
                      <Grid item xs={12} sm={12} md={6} p={2}>
                        <Typography
                          variant="h7"
                          sx={{
                            color: "#6B6767",
                            fontWeight: 600,
                            textDecorationLine: "line-through",
                            fontFamily: "math",
                          }}
                        >
                          MRP . RS {item?.actual_price}.00
                        </Typography>{" "}
                        <span style={{ color: "#6B6767" }}>
                          {"(inclusive all taxes)"}
                        </span>
                      </Grid>
                      <Grid item xs={12} sm={12} md={6} p={2}>
                        <ReusableLink
                          onClick={showReviewModal}
                          variant="h7"
                          underline="none"
                          sx={{
                            textAlign: "right",
                            display: "block",
                            // mt: 0.5,
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
              </Paper>
            </Grid>
          ))}
        </Grid>
        {/* ordered product end */}

        {/* product tracking start */}
        <Grid
          container
          spacing={0.5}
          mt={0}
          alignItems="stretch"
          pl={3}
          pr={3}
          mb={1}
          sx={{ height: "100%" }}
        >
          {/* Stepper section */}
          <Grid
            item
            xs={12}
            sm={12}
            md={6}
            sx={{ display: "flex", flexDirection: "column" }}
          >
            <Paper
              elevation={1}
              sx={{
                width: "100%",
                height: "auto",
                backgroundColor: "#FFFFFF",
                // mb: 5,
                p: 1,
              }}
            >
              <Grid
                container
                spacing={0.5}
                mt={0}
                alignItems="stretch"
                pl={3}
                pr={3}
                mb={1}
                sx={{ height: "100%" }}
              >
                <Grid xs={12} sm={12} md={12}>
                  <CustomStepper steps={steps} />
                </Grid>
                <Grid xs={12} sm={12} md={12} pl={6} gutterBottom>
                  <Divider
                    variant="fullWidth"
                    sx={{
                      backgroundColor: "#e0e0e0",
                      height: "0.5px",
                      mt: 1,
                    }}
                  />
                  <Typography
                    gutterBottom
                    variant="h5"
                    sx={{ mt: 2 }}
                    fontWeight="bold"
                  >
                    Return Methods
                  </Typography>
                  <Typography gutterBottom variant="subtitle2">
                    Return is applicable only next 5 days for this product only
                  </Typography>
                </Grid>
              </Grid>
            </Paper>
          </Grid>

          {/* Address and Receipt section */}
          <Grid
            item
            xs={12}
            sm={12}
            md={6}
            sx={{ display: "flex", flexDirection: "column", height: "100%" }}
          >
            <Grid container spacing={0.5} sx={{ height: "100%" }}>
              {/* Address start */}
              <Grid item xs={12} sm={12} md={12} sx={{ flex: 1 }}>
                <Paper
                  elevation={1}
                  sx={{
                    width: "100%",
                    height: "100%",
                    backgroundColor: "#fff",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                  }}
                >
                  <Box sx={{ maxWidth: 600, p: 3 }}>
                    <Typography
                      sx={{ fontSize: "18px" }}
                      gutterBottom
                      fontWeight="600"
                    >
                      Delivery Address
                    </Typography>
                    <Typography variant="body1" sx={{ fontWeight: 600 }}>
                      {address?.first_name}
                      {address?.last_name}
                    </Typography>
                    <Typography variant="body1">
                      {address?.phone_number}
                    </Typography>
                    <Box
                      sx={{
                        mt: 2,
                        p: 1.5,
                        borderRadius: "8px",
                        bgcolor: "#f7f7f7",
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "flex-start",
                        alignItems: "center",
                      }}
                    >
                      <RadioGroup
                        aria-labelledby="demo-radio-buttons-group-label"
                        defaultValue="home"
                        name="radio-buttons-group"
                        sx={{ marginTop: "-38px", marginRight: "-10px" }}
                      >
                        <FormControlLabel
                          value="home"
                          control={
                            <Radio
                              sx={{
                                color: "blue",
                                "& .MuiSvgIcon-root": {
                                  fontSize: 18,
                                },
                              }}
                            />
                          }
                        />
                      </RadioGroup>
                      <Box
                        sx={{
                          display: "flex",
                          flexDirection: "column",
                          justifyContent: "flex-start",
                          alignItems: "flex-start",
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
                          <Typography
                            variant="body1"
                            sx={{ fontWeight: "bold", mr: 2 }}
                          >
                            {address?.house_number}
                          </Typography>

                          {/* <Chip label="HOME" size="small" /> */}
                          <Box
                            sx={{
                              bgcolor: "#616161",
                              border: "1px solid #fff",
                              color: "#fff",
                              borderRadius: "10px",
                              padding: "4px 12px",
                              fontSize: "11px",
                              fontWeight: 500,
                            }}
                          >
                            HOME
                          </Box>
                        </Box>
                        <Typography variant="body2">
                          {address?.street} ,{address?.landmark} ,
                          {address?.locality} ,{address?.city}
                        </Typography>
                        <Typography variant="body2">
                          {address?.country}:{address?.pincode}
                        </Typography>
                      </Box>
                    </Box>
                  </Box>
                  <Divider
                    variant="fullWidth"
                    sx={{
                      backgroundColor: "#e0e0e0",
                      height: "0.5px",
                      mt: 1,
                    }}
                  />
                  <Box sx={{ p: 4.8 }}>
                    <RadioGroup
                      aria-labelledby="demo-radio-buttons-group-label"
                      defaultValue="PaymentType"
                      name="radio-buttons-group"
                      sx={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "space-between",
                        alignItems: "center",
                      }}
                    >
                      <FormControlLabel
                        value="PaymentType"
                        control={
                          <Radio
                            sx={{
                              color: "blue",
                              "& .MuiSvgIcon-root": {
                                fontSize: 18,
                              },
                            }}
                          />
                        }
                        label={
                          <Typography
                            // gutterBottom
                            fontWeight="600"
                            variant="body1"
                            sx={{ fontSize: "16px" }}
                          >
                            Payment Methods :
                          </Typography>
                        }
                      />
                      <Typography fontWeight="500" sx={{ fontSize: "16px" }}>
                        {type === "CashOnDelivery"
                          ? "Pay On Delivery"
                          : "On Line Payment"}
                      </Typography>
                      {type === "CashOnDelivery" ? (
                        <>
                          {/* <Button
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
                        </Button> */}
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
                            startIcon={<EditIcon />}
                            sx={{
                              textTransform: "none",
                              padding: "6px 12px",
                              fontSize: "12px",
                              // backgroundColor: "#007bff",
                              backgroundColor: "#ff9f00",
                              "&:hover": {
                                // backgroundColor: "#0056b3",
                                backgroundColor: "#ff9f00",
                              },
                              boxShadow:
                                "0px 3px 5px -1px rgba(0,0,0,0.2), 0px 6px 10px 0px rgba(0,0,0,0.14), 0px 1px 18px 0px rgba(0,0,0,0.12)",
                              borderRadius: "4px",
                            }}
                          >
                            Pay Online
                          </Button>
                        </>
                      ) : null}
                    </RadioGroup>
                  </Box>
                </Paper>
              </Grid>
              {/* Address end */}

              {/* Receipt start */}
              <Grid item xs={12} sm={12} md={12} sx={{ flex: 1 }}>
                <Paper
                  elevation={1}
                  sx={{
                    width: "100%",
                    height: "100%",
                    backgroundColor: "pink",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                  }}
                >
                  <Box
                    sx={{
                      width: "100%",
                      height: "100%",
                      backgroundColor: "#FFFFFF",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "space-between",
                    }}
                  >
                    <Grid container gap={3} p={3} mt={0.1}>
                      <Typography
                        textAlign="left"
                        variant="h6"
                        sx={{ fontSize: "18px" }}
                        fontWeight="600"
                      >
                        Order Summary
                      </Typography>
                      <Grid item xs={12} sm={12} md={2}></Grid>
                      <Grid item xs={12} sm={12} md={8}>
                        {[
                          {
                            label: `Item (${quantity}) Subtitle`,
                            value: `${discount_price}`,
                          },
                          { label: "Shipping", value: "100.00" },
                          { label: "Delivery Fee", value: "100.00" },
                          { label: "Total", value: `${discount_price}` },
                          {
                            label: "Grand Total",
                            value: `${TotalPayableAmount}`,
                          },
                        ].map((item, index) => (
                          <Grid
                            container
                            alignItems="center"
                            sx={{ mb: 1 }}
                            key={index}
                          >
                            <Grid item xs={5}>
                              <Typography gutterBottom>{item.label}</Typography>
                            </Grid>
                            <Grid item xs={2} sx={{ textAlign: "center" }}>
                              <Typography gutterBottom>:</Typography>
                            </Grid>
                            <Grid item xs={5}>
                              <Typography textAlign="right" gutterBottom>
                                {item.value}
                              </Typography>
                            </Grid>
                          </Grid>
                        ))}
                      </Grid>
                      <Grid item xs={12} sm={12} md={2}></Grid>
                    </Grid>
                  </Box>
                </Paper>
              </Grid>
              {/* Receipt end */}
            </Grid>
          </Grid>
        </Grid>
        {/* product tracking end */}
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
