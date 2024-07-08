import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useLocation } from "react-router-dom";
import CssBaseline from "@mui/material/CssBaseline";
import Layout from "../../Layout/Layout";
import Imports from "../../common/Imports";
import AddtoCartCounter from "../AddToCart/AddtoCartcounter";
import { loadOrderInCheckOutInitiate } from "../../redux/actions/payments/checkOutPageActions";
import { easing } from "@mui/material";
import loadInnerProductDataInitiate from "../../redux/actions/InnerProduct/getInnerProductWithId";
import { loadUserAddressInitiate } from "../../redux/actions/address/userAddressActions";
const CheckoutPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // checout product data
  const checkOutItemData = location?.state;
  console.log("checkOutItemData", checkOutItemData);
  // const email = 
  const products = checkOutItemData?.products;
  const product_qty = checkOutItemData?.product_qty;

   let productDetails = [];

   if (products && product_qty) {
     productDetails = products.map((product) => {
       const quantity = product_qty.find((t) => t.product_id === product.id);
       console.log('quantity', quantity);
       return {
         product_name: product.product_name,
         id: product.id,
         discount_price: product.discount_price,
         actual_price: product.actual_price,
         product_images_urls: product.product_images_urls,
         discount: product.discount,
         quantity: quantity ? quantity.product_quantity : 0,
       };
     });
   }

  console.log(productDetails);
  
  const product_details = checkOutItemData?.products;
  console.log("product_details", product_details);
  const orderData = checkOutItemData?.data?.attributes;
  const razorPayOrderId = checkOutItemData?.order_id;
  console.log("orderData", orderData);
  console.log("razorPayOrderId", razorPayOrderId);
  const getOrderDataInCheckOut = useSelector(
    (state) => state?.innerproductdata?.data?.data[0] || {}
  );
  console.log(
    "getOrderDataInCheckOut in checkout page",
    getOrderDataInCheckOut
  );
  // useEffect(() => {
  //   console.log("on refresh", product_id);
  //     dispatch(loadInnerProductDataInitiate(product_id));
  // }, [dispatch,product_id]);
  // checkout address data
  const userAddressData = useSelector(
    (state) => state.useraddressdata?.data?.data?.data[0] || []
  );
  useEffect(() => {
    dispatch(loadUserAddressInitiate());
  }, [dispatch]);
  console.log("userAddressData", userAddressData);
  

  const upperCaseName =
    `${userAddressData?.first_name} ${userAddressData?.last_name}`.toUpperCase();

  
    // product_id: checkOutItemData?.product?.id,
const actual_price = productDetails?.reduce(
  (sum, item) => sum + item.actual_price,
  0
);
const discount_price = productDetails?.reduce(
  (sum, item) => sum + item.discount_price,
  0
);
const quantity = productDetails?.reduce((sum, item) => sum + item.quantity, 0);
  const TotalPayableAmount = 100 + 100 + discount_price;
   const productIdsData = {
     products: product_qty,
     amount: discount_price,
     order_id: razorPayOrderId,
     user_details: {
       name: checkOutItemData?.name,
       email: checkOutItemData?.email,
       contact: checkOutItemData?.contact,
     },
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
                        {productDetails?.map((item, index) => (
                          <Imports.Grid
                            container
                            columnSpacing={5}
                            mt={2}
                            mb={1}
                            key={index}
                          >
                            <Imports.Grid item xs={12} sm={12} md={2}>
                              <Imports.Box
                                component="img"
                                src={item?.product_images_urls?.[0]}
                                alt=""
                                style={{
                                  width: "100%",
                                  height: "auto%",
                                  objectFit: "cover",
                                }}
                              />
                              {/* <AddtoCartCounter p={1} items="1" /> */}
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
                                    {item?.product_name}
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
                                        "&:hover": {
                                          backgroundColor: "#3B7E42",
                                        },
                                      }}
                                    >
                                      4.5★
                                    </Imports.Box>
                                    <Imports.Typography
                                      component="span"
                                      variant="h4"
                                      fontWeight="bold"
                                      sx={{ color: "#121212" }}
                                    >
                                      ₹{item?.discount_price}
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
                                    <Imports.Typography
                                      // variant="contained"
                                      // component="button"
                                      sx={{
                                        padding: "4px 10px",
                                        fontWeight: "bold",
                                        // backgroundColor: "#3B7E42",
                                        // borderRadius: "4px",
                                        // fontSize: "15px",
                                        color: "#3B7E42",
                                        // "&:hover": {
                                        //   backgroundColor: "#3B7E42",
                                        // },
                                      }}
                                    >
                                      Quantity
                                    </Imports.Typography>
                                    <Imports.Typography
                                      component="span"
                                      variant="h5"
                                      // fontWeight="bold"
                                      sx={{ color: "#121212" }}
                                    >
                                      {item?.quantity}
                                    </Imports.Typography>
                                  </Imports.Box>
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
                                    ₹{item?.actual_price}
                                  </Imports.Typography>
                                  <Imports.Typography
                                    sx={{
                                      ml: 3,
                                      color: "#308150",
                                      fontSize: "18px",
                                    }}
                                  >
                                    {item?.discount}
                                  </Imports.Typography>
                                </Imports.Box>
                              </Imports.Box>
                            </Imports.Grid>
                          </Imports.Grid>
                        ))}
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
                          {/* absv1111@gmail.com{" "} */}
                          {checkOutItemData?.email}{" "}
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
                                Price ({quantity} Items)
                              </Imports.Typography>
                              <Imports.Typography textAlign="left">
                                ₹{actual_price}
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
                                ₹{discount_price}
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
