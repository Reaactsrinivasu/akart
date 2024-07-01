import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useLocation } from "react-router-dom";
import CssBaseline from "@mui/material/CssBaseline";
import Layout from "../../Layout/Layout";
import Imports from "../../common/Imports";
import AddtoCartCounter from "../AddToCart/AddtoCartcounter";
import { loadOrderInCheckOutInitiate } from "../../redux/actions/payments/checkOutPageActions";
import { easing } from "@mui/material";
const CheckoutPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const checkOutItemData = location?.state;
  console.log("view order details", orderId);
  const razorPayOrderId = checkOutItemData?.data?.attributes?.order_id;
// for future
  // const getOrderDataInCheckOut = useSelector(
  //   (state) => state?.checkoutorderdata?.data?.data || []
  // );
  // console.log("getOrderDataInCheckOut", getOrderDataInCheckOut);
  // useEffect(() => {
  //   if (orderId) {
  //     dispatch(loadOrderInCheckOutInitiate(orderId,navigate));
  //   }
  // }, [dispatch, orderId]);
  
  const userAddressData = getOrderDataInCheckOut && getOrderDataInCheckOut?.address;
  console.log("userAddressData", userAddressData);
  
  const upperCaseName =
    `${userAddressData?.first_name} ${userAddressData?.last_name}`.toUpperCase();
  const orderData = getOrderDataInCheckOut && getOrderDataInCheckOut?.order;
  const TotalPayableAmount = 100 + 100 + orderData?.discount_price;
  console.log("orderData", orderData);
  const productIdsData = {
    addressId: userAddressData?.id,
    orderProductId: orderData?.product_id,
    userName: `${userAddressData?.first_name} ${userAddressData?.last_name}`,
    // email: userAddressData?.email,
    phoneNumber: userAddressData?.phone_number,
    totalPrice: TotalPayableAmount,
    productImage: orderData?.product_images_urls[0],
  };
  return (
    <>
      <Layout>
        <CssBaseline />
        <Imports.Box sx={{ width: "100%", height: "100%" }}>
          <Imports.Grid
            container
            spacing={1}
            mt={2}
            display="flex"
            flexDirection="row"
            justifyContent="center"
          >
            <Imports.Grid item xs={12} sm={12} md={12} textAlign="center">
              <Imports.Typography
                variant="h3"
                sx={{ color: "#0F1111", fontWeight: 400 }}
              >
                Checkout
              </Imports.Typography>
            </Imports.Grid>
            <Imports.Grid item xs={12} sm={12} md={12}>
              <Imports.Box
                sx={{
                  mt: 2,
                  width: "100%",
                  height: "100%",
                  p: 5,
                  pt: 1,
                }}
              >
                <Imports.Grid container spacing={3}>
                  <Imports.Grid item xs={12} sm={12} md={9}>
                    <Imports.Paper
                      // variant="outlined"
                      elevation={1}
                      sx={{
                        width: "100%",
                        height: "auto",
                        backgroundColor: "#FFFFFF",
                        // boxShadow: "10px",
                        padding: 2,
                      }}
                    >
                      <Imports.Typography
                        variant="h5"
                        sx={{
                          letterSpacing: "0.5px",
                          color: "#878787",
                          fontWeight: "bold",
                          mb: 1,
                        }}
                      >
                        LOGIN
                      </Imports.Typography>
                      <Imports.Typography>{`${userAddressData?.first_name} ${userAddressData?.last_name}`}</Imports.Typography>
                    </Imports.Paper>
                    {/* user address component */}
                    <Imports.Paper
                      // variant="outlined"
                      elevation={1}
                      sx={{
                        width: "100%",
                        height: "auto",
                        backgroundColor: "#FFFFFF",
                        // boxShadow: "10px",
                        padding: 2,
                        mt: 3,
                      }}
                    >
                      <Imports.Typography
                        variant="h5"
                        sx={{
                          letterSpacing: "0.5px",
                          color: "#878787",
                          fontWeight: "bold",
                          mb: 1,
                        }}
                      >
                        DELIVERY ADDRESS
                      </Imports.Typography>
                      <Imports.Typography
                        component="span"
                        sx={{ fontWeight: "bold", color: "#212121" }}
                      >
                        {upperCaseName}{" "}
                      </Imports.Typography>
                      <Imports.Typography
                        component="span"
                        sx={{ fontSize: "16px" }}
                      >
                        {/* 57-5-7, bade vari street,Jagannadhapuram , Kakinada ,
                        near small market, East Godavari, Andhra Pradesh, India-
                        533002, Eastgodavari, Andhra Pradesh - */}
                        {`${userAddressData?.house_number}, ${userAddressData?.street}, ${userAddressData?.landmark}, ${userAddressData?.locality}, ${userAddressData?.city}${userAddressData?.state}, ${userAddressData?.country}`}
                      </Imports.Typography>
                      <Imports.Typography
                        component="span"
                        sx={{ fontWeight: "bold", color: "#212121" }}
                      >
                        {" "}
                        - {userAddressData?.pincode}
                      </Imports.Typography>
                    </Imports.Paper>
                    {/* order summary component */}
                    <Imports.Paper
                      // variant="outlined"
                      elevation={1}
                      sx={{
                        width: "100%",
                        height: "auto",
                        backgroundColor: "#FFFFFF",
                        // boxShadow: "10px",
                        // padding: 2,
                        mt: 3,
                      }}
                    >
                      <Imports.Box
                        sx={{
                          width: "100%",
                          height: "auto",
                          backgroundColor: "#ffcc80",
                          // boxShadow: "10px",
                          padding: 1,
                        }}
                      >
                        <Imports.Typography
                          variant="h5"
                          sx={{
                            letterSpacing: "0.5px",
                            color: "#fff",
                            fontWeight: "bold",
                          }}
                        >
                          ORDER SUMMARY
                        </Imports.Typography>
                      </Imports.Box>
                      <Imports.Box sx={{ padding: 1 }}>
                        <Imports.Grid container columnSpacing={5} mt={2} mb={1}>
                          <Imports.Grid item xs={12} sm={12} md={2}>
                            <Imports.Box
                              component="img"
                              src={orderData?.product_images_urls?.[0]}
                              alt=""
                              style={{
                                width: "100%",
                                height: "auto%",
                                objectFit: "cover",
                              }}
                            />
                            <AddtoCartCounter p={1} items="1" />
                          </Imports.Grid>
                          <Imports.Grid item xs={12} sm={12} md={10}>
                            <Imports.Box
                              sx={{
                                width: "100%",
                                height: "100%",
                                backgroundColor: "#FFFFFF",
                                display: "flex",
                                flexDirection: "column",
                                // border: "1px solid",
                                // borderColor: "divider",
                                gap: 2.5,
                              }}
                            >
                              <Imports.Box
                                sx={{
                                  display: "flex",
                                  flexDirection: "row",
                                  justifyContent: "space-between",
                                  alignItems: "center",
                                }}
                              >
                                <Imports.Typography
                                  variant="h5"
                                  sx={{ fontWeight: "bold" }}
                                >
                                  {orderData?.product_name}
                                </Imports.Typography>
                              </Imports.Box>

                              <Imports.Box
                                sx={{
                                  display: "flex",
                                  flexDirection: "row",
                                  justifyContent: "flex-start",
                                  alignItems: "center",
                                  gap: 2.5,
                                }}
                              >
                                <Imports.Box
                                  // variant="contained"
                                  // component="button"
                                  sx={{
                                    padding: "4px 10px",
                                    backgroundColor: "#3B7E42",
                                    borderRadius: "4px",
                                    fontSize: "15px",
                                    color: "#FFFFFF",
                                    "&:hover": { backgroundColor: "#3B7E42" },
                                  }}
                                >
                                  4.5★
                                  {/* {item.rating} */}
                                  {/* {item.rating} */}
                                </Imports.Box>
                                <Imports.Typography
                                  variant="h4"
                                  fontWeight="bold"
                                  sx={{ color: "#121212" }}
                                >
                                  ₹{orderData?.discount_price}
                                </Imports.Typography>
                              </Imports.Box>
                              <Imports.Box
                                sx={{
                                  display: "flex",
                                  justifyContent: "flex-start",
                                }}
                              >
                                <Imports.Typography
                                  variant="h4"
                                  fontWeight="bold"
                                  sx={{
                                    color: "#878787",
                                    textDecorationLine: "line-through",
                                  }}
                                >
                                  ₹{orderData?.actual_price}
                                </Imports.Typography>
                                <Imports.Typography
                                  sx={{
                                    ml: 3,
                                    color: "#308150",
                                    fontSize: "18px",
                                  }}
                                >
                                  {orderData?.discount}
                                </Imports.Typography>
                              </Imports.Box>
                            </Imports.Box>
                          </Imports.Grid>
                        </Imports.Grid>
                      </Imports.Box>
                      {/* <Imports.Typography>+91 9440609464</Imports.Typography> */}
                    </Imports.Paper>
                    {/* user GST Invoices */}
                    {/* <Imports.Paper
                      elevation={1}
                      sx={{
                        width: "100%",
                        height: "auto",
                        backgroundColor: "#FFFFFF",
                        padding: 2,
                        mt: 3,
                      }}
                    >
                      <Imports.Typography>+ Use GST Invoice</Imports.Typography>
                    </Imports.Paper> */}
                    <Imports.Paper
                      // variant="outlined"
                      elevation={1}
                      sx={{
                        width: "100%",
                        height: "auto",
                        backgroundColor: "#FFFFFF",
                        // boxShadow: "10px",
                        padding: 2,
                        mt: 3,
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "space-between",
                      }}
                    >
                      <Imports.Typography
                        variant="h6"
                        sx={{
                          letterSpacing: "0.5px",
                          color: "#878787",
                        }}
                      >
                        Order confirmation email will be sent to{" "}
                        <Imports.Typography
                          component="span"
                          variant="h5"
                          sx={{ color: "#212121" }}
                        >
                          absv1111@gmail.com{" "}
                        </Imports.Typography>
                      </Imports.Typography>
                      <Imports.Box
                        onClick={() =>
                          navigate("/payments", { state: productIdsData })
                        }
                        component="button"
                        sx={{
                          backgroundColor: "#ff9f00",
                          // backgroundColor: "#FFD814",
                          border: "1px solid #ff9f00",
                          // border: "1px solid #FCD200;",
                          fontWeight: "bold",
                          fontSize: "13px",
                          whiteSpace: "nowrap",
                          padding: "10px 13px",
                          borderRadius: "5px",
                          cursor: "pointer",
                          ml: 2,
                        }}
                      >
                        CONTINUE
                      </Imports.Box>
                    </Imports.Paper>
                    <Imports.Paper
                      // variant="outlined"
                      elevation={1}
                      sx={{
                        width: "100%",
                        height: "auto",
                        backgroundColor: "#FFFFFF",
                        // boxShadow: "10px",
                        padding: 2,
                        mt: 3,
                      }}
                    >
                      <Imports.Typography
                        variant="h5"
                        sx={{
                          letterSpacing: "0.5px",
                          color: "#878787",
                          fontWeight: "bold",
                        }}
                      >
                        PAYMENT OPTIONS
                      </Imports.Typography>
                    </Imports.Paper>
                  </Imports.Grid>
                  <Imports.Grid item xs={12} sm={12} md={3}>
                    <Imports.Paper
                      elevation={1}
                      sx={{
                        width: "100%",
                        height: "auto",
                        backgroundColor: "#FFFFFF",
                        position: "sticky",
                        top: "50px",
                        marginTop: "1px",
                      }}
                    >
                      <Imports.Box
                        sx={{
                          width: "100%",
                          height: "100%",
                          backgroundColor: "#FFFFFF",
                        }}
                      >
                        <Imports.Grid container gap={3} p={2} mt={0.1}>
                          <Imports.Typography textAlign="left">
                            PRICE DETAILS
                          </Imports.Typography>
                          <Imports.Divider
                            sx={{
                              width: "100%",
                              borderBottomWidth: 1,
                              borderColor: "#111",
                            }}
                          />
                          <Imports.Grid item xs={12} sm={12} md={12}>
                            <Imports.Box
                              sx={{
                                display: "flex",
                                flexDirection: "row",
                                justifyContent: "space-between",
                              }}
                            >
                              <Imports.Typography textAlign="left">
                                Price (1 Items)
                              </Imports.Typography>
                              <Imports.Typography textAlign="left">
                                ₹{orderData?.actual_price}
                              </Imports.Typography>
                            </Imports.Box>
                          </Imports.Grid>
                          <Imports.Grid item xs={12} sm={12} md={12}>
                            <Imports.Box
                              sx={{
                                display: "flex",
                                flexDirection: "row",
                                justifyContent: "space-between",
                              }}
                            >
                              <Imports.Typography textAlign="left">
                                Discount
                              </Imports.Typography>
                              <Imports.Typography textAlign="left">
                                − ₹{orderData?.discount_price}
                              </Imports.Typography>
                            </Imports.Box>
                          </Imports.Grid>
                          <Imports.Grid item xs={12} sm={12} md={12}>
                            <Imports.Box
                              sx={{
                                display: "flex",
                                flexDirection: "row",
                                justifyContent: "space-between",
                              }}
                            >
                              <Imports.Typography textAlign="left">
                                Delivery Charges
                              </Imports.Typography>
                              <Imports.Typography textAlign="left">
                                + ₹ 100
                              </Imports.Typography>
                            </Imports.Box>
                          </Imports.Grid>
                          <Imports.Grid item xs={12} sm={12} md={12}>
                            <Imports.Box
                              sx={{
                                display: "flex",
                                flexDirection: "row",
                                justifyContent: "space-between",
                              }}
                            >
                              <Imports.Typography textAlign="left">
                                Secured Package Fee
                              </Imports.Typography>
                              <Imports.Typography textAlign="left">
                                + ₹ 100
                              </Imports.Typography>
                            </Imports.Box>
                          </Imports.Grid>
                          <Imports.Divider
                            sx={{
                              width: "100%",
                              borderBottomWidth: 1,
                              borderColor: "#111",
                            }}
                          />
                          <Imports.Grid item xs={12} sm={12} md={12}>
                            <Imports.Box
                              sx={{
                                display: "flex",
                                flexDirection: "row",
                                justifyContent: "space-between",
                              }}
                            >
                              <Imports.Typography
                                variant="h5"
                                textAlign="left"
                                fontWeight="bold"
                              >
                                Total Amount
                              </Imports.Typography>
                              <Imports.Typography
                                variant="h5"
                                textAlign="left"
                                fontWeight="bold"
                              >
                                ₹{TotalPayableAmount}
                              </Imports.Typography>
                            </Imports.Box>
                          </Imports.Grid>
                          <Imports.Divider
                            sx={{
                              width: "100%",
                              borderBottomWidth: 1,
                              borderColor: "#111",
                            }}
                          />
                          <Imports.Divider variant="fullWidth" />
                        </Imports.Grid>
                      </Imports.Box>
                    </Imports.Paper>
                  </Imports.Grid>
                </Imports.Grid>
              </Imports.Box>
            </Imports.Grid>
          </Imports.Grid>
        </Imports.Box>
      </Layout>
    </>
  );
};

export default CheckoutPage;
