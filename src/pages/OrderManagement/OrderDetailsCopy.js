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
  Paper,
  Button,
} from "@mui/material";
import ReusableOpenOrdersList from "../../components/OpenOrdersList";
import CloseIcon from "@mui/icons-material/Close";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import ReusableLink from "../../components/Link";
import { Navigate } from "react-router-dom";
import DeliveryDiningIcon from "@mui/icons-material/DeliveryDining";
import {
  loadOrderDetailsInitiate,
  removeOrderDetailsInitiate,
} from "../../redux/actions/orderDetails/orderDetailsActions";
import ViewOrderDetails from "./ViewOrderPage";
const OrderDetails = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
   const orderData = useSelector(
     (state) => state?.orderdata?.data?.data || {}
   );
   console.log("orderData", orderData);
   useEffect(() => {
       dispatch(loadOrderDetailsInitiate());
   }, [dispatch,]);
  const removeOrderHandler = (id) => {
    dispatch(removeOrderDetailsInitiate(id));
  }
  return (
    <>
      <Box
        sx={{
          p: 4,
          width: "100%",
          height: "100%",
          // border: "1px solid #CEC1C1",
          backgroundColor: "#eeeeee",
          borderRadius: "2px",
        }}
      >
        <Typography
          variant="h3"
          sx={{ color: "#0F1111", fontWeight: 600, mb: 2, fontFamily: "math" }}
        >
          My Orders
        </Typography>
        {orderData &&
          orderData.length > 0 &&
          orderData?.map((item, index) => (
            <Grid container justifyContent="center" spacing={2}>
              <Grid item xs={12} sm={12} md={12} key={index}>
                <Paper
                  elevation={1}
                  sx={{
                    width: "100%",
                    height: "auto",
                    backgroundColor: "#FFFFFF",
                    mb: 2.5,
                  }}
                >
                  <Grid container spacing={1} p={3}>
                    <Grid item xs={12} sm={12} md={3} p={1}>
                      <img
                        // src="assets/imgs/phone-2.png"
                        src={item?.products[0]?.product_images_urls[0]}
                        alt=""
                        style={{
                          width: "85%",
                          height: "auto",
                          objectFit: "cover",
                        }}
                      />
                    </Grid>
                    <Grid item xs={12} sm={12} md={9}>
                      <Grid container p={2} spacing={0} mt={0}>
                        <Grid item xs={12} sm={12} md={12} p={2}>
                          <Grid
                            container
                            spacing={0}
                            mt={0}
                            alignItems="center"
                          >
                            <Grid item xs={12} sm={10} md={10}>
                              <Typography variant="h6" sx={{ fontWeight: 600 }}>
                                {item?.products[0]?.product_name}
                              </Typography>
                            </Grid>
                            <Grid item xs={12} sm={10} md={2}>
                              <Button
                                onClick={() =>
                              navigate("/vieworders", { state: item })
                            }
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
                                View Details
                              </Button>
                            </Grid>
                          </Grid>
                        </Grid>
                        {/* <Grid item xs={12} sm={12} md={6} p={2}>
                          <Typography
                            variant="h7"
                            sx={{ color: "#6B6767", fontWeight: 600 }}
                          >
                            Order Id : #0345-8901-383
                          </Typography>
                        </Grid> */}
                        {/* <Grid item xs={12} sm={12} md={6} p={2}>
                          <Typography
                            variant="h7"
                            sx={{ color: "#6B6767", fontWeight: 600 }}
                          >
                            Seller :Treasure Haul Union
                          </Typography>
                        </Grid> */}
                        <Grid item xs={12} sm={12} md={6} p={2}>
                          <Typography
                            variant="h7"
                            sx={{ color: "orange", fontWeight: 600 }}
                          >
                            {/* Rs {item.products[0]?.actual_price}.00 */}
                            Rs {item.products[0]?.discount_price}.00
                          </Typography>
                        </Grid>
                        <Grid item xs={12} sm={12} md={6} p={2}>
                          <Typography
                            variant="h7"
                            sx={{ color: "#6B6767", fontWeight: 600 }}
                          >
                             {item.products[0]?.discount}
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
                            MRP . RS {item.products[0]?.actual_price}.00
                          </Typography>{" "}
                          <span style={{ color: "#6B6767" }}>
                            {"(inclusive all taxes)"}
                          </span>
                        </Grid>

                        <Grid item xs={12} sm={12} md={6} p={2}>
                          <ReusableLink
                            variant="h7"
                            underline="none"
                            sx={{
                              cursor: "pointer",
                              color: "blue",
                              // m: 3,
                              transition: "0.3s",
                              fontWeight: 600,
                            }}
                          >
                            View Order Details
                          </ReusableLink>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                </Paper>
              </Grid>
            </Grid>
          ))}
      </Box>
    </>
  );
};

export default OrderDetails;
